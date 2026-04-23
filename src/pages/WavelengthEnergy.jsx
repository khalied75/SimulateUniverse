import { useMemo, useState } from "react";

const LIGHT_STOPS = [
  { stop: 0, color: "#ff2a2a", label: "أحمر" },
  { stop: 0.24, color: "#ff8c1a", label: "برتقالي" },
  { stop: 0.42, color: "#ffe600", label: "أصفر" },
  { stop: 0.58, color: "#35ff66", label: "أخضر" },
  { stop: 0.76, color: "#2d7cff", label: "أزرق" },
  { stop: 1, color: "#a420ff", label: "بنفسجي" },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function hexToRgb(hex) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3
    ? value.split("").map((char) => char + char).join("")
    : value;

  return {
    r: Number.parseInt(normalized.slice(0, 2), 16),
    g: Number.parseInt(normalized.slice(2, 4), 16),
    b: Number.parseInt(normalized.slice(4, 6), 16),
  };
}

function interpolateColor(progress) {
  const safeProgress = clamp(progress, 0, 1);
  const upperIndex = LIGHT_STOPS.findIndex((item) => safeProgress <= item.stop);

  if (upperIndex <= 0) return LIGHT_STOPS[0];
  if (upperIndex === -1) return LIGHT_STOPS[LIGHT_STOPS.length - 1];

  const lower = LIGHT_STOPS[upperIndex - 1];
  const upper = LIGHT_STOPS[upperIndex];
  const range = upper.stop - lower.stop || 1;
  const ratio = (safeProgress - lower.stop) / range;
  const from = hexToRgb(lower.color);
  const to = hexToRgb(upper.color);
  const mix = {
    r: Math.round(from.r + (to.r - from.r) * ratio),
    g: Math.round(from.g + (to.g - from.g) * ratio),
    b: Math.round(from.b + (to.b - from.b) * ratio),
  };

  return {
    color: `rgb(${mix.r}, ${mix.g}, ${mix.b})`,
    label: ratio < 0.5 ? lower.label : upper.label,
  };
}

function WavePreview({ energyPercent, color }) {
  const amplitude = 54 - energyPercent * 0.18;
  const frequency = 2.5 + energyPercent / 12;
  const width = 940;
  const height = 260;
  const centerY = height / 2;

  let path = `M 0 ${centerY}`;
  for (let x = 0; x <= width; x += 8) {
    const y = centerY + Math.sin((x / width) * Math.PI * 2 * frequency) * amplitude;
    path += ` L ${x} ${y.toFixed(2)}`;
  }

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="wave-svg" preserveAspectRatio="none">
      <defs>
        <filter id="waveGlow">
          <feGaussianBlur stdDeviation="4.4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="4.5"
        strokeLinecap="round"
        filter="url(#waveGlow)"
      />
    </svg>
  );
}

export default function WavelengthEnergy() {
  const [energyPercent, setEnergyPercent] = useState(72);

  const derived = useMemo(() => {
    const progress = energyPercent / 100;
    const wavelength = Math.round(750 - progress * 370);
    const photonEnergy = (1240 / wavelength).toFixed(2);
    const frequency = (299792458 / (wavelength * 1e-9)) / 1e14;
    const { color, label } = interpolateColor(progress);

    return {
      wavelength,
      photonEnergy,
      frequency: frequency.toFixed(2),
      color,
      label,
      energyHint: energyPercent >= 75 ? "عالية" : energyPercent >= 40 ? "متوسطة" : "منخفضة",
      relationHint:
        energyPercent >= 75
          ? "كلما قصرت الموجة زادت الطاقة وارتفع التردد."
          : energyPercent >= 40
            ? "نحن في منتصف الطيف المرئي تقريبًا."
            : "الموجة أطول والطاقة أقل والتردد ينخفض.",
    };
  }, [energyPercent]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #080814 !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #080814 !important;
          overflow-x: hidden !important;
        }

        .wavelength-root {
          min-height: 100vh;
          background:
            radial-gradient(circle at top center, rgba(124, 58, 237, 0.24), transparent 24%),
            radial-gradient(circle at 14% 20%, rgba(74, 34, 145, 0.18), transparent 28%),
            linear-gradient(180deg, #180a2d 0%, #0b0b1f 34%, #090914 100%);
          color: #f3efff;
          direction: rtl;
          font-family: 'Cairo', sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .wavelength-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(164, 116, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(164, 116, 255, 0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
        }

        .ambient-glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .ambient-glow::before,
        .ambient-glow::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
        }

        .ambient-glow::before {
          width: 420px;
          height: 420px;
          top: 90px;
          left: 12%;
          background: rgba(144, 74, 255, 0.18);
        }

        .ambient-glow::after {
          width: 380px;
          height: 380px;
          top: 260px;
          right: 10%;
          background: rgba(67, 91, 255, 0.12);
        }

        .wavelength-shell {
          max-width: 1060px;
          margin: 0 auto;
          padding: 6.2rem 1.5rem 4rem;
          position: relative;
          z-index: 1;
        }

        .hero-panel,
        .sim-panel,
        .laws-panel,
        .note-panel {
          background: rgba(27, 24, 70, 0.76);
          border: 1px solid rgba(139, 91, 255, 0.26);
          border-radius: 26px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(16px);
        }

        .hero-panel {
          padding: 2.4rem 1.4rem 2rem;
          text-align: center;
          margin-bottom: 1.4rem;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(2.2rem, 5vw, 3.7rem);
          line-height: 1.18;
          font-weight: 900;
          color: #9ea8ff;
          padding-top: 0.08em;
        }

        .hero-copy {
          max-width: 720px;
          margin: 1rem auto 0;
          color: rgba(227, 224, 248, 0.72);
          line-height: 1.9;
          font-size: 1rem;
        }

        .hero-copy strong {
          color: #c6c9ff;
        }

        .photon-stage {
          width: min(100%, 360px);
          aspect-ratio: 1;
          margin: 2.4rem auto 0;
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
          background: radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(160,98,255,0.05) 34%, transparent 70%);
        }

        .photon-stage::before {
          content: "";
          position: absolute;
          inset: 10%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132, 59, 255, 0.22), transparent 72%);
          filter: blur(8px);
        }

        .photon-core {
          width: 52%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle at 34% 28%, rgba(255,255,255,0.45), ${derived.color});
          box-shadow: 0 0 48px ${derived.color}, 0 0 120px rgba(144, 74, 255, 0.28);
          position: relative;
          z-index: 1;
        }

        .sim-panel {
          padding: 1.8rem;
          margin-bottom: 1.2rem;
        }

        .section-title {
          margin: 0 0 1.1rem;
          text-align: center;
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          color: #b7c1ff;
          font-weight: 800;
        }

        .wave-frame {
          background: rgba(8, 8, 24, 0.9);
          border-radius: 18px;
          min-height: 270px;
          padding: 1rem;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(154, 92, 255, 0.06);
        }

        .wave-svg {
          width: 100%;
          height: 250px;
          display: block;
        }

        .slider-meta {
          margin-top: 1.6rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .slider-percent {
          font-size: clamp(2rem, 4vw, 2.5rem);
          color: #90a0ff;
          font-weight: 900;
          line-height: 1;
        }

        .slider-label {
          color: #d8b8ff;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .range-track {
          position: relative;
          margin-top: 0.95rem;
          height: 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.14);
          direction: ltr;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04);
        }

        .range-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: ${energyPercent}%;
          background: linear-gradient(90deg, #b33aff, #6d62ff 50%, #4e87ff 100%);
          box-shadow: 0 0 28px rgba(132, 92, 255, 0.42);
          border-radius: inherit;
        }

        .range-input {
          -webkit-appearance: none;
          appearance: none;
          position: absolute;
          inset: -12px 0;
          width: 100%;
          background: transparent;
          cursor: pointer;
        }

        .range-input::-webkit-slider-runnable-track {
          height: 12px;
          background: transparent;
        }

        .range-input::-moz-range-track {
          height: 12px;
          background: transparent;
          border: none;
        }

        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 26px;
          height: 26px;
          margin-top: -7px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.92);
          background: radial-gradient(circle at 35% 35%, #ffffff, #d9b1ff 42%, #8b5cff 100%);
          box-shadow: 0 0 0 4px rgba(139, 92, 255, 0.18), 0 0 22px rgba(139, 92, 255, 0.4);
        }

        .range-input::-moz-range-thumb {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          border: 3px solid rgba(255,255,255,0.92);
          background: radial-gradient(circle at 35% 35%, #ffffff, #d9b1ff 42%, #8b5cff 100%);
          box-shadow: 0 0 0 4px rgba(139, 92, 255, 0.18), 0 0 22px rgba(139, 92, 255, 0.4);
        }

        .metrics-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.4rem;
        }

        .metric-card {
          background: rgba(38, 34, 87, 0.7);
          border: 1px solid rgba(132, 91, 255, 0.28);
          border-radius: 16px;
          padding: 1rem 1.05rem;
        }

        .metric-headline {
          color: rgba(224, 220, 247, 0.58);
          font-size: 0.86rem;
          margin-bottom: 0.45rem;
        }

        .metric-value {
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: #8ec1ff;
          font-weight: 800;
        }

        .metric-sub {
          margin-top: 0.2rem;
          color: #d9a7ff;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .metric-foot {
          margin-top: 0.45rem;
          color: rgba(159, 184, 255, 0.72);
          font-size: 0.88rem;
        }

        .laws-panel {
          padding: 1.4rem;
          margin-bottom: 1.2rem;
        }

        .laws-title {
          text-align: center;
          margin: 0 0 1rem;
          color: #d7c2ff;
          font-size: 1.25rem;
          font-weight: 800;
        }

        .law-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          background: rgba(13, 12, 36, 0.82);
          border-radius: 14px;
          padding: 0.85rem 1rem;
          color: rgba(228, 224, 245, 0.76);
        }

        .law-row + .law-row {
          margin-top: 0.7rem;
        }

        .law-formula {
          color: #9fd2ff;
          font-size: 1.1rem;
          font-weight: 800;
          direction: ltr;
        }

        .law-note {
          margin-top: 0.95rem;
          text-align: center;
          color: rgba(206, 201, 232, 0.55);
          font-size: 0.86rem;
        }

        .note-panel {
          padding: 1.5rem;
        }

        .note-lead {
          text-align: center;
          margin: 0 0 1rem;
          color: #ece0ff;
          font-size: 1.05rem;
          line-height: 1.9;
          font-weight: 700;
        }

        .note-lead span {
          color: #e6a7ff;
        }

        .spectrum-box {
          background: rgba(8, 8, 24, 0.88);
          border-radius: 18px;
          padding: 1.2rem;
        }

        .spectrum-title {
          text-align: center;
          color: rgba(224, 224, 242, 0.82);
          font-size: 1rem;
          margin-bottom: 1rem;
        }

        .spectrum-bar {
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(90deg, #ff1e1e 0%, #ff7a00 18%, #fff000 34%, #60ff00 52%, #00b4ff 70%, #232dff 84%, #a414ff 100%);
          box-shadow: 0 0 22px rgba(160, 98, 255, 0.18);
        }

        .spectrum-scale {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          margin-top: 0.7rem;
          color: rgba(204, 200, 228, 0.58);
          font-size: 0.85rem;
        }

        .spectrum-scale strong {
          display: block;
          color: #ece8ff;
          font-size: 0.9rem;
          margin-top: 0.15rem;
        }

        @media (max-width: 720px) {
          .wavelength-shell {
            padding-top: 5.2rem;
            padding-inline: 1rem;
          }

          .sim-panel,
          .hero-panel,
          .laws-panel,
          .note-panel {
            padding-inline: 1rem;
          }

          .metrics-grid {
            grid-template-columns: 1fr;
          }

          .law-row {
            flex-direction: column;
            align-items: flex-start;
          }

          .wave-frame {
            min-height: 220px;
          }

          .wave-svg {
            height: 200px;
          }
        }
      `}</style>

      <div className="wavelength-root">
        <div className="ambient-glow" />

        <div className="wavelength-shell">
          <section className="hero-panel">
            <h1 className="hero-title">اكتشاف غشاء الإمكان</h1>
            <p className="hero-copy">
              استكشف العلاقة بين <strong>الطاقة</strong> و<strong>طول الموجة</strong> في الضوء المرئي،
              حيث تزداد الطاقة كلما قصر طول الموجة وفقًا لعلاقة بلانك: E = hc/λ
            </p>

            <div className="photon-stage" aria-hidden="true">
              <div className="photon-core" />
            </div>
          </section>

          <section className="sim-panel">
            <h2 className="section-title">محاكاة تفاعلية للموجات</h2>

            <div className="wave-frame">
              <WavePreview energyPercent={energyPercent} color={derived.color} />
            </div>

            <div className="slider-meta">
              <div className="slider-percent">{energyPercent}%</div>
              <div className="slider-label">مستوى الطاقة</div>
            </div>

            <div className="range-track">
              <div className="range-fill" />
              <input
                className="range-input"
                type="range"
                min="0"
                max="100"
                value={energyPercent}
                onChange={(event) => setEnergyPercent(Number(event.target.value))}
              />
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-headline">طول الموجة</div>
                <div className="metric-value">{derived.wavelength} nm</div>
                <div className="metric-sub">{derived.label}</div>
                <div className="metric-foot">λ = c/ν</div>
              </div>

              <div className="metric-card">
                <div className="metric-headline">الطاقة</div>
                <div className="metric-value">{derived.photonEnergy} eV</div>
                <div className="metric-sub">{derived.energyHint}</div>
                <div className="metric-foot">E = hc/λ</div>
              </div>
            </div>
          </section>

          <section className="laws-panel">
            <h3 className="laws-title">قوانين بلانك للإشعاع الكهرومغناطيسي</h3>

            <div className="law-row">
              <div>طاقة الفوتون:</div>
              <div className="law-formula">E = hν</div>
            </div>

            <div className="law-row">
              <div>العلاقة بين الطاقة وطول الموجة:</div>
              <div className="law-formula">E = hc/λ</div>
            </div>

            <div className="law-row">
              <div>سرعة الموجة:</div>
              <div className="law-formula">c = λν</div>
            </div>

            <div className="law-note">
              h ثابت بلانك، c سرعة الضوء، ν التردد، λ طول الموجة، والتردد الحالي في هذه المحاكاة يقارب {derived.frequency} × 10¹⁴ Hz
            </div>
          </section>

          <section className="note-panel">
            <p className="note-lead">
              <span>العلاقة العكسية:</span> كلما زادت الطاقة، قل طول الموجة وازداد التردد.
              هذه العلاقة تحكم سلوك الضوء والإشعاع الكهرومغناطيسي في الكون.
            </p>

            <div className="spectrum-box">
              <div className="spectrum-title">طيف الضوء المرئي</div>
              <div className="spectrum-bar" />
              <div className="spectrum-scale">
                <div>
                  بنفسجي (380nm)
                  <strong>→ طاقة عالية</strong>
                </div>
                <div style={{ textAlign: "center" }}>
                  أخضر (550nm)
                  <strong>{derived.relationHint}</strong>
                </div>
                <div style={{ textAlign: "left" }}>
                  أحمر (750nm)
                  <strong>طاقة منخفضة ←</strong>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
