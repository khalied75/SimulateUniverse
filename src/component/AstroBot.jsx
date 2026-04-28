import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { get, push, ref, set } from "firebase/database";

import { db } from "../config/firebase";

const PAGE_CONTEXT = {
  "/": {
    title: "الواجهة الرئيسية",
    prompts: [
      "ما الذي يمكنني تعلمه هنا؟",
      "ما أفضل صفحة أبدأ بها؟",
      "ما الصفحات الموجودة هنا؟",
      "كيف أستخدم البوت؟",
    ],
  },
  "/black-hole": {
    title: "الثقوب السوداء",
    prompts: [
      "ما هو أفق الحدث؟",
      "ما هو قرص التراكم؟",
      "كيف يتكوّن الثقب الأسود؟",
      "ما الذي تشرحه المحاكاة الحالية؟",
    ],
  },
  "/spacetime": {
    title: "الزمكان",
    prompts: [
      "ما هو الزمكان؟",
      "ما معنى انحناء الزمكان؟",
      "كيف ترتبط الجاذبية بالزمكان؟",
      "كيف أشرح الفكرة ببساطة؟",
    ],
  },
  "/solar-system": {
    title: "النظام الشمسي",
    prompts: [
      "رتب الكواكب من الأقرب إلى الأبعد عن الشمس",
      "ما الفرق بين الكواكب الصخرية والغازية؟",
      "ما أكبر كوكب في النظام الشمسي؟",
      "لماذا الأرض مناسبة للحياة؟",
    ],
  },
  "/schrodinger": {
    title: "قطة شرودنغر",
    prompts: [
      "ما هي قطة شرودنغر؟",
      "ما معنى التراكب الكمومي؟",
      "ما معنى القياس في الكم؟",
      "كيف أشرح الفكرة ببساطة؟",
    ],
  },
  "/stars": {
    title: "النجوم",
    prompts: [
      "كيف تولد النجوم؟",
      "ما هو الاندماج النووي؟",
      "ما معنى العملاق الأحمر؟",
      "هل كل النجوم تنتهي كثقوب سوداء؟",
    ],
  },
  "/wavelength-energy": {
    title: "الطاقة والموجة",
    prompts: [
      "ما العلاقة بين الطول الموجي والطاقة؟",
      "ما الفرق بين الأشعة تحت الحمراء والمرئية؟",
      "لماذا الأشعة فوق البنفسجية أقوى؟",
      "كيف أفهم الموضوع بسرعة؟",
    ],
  },
};

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "assistant",
  text: "أنا Astro AI. أقرأ المعرفة من Firebase Realtime Database مباشرة، وأسجل أسئلة المستخدمين هناك أيضاً إذا لم أجد جواباً مناسباً.",
};

const STOP_WORDS = new Set([
  "ما",
  "ماذا",
  "من",
  "الى",
  "إلى",
  "في",
  "عن",
  "على",
  "هل",
  "هو",
  "هي",
  "هذا",
  "هذه",
  "ذلك",
  "تلك",
  "ثم",
  "او",
  "أو",
  "كيف",
  "لماذا",
  "شرح",
  "اشرح",
  "اعطني",
  "أعطني",
  "بسيط",
  "ببساطة",
  "لي",
  "هنا",
]);

function normalizeArabic(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[أإآا]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/[ًٌٍَُِّْـ]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalizeArabic(text)
    .split(" ")
    .filter((token) => token.length > 1 && !STOP_WORDS.has(token));
}

function scoreEntry(question, pathname, entry) {
  const normalizedQuestion = normalizeArabic(question);
  const normalizedEntryQuestion = normalizeArabic(entry.question);
  const questionTokens = tokenize(question);
  const entryTokens = new Set([
    ...tokenize(entry.question),
    ...(entry.keywords || []).flatMap((keyword) => tokenize(keyword)),
  ]);

  let score = 0;

  if (entry.page === pathname) score += 8;
  if (normalizedQuestion === normalizedEntryQuestion) score += 20;
  if (normalizedEntryQuestion.includes(normalizedQuestion) || normalizedQuestion.includes(normalizedEntryQuestion)) {
    score += 10;
  }

  for (const token of questionTokens) {
    if (entryTokens.has(token)) score += 4;
  }

  return score;
}

function findBestAnswer(question, pathname, knowledgeBase) {
  let bestEntry = null;
  let bestScore = 0;

  for (const entry of knowledgeBase) {
    const score = scoreEntry(question, pathname, entry);
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (!bestEntry || bestScore < 6) {
    return null;
  }

  return bestEntry;
}

function mapSnapshotToArray(snapshotValue) {
  if (!snapshotValue) return [];
  return Object.entries(snapshotValue).map(([id, item]) => ({
    id,
    ...item,
  }));
}

function toSeedObject(items) {
  return items.reduce((accumulator, item) => {
    accumulator[item.id] = {
      page: item.page,
      question: item.question,
      answer: item.answer,
      keywords: item.keywords || [],
    };
    return accumulator;
  }, {});
}

export default function AstroBot() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [knowledgeBase, setKnowledgeBase] = useState([]);
  const [dbStatus, setDbStatus] = useState("connecting");
  const listRef = useRef(null);

  const context = PAGE_CONTEXT[location.pathname] || {
    title: "هذه الصفحة",
    prompts: [
      "اشرح الصفحة الحالية",
      "لخص الفكرة الأساسية",
      "ما أهم نقطة هنا؟",
      "كيف أفهم هذا بسرعة؟",
    ],
  };

  useEffect(() => {
    let active = true;

    async function syncKnowledgeBase() {
      try {
        const knowledgeRef = ref(db, "astroBot/knowledgeBase");
        const snapshot = await get(knowledgeRef);

        if (!active) return;

        if (!snapshot.exists()) {
          const seedResponse = await fetch("/astro-knowledge-seed.json");
          const seedItems = await seedResponse.json();
          await set(knowledgeRef, toSeedObject(seedItems));
          if (!active) return;
          setKnowledgeBase(seedItems);
          setDbStatus("seeded");
          return;
        }

        const databaseItems = mapSnapshotToArray(snapshot.val());

        if (databaseItems.length < 100) {
          const seedResponse = await fetch("/astro-knowledge-seed.json");
          const seedItems = await seedResponse.json();
          await set(knowledgeRef, toSeedObject(seedItems));
          if (!active) return;
          setKnowledgeBase(seedItems);
          setDbStatus("seeded");
          return;
        }

        setKnowledgeBase(databaseItems);
        setDbStatus("ready");
      } catch (error) {
        console.error("AstroBot database sync failed:", error);
        if (!active) return;
        setKnowledgeBase([]);
        setDbStatus("error");
      }
    }

    syncKnowledgeBase();

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    setMessages((current) => {
      const routeMessage = {
        id: `route-${location.pathname}`,
        role: "assistant",
        text: `أنت الآن في صفحة ${context.title}. لدي حالياً ${knowledgeBase.length} سؤالاً وجواباً تقريباً داخل قاعدة المعرفة، ويمكنني البحث فيها أو تسجيل سؤالك إذا لم أجد تطابقاً مناسباً.`,
      };

      const withoutRouteMessages = current.filter((item) => !String(item.id).startsWith("route-"));
      return [...withoutRouteMessages, routeMessage];
    });
  }, [context.title, knowledgeBase.length, location.pathname]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isLoading]);

  const quickPrompts = useMemo(() => context.prompts.slice(0, 4), [context.prompts]);

  const appendMessage = (role, text) => {
    setMessages((current) => [
      ...current,
      { id: `${role}-${Date.now()}-${Math.random().toString(16).slice(2)}`, role, text },
    ]);
  };

  const logQuestion = async (question, matchedEntry) => {
    try {
      await push(ref(db, "astroBot/questionLog"), {
        question,
        page: location.pathname,
        pageTitle: context.title,
        matchedEntryId: matchedEntry?.id || null,
        matchedQuestion: matchedEntry?.question || null,
        createdAt: Date.now(),
      });
    } catch (error) {
      console.error("AstroBot question log failed:", error);
    }
  };

  const requestReply = async (question) => {
    if (!knowledgeBase.length) {
      await logQuestion(question, null);
      return "قاعدة المعرفة غير جاهزة حالياً أو لم يتم تحميلها من Firebase بعد. تأكد من تفعيل Realtime Database والسماح بالقراءة والكتابة.";
    }

    const matchedEntry = findBestAnswer(question, location.pathname, knowledgeBase);
    await logQuestion(question, matchedEntry);

    if (matchedEntry) {
      return matchedEntry.answer;
    }

    return `لم أجد جواباً دقيقاً لهذا السؤال داخل قاعدة بيانات ${context.title} بعد. لقد خزّنت سؤالك في السجل، ويمكن لاحقاً إضافة جواب له داخل Realtime Database. جرّب إعادة الصياغة أو اختر أحد الأسئلة الجاهزة.`;
  };

  const handleSend = async (preset) => {
    const question = (preset ?? input).trim();
    if (!question || isLoading) return;

    appendMessage("user", question);
    setInput("");
    setIsLoading(true);

    try {
      const reply = await requestReply(question);
      appendMessage("assistant", reply);
    } catch {
      appendMessage("assistant", "حدث خطأ أثناء قراءة قاعدة المعرفة أو تسجيل السؤال. تأكد من إعدادات Realtime Database ثم حاول مرة أخرى.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');

        .astrobot-root {
          position: fixed;
          left: 22px;
          bottom: 22px;
          z-index: 1100;
          font-family: 'Cairo', sans-serif;
        }

        .astrobot-panel {
          width: min(390px, calc(100vw - 24px));
          height: min(600px, calc(100vh - 110px));
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(212, 175, 55, 0.22);
          background:
            radial-gradient(circle at top left, rgba(212, 175, 55, 0.14), transparent 34%),
            linear-gradient(180deg, rgba(10, 13, 28, 0.96), rgba(7, 9, 20, 0.98));
          backdrop-filter: blur(18px);
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.52);
        }

        .astrobot-head {
          position: relative;
          padding: 1rem 1rem 0.9rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .astrobot-close {
          position: absolute;
          top: 0.85rem;
          left: 0.85rem;
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(248, 250, 252, 0.82);
          font-size: 1rem;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .astrobot-close:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #ffffff;
        }

        .astrobot-kicker {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.3rem 0.7rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
          font-size: 0.7rem;
          font-weight: 800;
        }

        .astrobot-title {
          margin: 0.75rem 0 0.2rem;
          color: #f8fafc;
          font-size: 1.05rem;
          font-weight: 800;
        }

        .astrobot-subtitle {
          margin: 0;
          color: rgba(221, 227, 245, 0.68);
          font-size: 0.82rem;
          line-height: 1.8;
        }

        .astrobot-status {
          margin-top: 0.6rem;
          color: #d4af37;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .astrobot-prompts {
          display: flex;
          flex-wrap: wrap;
          gap: 0.45rem;
          padding: 0.8rem 1rem 0;
        }

        .astrobot-prompts button,
        .astrobot-send,
        .astrobot-toggle {
          font-family: 'Cairo', sans-serif;
        }

        .astrobot-prompts button {
          border: 1px solid rgba(212, 175, 55, 0.18);
          background: rgba(255, 255, 255, 0.03);
          color: #f8fafc;
          border-radius: 999px;
          padding: 0.45rem 0.7rem;
          font-size: 0.75rem;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .astrobot-prompts button:hover {
          background: rgba(212, 175, 55, 0.1);
          color: #d4af37;
        }

        .astrobot-messages {
          flex: 1;
          overflow: auto;
          padding: 0.9rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .astrobot-msg {
          max-width: 88%;
          padding: 0.8rem 0.9rem;
          border-radius: 18px;
          font-size: 0.86rem;
          line-height: 1.85;
          white-space: pre-wrap;
        }

        .astrobot-msg.assistant {
          align-self: flex-end;
          background: rgba(255, 255, 255, 0.045);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: rgba(246, 248, 255, 0.92);
        }

        .astrobot-msg.user {
          align-self: flex-start;
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #f5d77c;
        }

        .astrobot-loading {
          color: rgba(221, 227, 245, 0.6);
          font-size: 0.78rem;
          padding: 0 1rem 0.6rem;
        }

        .astrobot-compose {
          display: flex;
          gap: 0.7rem;
          padding: 0.95rem;
          border-top: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(0, 0, 0, 0.14);
        }

        .astrobot-input {
          flex: 1;
          min-height: 46px;
          max-height: 120px;
          resize: vertical;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          color: #f8fafc;
          padding: 0.85rem 0.95rem;
          outline: none;
          font-family: 'Cairo', sans-serif;
          font-size: 0.85rem;
        }

        .astrobot-input::placeholder {
          color: rgba(221, 227, 245, 0.42);
        }

        .astrobot-send {
          min-width: 92px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(135deg, #d4af37 0%, #b88f20 100%);
          color: #090b13;
          font-size: 0.85rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 10px 28px rgba(212, 175, 55, 0.22);
        }

        .astrobot-send:hover {
          transform: translateY(-1px);
        }

        .astrobot-send:disabled {
          opacity: 0.55;
          cursor: wait;
          transform: none;
        }

        .astrobot-toggle {
          width: 68px;
          height: 68px;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          background:
            radial-gradient(circle at 30% 30%, #f4d779 0%, #d4af37 42%, #8b6821 100%);
          color: #08090f;
          font-size: 1.45rem;
          font-weight: 800;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.35);
        }

        .astrobot-toggle-label {
          position: absolute;
          left: 80px;
          bottom: 14px;
          padding: 0.45rem 0.75rem;
          border-radius: 999px;
          background: rgba(10, 13, 28, 0.92);
          border: 1px solid rgba(212, 175, 55, 0.18);
          color: #f8fafc;
          font-size: 0.76rem;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .astrobot-root {
            left: 12px;
            right: 12px;
            bottom: 12px;
          }

          .astrobot-panel {
            width: 100%;
            height: min(72vh, 600px);
          }

          .astrobot-toggle-label {
            display: none;
          }
        }
      `}</style>

      <div className="astrobot-root" dir="rtl">
        {isOpen ? (
          <div className="astrobot-panel">
            <div className="astrobot-head">
              <button
                type="button"
                className="astrobot-close"
                onClick={() => setIsOpen(false)}
                aria-label="إغلاق المساعد"
              >
                ×
              </button>
              <span className="astrobot-kicker">✦ مساعد ذكي</span>
              <h2 className="astrobot-title">Astro AI</h2>
              <p className="astrobot-subtitle">
                أقدر أشرح الصفحة الحالية، ألخّص المفاهيم، وأجيب من قاعدة معرفة محفوظة داخل Realtime Database.
              </p>
              <div className="astrobot-status">
                {dbStatus === "connecting" && "جاري مزامنة قاعدة المعرفة مع Firebase..."}
                {dbStatus === "seeded" && `تمت تعبئة قاعدة البيانات بحوالي ${knowledgeBase.length} سؤالاً وجواباً.`}
                {dbStatus === "ready" && `تم تحميل ${knowledgeBase.length} سؤالاً وجواباً من قاعدة البيانات.`}
                {dbStatus === "error" && "تعذر الوصول إلى Realtime Database أو تهيئتها. تأكد من القواعد والاتصال."}
              </div>
            </div>

            <div className="astrobot-prompts">
              {quickPrompts.map((prompt) => (
                <button key={prompt} type="button" onClick={() => handleSend(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            <div className="astrobot-messages" ref={listRef}>
              {messages.map((message) => (
                <div key={message.id} className={`astrobot-msg ${message.role}`}>
                  {message.text}
                </div>
              ))}
            </div>

            {isLoading && <div className="astrobot-loading">جاري البحث في قاعدة المعرفة وتسجيل السؤال...</div>}

            <div className="astrobot-compose">
              <textarea
                className="astrobot-input"
                placeholder="اكتب سؤالك هنا، وسأبحث عنه داخل قاعدة المعرفة..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button type="button" className="astrobot-send" onClick={() => handleSend()} disabled={isLoading}>
                إرسال
              </button>
            </div>
          </div>
        ) : (
          <>
            <button type="button" className="astrobot-toggle" onClick={() => setIsOpen(true)} aria-label="فتح المساعد الذكي">
              ✦
            </button>
            <div className="astrobot-toggle-label">اسأل Astro AI</div>
          </>
        )}
      </div>
    </>
  );
}
