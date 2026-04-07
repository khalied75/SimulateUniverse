import { useEffect, useRef, useState } from "react";

const BLACK_HOLE = {
  mass: "10 ملايين كتلة شمسية",
  radius: "30 مليون كم",
  type: "فائق الضخامة",
};

const TOKENS = [
  { id: "star", label: "نجم", icon: "✦", color: "#ffd166", mass: 1.2, size: 8 },
  { id: "planet", label: "كوكب", icon: "◉", color: "#5eead4", mass: 1.6, size: 10 },
  { id: "ship", label: "مركبة", icon: "▲", color: "#f9a8d4", mass: 0.9, size: 7 },
  { id: "matter", label: "مادة", icon: "◆", color: "#c4b5fd", mass: 1.1, size: 6 },
];

const INITIAL_LOGS = [
  { id: 1, text: "اسحب جسماً إلى ساحة المحاكاة ثم أفلته قرب الثقب الأسود.", time: "" },
  { id: 2, text: "كلما اقترب الجسم من أفق الحدث يبدأ بالتلاشي حتى يختفي تماماً.", time: "" },
];

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const formatTime = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

function BlackHoleSimulator({ onLog, onMetricsChange }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const animationRef = useRef(null);
  const bodiesRef = useRef([]);
  const dragRef = useRef(null);
  const starsRef = useRef([]);
  const [dragState, setDragState] = useState(null);
  const [isPointerInside, setIsPointerInside] = useState(false);

  useEffect(() => {
    starsRef.current = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 1.8 + 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      speed: Math.random() * 0.004 + 0.001,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = sceneRef.current;
    if (!canvas || !scene) return undefined;

    const ctx = canvas.getContext("2d");
    const metrics = { consumed: 0, distortion: 68, horizon: 128, energy: 0 };

    const resize = () => {
      const rect = scene.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const spawnBody = (token, point, pointer) => {
      const rect = scene.getBoundingClientRect();
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const dx = cx - point.x;
      const dy = cy - point.y;
      const distance = Math.max(1, Math.hypot(dx, dy));

      bodiesRef.current.push({
        id: `${token.id}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        label: token.label,
        icon: token.icon,
        color: token.color,
        x: point.x,
        y: point.y,
        vx: dx / distance,
        vy: dy / distance,
        speed: clamp(distance / 150, 1.8, 4.2),
        size: token.size,
        mass: token.mass,
        opacity: 1,
        trail: [],
        swirl: pointer?.x > cx ? 1 : -1,
        consumed: false,
      });
    };

    const animate = () => {
      const rect = scene.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;
      const frame = performance.now() * 0.001;
      const eventHorizon = 72 + metrics.consumed * 1.8;
      const photonRing = eventHorizon + 36;
      const accretionRx = 170 + Math.sin(frame * 0.7) * 10;
      const accretionRy = 54 + Math.cos(frame * 0.8) * 6;

      metrics.horizon = Math.round(eventHorizon * 2);
      metrics.distortion = clamp(Math.round(68 + metrics.consumed * 4.5), 68, 98);
      metrics.energy = clamp(Math.round(bodiesRef.current.length * 18 + metrics.consumed * 6), 8, 99);
      onMetricsChange({ ...metrics });

      ctx.clearRect(0, 0, width, height);

      const background = ctx.createLinearGradient(0, 0, width, height);
      background.addColorStop(0, "#02040b");
      background.addColorStop(0.55, "#040814");
      background.addColorStop(1, "#090d1b");
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        const sx = star.x * width;
        const sy = ((star.y + frame * star.speed) % 1) * height;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      const vignette = ctx.createRadialGradient(cx, cy, 50, cx, cy, Math.max(width, height) * 0.65);
      vignette.addColorStop(0, "rgba(112, 30, 255, 0.12)");
      vignette.addColorStop(0.4, "rgba(255, 122, 24, 0.08)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.78)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(frame * 0.22);
      for (let layer = 0; layer < 4; layer += 1) {
        const rx = accretionRx - layer * 14;
        const ry = accretionRy - layer * 4;
        const ringGradient = ctx.createLinearGradient(-rx, 0, rx, 0);
        const alpha = 0.35 - layer * 0.06;
        ringGradient.addColorStop(0, `rgba(255, 94, 58, ${alpha})`);
        ringGradient.addColorStop(0.35, `rgba(255, 174, 76, ${alpha + 0.08})`);
        ringGradient.addColorStop(0.5, `rgba(255, 235, 160, ${alpha + 0.05})`);
        ringGradient.addColorStop(0.7, `rgba(255, 130, 80, ${alpha + 0.02})`);
        ringGradient.addColorStop(1, `rgba(117, 67, 255, ${alpha})`);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = ringGradient;
        ctx.lineWidth = 14 - layer * 2.2;
        ctx.lineCap = "round";
        ctx.stroke();
      }
      ctx.restore();

      const halo = ctx.createRadialGradient(cx, cy, eventHorizon * 0.6, cx, cy, photonRing + 40);
      halo.addColorStop(0, "rgba(88, 28, 135, 0.18)");
      halo.addColorStop(0.55, "rgba(168, 85, 247, 0.13)");
      halo.addColorStop(1, "rgba(168, 85, 247, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, photonRing + 40, 0, Math.PI * 2);
      ctx.fillStyle = halo;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(cx, cy, photonRing, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(238, 179, 255, 0.34)";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 9]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.arc(cx, cy, eventHorizon, 0, Math.PI * 2);
      ctx.fillStyle = "#000";
      ctx.shadowColor = "rgba(168,85,247,0.35)";
      ctx.shadowBlur = 28;
      ctx.fill();
      ctx.shadowBlur = 0;
      ctx.strokeStyle = "rgba(200, 132, 252, 0.45)";
      ctx.lineWidth = 2.5;
      ctx.stroke();

      for (let i = 0; i < 34; i += 1) {
        const angle = frame * 1.4 + i * 0.23;
        const radius = eventHorizon * 0.34 + i * 1.15;
        const px = cx + Math.cos(angle) * radius;
        const py = cy + Math.sin(angle) * radius * 0.78;
        ctx.beginPath();
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(157, 92, 255, ${0.28 - i * 0.006})`;
        ctx.fill();
      }

      const bodies = bodiesRef.current;
      for (let i = bodies.length - 1; i >= 0; i -= 1) {
        const body = bodies[i];
        const dx = cx - body.x;
        const dy = cy - body.y;
        const dist = Math.max(0.001, Math.hypot(dx, dy));
        const pull = clamp((980 * body.mass) / (dist * dist), 0.04, 0.95);
        const tangentX = (-dy / dist) * body.swirl * 0.08;
        const tangentY = (dx / dist) * body.swirl * 0.08;

        body.vx += (dx / dist) * pull + tangentX;
        body.vy += (dy / dist) * pull + tangentY;
        body.vx *= 0.992;
        body.vy *= 0.992;
        body.x += body.vx * body.speed;
        body.y += body.vy * body.speed;

        if (dist < photonRing) {
          body.opacity = clamp((dist - eventHorizon) / (photonRing - eventHorizon), 0, 1);
          body.size *= 0.995;
        }

        body.trail.push({ x: body.x, y: body.y, opacity: body.opacity });
        if (body.trail.length > 28) body.trail.shift();

        if (body.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(body.trail[0].x, body.trail[0].y);
          for (let j = 1; j < body.trail.length; j += 1) {
            ctx.lineTo(body.trail[j].x, body.trail[j].y);
          }
          ctx.strokeStyle = `${body.color}${Math.round(clamp(body.opacity * 0.45, 0.08, 0.45) * 255)
            .toString(16)
            .padStart(2, "0")}`;
          ctx.lineWidth = 1.8;
          ctx.stroke();
        }

        if (dist <= eventHorizon + 2 || body.opacity <= 0.02 || body.size <= 1.4) {
          bodies.splice(i, 1);
          metrics.consumed += 1;
          onLog(`اختفى ${body.label} داخل أفق الحدث.`);
          continue;
        }

        ctx.beginPath();
        ctx.arc(body.x, body.y, Math.max(body.size, 2), 0, Math.PI * 2);
        ctx.fillStyle = `${body.color}${Math.round(clamp(body.opacity, 0.2, 1) * 255)
          .toString(16)
          .padStart(2, "0")}`;
        ctx.fill();
        ctx.strokeStyle = `rgba(255,255,255,${body.opacity * 0.55})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(244, 208, 255, 0.92)";
      ctx.font = "600 12px Cairo, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("أفق الحدث", cx, cy - eventHorizon - 14);

      ctx.fillStyle = "rgba(255,255,255,0.72)";
      ctx.font = "500 12px Cairo, sans-serif";
      ctx.fillText("منطقة الإسقاط", cx, height - 22);

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handlePointerMove = (event) => {
      if (!dragRef.current) return;
      setDragState({
        token: dragRef.current,
        x: event.clientX,
        y: event.clientY,
      });

      const rect = scene.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      setIsPointerInside(inside);
    };

    const handlePointerUp = (event) => {
      if (!dragRef.current) return;
      const token = dragRef.current;
      const rect = scene.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

      if (inside) {
        const point = {
          x: clamp(event.clientX - rect.left, 18, rect.width - 18),
          y: clamp(event.clientY - rect.top, 18, rect.height - 18),
        };
        spawnBody(token, point, { x: event.clientX - rect.left, y: event.clientY - rect.top });
        onLog(`تم إسقاط ${token.label} في مجال الجاذبية.`);
      }

      dragRef.current = null;
      setDragState(null);
      setIsPointerInside(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      cancelAnimationFrame(animationRef.current);
    };
  }, [onLog, onMetricsChange]);

  const beginDrag = (token, event) => {
    dragRef.current = token;
    setDragState({ token, x: event.clientX, y: event.clientY });
  };

  return (
    <div className="bh-sim-card">
      <div className="bh-sim-head">
        <div>
          <span className="bh-section-tag">المحاكي التفاعلي</span>
          <h2 className="bh-sim-title">اسحب الأجسام نحو الثقب الأسود</h2>
        </div>
        <p className="bh-sim-copy">
          ارْمِ جسماً داخل المجال، وشاهد كيف يلتف حول القرص ثم يتلاشى بالكامل عند عبور أفق الحدث.
        </p>
      </div>

      <div ref={sceneRef} className={`bh-scene ${isPointerInside ? "is-armed" : ""}`}>
        <canvas ref={canvasRef} className="bh-canvas" />

        <div className="bh-scene-overlay bh-scene-top">
          <span>عدسة جاذبية</span>
          <span>قرص تراكم</span>
          <span>تفكك بصري</span>
        </div>

        <div className="bh-center-label">
          <span>نقطة اللاعودة</span>
          <strong>Black Hole Core</strong>
        </div>

        <div className="bh-drop-hint">أفلت الجسم هنا ليبدأ الانجذاب</div>

        <div className="bh-launcher">
          {TOKENS.map((token) => (
            <button
              key={token.id}
              type="button"
              className="bh-token"
              onPointerDown={(event) => beginDrag(token, event)}
              style={{ "--token": token.color }}
            >
              <span className="bh-token-icon">{token.icon}</span>
              <span className="bh-token-label">{token.label}</span>
            </button>
          ))}
        </div>
      </div>

      {dragState && (
        <div
          className="bh-drag-ghost"
          style={{ left: dragState.x, top: dragState.y, "--token": dragState.token.color }}
        >
          <span>{dragState.token.icon}</span>
          <small>{dragState.token.label}</small>
        </div>
      )}
    </div>
  );
}

export default function BlackHole() {
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [metrics, setMetrics] = useState({ consumed: 0, distortion: 68, horizon: 128, energy: 8 });

  const pushLog = (text) => {
    setLogs((current) => [{ id: Date.now() + Math.random(), text, time: formatTime() }, ...current].slice(0, 8));
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800;900&family=Syne:wght@700;800&display=swap');

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
          width: 100%;
          min-height: 100vh;
          background: #05070f !important;
        }

        .bh-root {
          min-height: 100vh;
          min-width: 100%;
          background:
            radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 26%),
            radial-gradient(circle at bottom left, rgba(139,92,246,0.12), transparent 28%),
            linear-gradient(180deg, #04060d 0%, #070b14 45%, #05070f 100%);
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          position: relative;
          overflow-x: hidden;
        }

        .bh-bg-glow {
          position: fixed;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        .bh-bg-1 {
          width: 560px;
          height: 560px;
          top: -180px;
          right: -80px;
          background: radial-gradient(circle, rgba(212,175,55,0.09) 0%, transparent 70%);
        }

        .bh-bg-2 {
          width: 520px;
          height: 520px;
          left: -140px;
          bottom: -80px;
          background: radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%);
        }

        .bh-grid {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(212,175,55,0.024) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.024) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(circle at center, black 22%, transparent 100%);
        }

        .bh-content {
          position: relative;
          z-index: 1;
          max-width: 1340px;
          margin: 0 auto;
          padding: 5.8rem 1.5rem 4rem;
        }

        .bh-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(280px, 0.85fr);
          gap: 1.25rem;
          align-items: start;
        }

        .bh-section-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.35rem 0.8rem;
          border-radius: 999px;
          border: 1px solid rgba(212,175,55,0.2);
          background: rgba(212,175,55,0.08);
          color: #d4af37;
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.12em;
        }

        .bh-page-title {
          margin: 1rem 0 0.75rem;
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 5vw, 4.2rem);
          line-height: 0.95;
          color: #f4f7ff;
        }

        .bh-page-title span {
          color: #d4af37;
        }

        .bh-page-copy {
          margin: 0;
          max-width: 640px;
          color: rgba(218,223,242,0.72);
          font-size: 1rem;
          line-height: 1.95;
        }

        .bh-side-panel,
        .bh-sim-card,
        .bh-metric-card,
        .bh-log,
        .bh-info-card {
          background: rgba(10,13,28,0.78);
          border: 1px solid rgba(212,175,55,0.14);
          border-radius: 24px;
          backdrop-filter: blur(16px);
          box-shadow: 0 22px 60px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.03);
        }

        .bh-side-panel {
          padding: 1.15rem;
          display: grid;
          gap: 0.9rem;
        }

        .bh-side-title {
          margin: 0;
          color: #f7f5ff;
          font-size: 1.05rem;
          font-weight: 800;
        }

        .bh-side-copy {
          margin: 0;
          color: rgba(205,211,232,0.68);
          font-size: 0.9rem;
          line-height: 1.85;
        }

        .bh-mini-stat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          padding: 0.8rem 0.95rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .bh-mini-stat strong {
          color: #f8fafc;
          font-size: 1rem;
        }

        .bh-mini-stat span {
          color: rgba(205,211,232,0.6);
          font-size: 0.8rem;
        }

        .bh-sim-card {
          margin-top: 1.25rem;
          padding: 1rem;
        }

        .bh-sim-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .bh-sim-title {
          margin: 0.55rem 0 0;
          color: #f8fafc;
          font-size: 1.45rem;
          font-weight: 800;
        }

        .bh-sim-copy {
          margin: 0;
          max-width: 420px;
          color: rgba(205,211,232,0.64);
          line-height: 1.8;
          font-size: 0.9rem;
        }

        .bh-scene {
          position: relative;
          min-height: 560px;
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          background: #03050c;
          isolation: isolate;
        }

        .bh-scene::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 120px;
          background: linear-gradient(180deg, rgba(2,4,11,0) 0%, rgba(2,4,11,0.82) 55%, rgba(2,4,11,0.96) 100%);
          z-index: 1;
          pointer-events: none;
        }

        .bh-scene.is-armed {
          box-shadow: inset 0 0 0 1px rgba(255,194,102,0.3), 0 0 35px rgba(168,85,247,0.16);
        }

        .bh-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: block;
        }

        .bh-scene-overlay {
          position: absolute;
          left: 1rem;
          right: 1rem;
          z-index: 2;
          display: flex;
          gap: 0.55rem;
          pointer-events: none;
        }

        .bh-scene-top {
          top: 1rem;
          justify-content: flex-start;
          flex-wrap: wrap;
        }

        .bh-scene-top span {
          padding: 0.32rem 0.68rem;
          border-radius: 999px;
          background: rgba(8,10,22,0.56);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(236,239,251,0.72);
          font-size: 0.72rem;
        }

        .bh-center-label {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, calc(-50% + 112px));
          z-index: 2;
          text-align: center;
          pointer-events: none;
        }

        .bh-center-label span {
          display: block;
          color: rgba(236,239,251,0.75);
          font-size: 0.82rem;
        }

        .bh-center-label strong {
          color: #d4af37;
          font-family: 'Syne', sans-serif;
          font-size: 0.98rem;
          letter-spacing: 0.08em;
        }

        .bh-drop-hint {
          position: absolute;
          left: 50%;
          top: 1.4rem;
          transform: translateX(-50%);
          z-index: 2;
          padding: 0.45rem 0.85rem;
          border-radius: 999px;
          background: rgba(5,7,18,0.72);
          border: 1px solid rgba(212,175,55,0.18);
          color: rgba(244,246,255,0.82);
          font-size: 0.75rem;
          pointer-events: none;
        }

        .bh-launcher {
          position: absolute;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          z-index: 3;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .bh-token {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.55rem;
          min-height: 56px;
          border-radius: 18px;
          border: 1px solid color-mix(in srgb, var(--token) 38%, rgba(255,255,255,0.1));
          background: linear-gradient(180deg, rgba(12,14,30,0.88), rgba(8,10,20,0.95));
          color: #f8fafc;
          cursor: grab;
          font-family: 'Cairo', sans-serif;
          transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
        }

        .bh-token:hover {
          transform: translateY(-2px);
          border-color: var(--token);
          box-shadow: 0 10px 25px color-mix(in srgb, var(--token) 18%, transparent);
        }

        .bh-token:active {
          cursor: grabbing;
          transform: scale(0.98);
        }

        .bh-token-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: color-mix(in srgb, var(--token) 18%, rgba(255,255,255,0.02));
          color: var(--token);
          font-size: 1rem;
          box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--token) 25%, transparent);
        }

        .bh-token-label {
          font-size: 0.9rem;
          font-weight: 700;
        }

        .bh-drag-ghost {
          position: fixed;
          z-index: 100;
          transform: translate(-50%, -50%);
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 0.8rem;
          border-radius: 999px;
          border: 1px solid color-mix(in srgb, var(--token) 45%, rgba(255,255,255,0.08));
          background: rgba(6,8,18,0.92);
          color: #fff;
          pointer-events: none;
          box-shadow: 0 18px 40px rgba(0,0,0,0.35);
        }

        .bh-drag-ghost span {
          color: var(--token);
        }

        .bh-drag-ghost small {
          font-size: 0.78rem;
          font-weight: 700;
        }

        .bh-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1.25rem;
        }

        .bh-metric-card {
          padding: 1rem 1.1rem;
        }

        .bh-metric-card span {
          display: block;
          color: rgba(205,211,232,0.58);
          font-size: 0.78rem;
          margin-bottom: 0.5rem;
        }

        .bh-metric-card strong {
          display: block;
          color: #d4af37;
          font-size: 1.45rem;
          font-family: 'Syne', sans-serif;
          margin-bottom: 0.45rem;
        }

        .bh-metric-card p {
          margin: 0;
          color: rgba(236,239,251,0.68);
          font-size: 0.84rem;
          line-height: 1.8;
        }

        .bh-info-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }

        .bh-info-card {
          padding: 1rem 1.1rem;
        }

        .bh-info-card span {
          display: block;
          color: #d4af37;
          font-size: 0.9rem;
          font-weight: 800;
          margin-bottom: 0.35rem;
        }

        .bh-info-card strong {
          display: block;
          color: #f8fafc;
          font-size: 1.08rem;
          margin-bottom: 0.2rem;
        }

        .bh-info-card p {
          margin: 0;
          color: rgba(205,211,232,0.6);
          font-size: 0.82rem;
        }

        .bh-log {
          margin-top: 1.25rem;
          overflow: hidden;
        }

        .bh-log-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.95rem 1.1rem;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          background: rgba(212,175,55,0.04);
        }

        .bh-log-head h3 {
          margin: 0;
          color: #f8fafc;
          font-size: 1rem;
        }

        .bh-log-head span {
          color: rgba(205,211,232,0.6);
          font-size: 0.8rem;
        }

        .bh-log-body {
          display: grid;
          gap: 0.7rem;
          padding: 1rem 1.1rem 1.15rem;
        }

        .bh-log-entry {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 1rem;
          padding: 0.8rem 0.9rem;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .bh-log-entry p {
          margin: 0;
          color: rgba(241,245,255,0.78);
          font-size: 0.88rem;
          line-height: 1.8;
        }

        .bh-log-entry time {
          color: rgba(205,211,232,0.4);
          font-size: 0.75rem;
          white-space: nowrap;
          margin-top: 0.1rem;
        }

        @media (max-width: 1100px) {
          .bh-hero {
            grid-template-columns: 1fr;
          }

          .bh-sim-head {
            flex-direction: column;
          }
        }

        @media (max-width: 820px) {
          .bh-content {
            padding-top: 5.2rem;
          }

          .bh-scene {
            min-height: 500px;
          }

          .bh-launcher,
          .bh-metrics,
          .bh-info-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 560px) {
          .bh-content {
            padding: 5rem 1rem 3rem;
          }

          .bh-page-title {
            font-size: 2.15rem;
          }

          .bh-scene {
            min-height: 460px;
          }

          .bh-drop-hint {
            width: calc(100% - 2.4rem);
            text-align: center;
          }

          .bh-launcher,
          .bh-metrics,
          .bh-info-grid {
            grid-template-columns: 1fr;
          }

          .bh-center-label {
            transform: translate(-50%, calc(-50% + 102px));
          }

          .bh-log-entry {
            flex-direction: column;
          }
        }
      `}</style>

      <div className="bh-root">
        <div className="bh-bg-glow bh-bg-1" />
        <div className="bh-bg-glow bh-bg-2" />
        <div className="bh-grid" />

        <div className="bh-content">
          <section className="bh-hero">
            <div>
              <span className="bh-section-tag">◉ محاكاة تفاعلية</span>
              <h1 className="bh-page-title">
                الثقوب <span>السوداء</span>
              </h1>
              <p className="bh-page-copy">
                تم تحويل الصفحة إلى مشهد واحد أقرب للصورة المرجعية لكن بشكل أغنى وأكثر حيوية: قرص تراكم مضيء،
                عدسة جاذبية، وسلوك ابتلاع واضح يجعل الجسم يختفي تدريجياً عند عبور أفق الحدث.
              </p>
            </div>

            <aside className="bh-side-panel">
              <h2 className="bh-side-title">كيف تستخدم المحاكي؟</h2>
              <p className="bh-side-copy">
                اختر جسماً من الأسفل، اسحبه داخل ساحة العرض، ثم أفلته قرب الثقب الأسود. سيبدأ بالدوران والانجذاب
                حتى يختفي بالكامل داخل الأفق.
              </p>
              <div className="bh-mini-stat">
                <div>
                  <strong>{metrics.consumed}</strong>
                  <span>أجسام ابتُلعت</span>
                </div>
                <div>
                  <strong>{metrics.horizon}px</strong>
                  <span>قطر الأفق الحالي</span>
                </div>
              </div>
              <div className="bh-mini-stat">
                <div>
                  <strong>{metrics.distortion}%</strong>
                  <span>تشوه الضوء</span>
                </div>
                <div>
                  <strong>{metrics.energy}%</strong>
                  <span>نشاط القرص</span>
                </div>
              </div>
            </aside>
          </section>

          <BlackHoleSimulator onLog={pushLog} onMetricsChange={setMetrics} />

          <section className="bh-metrics">
            <article className="bh-metric-card">
              <span>تشوه الزمكان</span>
              <strong>{metrics.distortion}%</strong>
              <p>يزداد بصرياً كلما عبرت أجسام جديدة نحو مركز الثقب الأسود.</p>
            </article>
            <article className="bh-metric-card">
              <span>قطر أفق الحدث</span>
              <strong>{metrics.horizon} px</strong>
              <p>الحافة التي بعدها لا يمكن لأي جسم أو ضوء العودة منها.</p>
            </article>
            <article className="bh-metric-card">
              <span>ابتلاع تراكمي</span>
              <strong>{metrics.consumed}</strong>
              <p>عدد الأجسام التي اختفت فعلياً داخل أفق الحدث في هذه الجلسة.</p>
            </article>
          </section>

          <section className="bh-info-grid">
            <article className="bh-info-card">
              <span>الكتلة</span>
              <strong>{BLACK_HOLE.mass}</strong>
              <p>تمثيل تقريبي لثقب أسود فائق الضخامة.</p>
            </article>
            <article className="bh-info-card">
              <span>نصف القطر</span>
              <strong>{BLACK_HOLE.radius}</strong>
              <p>قيمة مرجعية معروضة بنفس أسلوب البطاقات في الصفحات الأخرى.</p>
            </article>
            <article className="bh-info-card">
              <span>النوع</span>
              <strong>{BLACK_HOLE.type}</strong>
              <p>المشهد يركز على القرص المتوهج والاختفاء داخل نقطة اللاعودة.</p>
            </article>
          </section>

          <section className="bh-log">
            <div className="bh-log-head">
              <div>
                <h3>سجل الأحداث</h3>
                <span>آخر ما حدث داخل المحاكاة</span>
              </div>
            </div>
            <div className="bh-log-body">
              {logs.map((log) => (
                <article key={log.id} className="bh-log-entry">
                  <p>{log.text}</p>
                  {log.time ? <time>{log.time}</time> : <time>الآن</time>}
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
