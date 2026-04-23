import { useEffect, useMemo, useRef, useState } from "react";

const ORBITALS = [
  {
    id: "1s",
    label: "مدار 1s",
    radius: 62,
    color: "#60a5fa",
    baseWeight: 0.34,
    energy: "-13.6 eV",
    desc: "أقرب سحابة احتمالية إلى النواة وأكثرها تماسكاً.",
  },
  {
    id: "2s",
    label: "مدار 2s",
    radius: 98,
    color: "#22d3ee",
    baseWeight: 0.23,
    energy: "-3.4 eV",
    desc: "توزيع أوسع مع عقدة شعاعية واحتمال أقل قرب النواة.",
  },
  {
    id: "2p",
    label: "مدار 2p",
    radius: 134,
    color: "#c084fc",
    baseWeight: 0.28,
    energy: "-3.4 eV",
    desc: "سحابة اتجاهية تمثل توزيعاً موجياً غير كروي.",
  },
  {
    id: "3p",
    label: "مدار 3p",
    radius: 172,
    color: "#f59e0b",
    baseWeight: 0.15,
    energy: "-1.5 eV",
    desc: "مدار أبعد وأكثر حساسية للتشويش والقياس.",
  },
];

const INITIAL_HISTORY = [
  {
    id: "initial",
    title: "قبل القياس",
    subtitle: "الإلكترون موصوف بدالة موجية منتشرة على عدة مدارات.",
    stamp: "",
    color: "#8b5cf6",
  },
];

function normalizeProbabilities(orbitals, coherence, observation, excitation) {
  const coherenceFactor = coherence / 100;
  const observationFactor = observation / 100;
  const excitationFactor = excitation / 100;

  const raw = orbitals.map((orbital, index) => {
    const outerBoost = index / (orbitals.length - 1 || 1);
    const spread = excitationFactor * (0.35 + outerBoost * 0.75);
    const stability = coherenceFactor * (1.1 - outerBoost * 0.45);
    const measurementBias = observationFactor * (0.85 - index * 0.12);
    const value = orbital.baseWeight * (0.45 + spread + stability + measurementBias);
    return Math.max(0.05, value);
  });

  const total = raw.reduce((sum, value) => sum + value, 0);
  return orbitals
    .map((orbital, index) => ({
      ...orbital,
      probability: Math.round((raw[index] / total) * 100),
    }))
    .map((orbital, index, array) => {
      if (index !== array.length - 1) return orbital;
      const diff = 100 - array.reduce((sum, item) => sum + item.probability, 0);
      return { ...orbital, probability: orbital.probability + diff };
    });
}

function pickMeasuredOrbital(probabilities) {
  const roll = Math.random() * 100;
  let sum = 0;
  return (
    probabilities.find((orbital) => {
      sum += orbital.probability;
      return roll <= sum;
    }) || probabilities[0]
  );
}

function AtomField({ orbitals, measuredOrbital, measuring }) {
  const fieldRef = useRef(null);

  useEffect(() => {
    const element = fieldRef.current;
    if (!element) return undefined;

    const onMove = (event) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 12;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
      element.style.setProperty("--mx", `${x}px`);
      element.style.setProperty("--my", `${y}px`);
    };

    const reset = () => {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
    };

    element.addEventListener("mousemove", onMove);
    element.addEventListener("mouseleave", reset);

    return () => {
      element.removeEventListener("mousemove", onMove);
      element.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div ref={fieldRef} className={`atom-field${measuring ? " is-measuring" : ""}`}>
      <div className="atom-grid" />
      <div className="atom-nucleus">
        <span>النواة</span>
      </div>

      {orbitals.map((orbital) => (
        <div
          key={orbital.id}
          className={`orbital-shell${measuredOrbital?.id === orbital.id ? " is-selected" : ""}`}
          style={{
            "--shell-size": `${orbital.radius * 2}px`,
            "--shell-color": orbital.color,
            "--shell-opacity": measuredOrbital
              ? measuredOrbital.id === orbital.id
                ? 0.96
                : 0.16
              : Math.max(0.28, orbital.probability / 100),
          }}
        >
          <div className="orbital-label">{orbital.id}</div>
          {!measuredOrbital && (
            <div className="probability-cloud">
              <span style={{ opacity: orbital.probability / 100 }} />
              <span style={{ opacity: orbital.probability / 140 }} />
              <span style={{ opacity: orbital.probability / 160 }} />
            </div>
          )}
          {measuredOrbital?.id === orbital.id && (
            <div className="electron-marker">
              <div className="electron-dot" />
              <div className="electron-trail" />
            </div>
          )}
        </div>
      ))}

      <div className="field-caption">
        {measuredOrbital
          ? `بعد القياس تموضع الإلكترون في ${measuredOrbital.label}.`
          : "قبل القياس: الإلكترون ليس نقطة ثابتة بل توزيع احتمالي على المدارات."}
      </div>
    </div>
  );
}

export default function Schrodinger() {
  const [coherence, setCoherence] = useState(74);
  const [observation, setObservation] = useState(36);
  const [excitation, setExcitation] = useState(41);
  const [measuredOrbital, setMeasuredOrbital] = useState(null);
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [measuring, setMeasuring] = useState(false);

  const orbitalProbabilities = useMemo(
    () => normalizeProbabilities(ORBITALS, coherence, observation, excitation),
    [coherence, observation, excitation]
  );

  const collapseState = useMemo(() => {
    if (!measuredOrbital) {
      return {
        title: "حالة دالة موجية ممتدة",
        subtitle: "الإلكترون موصوف باحتمالات موزعة على عدة مدارات ذرية قبل القياس.",
        color: "#8b5cf6",
      };
    }

    return {
      title: `تم تحديد ${measuredOrbital.label}`,
      subtitle: `انهيار الدالة الموجية اختار المدار ${measuredOrbital.id} كموضع مرصود للإلكترون.`,
      color: measuredOrbital.color,
    };
  }, [measuredOrbital]);

  const dominantOrbital = useMemo(
    () =>
      orbitalProbabilities.reduce((best, current) =>
        current.probability > best.probability ? current : best
      ),
    [orbitalProbabilities]
  );

  const handleMeasure = () => {
    setMeasuring(true);
    window.setTimeout(() => {
      const result = pickMeasuredOrbital(orbitalProbabilities);
      const now = new Date();
      const stamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
      setMeasuredOrbital(result);
      setHistory((prev) => [
        {
          id: `${result.id}-${Date.now()}`,
          title: result.label,
          subtitle: `رُصد الإلكترون في المدار ${result.id} بطاقة ${result.energy}.`,
          stamp,
          color: result.color,
        },
        ...prev,
      ].slice(0, 5));
      setMeasuring(false);
    }, 950);
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

        .sch-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at 52% 0%, rgba(34, 211, 238, 0.08), transparent 18%),
            radial-gradient(circle at 76% 16%, rgba(245, 158, 11, 0.08), transparent 20%),
            radial-gradient(circle at 15% 70%, rgba(139, 92, 246, 0.08), transparent 22%),
            #05070f;
          color: #f2f0ff;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          overflow-x: hidden;
          position: relative;
        }

        .sch-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(49, 86, 136, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(49, 86, 136, 0.03) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
        }

        .sch-shell {
          max-width: 1180px;
          margin: 0 auto;
          padding: 6rem 1.5rem 4rem;
          position: relative;
          z-index: 1;
        }

        .sch-hero,
        .sch-bottom {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 1.15rem;
        }

        .sch-bottom {
          margin-top: 1rem;
          align-items: start;
        }

        .sch-hero {
          margin-bottom: 1.15rem;
          align-items: center;
        }

        .sch-card,
        .sch-grid-card,
        .sch-outcomes,
        .sch-measure-card,
        .sch-history,
        .concept-card {
          background: rgba(8, 12, 27, 0.88);
          border: 1px solid rgba(70, 124, 255, 0.14);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .sch-copy {
          padding: 1rem 0.2rem;
        }

        .sch-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          background: rgba(103, 73, 255, 0.08);
          border: 1px solid rgba(103, 73, 255, 0.22);
          color: #9f8cff;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .sch-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.1rem);
          line-height: 1.05;
          font-weight: 900;
        }

        .sch-title span {
          color: #9f8cff;
        }

        .sch-lead {
          margin-top: 0.95rem;
          max-width: 560px;
          line-height: 1.95;
          color: rgba(214, 214, 233, 0.66);
          font-size: 0.98rem;
        }

        .status-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .status-chip {
          padding: 0.38rem 0.82rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          border: 1px solid rgba(46, 198, 255, 0.18);
          background: rgba(46, 198, 255, 0.08);
          color: #7de6ff;
        }

        .hero-visual {
          padding: 1rem;
        }

        .atom-field {
          --mx: 0px;
          --my: 0px;
          position: relative;
          min-height: 380px;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(89, 119, 255, 0.14);
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 32%),
            linear-gradient(180deg, rgba(15, 20, 37, 0.98), rgba(12, 16, 29, 0.98));
        }

        .atom-grid {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(99,102,241,0.08), transparent 55%),
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: auto, 42px 42px, 42px 42px;
          opacity: 0.7;
        }

        .atom-nucleus {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70px;
          height: 70px;
          transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my)));
          border-radius: 50%;
          display: grid;
          place-items: center;
          background:
            radial-gradient(circle at 35% 35%, rgba(255,255,255,0.55), transparent 28%),
            radial-gradient(circle at 65% 70%, rgba(245,158,11,0.35), transparent 24%),
            radial-gradient(circle at center, rgba(236,72,153,0.88), rgba(76,29,149,0.95));
          box-shadow: 0 0 0 12px rgba(124, 58, 237, 0.08), 0 0 80px rgba(168,85,247,0.16);
          z-index: 5;
        }

        .atom-nucleus span {
          font-size: 0.78rem;
          font-weight: 800;
          color: #fff;
        }

        .orbital-shell {
          position: absolute;
          top: 50%;
          left: 50%;
          width: var(--shell-size);
          height: var(--shell-size);
          transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my)));
          border-radius: 50%;
          border: 1px dashed rgba(255,255,255,0.14);
          box-shadow: inset 0 0 34px rgba(255,255,255,0.02);
          opacity: var(--shell-opacity);
          transition: opacity 0.45s ease, transform 0.45s ease, box-shadow 0.45s ease;
        }

        .orbital-shell::before {
          content: "";
          position: absolute;
          inset: 10%;
          border-radius: inherit;
          border: 1px solid color-mix(in srgb, var(--shell-color) 55%, transparent);
          box-shadow: 0 0 35px color-mix(in srgb, var(--shell-color) 18%, transparent);
        }

        .orbital-shell.is-selected {
          box-shadow:
            inset 0 0 34px color-mix(in srgb, var(--shell-color) 14%, transparent),
            0 0 45px color-mix(in srgb, var(--shell-color) 24%, transparent);
        }

        .orbital-label {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          padding: 0.18rem 0.5rem;
          border-radius: 999px;
          background: rgba(5, 7, 18, 0.8);
          border: 1px solid rgba(255,255,255,0.07);
          color: var(--shell-color);
          font-size: 0.72rem;
          font-weight: 800;
        }

        .probability-cloud {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          animation: cloud-spin 16s linear infinite;
        }

        .probability-cloud span {
          position: absolute;
          inset: 16%;
          border-radius: inherit;
          filter: blur(18px);
          background: radial-gradient(circle, color-mix(in srgb, var(--shell-color) 26%, transparent), transparent 64%);
        }

        .probability-cloud span:nth-child(2) {
          inset: 24%;
          animation: cloud-breathe 7s ease-in-out infinite;
        }

        .probability-cloud span:nth-child(3) {
          inset: 32%;
          animation: cloud-breathe 5.5s ease-in-out infinite reverse;
        }

        .electron-marker {
          position: absolute;
          inset: 0;
          animation: orbit-spin 4.5s linear infinite;
        }

        .electron-dot {
          position: absolute;
          top: 50%;
          right: -7px;
          width: 14px;
          height: 14px;
          margin-top: -7px;
          border-radius: 50%;
          background: var(--shell-color);
          box-shadow: 0 0 18px var(--shell-color), 0 0 28px color-mix(in srgb, var(--shell-color) 28%, transparent);
        }

        .electron-trail {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border-top: 2px solid color-mix(in srgb, var(--shell-color) 55%, transparent);
          border-right: 2px solid transparent;
          border-bottom: 2px solid transparent;
          border-left: 2px solid transparent;
          opacity: 0.9;
        }

        .atom-field.is-measuring .orbital-shell {
          animation: shell-pulse 0.95s ease;
        }

        .field-caption {
          position: absolute;
          left: 50%;
          bottom: 1rem;
          transform: translateX(-50%);
          width: calc(100% - 2rem);
          padding: 0.7rem 0.9rem;
          border-radius: 16px;
          background: rgba(5,7,18,0.7);
          border: 1px solid rgba(255,255,255,0.06);
          color: rgba(226, 231, 255, 0.8);
          font-size: 0.84rem;
          text-align: center;
          z-index: 6;
        }

        @keyframes cloud-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes cloud-breathe {
          0%, 100% { transform: scale(0.96); }
          50% { transform: scale(1.08); }
        }

        @keyframes orbit-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes shell-pulse {
          0% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(0.98); }
          35% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(1.03); }
          100% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(1); }
        }

        .sch-measure-card,
        .sch-outcomes,
        .sch-history {
          padding: 1.15rem;
        }

        .sch-history {
          min-height: 100%;
        }

        .sch-measure-card {
          margin-bottom: 1rem;
        }

        .measure-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .measure-head h3,
        .sch-history h3,
        .outcomes-title {
          margin: 0;
          font-size: 1.02rem;
        }

        .measure-head p {
          margin: 0.25rem 0 0;
          color: rgba(207, 207, 229, 0.58);
          font-size: 0.85rem;
          line-height: 1.8;
        }

        .collapse-badge {
          padding: 0.42rem 0.82rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          background: color-mix(in srgb, ${collapseState.color} 70%, #0f1120);
          border: 1px solid color-mix(in srgb, ${collapseState.color} 40%, transparent);
          white-space: nowrap;
        }

        .measure-button {
          width: 100%;
          border: none;
          border-radius: 18px;
          padding: 1rem 1.2rem;
          background: linear-gradient(90deg, #15c5ff, #7c4dff 55%, #f59e0b);
          color: #f7fbff;
          font-family: 'Cairo', sans-serif;
          font-size: 1rem;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 18px 34px rgba(94, 93, 255, 0.18);
        }

        .measure-button:hover {
          transform: translateY(-2px);
        }

        .measure-button:disabled {
          opacity: 0.72;
          cursor: wait;
          transform: none;
        }

        .collapse-sub {
          margin-top: 0.7rem;
          color: rgba(103, 214, 255, 0.72);
          text-align: center;
          font-size: 0.84rem;
        }

        .control-grid,
        .concept-grid,
        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .control-grid {
          margin-bottom: 1rem;
        }

        .sch-grid-card,
        .concept-card {
          padding: 1rem;
        }

        .sch-grid-card h4,
        .concept-card h4 {
          margin: 0;
          font-size: 1rem;
        }

        .sch-grid-card p,
        .concept-card p {
          margin: 0.2rem 0 0.7rem;
          color: rgba(207, 207, 229, 0.5);
          font-size: 0.82rem;
          line-height: 1.8;
        }

        .metric-value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #8fd9ff;
          margin-bottom: 0.6rem;
        }

        .slider-wrap {
          position: relative;
          height: 8px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          direction: ltr;
        }

        .slider-fill {
          position: absolute;
          inset: 0 auto 0 0;
          border-radius: 999px;
          background: linear-gradient(90deg, #1fd4ff, #8b5cf6);
          box-shadow: 0 0 22px rgba(90, 149, 255, 0.25);
        }

        .slider-input {
          position: absolute;
          inset: -8px 0;
          width: 100%;
          opacity: 0;
          cursor: pointer;
          direction: ltr;
        }

        .slider-scale {
          display: flex;
          justify-content: space-between;
          margin-top: 0.4rem;
          color: rgba(191, 194, 215, 0.34);
          font-size: 0.72rem;
        }

        .outcomes-title {
          margin-bottom: 0.8rem;
          color: rgba(206, 222, 255, 0.88);
        }

        .outcome-card {
          border: 1px solid rgba(74, 127, 255, 0.14);
          border-radius: 16px;
          padding: 0.85rem;
          background: rgba(255,255,255,0.02);
        }

        .outcome-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.7rem;
          margin-bottom: 0.45rem;
        }

        .outcome-label {
          font-size: 0.88rem;
          font-weight: 700;
        }

        .outcome-energy {
          margin-top: 0.25rem;
          color: rgba(207, 207, 229, 0.48);
          font-size: 0.75rem;
        }

        .outcome-pct {
          font-family: 'Syne', sans-serif;
          font-size: 1.05rem;
          font-weight: 800;
        }

        .outcome-bar {
          height: 5px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .outcome-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
        }

        .outcome-desc {
          margin: 0;
          color: rgba(210, 214, 234, 0.58);
          font-size: 0.8rem;
          line-height: 1.7;
        }

        .concept-card p {
          margin-bottom: 0;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.8rem;
          padding: 0.78rem 0.85rem;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
        }

        .history-item + .history-item {
          margin-top: 0.55rem;
        }

        .history-item strong {
          display: block;
          font-size: 0.88rem;
        }

        .history-item span {
          color: rgba(196, 201, 224, 0.46);
          font-size: 0.75rem;
        }

        .history-time {
          font-family: monospace;
          color: rgba(214, 219, 241, 0.55);
          font-size: 0.74rem;
          white-space: nowrap;
        }

        @media (max-width: 980px) {
          .sch-hero,
          .sch-bottom,
          .control-grid,
          .outcomes-grid,
          .concept-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .sch-shell {
            padding-inline: 1rem;
            padding-top: 5.2rem;
          }

          .measure-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .atom-field {
            min-height: 320px;
          }

          .field-caption {
            font-size: 0.78rem;
          }
        }
      `}</style>

      <div className="sch-root">
        <div className="sch-shell">
          <section className="sch-hero">
            <div className="sch-copy">
              <div className="sch-pill">Ψ الدالة الموجية والقياس</div>
              <h1 className="sch-title">
                <span>قطة شرودنجر</span> كمدخل لفهم
                <br />
                المدارات الذرية
              </h1>
              <p className="sch-lead">
                بدلاً من تقديمها كلعبة، تعرض هذه الصفحة الفكرة العلمية الأساسية: قبل القياس يكون الإلكترون
                موصوفاً بدالة موجية منتشرة على مدارات محتملة، وعند الرصد تنهار هذه الدالة ليظهر موضع مرصود في
                مدار محدد داخل الذرة.
              </p>
              <div className="status-row">
                <div className="status-chip">المدار الأكثر ترجيحاً: {dominantOrbital.id}</div>
                <div className="status-chip">شدة القياس الحالية: {observation}%</div>
              </div>
            </div>

            <div className="hero-visual sch-card">
              <AtomField
                orbitals={orbitalProbabilities}
                measuredOrbital={measuredOrbital}
                measuring={measuring}
              />
            </div>
          </section>

          <section className="sch-measure-card">
            <div className="measure-top">
              <div className="measure-head">
                <h3>{collapseState.title}</h3>
                <p>{collapseState.subtitle}</p>
              </div>
              <div className="collapse-badge">انهيار الدالة الموجية</div>
            </div>

            <button className="measure-button" onClick={handleMeasure} disabled={measuring}>
              {measuring ? "جارٍ تنفيذ القياس الكمي..." : "قياس موضع الإلكترون الآن"}
            </button>
            <div className="collapse-sub">Wavefunction Collapse: measurement projects the state onto one orbital.</div>
          </section>

          <section className="control-grid">
            <div className="sch-grid-card">
              <h4>تماسك الحالة</h4>
              <p>Quantum Coherence</p>
              <div className="metric-value">{coherence}%</div>
              <div className="slider-wrap">
                <div className="slider-fill" style={{ width: `${coherence}%` }} />
                <input className="slider-input" type="range" min="0" max="100" value={coherence} onChange={(e) => setCoherence(Number(e.target.value))} />
              </div>
              <div className="slider-scale"><span>تشتت</span><span>تماسك</span></div>
            </div>

            <div className="sch-grid-card">
              <h4>شدة القياس</h4>
              <p>Observation Strength</p>
              <div className="metric-value">{observation}%</div>
              <div className="slider-wrap">
                <div className="slider-fill" style={{ width: `${observation}%` }} />
                <input className="slider-input" type="range" min="0" max="100" value={observation} onChange={(e) => setObservation(Number(e.target.value))} />
              </div>
              <div className="slider-scale"><span>ضعيف</span><span>حاد</span></div>
            </div>

            <div className="sch-grid-card">
              <h4>إثارة الإلكترون</h4>
              <p>Excitation Level</p>
              <div className="metric-value">{excitation}%</div>
              <div className="slider-wrap">
                <div className="slider-fill" style={{ width: `${excitation}%` }} />
                <input className="slider-input" type="range" min="0" max="100" value={excitation} onChange={(e) => setExcitation(Number(e.target.value))} />
              </div>
              <div className="slider-scale"><span>منخفضة</span><span>عالية</span></div>
            </div>
          </section>

          <section className="sch-outcomes">
            <h3 className="outcomes-title">توزيع الاحتمالات على المدارات قبل القياس</h3>
            <div className="outcomes-grid">
              {orbitalProbabilities.map((orbital) => (
                <div className="outcome-card" key={orbital.id}>
                  <div className="outcome-top">
                    <div>
                      <div className="outcome-label" style={{ color: orbital.color }}>{orbital.label}</div>
                      <div className="outcome-energy">{orbital.energy}</div>
                    </div>
                    <div className="outcome-pct" style={{ color: orbital.color }}>{orbital.probability}%</div>
                  </div>
                  <div className="outcome-bar">
                    <span style={{ width: `${orbital.probability}%`, background: orbital.color }} />
                  </div>
                  <p className="outcome-desc">{orbital.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="sch-bottom">
            <div className="concept-grid">
              <div className="concept-card">
                <h4 style={{ color: "#1fd4ff" }}>التراكب الموجي</h4>
                <p>قبل القياس لا نعامل الإلكترون ككرة تدور حول النواة، بل كدالة موجية تحدد أين يمكن العثور عليه باحتمالات مختلفة.</p>
              </div>
              <div className="concept-card">
                <h4 style={{ color: "#9f8cff" }}>القياس والإسقاط</h4>
                <p>عملية القياس لا تكشف مداراً جاهزاً فقط، بل تُسقط الحالة الكمومية على نتيجة واحدة من النتائج المسموح بها.</p>
              </div>
              <div className="concept-card">
                <h4 style={{ color: "#f59e0b" }}>المدارات الذرية</h4>
                <p>المدارات هنا تمثل مستويات وسحباً احتمالية مبسطة مثل 1s و2s و2p، وليست مسارات كوكبية صلبة.</p>
              </div>
            </div>

            <aside className="sch-history">
              <h3>سجل القياسات الأخيرة</h3>
              {history.map((item, index) => (
                <div className="history-item" key={`${item.id}-${index}`}>
                  <div>
                    <strong style={{ color: item.color }}>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                  <div className="history-time">{item.stamp || "الآن"}</div>
                </div>
              ))}
            </aside>
          </section>
        </div>
      </div>
    </>
  );
}
