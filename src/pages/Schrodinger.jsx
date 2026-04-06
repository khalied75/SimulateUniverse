import { useEffect, useMemo, useRef, useState } from "react";

const OUTCOMES = [
  { id: "alive-calm", label: "القط السالم", en: "Alive / Calm", color: "#67d96a", icon: "🐈" },
  { id: "alive-alert", label: "القط المتحفز", en: "Alive / Alert", color: "#1fd4ff", icon: "👁️" },
  { id: "alive-curious", label: "القط الفضولي", en: "Alive / Curious", color: "#7c9dff", icon: "🌌" },
  { id: "dead-silent", label: "القط الساكن", en: "Dead / Silent", color: "#a855f7", icon: "🕯️" },
  { id: "dead-toxic", label: "الغاز المنبعث", en: "Toxic Release", color: "#ff7a59", icon: "☢️" },
  { id: "dead-box", label: "الصندوق المغلق", en: "Closed Box", color: "#ff4f9b", icon: "📦" },
];

function buildProbabilities(coherence, decay, observation) {
  const aliveWeight = Math.max(0.12, (coherence / 100) * 0.68 + ((100 - decay) / 100) * 0.52 - (observation / 100) * 0.12);
  const deadWeight = Math.max(0.12, (decay / 100) * 0.74 + (observation / 100) * 0.3);

  const raw = {
    "alive-calm": aliveWeight * (0.44 + coherence / 280),
    "alive-alert": aliveWeight * (0.24 + observation / 230),
    "alive-curious": aliveWeight * (0.2 + (100 - decay) / 300),
    "dead-silent": deadWeight * (0.34 + decay / 260),
    "dead-toxic": deadWeight * (0.27 + decay / 180),
    "dead-box": deadWeight * (0.2 + observation / 220),
  };

  const total = Object.values(raw).reduce((sum, value) => sum + value, 0);
  return OUTCOMES.map((outcome) => ({
    ...outcome,
    probability: Math.round((raw[outcome.id] / total) * 100),
  })).map((outcome, index, array) => {
    if (index !== array.length - 1) return outcome;
    const diff = 100 - array.reduce((sum, item) => sum + item.probability, 0);
    return { ...outcome, probability: outcome.probability + diff };
  });
}

function QuantumOrb({ collapseColor, measuring }) {
  const orbRef = useRef(null);

  useEffect(() => {
    const element = orbRef.current;
    if (!element) return undefined;

    const handleMove = (event) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 18;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 18;
      element.style.setProperty("--mx", `${x}px`);
      element.style.setProperty("--my", `${y}px`);
    };

    const reset = () => {
      element.style.setProperty("--mx", "0px");
      element.style.setProperty("--my", "0px");
    };

    element.addEventListener("mousemove", handleMove);
    element.addEventListener("mouseleave", reset);

    return () => {
      element.removeEventListener("mousemove", handleMove);
      element.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      ref={orbRef}
      className={`quantum-orb${measuring ? " measuring" : ""}`}
      style={{ "--collapse": collapseColor }}
    >
      <div className="orb-core" />
      <div className="orb-halo" />
      <div className="orb-noise orb-noise-a" />
      <div className="orb-noise orb-noise-b" />
      <div className="orb-rings" />
    </div>
  );
}

export default function Schrodinger() {
  const [coherence, setCoherence] = useState(63);
  const [decay, setDecay] = useState(38);
  const [observation, setObservation] = useState(27);
  const [measurement, setMeasurement] = useState(null);
  const [history, setHistory] = useState([]);
  const [measuring, setMeasuring] = useState(false);

  const probabilities = useMemo(
    () => buildProbabilities(coherence, decay, observation),
    [coherence, decay, observation]
  );

  const aliveProbability = useMemo(
    () =>
      probabilities
        .filter((item) => item.id.startsWith("alive"))
        .reduce((sum, item) => sum + item.probability, 0),
    [probabilities]
  );

  const collapseState = useMemo(() => {
    if (!measurement) {
      return {
        title: "حالة تراكب كمّي",
        subtitle: "يمكن أن يكون القط حيًا أو ميتًا في الوقت نفسه حتى لحظة القياس.",
        color: "#8b5cf6",
      };
    }

    return {
      title: measurement.label,
      subtitle: `انهارت الدالة الموجية على الحالة: ${measurement.en}`,
      color: measurement.color,
    };
  }, [measurement]);

  const handleMeasure = () => {
    setMeasuring(true);
    window.setTimeout(() => {
      const roll = Math.random() * 100;
      let acc = 0;
      const result =
        probabilities.find((item) => {
          acc += item.probability;
          return roll <= acc;
        }) || probabilities[0];

      const now = new Date();
      const stamp = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`;
      setMeasurement(result);
      setHistory((prev) => [{ ...result, stamp }, ...prev].slice(0, 5));
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
            radial-gradient(circle at 50% 0%, rgba(26, 214, 255, 0.08), transparent 18%),
            radial-gradient(circle at 78% 18%, rgba(255, 74, 125, 0.09), transparent 22%),
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
          max-width: 1120px;
          margin: 0 auto;
          padding: 5.4rem 1.5rem 4rem;
          position: relative;
          z-index: 1;
        }

        .sch-hero {
          display: grid;
          grid-template-columns: 1.1fr 0.95fr;
          gap: 1.25rem;
          align-items: center;
          margin-bottom: 1.15rem;
        }

        .sch-card,
        .sch-grid-card,
        .sch-outcomes,
        .sch-measure-card,
        .sch-history {
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(70, 124, 255, 0.14);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.34);
          backdrop-filter: blur(18px);
        }

        .sch-copy {
          padding: 1.2rem 0.2rem;
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
          font-size: clamp(2rem, 5vw, 3.15rem);
          line-height: 1.08;
          font-weight: 900;
        }

        .sch-title span {
          color: #9f8cff;
        }

        .sch-lead {
          margin-top: 0.95rem;
          max-width: 520px;
          line-height: 1.9;
          color: rgba(214, 214, 233, 0.62);
          font-size: 0.96rem;
        }

        .status-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        .status-chip {
          padding: 0.36rem 0.8rem;
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

        .quantum-orb {
          --mx: 0px;
          --my: 0px;
          --collapse: #8b5cf6;
          height: 330px;
          border-radius: 26px;
          background:
            radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06), transparent 38%),
            linear-gradient(180deg, rgba(15, 20, 37, 0.98), rgba(12, 16, 29, 0.98));
          border: 1px solid rgba(89, 119, 255, 0.14);
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .orb-core,
        .orb-halo,
        .orb-noise,
        .orb-rings {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my)));
        }

        .orb-core {
          width: 210px;
          height: 210px;
          border-radius: 50%;
          background:
            radial-gradient(circle at 35% 30%, rgba(125, 172, 255, 0.5), transparent 22%),
            radial-gradient(circle at 65% 68%, rgba(195, 160, 255, 0.45), transparent 20%),
            radial-gradient(circle at 50% 50%, rgba(242, 115, 145, 0.65), rgba(114, 20, 30, 0.95));
          box-shadow:
            0 0 0 12px rgba(82, 113, 255, 0.08),
            0 0 80px rgba(255, 84, 126, 0.18);
        }

        .orb-halo {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          box-shadow: 0 0 0 1px rgba(130, 147, 255, 0.15), 0 0 60px rgba(108, 78, 255, 0.1) inset;
        }

        .orb-noise {
          border-radius: 50%;
          filter: blur(12px);
          mix-blend-mode: screen;
          opacity: 0.7;
        }

        .orb-noise-a {
          width: 260px;
          height: 140px;
          background: radial-gradient(circle, rgba(104, 182, 255, 0.35), transparent 68%);
          animation: drift-a 8s ease-in-out infinite;
        }

        .orb-noise-b {
          width: 230px;
          height: 230px;
          background: radial-gradient(circle, rgba(187, 104, 255, 0.25), transparent 72%);
          animation: drift-b 9s ease-in-out infinite;
        }

        .orb-rings {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(90, 106, 255, 0.14);
          box-shadow: 0 0 0 22px rgba(77, 103, 255, 0.04), 0 0 0 46px rgba(77, 103, 255, 0.03);
        }

        .quantum-orb.measuring .orb-core {
          animation: collapse-flash 0.95s ease;
          box-shadow:
            0 0 0 12px rgba(82, 113, 255, 0.08),
            0 0 110px color-mix(in srgb, var(--collapse) 60%, transparent);
        }

        @keyframes drift-a {
          0%,100% { transform: translate(-45%, -48%) scale(1); }
          50% { transform: translate(-54%, -42%) scale(1.08); }
        }

        @keyframes drift-b {
          0%,100% { transform: translate(-48%, -52%) scale(1); }
          50% { transform: translate(-42%, -56%) scale(1.05); }
        }

        @keyframes collapse-flash {
          0% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(0.92); filter: saturate(1); }
          35% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(1.12); filter: saturate(1.35); }
          100% { transform: translate(calc(-50% + var(--mx)), calc(-50% + var(--my))) scale(1); filter: saturate(1); }
        }

        .sch-measure-card {
          padding: 1.2rem;
          margin-bottom: 1rem;
        }

        .measure-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .measure-head h3 {
          margin: 0;
          font-size: 1.1rem;
        }

        .measure-head p {
          margin: 0.2rem 0 0;
          color: rgba(207, 207, 229, 0.5);
          font-size: 0.84rem;
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
          background: linear-gradient(90deg, #15c5ff, #7c4dff 55%, #a855f7);
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

        .control-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .sch-grid-card {
          padding: 1rem;
        }

        .sch-grid-card h4 {
          margin: 0;
          font-size: 1rem;
        }

        .sch-grid-card p {
          margin: 0.15rem 0 0.7rem;
          color: rgba(207, 207, 229, 0.42);
          font-size: 0.78rem;
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

        .sch-outcomes {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .outcomes-title {
          margin: 0 0 0.8rem;
          color: rgba(206, 222, 255, 0.88);
          font-size: 0.96rem;
        }

        .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
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
          margin-bottom: 0.55rem;
        }

        .outcome-label {
          font-size: 0.88rem;
          font-weight: 700;
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
        }

        .outcome-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
        }

        .sch-bottom {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
        }

        .concept-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .concept-card {
          padding: 1rem;
          border-radius: 20px;
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(74, 127, 255, 0.14);
        }

        .concept-card h4 {
          margin: 0 0 0.5rem;
          font-size: 1rem;
        }

        .concept-card p {
          margin: 0;
          line-height: 1.85;
          color: rgba(210, 214, 234, 0.62);
          font-size: 0.86rem;
        }

        .sch-history {
          padding: 1rem;
        }

        .sch-history h3 {
          margin: 0 0 0.85rem;
          font-size: 1rem;
        }

        .history-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.8rem;
          padding: 0.72rem 0.8rem;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
        }

        .history-item + .history-item {
          margin-top: 0.55rem;
        }

        .history-item strong {
          display: block;
          font-size: 0.86rem;
        }

        .history-item span {
          color: rgba(196, 201, 224, 0.42);
          font-size: 0.74rem;
        }

        .history-time {
          font-family: monospace;
          color: rgba(214, 219, 241, 0.55);
          font-size: 0.74rem;
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
            padding-top: 4.8rem;
          }

          .measure-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .quantum-orb {
            height: 280px;
          }
        }
      `}</style>

      <div className="sch-root">
        <div className="sch-shell">
          <section className="sch-hero">
            <div className="sch-copy">
              <div className="sch-pill">🌀 تجربة فكرية كمية</div>
              <h1 className="sch-title">
                <span>قطة شرودنجر</span> والتراكب الكمي
              </h1>
              <p className="sch-lead">
                قبل القياس تبقى الحالة في تراكب بين احتمالات متعددة. عند الرصد تنهار الدالة الموجية ويجبر النظام
                الكمّي على اختيار نتيجة واحدة فقط من بين جميع الإمكانات.
              </p>
              <div className="status-row">
                <div className="status-chip">احتمال الحياة: {aliveProbability}%</div>
                <div className="status-chip">الرصد الحالي: {observation}%</div>
              </div>
            </div>

            <div className="hero-visual sch-card">
              <QuantumOrb collapseColor={collapseState.color} measuring={measuring} />
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
              {measuring ? "جاري القياس الكمّي..." : "قياس الحالة الآن"}
            </button>
            <div className="collapse-sub">[COLLAPSE WAVEFUNCTION] - forcing reality to choose one state</div>
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
              <div className="slider-scale"><span>فوضى</span><span>تماسك</span></div>
            </div>

            <div className="sch-grid-card">
              <h4>معدل الاضمحلال</h4>
              <p>Decay Trigger</p>
              <div className="metric-value">{decay}%</div>
              <div className="slider-wrap">
                <div className="slider-fill" style={{ width: `${decay}%` }} />
                <input className="slider-input" type="range" min="0" max="100" value={decay} onChange={(e) => setDecay(Number(e.target.value))} />
              </div>
              <div className="slider-scale"><span>هادئ</span><span>نشط</span></div>
            </div>

            <div className="sch-grid-card">
              <h4>شدة الملاحظة</h4>
              <p>Observation Strength</p>
              <div className="metric-value">{observation}%</div>
              <div className="slider-wrap">
                <div className="slider-fill" style={{ width: `${observation}%` }} />
                <input className="slider-input" type="range" min="0" max="100" value={observation} onChange={(e) => setObservation(Number(e.target.value))} />
              </div>
              <div className="slider-scale"><span>خفية</span><span>رصد مباشر</span></div>
            </div>
          </section>

          <section className="sch-outcomes">
            <h3 className="outcomes-title">احتمالات التراكب قبل القياس</h3>
            <div className="outcomes-grid">
              {probabilities.map((item) => (
                <div className="outcome-card" key={item.id}>
                  <div className="outcome-top">
                    <div className="outcome-label" style={{ color: item.color }}>{item.icon} {item.label}</div>
                    <div className="outcome-pct" style={{ color: item.color }}>{item.probability}%</div>
                  </div>
                  <div className="outcome-bar">
                    <span style={{ width: `${item.probability}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="sch-bottom">
            <div className="concept-grid">
              <div className="concept-card">
                <h4 style={{ color: "#1fd4ff" }}>التراكب الكمي</h4>
                <p>قبل القياس لا نملك حالة مفردة مؤكدة، بل تتعايش عدة إمكانات معًا داخل وصف موجي واحد.</p>
              </div>
              <div className="concept-card">
                <h4 style={{ color: "#9f8cff" }}>انهيار الدالة</h4>
                <p>عند القياس تختفي بقية الاحتمالات من المشهد المرصود وتبقى نتيجة واحدة فقط قابلة للملاحظة.</p>
              </div>
              <div className="concept-card">
                <h4 style={{ color: "#ff7a59" }}>عدم اليقين</h4>
                <p>كلما ازدادت التفاعلات أو المراقبة، ضعفت نقاوة التراكب وأصبح النظام أقرب إلى حالة محددة.</p>
              </div>
            </div>

            <aside className="sch-history">
              <h3>نتائج القياس الأخيرة</h3>
              {history.length === 0 ? (
                <div className="history-item">
                  <div>
                    <strong>لا توجد قياسات بعد</strong>
                    <span>اضغط على زر القياس لرؤية نتيجة انهيار الدالة الموجية.</span>
                  </div>
                </div>
              ) : (
                history.map((item, index) => (
                  <div className="history-item" key={`${item.id}-${item.stamp}-${index}`}>
                    <div>
                      <strong style={{ color: item.color }}>{item.label}</strong>
                      <span>{item.en}</span>
                    </div>
                    <div className="history-time">{item.stamp}</div>
                  </div>
                ))
              )}
            </aside>
          </section>
        </div>
      </div>
    </>
  );
}
