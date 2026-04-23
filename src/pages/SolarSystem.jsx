import { useEffect, useMemo, useRef, useState } from "react";

const PLANETS = [
  { id: "mercury", name: "عطارد", en: "Mercury", color: "#b7a488", orbit: 58, size: 4.5, speed: 4.15, day: "88 يوم", year: "88 يوم", fact: "أقرب الكواكب إلى الشمس وأسرعها دورانًا حولها." },
  { id: "venus", name: "الزهرة", en: "Venus", color: "#d8a46a", orbit: 108, size: 7.5, speed: 1.62, day: "243 يوم", year: "225 يوم", fact: "أشد الكواكب حرارة بسبب غلافه الجوي الكثيف." },
  { id: "earth", name: "الأرض", en: "Earth", color: "#3c82ff", orbit: 150, size: 7.9, speed: 1, day: "24 ساعة", year: "365 يوم", fact: "الكوكب الوحيد المعروف بوجود حياة ومحيطات سائلة على سطحه." },
  { id: "mars", name: "المريخ", en: "Mars", color: "#d95f4c", orbit: 228, size: 6.1, speed: 0.53, day: "24.6 ساعة", year: "687 يوم", fact: "يتميز بلونه الأحمر نتيجة أكاسيد الحديد على سطحه." },
  { id: "jupiter", name: "المشتري", en: "Jupiter", color: "#d6a13f", orbit: 778, size: 18, speed: 0.084, day: "10 ساعات", year: "11.86 سنة", fact: "أكبر كواكب النظام الشمسي ويملك عاصفة هائلة تسمى البقعة الحمراء الكبرى." },
  { id: "saturn", name: "زحل", en: "Saturn", color: "#e4c07d", orbit: 1433, size: 15.5, speed: 0.034, day: "10.7 ساعة", year: "29.4 سنة", fact: "يشتهر بحلقاته الواسعة المكوّنة من الجليد والصخور." },
  { id: "uranus", name: "أورانوس", en: "Uranus", color: "#7dd8e7", orbit: 2872, size: 11, speed: 0.012, day: "17 ساعة", year: "84 سنة", fact: "يميل على جانبه تقريبًا، لذلك يبدو كأنه يدور وهو متمدّد." },
  { id: "neptune", name: "نبتون", en: "Neptune", color: "#517cff", orbit: 4495, size: 10.8, speed: 0.006, day: "16 ساعة", year: "165 سنة", fact: "أبعد كوكب رئيسي، ويتميز برياح من الأسرع في النظام الشمسي." },
];

function SolarSystemCanvas({ speed, selectedPlanet, onSelectPlanet }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const hoverRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let time = 0;
    let planetScreenMap = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const getOrbitRadius = (planet, maxOrbitRadius) => {
      const ratio = Math.sqrt(planet.orbit / PLANETS[PLANETS.length - 1].orbit);
      return 54 + ratio * maxOrbitRadius;
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2 + 18;
      const orbitWidth = Math.min(width * 0.42, 390);
      const orbitHeightRatio = 0.34;

      ctx.clearRect(0, 0, width, height);

      const bg = ctx.createLinearGradient(0, 0, width, height);
      bg.addColorStop(0, "rgba(11,14,31,0.98)");
      bg.addColorStop(1, "rgba(10,13,27,0.98)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < 100; i += 1) {
        const x = (i * 97.13) % width;
        const y = (i * 53.71) % height;
        const alpha = 0.06 + (i % 6) * 0.03;
        ctx.beginPath();
        ctx.arc(x, y, (i % 3) + 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      const sunGlow = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 90);
      sunGlow.addColorStop(0, "rgba(255,242,150,0.95)");
      sunGlow.addColorStop(0.28, "rgba(255,212,90,0.7)");
      sunGlow.addColorStop(1, "rgba(255,200,70,0)");
      ctx.fillStyle = sunGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 90, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(121, 130, 175, 0.19)";
      ctx.lineWidth = 1;

      PLANETS.forEach((planet) => {
        const orbitRadius = getOrbitRadius(planet, orbitWidth);
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, orbitRadius, orbitRadius * orbitHeightRatio, 0, 0, Math.PI * 2);
        ctx.stroke();
      });

      ctx.beginPath();
      ctx.arc(centerX, centerY, 33, 0, Math.PI * 2);
      ctx.fillStyle = "#f6e972";
      ctx.shadowColor = "rgba(255, 224, 95, 0.6)";
      ctx.shadowBlur = 32;
      ctx.fill();
      ctx.shadowBlur = 0;

      planetScreenMap = [];
      time += 0.0038 * speed;

      PLANETS.forEach((planet, index) => {
        const orbitRadius = getOrbitRadius(planet, orbitWidth);
        const orbitY = orbitRadius * orbitHeightRatio;
        const angle = time * planet.speed + index * 0.85;
        const x = centerX + Math.cos(angle) * orbitRadius;
        const y = centerY + Math.sin(angle) * orbitY;
        const selected = selectedPlanet === planet.id;
        const radius = planet.size + (selected ? 2.5 : 0);

        if (planet.id === "saturn") {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(-0.22);
          ctx.beginPath();
          ctx.ellipse(0, 0, radius + 9, radius + 3.2, 0, 0, Math.PI * 2);
          ctx.strokeStyle = "rgba(226, 196, 138, 0.8)";
          ctx.lineWidth = 2.1;
          ctx.stroke();
          ctx.restore();
        }

        ctx.beginPath();
        ctx.arc(x, y, radius + 12, 0, Math.PI * 2);
        ctx.fillStyle = selected ? "rgba(168,117,255,0.17)" : "rgba(255,255,255,0.02)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = planet.color;
        ctx.shadowColor = selected ? "rgba(168,117,255,0.7)" : `${planet.color}99`;
        ctx.shadowBlur = selected ? 20 : 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (selected || hoverRef.current === planet.id) {
          ctx.fillStyle = "rgba(230,225,255,0.82)";
          ctx.font = "12px Cairo, sans-serif";
          ctx.textAlign = "center";
          ctx.fillText(planet.name, x, y - radius - 16);
        }

        planetScreenMap.push({ id: planet.id, x, y, radius: radius + 8 });
      });

      ctx.fillStyle = "rgba(176, 184, 215, 0.38)";
      ctx.font = "12px Cairo, sans-serif";
      ctx.textAlign = "right";
      ctx.fillText("محاكاة مدارات كوكبية", width - 16, height - 18);

      animationRef.current = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    animationRef.current = requestAnimationFrame(draw);

    const findPlanet = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      return planetScreenMap.find((planet) => {
        const dx = x - planet.x;
        const dy = y - planet.y;
        return Math.sqrt(dx * dx + dy * dy) <= planet.radius;
      });
    };

    const handleMove = (event) => {
      const hit = findPlanet(event.clientX, event.clientY);
      hoverRef.current = hit?.id || null;
      canvas.style.cursor = hit ? "pointer" : "crosshair";
    };

    const handleLeave = () => {
      hoverRef.current = null;
      canvas.style.cursor = "crosshair";
    };

    const handleClick = (event) => {
      const hit = findPlanet(event.clientX, event.clientY);
      if (hit) onSelectPlanet(hit.id);
    };

    canvas.addEventListener("mousemove", handleMove);
    canvas.addEventListener("mouseleave", handleLeave);
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMove);
      canvas.removeEventListener("mouseleave", handleLeave);
      canvas.removeEventListener("click", handleClick);
    };
  }, [speed, selectedPlanet, onSelectPlanet]);

  return <canvas ref={canvasRef} className="solar-canvas" />;
}

export default function SolarSystem() {
  const [speed, setSpeed] = useState(50);
  const [selectedPlanet, setSelectedPlanet] = useState("earth");

  const activePlanet = useMemo(
    () => PLANETS.find((planet) => planet.id === selectedPlanet) || PLANETS[2],
    [selectedPlanet]
  );

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

        .solar-root {
          min-height: 100vh;
          min-width: 100vw;
          background:
            radial-gradient(circle at 80% 15%, rgba(217, 175, 55, 0.1), transparent 18%),
            radial-gradient(circle at 18% 72%, rgba(57, 103, 255, 0.08), transparent 22%),
            #05070f;
          color: #f4f0dc;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          overflow-x: hidden;
          position: relative;
        }

        .solar-root::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: radial-gradient(circle at center, black 38%, transparent 100%);
        }

        .solar-shell {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
          padding: 6.2rem 1.5rem 4rem;
        }

        .solar-header { text-align: center; margin-bottom: 1.8rem; }
        .solar-pill {
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

        .solar-title {
          margin: 0;
          font-size: clamp(2rem, 5vw, 3.3rem);
          line-height: 1.18;
          font-weight: 900;
          color: #f7f2df;
          padding-top: 0.08em;
        }

        .solar-title span { color: #d4af37; }

        .solar-subtitle {
          margin-top: 0.45rem;
          font-size: 0.82rem;
          letter-spacing: 0.12em;
          color: rgba(208, 199, 163, 0.48);
          font-family: 'Syne', sans-serif;
          text-transform: uppercase;
        }

        .solar-lead {
          max-width: 760px;
          margin: 1rem auto 0;
          font-size: 0.96rem;
          line-height: 1.9;
          color: rgba(216, 213, 196, 0.58);
        }

        .solar-visual, .solar-info, .solar-control, .solar-planet-card {
          background: rgba(8, 12, 27, 0.9);
          border: 1px solid rgba(212, 175, 55, 0.12);
          border-radius: 22px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          backdrop-filter: blur(18px);
        }

        .solar-visual { padding: 1rem; margin-bottom: 1rem; }
        .solar-canvas {
          width: 100%;
          height: 540px;
          display: block;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(16,20,40,0.98), rgba(11,14,29,0.98));
        }

        .solar-info { padding: 1rem 1.2rem; margin-bottom: 1rem; }
        .solar-info-row {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          line-height: 1.9;
          color: rgba(223, 218, 196, 0.77);
          font-size: 0.92rem;
        }

        .solar-info-row + .solar-info-row { margin-top: 0.4rem; }

        .solar-dot {
          width: 8px;
          height: 8px;
          margin-top: 0.8rem;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffe17b, #d4af37);
          box-shadow: 0 0 14px rgba(212, 175, 55, 0.7);
          flex-shrink: 0;
        }

        .solar-bottom {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 1rem;
          align-items: start;
        }

        .solar-control, .solar-planet-card { padding: 1.2rem; }

        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .section-head h3 { margin: 0; color: #f1ebd6; font-size: 1.08rem; }
        .section-head p { margin: 0.12rem 0 0; color: rgba(194, 189, 167, 0.42); font-size: 0.82rem; }

        .speed-chip {
          padding: 0.36rem 0.72rem;
          border-radius: 999px;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.18);
          color: #d4af37;
          font-size: 0.76rem;
          font-weight: 700;
          white-space: nowrap;
        }

        .slider-wrap {
          position: relative;
          height: 8px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          direction: ltr;
          margin-bottom: 0.35rem;
        }

        .slider-fill {
          position: absolute;
          inset: 0 auto 0 0;
          width: ${speed}%;
          background: linear-gradient(90deg, #9b6b14, #d4af37, #f7de7e);
          box-shadow: 0 0 22px rgba(212, 175, 55, 0.28);
          border-radius: 999px;
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
          color: rgba(188, 183, 160, 0.35);
          font-size: 0.72rem;
        }

        .planet-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
          margin-top: 1rem;
        }

        .planet-pill {
          border: 1px solid rgba(212, 175, 55, 0.16);
          background: rgba(255,255,255,0.03);
          color: rgba(235, 229, 202, 0.84);
          border-radius: 999px;
          padding: 0.45rem 0.8rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .planet-pill:hover { background: rgba(212, 175, 55, 0.08); color: #fff5cf; }
        .planet-pill.active {
          background: linear-gradient(135deg, #f2d36a, #c99a17);
          color: #181308;
          border-color: transparent;
          box-shadow: 0 10px 24px rgba(212, 175, 55, 0.22);
        }

        .solar-help {
          margin-top: 0.95rem;
          font-size: 0.83rem;
          line-height: 1.8;
          color: rgba(199, 194, 171, 0.52);
        }

        .planet-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .planet-title { margin: 0; font-size: 1.35rem; color: #f5f0dd; }
        .planet-sub {
          margin-top: 0.12rem;
          color: rgba(196, 188, 156, 0.45);
          font-size: 0.8rem;
          font-family: 'Syne', sans-serif;
          letter-spacing: 0.04em;
        }

        .planet-preview {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: ${activePlanet.color};
          box-shadow: 0 0 30px ${activePlanet.color}77;
          position: relative;
          flex-shrink: 0;
        }

        .planet-preview.saturn::after {
          content: "";
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%) rotate(-16deg);
          width: 92px;
          height: 28px;
          border-radius: 50%;
          border: 3px solid rgba(238, 209, 145, 0.7);
        }

        .planet-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-bottom: 0.9rem;
        }

        .planet-metric {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(212, 175, 55, 0.08);
          border-radius: 16px;
          padding: 0.85rem 0.9rem;
        }

        .planet-metric span {
          display: block;
          color: rgba(186, 180, 151, 0.4);
          font-size: 0.74rem;
          margin-bottom: 0.2rem;
        }

        .planet-metric strong { color: #f5e8ba; font-size: 1rem; }
        .planet-fact { color: rgba(223, 217, 192, 0.72); line-height: 1.9; font-size: 0.9rem; }

        @media (max-width: 920px) {
          .solar-bottom { grid-template-columns: 1fr; }
          .solar-canvas { height: 420px; }
        }

        @media (max-width: 640px) {
          .solar-shell { padding-inline: 1rem; padding-top: 5.2rem; }
          .solar-canvas { height: 320px; }
          .section-head, .planet-top { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="solar-root">
        <div className="solar-shell">
          <header className="solar-header">
            <div className="solar-pill">☉ محاكاة مدارية</div>
            <h1 className="solar-title"><span>النظام الشمسي</span> بدقة بصرية أعلى</h1>
            <div className="solar-subtitle">SOLAR SYSTEM SIMULATION</div>
            <p className="solar-lead">
              نموذج بصري تفاعلي لحركة الكواكب حول الشمس بأسلوب أقرب للواقع من النسخة السابقة، مع مدارات أوضح،
              أحجام منمّقة، وسرعة زمنية قابلة للتحكم دون الخروج عن لغة التصميم الداكنة للمشروع.
            </p>
          </header>

          <section className="solar-visual">
            <SolarSystemCanvas speed={Math.max(speed / 16, 0.2)} selectedPlanet={selectedPlanet} onSelectPlanet={setSelectedPlanet} />
          </section>

          <section className="solar-info">
            <div className="solar-info-row">
              <span className="solar-dot" />
              <span><strong>المدارات:</strong> تم توزيعها بصريًا باستخدام مقياس مضغوط حتى تظهر الكواكب الداخلية والخارجية في نفس المشهد بشكل مقروء.</span>
            </div>
            <div className="solar-info-row">
              <span className="solar-dot" />
              <span><strong>التفاعل:</strong> حرّك المؤشر فوق الرسم أو اضغط على كوكب لتحديده، ثم راقب تفاصيله وسرعته المدارية مقارنة ببقية الأجرام.</span>
            </div>
          </section>

          <div className="solar-bottom">
            <section className="solar-control">
              <div className="section-head">
                <div>
                  <h3>تحكم بالزمن المداري</h3>
                  <p>عدّل سرعة المحاكاة أو اختر كوكبًا محددًا للتركيز عليه.</p>
                </div>
                <div className="speed-chip">سرعة المحاكاة: {speed}%</div>
              </div>

              <div className="slider-wrap">
                <div className="slider-fill" />
                <input className="slider-input" type="range" min="0" max="100" value={speed} onChange={(event) => setSpeed(Number(event.target.value))} />
              </div>
              <div className="slider-scale">
                <span>بطيء</span>
                <span>سريع</span>
              </div>

              <div className="planet-pills">
                {PLANETS.map((planet) => (
                  <button
                    key={planet.id}
                    type="button"
                    className={`planet-pill${selectedPlanet === planet.id ? " active" : ""}`}
                    onClick={() => setSelectedPlanet(planet.id)}
                  >
                    {planet.name}
                  </button>
                ))}
              </div>

              <div className="solar-help">
                تحسين الدقة هنا بصري وتعليمي: الكواكب الخارجية ما تزال أصغر نسبيًا من الصورة الواقعية، لكن توزيع
                المسافات والحركة صار أوضح وأكثر اتزانًا داخل نفس تصميم صفحاتك.
              </div>
            </section>

            <section className="solar-planet-card">
              <div className="planet-top">
                <div>
                  <h2 className="planet-title">{activePlanet.name}</h2>
                  <div className="planet-sub">{activePlanet.en}</div>
                </div>
                <div className={`planet-preview${activePlanet.id === "saturn" ? " saturn" : ""}`} />
              </div>

              <div className="planet-grid">
                <div className="planet-metric">
                  <span>زمن الدوران حول الشمس</span>
                  <strong>{activePlanet.year}</strong>
                </div>
                <div className="planet-metric">
                  <span>طول اليوم</span>
                  <strong>{activePlanet.day}</strong>
                </div>
                <div className="planet-metric">
                  <span>المسافة المدارية</span>
                  <strong>{activePlanet.orbit} مليون كم</strong>
                </div>
                <div className="planet-metric">
                  <span>السرعة النسبية</span>
                  <strong>{activePlanet.speed.toFixed(2)}x</strong>
                </div>
              </div>

              <div className="planet-fact">{activePlanet.fact}</div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
