import { useEffect, useMemo, useRef, useState } from "react";

const MASS_PRESETS = [
  { label: "قمر صغير", value: 12 },
  { label: "كوكب صخري", value: 28 },
  { label: "نجم قزم", value: 54 },
  { label: "نجم نيوتروني", value: 82 },
  { label: "ثقب أسود حاد", value: 100 },
];

function formatMassLabel(value) {
  if (value >= 90) return "ثقب أسود حاد";
  if (value >= 70) return "نجم نيوتروني";
  if (value >= 45) return "نجم كثيف";
  if (value >= 20) return "كوكب/نجم صغير";
  return "جسم خفيف";
}

function curvatureHint(value) {
  if (value >= 90) return "انحناء قوي - الزمن يتمدد بشكل حاد";
  if (value >= 70) return "انحناء شديد جدا";
  if (value >= 45) return "انحناء واضح حول مركز الكتلة";
  if (value >= 20) return "انحناء متوسط وسلس";
  return "انحناء خفيف";
}

function SpacetimeCanvas({ mass, dragging, onPointerChange }) {
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: 0.24, y: 0.5, active: false });
  const orbitAngleRef = useRef(Math.PI * 0.9);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const normalizedMass = mass / 100;
      const wellStrength = 18 + normalizedMass * 118;
      const orbitRadius = 70 + (1 - normalizedMass) * 90;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "rgba(8,10,24,0.98)");
      bg.addColorStop(1, "rgba(11,13,30,0.98)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(1, 1, width - 2, height - 2, 18);
      ctx.clip();

      const glow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 180);
      glow.addColorStop(0, `rgba(166,91,255,${0.44 + normalizedMass * 0.18})`);
      glow.addColorStop(0.35, "rgba(135,70,255,0.18)");
      glow.addColorStop(1, "rgba(135,70,255,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(137,88,255,0.34)";
      ctx.lineWidth = 1;

      const horizontalLines = 13;
      const verticalLines = 19;

      for (let row = 0; row < horizontalLines; row += 1) {
        const baseY = (row / (horizontalLines - 1)) * height;
        ctx.beginPath();
        for (let col = 0; col <= 120; col += 1) {
          const x = (col / 120) * width;
          const dx = x - centerX;
          const dy = baseY - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy) + 22;
          const sink = (wellStrength * 110) / (distance + 55);
          const localWarp = sink * Math.exp((-Math.abs(dx) / (width * 0.52)) ** 1.8);
          const y = baseY + (dy >= 0 ? 1 : -1) * localWarp;
          if (col === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      for (let col = 0; col < verticalLines; col += 1) {
        const baseX = (col / (verticalLines - 1)) * width;
        ctx.beginPath();
        for (let row = 0; row <= 90; row += 1) {
          const y = (row / 90) * height;
          const dx = baseX - centerX;
          const dy = y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy) + 26;
          const pull = (wellStrength * 48) / (distance + 40);
          const x = baseX - Math.sign(dx || 1) * pull * Math.exp((Math.abs(dy) / (height * 0.7)) ** 2);
          if (row === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      orbitAngleRef.current += 0.012 - normalizedMass * 0.0045;

      const pointer = pointerRef.current;
      const targetX = pointer.active ? pointer.x * width : centerX - Math.cos(orbitAngleRef.current) * orbitRadius;
      const targetY = pointer.active ? pointer.y * height : centerY + Math.sin(orbitAngleRef.current * 1.2) * (40 + (1 - normalizedMass) * 42);
      const dx = targetX - centerX;
      const dy = targetY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy) + 1;
      const clampRadius = Math.max(42, orbitRadius + 8 - normalizedMass * 18);
      const ratio = Math.min(distance, clampRadius) / distance;
      const probeX = centerX + dx * ratio;
      const probeY = centerY + dy * ratio;

      ctx.beginPath();
      ctx.moveTo(probeX, probeY);
      ctx.quadraticCurveTo(
        (probeX + centerX) / 2,
        probeY - 24 - normalizedMass * 34,
        centerX,
        centerY
      );
      ctx.strokeStyle = "rgba(255, 198, 53, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(probeX, probeY, 5.2, 0, Math.PI * 2);
      ctx.fillStyle = "#ffc83a";
      ctx.shadowColor = "rgba(255, 200, 58, 0.95)";
      ctx.shadowBlur = 20;
      ctx.fill();
      ctx.shadowBlur = 0;

      const eventRadius = 28 + normalizedMass * 22;
      const coreGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 78 + normalizedMass * 24);
      coreGlow.addColorStop(0, "rgba(231,217,255,0.98)");
      coreGlow.addColorStop(0.14, "rgba(204,169,255,0.95)");
      coreGlow.addColorStop(0.4, "rgba(154,92,255,0.68)");
      coreGlow.addColorStop(1, "rgba(140,76,255,0)");
      ctx.fillStyle = coreGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 80 + normalizedMass * 22, 0, Math.PI * 2);
      ctx.fill();

      for (let ring = 0; ring < 3; ring += 1) {
        ctx.beginPath();
        const radius = eventRadius + 26 + ring * 28 + Math.sin(orbitAngleRef.current * 3 + ring) * 2;
        ctx.strokeStyle = `rgba(145, 92, 255, ${0.42 - ring * 0.1})`;
        ctx.lineWidth = 1.1;
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.strokeStyle = "rgba(140, 92, 255, 0.5)";
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(centerX, height);
      ctx.stroke();

      ctx.fillStyle = "rgba(167, 140, 255, 0.42)";
      ctx.font = "11px Cairo, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("محاكاة غشاء الزمكان", width - 16, height - 14);

      ctx.restore();

      ctx.strokeStyle = "rgba(120, 88, 255, 0.24)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(1, 1, width - 2, height - 2, 18);
      ctx.stroke();

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    const updatePointer = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      pointerRef.current = {
        x: Math.max(0, Math.min(1, (clientX - rect.left) / rect.width)),
        y: Math.max(0, Math.min(1, (clientY - rect.top) / rect.height)),
        active: true,
      };
      onPointerChange(true);
    };

    const handleMove = (event) => updatePointer(event.clientX, event.clientY);
    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      if (!touch) return;
      updatePointer(touch.clientX, touch.clientY);
    };
    const handleLeave = () => {
      pointerRef.current.active = false;
      onPointerChange(false);
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("touchstart", handleTouchMove, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("touchend", handleLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("touchstart", handleTouchMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("touchend", handleLeave);
    };
  }, [mass, dragging, onPointerChange]);

  return <canvas ref={canvasRef} className="spacetime-canvas" />;
}

function MetricCard({ value, label, sublabel, hint, accent = "purple" }) {
  return (
    <div className={`metric-card metric-${accent}`}>
      <div className="metric-head">
        <div>
          <div className="metric-value">{value}</div>
          <div className="metric-chip">{hint}</div>
        </div>
        <div className="metric-copy">
          <h3>{label}</h3>
          <p>{sublabel}</p>
        </div>
      </div>
    </div>
  );
}

export default function SpacetimeCurvature() {
  const [mass, setMass] = useState(100);
  const [pointerActive, setPointerActive] = useState(false);

  const metrics = useMemo(() => {
    const normalized = mass / 100;
    const curveLevel = Math.round(normalized * 100);
    const spacetimeFactor = Math.round(25 + normalized * 155);
    return {
      massLabel: formatMassLabel(mass),
      curveLevel,
      spacetimeFactor,
      hint: curvatureHint(mass),
    };
  }, [mass]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        html, body, #root {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100% !important;
          background: #070913 !important;
          overflow-x: hidden !important;
        }

        main {
          margin: 0 !important;
          padding: 0 !important;
          width: 100% !important;
          min-height: 100vh !important;
          background: #070913 !important;
          overflow-x: hidden !important;
        }

        .spacetime-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at top right, rgba(106, 54, 255, 0.16), transparent 28%),
            radial-gradient(circle at 20% 70%, rgba(88, 32, 180, 0.12), transparent 24%),
            #070913;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: relative;
          overflow-x: hidden;
          color: #ebe8ff;
        }

        .spacetime-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(136, 96, 255, 0.045) 1px, transparent 1px),
            linear-gradient(90deg, rgba(136, 96, 255, 0.045) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(circle at center, black 45%, transparent 100%);
        }

        .spacetime-shell {
          max-width: 980px;
          margin: 0 auto;
          padding: 5.5rem 1.5rem 4rem;
          position: relative;
          z-index: 1;
        }

        .spacetime-header {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .spacetime-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.34rem 0.9rem;
          border-radius: 999px;
          background: rgba(135, 92, 255, 0.08);
          border: 1px solid rgba(135, 92, 255, 0.22);
          color: #b898ff;
          font-size: 0.72rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .spacetime-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.35rem);
          line-height: 1.06;
          font-weight: 900;
          color: #f1eeff;
        }

        .spacetime-title span {
          color: #a875ff;
        }

        .spacetime-subtitle {
          font-family: 'Syne', sans-serif;
          margin-top: 0.45rem;
          color: rgba(205, 197, 255, 0.46);
          letter-spacing: 0.12em;
          font-size: 0.82rem;
          text-transform: uppercase;
        }

        .spacetime-lead {
          max-width: 720px;
          margin: 1rem auto 0;
          color: rgba(208, 202, 235, 0.58);
          line-height: 1.95;
          font-size: 0.96rem;
        }

        .visual-card,
        .facts-card,
        .metric-card,
        .control-card {
          background: rgba(9, 12, 28, 0.88);
          border: 1px solid rgba(125, 96, 255, 0.13);
          border-radius: 20px;
          box-shadow: 0 20px 70px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(18px);
        }

        .visual-card {
          padding: 1rem;
          margin-bottom: 1rem;
        }

        .spacetime-canvas {
          width: 100%;
          height: 370px;
          display: block;
          border-radius: 18px;
          cursor: crosshair;
        }

        .facts-card {
          padding: 1rem 1.2rem;
          margin-bottom: 1.2rem;
        }

        .fact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          color: rgba(221, 215, 247, 0.78);
          line-height: 1.8;
          font-size: 0.92rem;
        }

        .fact-item + .fact-item {
          margin-top: 0.5rem;
        }

        .fact-dot {
          width: 8px;
          height: 8px;
          margin-top: 0.7rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #d9b8ff, #7f4dff);
          box-shadow: 0 0 14px rgba(151, 102, 255, 0.75);
          flex-shrink: 0;
        }

        .metrics-grid {
          display: grid;
          gap: 1rem;
        }

        .metric-card {
          padding: 1.15rem 1.2rem 1.2rem;
        }

        .metric-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
        }

        .metric-copy {
          text-align: right;
        }

        .metric-copy h3 {
          margin: 0;
          font-size: 1.08rem;
          color: #ded7ff;
          font-weight: 800;
        }

        .metric-copy p {
          margin: 0.12rem 0 0;
          color: rgba(186, 177, 227, 0.38);
          font-size: 0.78rem;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04em;
        }

        .metric-value {
          color: #ab7dff;
          font-size: clamp(1.9rem, 5vw, 2.6rem);
          line-height: 1;
          font-weight: 900;
          font-family: 'Syne', sans-serif;
        }

        .metric-chip {
          display: inline-flex;
          margin-top: 0.5rem;
          padding: 0.28rem 0.72rem;
          border-radius: 999px;
          background: rgba(135, 92, 255, 0.08);
          color: #c5b1ff;
          border: 1px solid rgba(135, 92, 255, 0.18);
          font-size: 0.76rem;
          font-weight: 700;
        }

        .control-card {
          margin-top: 1rem;
          padding: 1.15rem 1.2rem 1.25rem;
        }

        .control-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 0.85rem;
        }

        .control-head h3 {
          margin: 0;
          font-size: 1.08rem;
          color: #e9e4ff;
        }

        .control-head p {
          margin: 0.12rem 0 0;
          color: rgba(191, 183, 229, 0.45);
          font-size: 0.82rem;
        }

        .pointer-chip {
          padding: 0.36rem 0.72rem;
          border-radius: 999px;
          border: 1px solid rgba(135, 92, 255, 0.18);
          background: rgba(135, 92, 255, 0.07);
          color: ${pointerActive ? "#f7c94d" : "#bda8ff"};
          font-size: 0.74rem;
          font-weight: 700;
          box-shadow: ${pointerActive ? "0 0 24px rgba(247, 201, 77, 0.12)" : "none"};
        }

        .slider-group {
          margin-top: 0.8rem;
        }

        .slider-wrap {
          position: relative;
          height: 8px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 999px;
          overflow: hidden;
          direction: ltr;
        }

        .slider-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: ${mass}%;
          background: linear-gradient(90deg, #6f35ff, #a46aff 60%, #d4b3ff);
          box-shadow: 0 0 24px rgba(142, 92, 255, 0.34);
          border-radius: 999px;
          pointer-events: none;
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
          margin-top: 0.38rem;
          color: rgba(188, 180, 225, 0.35);
          font-size: 0.72rem;
        }

        .preset-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1rem;
        }

        .preset-btn {
          border: 1px solid rgba(135, 92, 255, 0.16);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(225, 218, 255, 0.82);
          border-radius: 999px;
          padding: 0.45rem 0.85rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-btn:hover {
          border-color: rgba(160, 118, 255, 0.32);
          color: #fff;
          background: rgba(135, 92, 255, 0.08);
        }

        .preset-btn.active {
          color: #0d0b16;
          background: linear-gradient(135deg, #d3b4ff, #8e59ff);
          border-color: transparent;
          box-shadow: 0 10px 26px rgba(132, 86, 255, 0.22);
        }

        .canvas-help {
          margin-top: 0.8rem;
          color: rgba(201, 194, 233, 0.52);
          font-size: 0.82rem;
          line-height: 1.8;
        }

        @media (max-width: 720px) {
          .spacetime-shell {
            padding-top: 4.8rem;
            padding-inline: 1rem;
          }

          .spacetime-canvas {
            height: 280px;
          }

          .metric-head,
          .control-head {
            flex-direction: column;
            align-items: flex-start;
          }

          .metric-copy {
            text-align: right;
            width: 100%;
          }
        }
      `}</style>

      <div className="spacetime-root">
        <div className="spacetime-shell">
          <header className="spacetime-header">
            <div className="spacetime-pill">◉ محاكاة تفاعلية</div>
            <h1 className="spacetime-title">
              انحناء <span>غشاء الزمكان</span>
            </h1>
            <div className="spacetime-subtitle">SPACETIME CURVATURE</div>
            <p className="spacetime-lead">
              انحناء الزمكان من الأساس في النسبية العامة حيث تشوّه الكتلة والطاقة نسيج الفضاء-الزمن، وهنا يمكنك
              تتبع أثر الجاذبية على حركة الجسم القريب من البئر الجذبي.
            </p>
          </header>

          <section className="visual-card">
            <SpacetimeCanvas
              mass={mass}
              dragging={pointerActive}
              onPointerChange={setPointerActive}
            />
          </section>

          <section className="facts-card">
            <div className="fact-item">
              <span className="fact-dot" />
              <span>
                <strong>النسبية العامة:</strong> الكتلة تثني الفضاء كما تثني قوة اليد سطحًا مرنًا، والأجسام تتبع هذا
                الانحناء.
              </span>
            </div>
            <div className="fact-item">
              <span className="fact-dot" />
              <span>
                <strong>التأثير:</strong> كلما اقترب الجسم من المركز زاد انحراف مساره وتسارع سقوطه نحو البئر
                الجذبي.
              </span>
            </div>
          </section>

          <section className="metrics-grid">
            <MetricCard
              value={mass}
              label="الكتلة والتشويه"
              sublabel="Mass and Distortion"
              hint={metrics.massLabel}
            />
            <MetricCard
              value={`${metrics.curveLevel}%`}
              label="مستوى الانحناء"
              sublabel="Curvature Level"
              hint={metrics.hint}
            />
            <MetricCard
              value={`${metrics.spacetimeFactor}%`}
              label="معامل انحناء الزمكان"
              sublabel="Spacetime Curvature Factor"
              hint={mass >= 90 ? "أفق الحدث قريب" : "زمن محلي يتمدد تدريجيًا"}
            />
          </section>

          <section className="control-card">
            <div className="control-head">
              <div>
                <h3>تحكم بالكتلة المركزية</h3>
                <p>غيّر شدة الكتلة أو حرّك المؤشر فوق الرسم لرؤية تغير المسار بشكل فوري.</p>
              </div>
              <div className="pointer-chip">
                {pointerActive ? "المسبار يتبع المؤشر الآن" : "حرّك المؤشر داخل الرسم"}
              </div>
            </div>

            <div className="slider-group">
              <div className="slider-wrap">
                <div className="slider-fill" />
                <input
                  className="slider-input"
                  type="range"
                  min="0"
                  max="100"
                  value={mass}
                  onChange={(event) => setMass(Number(event.target.value))}
                />
              </div>
              <div className="slider-scale">
                <span>0 مجال شبه مسطّح</span>
                <span>100 تشوّه حاد</span>
              </div>
            </div>

            <div className="preset-row">
              {MASS_PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  className={`preset-btn${mass === preset.value ? " active" : ""}`}
                  onClick={() => setMass(preset.value)}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <div className="canvas-help">
              الفكرة هنا بصرية تعليمية: الشبكة تتمدد نحو المركز مع زيادة الكتلة، والنقطة الصفراء تمثل جسمًا قريبًا
              يتأثر بالانحناء ويتغير مساره عند تحريكك للمؤشر.
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
