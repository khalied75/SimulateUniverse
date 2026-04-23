import { useEffect, useMemo, useRef, useState } from "react";

const STAR_TYPES = [
  {
    id: "blue-giant",
    name: "النجوم الزرقاء العملاقة",
    en: "Blue Giants",
    color: "#4f7cff",
    glow: "rgba(79,124,255,0.45)",
    radius: 24,
    temp: "20,000 - 50,000 كلفن",
    life: "قصير جدًا",
    mass: "10 - 50 كتلة شمسية",
    fact: "نجوم شديدة السخونة واللمعان، تستهلك وقودها بسرعة هائلة وتعيش عمرًا قصيرًا نسبيًا.",
    bullets: ["سطوع استثنائي", "حرارة فائقة", "نهاية عنيفة غالبًا"],
  },
  {
    id: "red-giant",
    name: "العمالقة الحمر",
    en: "Red Giants",
    color: "#ff5f3d",
    glow: "rgba(255,95,61,0.42)",
    radius: 31,
    temp: "3,000 - 4,500 كلفن",
    life: "مرحلة متأخرة",
    mass: "0.5 - 8 كتل شمسية",
    fact: "تتمدد هذه النجوم عندما تنفد نواتها من الهيدروجين، فتزداد حجمًا ويبرد سطحها نسبيًا.",
    bullets: ["سطح أبرد", "حجم هائل", "مرحلة انتقالية قبل النهاية"],
  },
  {
    id: "yellow-dwarf",
    name: "النجوم القزمة",
    en: "Dwarf Stars",
    color: "#ffb703",
    glow: "rgba(255,183,3,0.4)",
    radius: 16,
    temp: "2,500 - 50,000 كلفن",
    life: "قد تطول مليارات السنين",
    mass: "أقل من 1 كتلة شمسية غالبًا",
    fact: "تشمل عدة أنواع، لكنها عمومًا أكثر شيوعًا واستقرارًا من النجوم العملاقة.",
    bullets: ["منتشرة بكثرة", "أحجام أصغر", "استقرار أعلى"],
  },
  {
    id: "variable",
    name: "النجوم المتغيرة",
    en: "Variable Stars",
    color: "#c93cff",
    glow: "rgba(201,60,255,0.38)",
    radius: 18,
    temp: "متفاوتة",
    life: "تذبذب مستمر",
    mass: "متنوعة",
    fact: "يتغير سطوعها مع الزمن نتيجة نبضات داخلية أو ظروف فيزيائية خارجية أو ثنائيات نجمية.",
    bullets: ["سطوع متبدل", "مفيدة في القياس الكوني", "أنماط نبض مختلفة"],
  },
  {
    id: "neutron",
    name: "النجوم النيوترونية",
    en: "Neutron Stars",
    color: "#14b8ff",
    glow: "rgba(20,184,255,0.4)",
    radius: 11,
    temp: "ملايين الدرجات داخليًا",
    life: "بقايا فائقة الكثافة",
    mass: "1.4 - 2.1 كتلة شمسية",
    fact: "تتشكل بعد انفجار نجوم ضخمة، وتُعد من أكثر الأجسام كثافة في الكون بعد الثقوب السوداء.",
    bullets: ["دوران سريع جدًا", "نبضات راديوية محتملة", "جاذبية هائلة"],
  },
  {
    id: "white-dwarf",
    name: "الأقزام البيضاء",
    en: "White Dwarfs",
    color: "#e9eefb",
    glow: "rgba(233,238,251,0.35)",
    radius: 13,
    temp: "8,000 - 100,000 كلفن",
    life: "تبرد تدريجيًا",
    mass: "قرابة كتلة شمسية ضمن حجم صغير",
    fact: "نوى نجمية متبقية بعد طرد الطبقات الخارجية، وهي صغيرة جدًا لكنها كثيفة بشكل ملحوظ.",
    bullets: ["كثافة مرتفعة", "حجم أرضي تقريبًا", "بقايا نجوم متوسطة"],
  },
];

function StarFieldCanvas({ activeStar, pulse }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let frame = 0;

    const backgroundStars = Array.from({ length: 120 }, (_, index) => ({
      x: ((index * 71.3) % 1000) / 1000,
      y: ((index * 41.7) % 1000) / 1000,
      size: 0.8 + (index % 3) * 0.55,
      alpha: 0.12 + (index % 5) * 0.05,
    }));

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawStar = (star, x, y, scale = 1, selected = false) => {
      const radius = star.radius * scale;
      const glow = ctx.createRadialGradient(x, y, 0, x, y, radius * 2.6);
      glow.addColorStop(0, star.color);
      glow.addColorStop(0.3, star.glow);
      glow.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(x, y, radius * 2.6, 0, Math.PI * 2);
      ctx.fill();

      if (star.id === "variable") {
        ctx.beginPath();
        ctx.arc(x, y, radius * (0.84 + Math.sin(frame * 0.08) * 0.08), 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
      } else if (star.id === "neutron") {
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(frame * 0.05);
        const beam = ctx.createLinearGradient(0, 0, radius * 5, 0);
        beam.addColorStop(0, "rgba(20,184,255,0.65)");
        beam.addColorStop(1, "rgba(20,184,255,0)");
        ctx.fillStyle = beam;
        ctx.fillRect(0, -2, radius * 5, 4);
        ctx.rotate(Math.PI);
        ctx.fillStyle = beam;
        ctx.fillRect(0, -2, radius * 5, 4);
        ctx.restore();
      } else if (star.id === "white-dwarf") {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = "#f7fbff";
        ctx.fill();
      } else {
        const core = ctx.createRadialGradient(x - radius * 0.3, y - radius * 0.3, 0, x, y, radius * 1.15);
        core.addColorStop(0, "rgba(255,255,255,0.9)");
        core.addColorStop(0.32, star.color);
        core.addColorStop(1, star.color);
        ctx.fillStyle = core;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      if (selected) {
        ctx.beginPath();
        ctx.arc(x, y, radius * 1.65, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(255,255,255,0.28)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      frame += 1;
      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "rgba(8,12,26,1)");
      bg.addColorStop(1, "rgba(4,7,16,1)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      backgroundStars.forEach((star, index) => {
        ctx.beginPath();
        ctx.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
        const twinkle = star.alpha + Math.sin(frame * 0.015 + index) * 0.08;
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.06, twinkle)})`;
        ctx.fill();
      });

      const positions = [
        { x: width * 0.2, y: height * 0.68, scale: 0.95 },
        { x: width * 0.34, y: height * 0.36, scale: 1.12 },
        { x: width * 0.52, y: height * 0.58, scale: 0.85 },
        { x: width * 0.66, y: height * 0.33, scale: 1 },
        { x: width * 0.79, y: height * 0.63, scale: 0.84 },
        { x: width * 0.9, y: height * 0.42, scale: 0.92 },
      ];

      STAR_TYPES.forEach((star, index) => {
        const pos = positions[index];
        const selected = activeStar.id === star.id;
        const pulseBoost = selected && pulse ? 1.22 : selected ? 1.08 : 1;
        drawStar(star, pos.x, pos.y, pos.scale * pulseBoost, selected);

        if (selected) {
          ctx.fillStyle = "rgba(236, 239, 255, 0.88)";
          ctx.font = "13px Cairo, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(star.name, pos.x, pos.y - star.radius * pos.scale * pulseBoost - 22);
        }
      });

      ctx.fillStyle = "rgba(198, 204, 233, 0.32)";
      ctx.textAlign = "right";
      ctx.font = "12px Cairo, sans-serif";
      ctx.fillText("محاكاة أنواع النجوم", width - 18, height - 18);

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [activeStar, pulse]);

  return <canvas ref={canvasRef} className="stars-canvas" />;
}

export default function Stars() {
  const [selected, setSelected] = useState("blue-giant");
  const [pulse, setPulse] = useState(false);

  const activeStar = useMemo(
    () => STAR_TYPES.find((star) => star.id === selected) || STAR_TYPES[0],
    [selected]
  );

  const triggerFocus = (id) => {
    setSelected(id);
    setPulse(true);
    window.setTimeout(() => setPulse(false), 650);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #05070f !important;
          overflow-x: hidden !important;
        }

        .stars-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at 18% 15%, rgba(22, 184, 255, 0.08), transparent 22%),
            radial-gradient(circle at 82% 24%, rgba(255, 115, 60, 0.08), transparent 24%),
            #05070f;
          color: #f4f4ff;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: relative;
          overflow-x: hidden;
        }

        .stars-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        .stars-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 6.2rem 1.5rem 4rem;
        }

        .stars-header {
          text-align: center;
          margin-bottom: 1.4rem;
        }

        .stars-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.2);
          color: #d4af37;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .stars-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.25rem);
          line-height: 1.18;
          font-weight: 900;
          color: #f8f6ff;
          padding-top: 0.08em;
        }

        .stars-title span {
          color: #d4af37;
        }

        .stars-subtitle {
          margin-top: 0.45rem;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: rgba(215, 211, 233, 0.45);
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
        }

        .stars-lead {
          max-width: 770px;
          margin: 1rem auto 0;
          color: rgba(214, 214, 232, 0.58);
          line-height: 1.9;
          font-size: 0.96rem;
        }

        .stars-visual,
        .stars-focus,
        .star-card {
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(212, 175, 55, 0.12);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .stars-visual {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .stars-canvas {
          width: 100%;
          height: 500px;
          display: block;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(13,18,34,1), rgba(5,9,18,1));
        }

        .stars-focus {
          padding: 1.1rem 1.2rem;
          margin-bottom: 1rem;
        }

        .focus-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.95rem;
        }

        .focus-top h3 {
          margin: 0;
          font-size: 1.2rem;
        }

        .focus-top p {
          margin: 0.15rem 0 0;
          color: rgba(210, 214, 234, 0.45);
          font-size: 0.82rem;
          font-family: 'Syne', sans-serif;
        }

        .focus-star {
          width: 76px;
          height: 76px;
          border-radius: 50%;
          background: ${activeStar.color};
          box-shadow: 0 0 38px ${activeStar.glow};
          flex-shrink: 0;
          position: relative;
        }

        .focus-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.85rem;
          margin-bottom: 0.9rem;
        }

        .focus-metric {
          padding: 0.9rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .focus-metric span {
          display: block;
          color: rgba(186, 189, 210, 0.4);
          font-size: 0.74rem;
          margin-bottom: 0.22rem;
        }

        .focus-metric strong {
          color: #f2eeff;
          font-size: 0.98rem;
        }

        .focus-fact {
          color: rgba(218, 219, 236, 0.72);
          line-height: 1.9;
          font-size: 0.92rem;
        }

        .stars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .star-card {
          padding: 1.05rem;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }

        .star-card:hover {
          transform: translateY(-3px);
          border-color: rgba(255,255,255,0.12);
        }

        .star-card.active {
          border-color: color-mix(in srgb, ${activeStar.color} 45%, transparent);
          box-shadow: 0 18px 40px rgba(0,0,0,0.35), 0 0 0 1px color-mix(in srgb, ${activeStar.color} 18%, transparent);
        }

        .star-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          margin-bottom: 0.9rem;
          position: relative;
        }

        .star-title {
          margin: 0;
          font-size: 1.04rem;
          color: #f6f4ff;
        }

        .star-en {
          display: inline-flex;
          margin-top: 0.5rem;
          padding: 0.24rem 0.7rem;
          border-radius: 999px;
          font-size: 0.72rem;
          font-weight: 700;
          background: rgba(255,255,255,0.05);
          color: rgba(220, 221, 236, 0.82);
        }

        .star-text {
          margin-top: 0.85rem;
          color: rgba(210, 214, 233, 0.7);
          line-height: 1.85;
          font-size: 0.86rem;
        }

        .star-bullets {
          margin-top: 0.85rem;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .star-bullet {
          color: rgba(219, 220, 236, 0.82);
          font-size: 0.8rem;
        }

        @media (max-width: 980px) {
          .stars-grid {
            grid-template-columns: 1fr 1fr;
          }

          .focus-metrics {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .stars-shell {
            padding-inline: 1rem;
            padding-top: 5.2rem;
          }

          .stars-canvas {
            height: 340px;
          }

          .stars-grid {
            grid-template-columns: 1fr;
          }

          .focus-top {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="stars-root">
        <div className="stars-shell">
          <header className="stars-header">
            <div className="stars-pill">✦ أطياف نجمية</div>
            <h1 className="stars-title">
              <span>النجوم</span> وأنواعها الرئيسية
            </h1>
            <div className="stars-subtitle">STELLAR CLASSES AND BEHAVIOR</div>
            <p className="stars-lead">
              صفحة تعليمية تفاعلية تعرض طيفًا من أنواع النجوم بأسلوب بصري أقوى من النسخة البسيطة، مع محاكٍ يبرز
              الفروق في اللون والحجم والسلوك والسطوع ضمن نفس الهوية التصميمية للمشروع.
            </p>
          </header>

          <section className="stars-visual">
            <StarFieldCanvas activeStar={activeStar} pulse={pulse} />
          </section>

          <section className="stars-focus">
            <div className="focus-top">
              <div>
                <h3>{activeStar.name}</h3>
                <p>{activeStar.en}</p>
              </div>
              <div className="focus-star" />
            </div>

            <div className="focus-metrics">
              <div className="focus-metric">
                <span>درجة الحرارة</span>
                <strong>{activeStar.temp}</strong>
              </div>
              <div className="focus-metric">
                <span>الكتلة التقريبية</span>
                <strong>{activeStar.mass}</strong>
              </div>
              <div className="focus-metric">
                <span>العمر/الحالة</span>
                <strong>{activeStar.life}</strong>
              </div>
            </div>

            <div className="focus-fact">{activeStar.fact}</div>
          </section>

          <section className="stars-grid">
            {STAR_TYPES.map((star) => (
              <div
                key={star.id}
                className={`star-card${selected === star.id ? " active" : ""}`}
                onClick={() => triggerFocus(star.id)}
              >
                <div className="star-icon" style={{ background: star.color, boxShadow: `0 0 28px ${star.glow}` }} />
                <h3 className="star-title">{star.name}</h3>
                <div className="star-en">{star.en}</div>
                <div className="star-text">{star.fact}</div>
                <div className="star-bullets">
                  {star.bullets.map((bullet) => (
                    <div className="star-bullet" key={bullet}>• {bullet}</div>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}
