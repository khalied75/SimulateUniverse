import { useState, useEffect, useRef, useCallback } from "react";

/* ── Object types with gravity properties ── */
const TYPES = {
  white: {
    id: "white",
    label: "ثقب أبيض",
    icon: "⬜",
    color: "#f5e642",
    glow: "#f5e642",
    glowRgb: "245,230,66",
    bgGlow: "rgba(245,230,66,0.18)",
    border: "rgba(245,230,66,0.35)",
    headerBg: "rgba(245,230,66,0.08)",
    sliderTrack: "#f5e642",
    desc: "يقذف المادة والطاقة للخارج بعنف",
    zRange: [-1, 0],
    sizeBase: 90,
    gravity: 0.3,
    actions: [
      { icon: "💥", label: "انفجار", event: "انفجار مادي من الثقب الأبيض!" },
      { icon: "🌊", label: "موجة", event: "موجة طاقة اندفعت للخارج" },
      { icon: "✨", label: "إشعاع", event: "إشعاع كثيف انبعث من الثقب" },
      { icon: "🔀", label: "عشوائي", event: "حدث عشوائي غير متوقع!" },
    ],
  },
  neutron: {
    id: "neutron",
    label: "نجم نيوتروني",
    icon: "⚡",
    color: "#00e5d4",
    glow: "#00e5d4",
    glowRgb: "0,229,212",
    bgGlow: "rgba(0,229,212,0.15)",
    border: "rgba(0,229,212,0.32)",
    headerBg: "rgba(0,229,212,0.07)",
    sliderTrack: "#00e5d4",
    desc: "جاذبية هائلة مع نبضات راديوية",
    zRange: [0.5, 2],
    sizeBase: 78,
    gravity: 1.8,
    actions: [
      { icon: "📡", label: "نبضة", event: "نبضة راديوية صدرت من النجم!" },
      { icon: "🧲", label: "مغناطيس", event: "حقل مغناطيسي هائل نشط" },
      { icon: "💫", label: "دوران", event: "النجم يدور بسرعة قياسية" },
      { icon: "👤", label: "تأثير", event: "تأثير جاذبية على محيطه" },
    ],
  },
  black: {
    id: "black",
    label: "ثقب أسود",
    icon: "🌀",
    color: "#a855f7",
    glow: "#a855f7",
    glowRgb: "168,85,247",
    bgGlow: "rgba(168,85,247,0.15)",
    border: "rgba(168,85,247,0.32)",
    headerBg: "rgba(168,85,247,0.07)",
    sliderTrack: "#a855f7",
    desc: "تشويه الزمكان عند نقطة اللاعودة",
    zRange: [1, 3],
    sizeBase: 72,
    gravity: 3.5,
    actions: [
      { icon: "🍝", label: "امتداد", event: "تمدد كباغيتي! جسيم تمزق" },
      { icon: "🌑", label: "ابتلاع", event: "ابتلع الثقب مادة جديدة" },
      { icon: "⏱️", label: "زمن", event: "تمدد زمني شديد عند الأفق" },
      { icon: "💔", label: "تمزيق", event: "قوى المد مزقت جسم قريب" },
    ],
  },
};

/* ── Enhanced Canvas with Particle Physics ── */
function ObjectCanvas({ type, distance, pulse }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const frameRef = useRef(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const W = canvas.width = canvas.offsetWidth;
    const H = canvas.height = canvas.offsetHeight;
    const cx = W / 2, cy = H / 2;

    const t = TYPES[type];
    const proximity = 1 - distance / 100;
    const baseR = t.sizeBase + proximity * 30;

    // Click handler to add particles
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      for (let i = 0; i < 8; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 2 + Math.random() * 4;
        particlesRef.current.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          trail: [],
          color: t.color,
        });
      }
    };

    function draw() {
      frameRef.current++;
      const f = frameRef.current;
      ctx.clearRect(0, 0, W, H);

      // Draw main object based on type
      if (type === "white") {
        for (let i = 3; i >= 1; i--) {
          const r = baseR + i * 28 + Math.sin(f * 0.04 + i) * 6;
          const alpha = (0.06 - i * 0.015) * (1 + proximity * 0.5);
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(245,230,66,${alpha})`;
          ctx.fill();
        }
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR);
        grad.addColorStop(0, "#fffde0");
        grad.addColorStop(0.4, "#f5e642");
        grad.addColorStop(0.8, "#e6c200");
        grad.addColorStop(1, "rgba(230,194,0,0)");
        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        if (pulse) {
          const pr = baseR + (f % 40) * 2.5;
          ctx.beginPath();
          ctx.arc(cx, cy, pr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245,230,66,${0.5 - (f % 40) / 80})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        ctx.font = `${baseR * 0.55}px serif`;
        ctx.fillStyle = "rgba(80,60,0,0.85)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("◈", cx, cy);
      }

      if (type === "neutron") {
        for (let i = 3; i >= 1; i--) {
          const r = baseR + i * 25 + Math.sin(f * 0.05 + i) * 5;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,229,212,${0.05 * (1 + proximity * 0.6) / i})`;
          ctx.fill();
        }
        const grad2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR);
        grad2.addColorStop(0, "#e0fffd");
        grad2.addColorStop(0.35, "#00e5d4");
        grad2.addColorStop(0.75, "#009e94");
        grad2.addColorStop(1, "rgba(0,158,148,0)");
        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
        ctx.fillStyle = grad2;
        ctx.fill();
        const angle = f * 0.06;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        const beam = ctx.createLinearGradient(0, 0, W * 0.7, 0);
        beam.addColorStop(0, "rgba(0,229,212,0.55)");
        beam.addColorStop(1, "rgba(0,229,212,0)");
        ctx.fillStyle = beam;
        ctx.fillRect(0, -3, W * 0.7, 6);
        ctx.rotate(Math.PI);
        ctx.fillStyle = beam;
        ctx.fillRect(0, -3, W * 0.7, 6);
        ctx.restore();
        if (pulse) {
          const pr = baseR + (f % 35) * 3;
          ctx.beginPath();
          ctx.arc(cx, cy, pr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0,229,212,${0.6 - (f % 35) / 58})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.font = `${baseR * 0.52}px serif`;
        ctx.fillStyle = "rgba(0,60,55,0.9)";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("⚡", cx, cy);
      }

      if (type === "black") {
        const diskRx = baseR * 2.2 + proximity * 20;
        const diskRy = baseR * 0.38;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(f * 0.012);
        for (let layer = 0; layer < 3; layer++) {
          ctx.beginPath();
          ctx.ellipse(0, 0, diskRx - layer * 12, diskRy - layer * 4, 0, 0, Math.PI * 2);
          const diskGrad = ctx.createLinearGradient(-diskRx, 0, diskRx, 0);
          const alpha = (0.22 - layer * 0.06) * (1 + proximity * 0.4);
          diskGrad.addColorStop(0, `rgba(168,85,247,${alpha})`);
          diskGrad.addColorStop(0.3, `rgba(220,130,255,${alpha * 1.3})`);
          diskGrad.addColorStop(0.5, `rgba(255,200,100,${alpha * 0.8})`);
          diskGrad.addColorStop(0.7, `rgba(220,130,255,${alpha * 1.3})`);
          diskGrad.addColorStop(1, `rgba(168,85,247,${alpha})`);
          ctx.strokeStyle = diskGrad;
          ctx.lineWidth = 6 - layer * 1.5;
          ctx.stroke();
        }
        ctx.restore();

        const psR = baseR * 1.35;
        ctx.beginPath();
        ctx.arc(cx, cy, psR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168,85,247,${0.08 + Math.sin(f * 0.03) * 0.03})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
        ctx.fillStyle = "#000";
        ctx.fill();
        ctx.strokeStyle = `rgba(168,85,247,${0.6 + Math.sin(f * 0.04) * 0.2})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(f * 0.02);
        for (let arm = 0; arm < 2; arm++) {
          ctx.rotate(Math.PI);
          for (let i = 0; i < 20; i++) {
            const r = (i / 20) * baseR * 0.85;
            const a = (i / 20) * Math.PI * 3;
            const x = Math.cos(a) * r, y = Math.sin(a) * r;
            ctx.beginPath();
            ctx.arc(x, y, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(168,85,247,${0.4 - i * 0.018})`;
            ctx.fill();
          }
        }
        ctx.restore();

        if (pulse) {
          const pr = baseR * 1.5 + (f % 45) * 2.2;
          ctx.beginPath();
          ctx.arc(cx, cy, pr, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(168,85,247,${0.5 - (f % 45) / 90})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      if (proximity > 0.6) {
        const streakCount = Math.floor(proximity * 8);
        for (let i = 0; i < streakCount; i++) {
          const angle = (i / streakCount) * Math.PI * 2 + f * 0.008;
          const r1 = baseR * 1.6, r2 = baseR * 2.4;
          ctx.beginPath();
          ctx.moveTo(cx + Math.cos(angle) * r1, cy + Math.sin(angle) * r1);
          ctx.lineTo(cx + Math.cos(angle + 0.15) * r2, cy + Math.sin(angle + 0.15) * r2);
          ctx.strokeStyle = `rgba(255,255,255,${(proximity - 0.6) * 0.25})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // Update and draw particles
      const particles = particlesRef.current;
      particles.forEach((p, idx) => {
        const dx = cx - p.x;
        const dy = cy - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const gravityStr = t.gravity * (proximity + 0.5);

        if (dist > 10) {
          const fx = (dx / dist) * gravityStr;
          const fy = (dy / dist) * gravityStr;
          p.vx += fx;
          p.vy += fy;
        }

        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x += p.vx;
        p.y += p.vy;

        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 12) p.trail.shift();

        p.life -= 0.015;

        if (p.life <= 0 || dist < baseR * 0.8) {
          particles.splice(idx, 1);
        }
      });

      // Draw particle trails
      particles.forEach((p) => {
        if (p.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(p.trail[0].x, p.trail[0].y);
          for (let i = 1; i < p.trail.length; i++) {
            ctx.lineTo(p.trail[i].x, p.trail[i].y);
          }
          const rgb = p.color === "#f5e642" ? "245,230,66" : p.color === "#00e5d4" ? "0,229,212" : "168,85,247";
          ctx.strokeStyle = `rgba(${rgb},${p.life * 0.3})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        const rgb = p.color === "#f5e642" ? "245,230,66" : p.color === "#00e5d4" ? "0,229,212" : "168,85,247";
        ctx.fillStyle = `rgba(${rgb},${p.life})`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255,255,255,${p.life * 0.5})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    canvas.addEventListener("click", handleClick);

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener("click", handleClick);
    };
  }, [type, distance, pulse]);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", display: "block", cursor: "crosshair" }}
      title="انقر لرمي الجزيئات"
    />
  );
}

/* ── Object Card ── */
function ObjectCard({ typeKey, onLog }) {
  const t = TYPES[typeKey];
  const [distance, setDistance] = useState(50);
  const [pulse, setPulse] = useState(false);

  const proximity = 1 - distance / 100;
  const scale = (0.85 + proximity * 0.5).toFixed(2);
  const zShift = (t.zRange[0] + proximity * (t.zRange[1] - t.zRange[0])).toFixed(2);
  const distLabel = distance < 30 ? "قريب جداً" : distance < 60 ? "متوسط" : "بعيد";

  const handleAction = (action) => {
    setPulse(true);
    setTimeout(() => setPulse(false), 1200);
    onLog(`${t.icon} ${action.event}`);
  };

  return (
    <div className="obj-card" style={{ "--accent": t.color, "--glow": t.bgGlow, "--bd": t.border }}>
      <div className="obj-header" style={{ background: t.headerBg }}>
        <span className="obj-title">{t.label}</span>
        <span className="obj-icon-badge">{t.icon}</span>
      </div>

      <div className="obj-slider-row">
        <span className="slider-label">قريب</span>
        <div className="slider-wrap">
          <div
            className="slider-fill"
            style={{ width: `${distance}%`, background: `linear-gradient(90deg, ${t.color}99, ${t.color})` }}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={distance}
            onChange={(e) => setDistance(+e.target.value)}
            className="slider-input"
            style={{ "--thumb-color": t.color }}
          />
        </div>
        <span className="slider-label">بعيد</span>
      </div>

      <div className="obj-stats">
        <div className="obj-stat">
          <span className="stat-key">{distLabel}</span>
          <span className="stat-val" style={{ color: t.color }}>{scale}x</span>
          <span className="stat-key" style={{ color: "rgba(200,200,220,0.4)" }}>z={zShift}</span>
        </div>
        <div className="stat-bar-wrap">
          <div className="stat-bar" style={{ width: `${distance}%`, background: t.color }} />
          <div className="stat-bar stat-bar-2" style={{ width: `${100 - distance}%`, background: `linear-gradient(90deg,${t.color}40,${t.color}20)` }} />
        </div>
      </div>

      <div className="obj-canvas-wrap">
        <ObjectCanvas type={typeKey} distance={distance} pulse={pulse} />
        <div style={{
          position: "absolute",
          bottom: "8px",
          right: "8px",
          fontSize: "0.65rem",
          color: "rgba(180,185,210,0.3)",
          fontStyle: "italic",
          pointerEvents: "none"
        }}>
          انقر للرمي →
        </div>
      </div>

      <div className="obj-actions">
        {t.actions.map((a) => (
          <button
            key={a.label}
            className="action-btn"
            onClick={() => handleAction(a)}
            title={a.label}
            style={{ "--btn-color": t.color, "--btn-glow": t.bgGlow }}
          >
            <span className="action-icon">{a.icon}</span>
            <span className="action-label">{a.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

/* ── Main Page ── */
export default function BlackHole() {
  const [logs, setLogs] = useState([
    { id: 0, text: "🌌 مرحباً! اسحب الأشياء بإصبعك أو استخدم المنزلقات", time: "" },
  ]);

  const addLog = useCallback((text) => {
    const now = new Date();
    const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")} م`;
    setLogs((prev) => [{ id: Date.now(), text, time }, ...prev].slice(0, 20));
  }, []);

  const clearLogs = () => setLogs([]);

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
          margin: 0;
          padding: 0;
          border: none !important;
          outline: none !important;
          width: 100%;
          min-height: 100vh;
          display: block;
          background: #05070f !important;
        }

        .bh-root {
          min-height: 100vh;
          min-width: 100vw;
          background: #05070f;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          padding: 0;
          margin: 0;
          position: relative;
          overflow-x: hidden;
          width: 100%;
        }

        .bh-bg-glow {
          position: fixed; border-radius: 50%;
          filter: blur(90px); pointer-events: none; z-index: 0;
        }
        .bh-bg-1 {
          width: 600px; height: 600px; top: -150px; right: -120px;
          background: radial-gradient(circle, rgba(212,175,55,.06) 0%, transparent 65%);
        }
        .bh-bg-2 {
          width: 500px; height: 500px; bottom: 0; left: -80px;
          background: radial-gradient(circle, rgba(168,85,247,.07) 0%, transparent 65%);
        }
        .bh-bg-3 {
          width: 400px; height: 400px; top: 40%; left: 40%;
          background: radial-gradient(circle, rgba(0,229,212,.05) 0%, transparent 65%);
        }
        .bh-grid {
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(212,175,55,.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,.02) 1px, transparent 1px);
          background-size: 68px 68px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, black 15%, transparent 100%);
        }

        .bh-content { 
          position: relative; 
          z-index: 1; 
          max-width: 1340px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .bh-page-header {
          text-align: center;
          margin-bottom: 2.5rem;
          padding-top: 1rem;
          margin: 0;
        }
        .bh-page-eyebrow {
          display: inline-flex; align-items: center; gap: .45rem;
          background: rgba(212,175,55,.07); border: 1px solid rgba(212,175,55,.18);
          padding: .28rem .85rem; border-radius: 50px;
          font-size: .68rem; font-weight: 700; color: #d4af37;
          letter-spacing: .14em; text-transform: uppercase; margin-bottom: 1rem;
        }
        .bh-page-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 800; color: #e8eaf5;
          letter-spacing: -.02em; line-height: 1.1;
          margin-bottom: .55rem;
        }
        .bh-page-title span { color: #d4af37; }
        .bh-page-sub {
          font-size: .85rem; color: rgba(180,185,210,.45);
          font-weight: 300; letter-spacing: .03em;
        }

        .bh-grid-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
          margin-bottom: 1.5rem;
        }

        .obj-card {
          background: rgba(10,13,28,.82);
          border: 1px solid var(--bd);
          border-radius: 20px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          gap: 0;
          backdrop-filter: blur(12px);
          box-shadow: 0 0 30px rgba(0,0,0,.4);
          transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s;
        }
        .obj-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,.5), 0 0 0 1px var(--bd), 0 0 40px var(--glow);
        }

        .obj-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: .85rem 1.1rem;
        }
        .obj-title {
          font-size: 1.05rem; font-weight: 700;
          color: var(--accent);
          letter-spacing: -.01em;
        }
        .obj-icon-badge {
          font-size: 1.2rem;
          filter: drop-shadow(0 0 6px var(--accent));
        }

        .obj-slider-row {
          display: flex; align-items: center; gap: .6rem;
          padding: .6rem 1.1rem .4rem;
        }
        .slider-label {
          font-size: .65rem; font-weight: 700;
          color: rgba(180,185,210,.4);
          letter-spacing: .06em; white-space: nowrap;
        }
        .slider-wrap {
          flex: 1; position: relative; height: 6px;
          background: rgba(100,100,120,.15); border-radius: 3px;
        }
        .slider-fill {
          position: absolute; top: 0; right: 0;
          height: 100%; border-radius: 3px;
          pointer-events: none; transition: width .05s;
        }
        .slider-input {
          position: absolute; inset: -5px 0;
          width: 100%; opacity: 0; cursor: pointer;
          height: 16px;
        }

        .obj-stats {
          padding: .4rem 1.1rem .6rem;
          display: flex; flex-direction: column; gap: .35rem;
        }
        .obj-stat {
          display: flex; align-items: center;
          justify-content: space-between;
          font-size: .72rem; font-weight: 600;
          color: rgba(180,185,210,.55);
        }
        .stat-val {
          font-size: .85rem; font-weight: 700;
          font-family: 'Syne', monospace;
        }
        .stat-bar-wrap {
          display: flex; height: 3px; border-radius: 2px; overflow: hidden; gap: 1px;
        }
        .stat-bar { height: 100%; border-radius: 2px; transition: width .1s; }

        .obj-canvas-wrap {
          flex: 1; min-height: 220px;
          margin: 0 .8rem .8rem;
          border-radius: 14px;
          overflow: hidden;
          background: rgba(0,0,0,.5);
          position: relative;
        }

        .obj-actions {
          display: flex; justify-content: center;
          gap: .55rem;
          padding: 0 .8rem 1rem;
        }
        .action-btn {
          display: flex; flex-direction: column;
          align-items: center; gap: .2rem;
          background: rgba(255,255,255,.05);
          border: none;
          border-radius: 12px;
          padding: .5rem .65rem;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          transition: all .22s ease;
          flex: 1;
        }
        .action-btn:hover {
          background: var(--btn-glow);
          border-color: var(--btn-color);
          transform: translateY(-2px);
          box-shadow: 0 4px 16px var(--btn-glow);
        }
        .action-btn:active { transform: translateY(0) scale(.96); }
        .action-icon { font-size: 1.1rem; line-height: 1; }
        .action-label {
          font-size: .58rem; font-weight: 700;
          color: rgba(180,185,210,.55);
          letter-spacing: .04em;
          white-space: nowrap;
        }
        .action-btn:hover .action-label { color: var(--btn-color); }

        .bh-log {
          background: rgba(10,13,28,.85);
          border: 1px solid rgba(212,175,55,.13);
          border-radius: 18px;
          overflow: hidden;
          backdrop-filter: blur(12px);
        }
        .bh-log-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: .85rem 1.2rem;
          background: rgba(212,175,55,.05);
        }
        .bh-log-title {
          font-size: .88rem; font-weight: 700; color: #d4af37;
          display: flex; align-items: center; gap: .45rem;
        }
        .bh-log-clear {
          background: transparent;
          border: 1px solid rgba(212,175,55,.2);
          border-radius: 7px;
          color: rgba(180,185,210,.5);
          font-family: 'Cairo', sans-serif;
          font-size: .72rem; font-weight: 600;
          padding: .28rem .75rem;
          cursor: pointer;
          transition: all .2s;
        }
        .bh-log-clear:hover { border-color: rgba(239,68,68,.4); color: #f87171; }
        .bh-log-body {
          padding: .8rem 1.2rem;
          max-height: 200px;
          overflow-y: auto;
          display: flex; flex-direction: column; gap: .4rem;
        }
        .bh-log-body::-webkit-scrollbar { width: 4px; }
        .bh-log-body::-webkit-scrollbar-thumb { background: rgba(212,175,55,.2); border-radius: 2px; }
        .log-entry {
          display: flex; align-items: baseline;
          justify-content: space-between; gap: .75rem;
          padding: .38rem .6rem;
          border-radius: 8px;
          background: transparent;
          font-size: .76rem;
          animation: log-in .25s cubic-bezier(.16,1,.3,1);
        }
        @keyframes log-in {
          from { opacity:0; transform: translateX(8px); }
          to   { opacity:1; transform: translateX(0); }
        }
        .log-text { color: rgba(200,205,225,.75); font-weight: 400; flex: 1; }
        .log-time {
          font-size: .65rem; color: rgba(180,185,210,.3);
          font-weight: 300; white-space: nowrap; font-family: monospace;
        }
        .log-entry:first-child { background: rgba(212,175,55,.05); }
        .log-entry:first-child .log-text { color: rgba(212,175,55,.85); }

        @media (max-width: 900px) {
          .bh-grid-cards { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .bh-root { padding: 1.5rem .9rem 3rem; }
          .obj-actions { gap: .35rem; }
          .action-btn { padding: .45rem .45rem; }
          .action-label { display: none; }
        }
      `}</style>

      <div className="bh-root">
        <div className="bh-bg-glow bh-bg-1" />
        <div className="bh-bg-glow bh-bg-2" />
        <div className="bh-bg-glow bh-bg-3" />
        <div className="bh-grid" />

        <div className="bh-content">
          <div className="bh-page-header">
            <div className="bh-page-eyebrow">◉ محاكاة تفاعلية</div>
            <h1 className="bh-page-title">
              الثقوب <span>السوداء</span>
            </h1>
            <p className="bh-page-sub">
              اسحب بإصبعك · تمدد زمن · ازاحة · أشياء عشوائية
            </p>
          </div>

          <div className="bh-grid-cards">
            <ObjectCard typeKey="white" onLog={addLog} />
            <ObjectCard typeKey="neutron" onLog={addLog} />
            <ObjectCard typeKey="black" onLog={addLog} />
          </div>

          <div className="bh-log">
            <div className="bh-log-header">
              <span className="bh-log-title">📋 سجل الأحداث</span>
              <button className="bh-log-clear" onClick={clearLogs}>مسح</button>
            </div>
            <div className="bh-log-body">
              {logs.length === 0 && (
                <span style={{ fontSize: ".76rem", color: "rgba(180,185,210,.3)", padding: ".3rem .6rem" }}>
                  لا توجد أحداث بعد...
                </span>
              )}
              {logs.map((l) => (
                <div key={l.id} className="log-entry">
                  <span className="log-text">{l.text}</span>
                  {l.time && <span className="log-time">{l.time}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
