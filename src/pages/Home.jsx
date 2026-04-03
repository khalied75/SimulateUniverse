import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

/* ─── Simulation data ─── */
const SIMS = [
  {
    id: "black-hole",
    path: "/black-hole",
    emoji: "◉",
    label: "الثقوب السوداء",
    sublabel: "Black Holes",
    desc: "استكشف كيف تحني الجاذبية الشديدة الضوء والزمان عند حافة نقطة اللاعودة.",
    tag: "GRAVITY",
    accent: "#7c3aed",
    glow: "rgba(124,58,237,0.15)",
    border: "rgba(124,58,237,0.25)",
  },
  {
    id: "spacetime",
    path: "/spacetime",
    emoji: "⊛",
    label: "الزمكان",
    sublabel: "Spacetime",
    desc: "شاهد كيف تشوّه الكتلة نسيج الزمكان وفق نظرية النسبية العامة لأينشتاين.",
    tag: "RELATIVITY",
    accent: "#0ea5e9",
    glow: "rgba(14,165,233,0.13)",
    border: "rgba(14,165,233,0.22)",
  },
  {
    id: "solar-system",
    path: "/solar-system",
    emoji: "◎",
    label: "النظام الشمسي",
    sublabel: "Solar System",
    desc: "تجوّل بين كواكب نظامنا الشمسي بمقياس حقيقي مع معلومات تفصيلية عن كل جرم.",
    tag: "ORBITAL",
    accent: "#f59e0b",
    glow: "rgba(245,158,11,0.12)",
    border: "rgba(245,158,11,0.22)",
  },
  {
    id: "schrodinger",
    path: "/schrodinger",
    emoji: "⊕",
    label: "قطة شرودنغر",
    sublabel: "Schrödinger's Cat",
    desc: "تجربة فكرية تكشف غرابة ميكانيكا الكم وازدواجية الوجود على المستوى الكمي.",
    tag: "QUANTUM",
    accent: "#ec4899",
    glow: "rgba(236,72,153,0.12)",
    border: "rgba(236,72,153,0.22)",
  },
  {
    id: "stars",
    path: "/stars",
    emoji: "✦",
    label: "النجوم",
    sublabel: "Stars",
    desc: "اشهد دورة حياة النجوم كاملةً — من السديم إلى المستعر الأعظم والنجم النيوتروني.",
    tag: "STELLAR",
    accent: "#d4af37",
    glow: "rgba(212,175,55,0.12)",
    border: "rgba(212,175,55,0.22)",
  },
];

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const dur = 1400;
        const step = (ts) => {
          if (!start) start = ts;
          const prog = Math.min((ts - start) / dur, 1);
          setVal(Math.floor(prog * target));
          if (prog < 1) requestAnimationFrame(step);
          else setVal(target);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ─── Sim card ─── */
function SimCard({ sim, user, onLoginRequired }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!user) { onLoginRequired(); return; }
    navigate(sim.path);
  };

  return (
    <div
      className="sim-card"
      style={{ "--accent": sim.accent, "--glow": sim.glow, "--bd": sim.border }}
      onClick={handleClick}
    >
      <div className="sim-card-top">
        <div className="sim-card-icon">{sim.emoji}</div>
        <span className="sim-card-tag">{sim.tag}</span>
      </div>
      <div className="sim-card-body">
        <h3 className="sim-card-title">{sim.label}</h3>
        <p className="sim-card-sub">{sim.sublabel}</p>
        <p className="sim-card-desc">{sim.desc}</p>
      </div>
      <div className="sim-card-footer">
        <span className="sim-card-cta">
          {user ? "تشغيل المحاكاة" : "تسجيل الدخول للوصول"}
          <span className="sim-cta-arrow">→</span>
        </span>
        <span className="sim-card-dot" style={{ background: user ? "#22c55e" : "rgba(255,255,255,0.15)" }} />
      </div>
    </div>
  );
}

/* ─── Main ─── */
export default function Home() {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  const handleLoginRequired = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .home-root {
          min-height: 100vh;
          background: #05070f;
          font-family: 'Cairo', sans-serif;
          direction: rtl;
          overflow-x: hidden;
        }

        /* ─── BG ─── */
        .home-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .home-glow-1 {
          position: absolute;
          width: 700px; height: 700px;
          top: -200px; right: -150px;
          background: radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 65%);
          filter: blur(60px);
        }

        .home-glow-2 {
          position: absolute;
          width: 600px; height: 600px;
          top: 40%; left: -100px;
          background: radial-gradient(circle, rgba(40,60,140,0.1) 0%, transparent 65%);
          filter: blur(60px);
        }

        .home-glow-3 {
          position: absolute;
          width: 500px; height: 500px;
          bottom: -100px; right: 20%;
          background: radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 65%);
          filter: blur(70px);
        }

        .home-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,175,55,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.025) 1px, transparent 1px);
          background-size: 72px 72px;
          mask-image: radial-gradient(ellipse 90% 70% at 50% 30%, black 20%, transparent 100%);
        }

        /* ─── HERO ─── */
        .hero {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 5rem 2rem 4rem;
        }

        .hero-inner {
          max-width: 1340px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212,175,55,0.07);
          border: 1px solid rgba(212,175,55,0.18);
          padding: 0.3rem 0.85rem;
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 700;
          color: #d4af37;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          width: fit-content;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) both;
        }

        .hero-eyebrow-dot {
          width: 5px; height: 5px;
          background: #d4af37;
          border-radius: 50%;
          animation: dot-pulse 2s ease-in-out infinite;
        }

        @keyframes dot-pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.6); }
        }

        .hero-title {
          font-size: clamp(2.6rem, 5vw, 4.2rem);
          font-weight: 900;
          line-height: 1.04;
          color: #e8eaf5;
          letter-spacing: -0.02em;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both;
        }

        .hero-title-gold {
          color: #d4af37;
          position: relative;
          display: inline-block;
        }

        .hero-title-gold::after {
          content: '';
          position: absolute;
          bottom: 2px;
          right: 0; left: 0;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, transparent);
          border-radius: 2px;
          opacity: 0.5;
        }

        .hero-desc {
          font-size: 1rem;
          font-weight: 400;
          color: rgba(180,185,210,0.6);
          line-height: 1.75;
          max-width: 480px;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }

        .hero-actions {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          flex-wrap: wrap;
          animation: hero-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s both;
        }

        @keyframes hero-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: linear-gradient(135deg, #d4af37 0%, #b8901e 100%);
          color: #08090f;
          border: none;
          padding: 0.78rem 1.6rem;
          border-radius: 11px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 24px rgba(212,175,55,0.25);
        }

        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(212,175,55,0.38);
        }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: rgba(255,255,255,0.04);
          color: rgba(200,205,225,0.8);
          border: 1px solid rgba(255,255,255,0.09);
          padding: 0.76rem 1.6rem;
          border-radius: 11px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.22s ease;
          letter-spacing: 0.02em;
        }

        .hero-btn-secondary:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(212,175,55,0.22);
          color: #d4af37;
        }

        /* Hero visual */
        .hero-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          animation: hero-in 1s cubic-bezier(0.16,1,0.3,1) 0.2s both;
        }

        .orbit-canvas {
          position: relative;
          width: 340px;
          height: 340px;
        }

        .orbit-ring {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }

        .orbit-r1 {
          width: 340px; height: 340px;
          border: 1px dashed rgba(212,175,55,0.1);
          animation: spin 28s linear infinite;
        }
        .orbit-r2 {
          width: 254px; height: 254px;
          border: 1px solid rgba(212,175,55,0.12);
          animation: spin 18s linear infinite reverse;
        }
        .orbit-r3 {
          width: 170px; height: 170px;
          border: 1px solid rgba(212,175,55,0.18);
          animation: spin 10s linear infinite;
        }

        @keyframes spin {
          to { transform: translate(-50%,-50%) rotate(360deg); }
        }

        .orbit-dot {
          position: absolute;
          border-radius: 50%;
          top: 50%; left: 50%;
        }

        .orbit-center {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
          width: 72px; height: 72px;
          background: radial-gradient(circle, #d4af37 0%, #8a6820 55%, transparent 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.6rem;
          box-shadow:
            0 0 30px rgba(212,175,55,0.5),
            0 0 70px rgba(212,175,55,0.2),
            0 0 130px rgba(212,175,55,0.08);
          animation: pulse-glow 3.5s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,100% { box-shadow: 0 0 30px rgba(212,175,55,0.5), 0 0 70px rgba(212,175,55,0.2); }
          50%      { box-shadow: 0 0 50px rgba(212,175,55,0.7), 0 0 110px rgba(212,175,55,0.3); }
        }

        /* ─── STATS ─── */
        .stats-strip {
          position: relative;
          z-index: 1;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
          padding: 2.4rem 2rem;
        }

        .stats-inner {
          max-width: 1340px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 1.2rem;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.04);
          background: rgba(255,255,255,0.02);
          transition: all 0.22s;
        }

        .stat-item:hover {
          border-color: rgba(212,175,55,0.15);
          background: rgba(212,175,55,0.03);
        }

        .stat-icon-wrap {
          width: 40px; height: 40px;
          background: rgba(212,175,55,0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .stat-text h3 {
          font-size: 1.5rem;
          font-weight: 900;
          color: #d4af37;
          line-height: 1;
        }

        .stat-text p {
          font-size: 0.72rem;
          color: rgba(180,185,210,0.45);
          margin-top: 0.15rem;
          font-weight: 400;
        }

        /* ─── SIMS SECTION ─── */
        .sims-section {
          position: relative;
          z-index: 1;
          padding: 5rem 2rem;
        }

        .sims-inner {
          max-width: 1340px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212,175,55,0.06);
          border: 1px solid rgba(212,175,55,0.15);
          padding: 0.28rem 0.8rem;
          border-radius: 50px;
          font-size: 0.68rem;
          font-weight: 700;
          color: rgba(212,175,55,0.85);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 1.1rem;
        }

        .section-title {
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 900;
          color: #e8eaf5;
          letter-spacing: -0.02em;
          margin-bottom: 0.6rem;
          line-height: 1.1;
        }

        .section-title span { color: #d4af37; }

        .section-subtitle {
          font-size: 0.9rem;
          color: rgba(180,185,210,0.45);
          font-weight: 300;
        }

        /* Sim cards grid */
        .sims-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.2rem;
        }

        .sims-grid > .sim-card:first-child {
          grid-column: span 2;
        }

        /* Card */
        .sim-card {
          background: rgba(10, 13, 28, 0.7);
          border: 1px solid var(--bd);
          border-radius: 18px;
          padding: 1.7rem;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 1.1rem;
          transition: all 0.28s cubic-bezier(0.16,1,0.3,1);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .sim-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 0% 0%, var(--glow) 0%, transparent 55%);
          opacity: 0;
          transition: opacity 0.28s ease;
          pointer-events: none;
        }

        .sim-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.03);
        }

        .sim-card:hover::before {
          opacity: 1;
        }

        .sim-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sim-card-icon {
          width: 48px; height: 48px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--bd);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          color: var(--accent);
          transition: all 0.28s;
        }

        .sim-card:hover .sim-card-icon {
          background: var(--glow);
          border-color: var(--accent);
        }

        .sim-card-tag {
          font-size: 0.62rem;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: 0.14em;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--bd);
          padding: 0.2rem 0.6rem;
          border-radius: 50px;
          opacity: 0.8;
          transition: opacity 0.2s;
        }

        .sim-card:hover .sim-card-tag {
          opacity: 1;
        }

        .sim-card-body {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .sim-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #e8eaf5;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .sims-grid > .sim-card:first-child .sim-card-title {
          font-size: 1.35rem;
        }

        .sim-card-sub {
          font-size: 0.7rem;
          font-weight: 400;
          color: rgba(180,185,210,0.35);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-family: 'Syne', sans-serif;
        }

        .sim-card-desc {
          font-size: 0.82rem;
          color: rgba(180,185,210,0.5);
          line-height: 1.65;
          font-weight: 300;
          margin-top: 0.4rem;
        }

        .sim-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.04);
        }

        .sim-card-cta {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--accent);
          letter-spacing: 0.03em;
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .sim-card:hover .sim-card-cta {
          opacity: 1;
        }

        .sim-cta-arrow {
          transition: transform 0.22s cubic-bezier(0.16,1,0.3,1);
          display: inline-block;
        }

        .sim-card:hover .sim-cta-arrow {
          transform: translateX(-4px);
        }

        .sim-card-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          transition: all 0.22s;
        }

        /* ─── CTA ─── */
        .cta-section {
          position: relative;
          z-index: 1;
          padding: 4rem 2rem 6rem;
        }

        .cta-inner {
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
          background: rgba(10,13,28,0.7);
          border: 1px solid rgba(212,175,55,0.14);
          border-radius: 24px;
          padding: 3.5rem 3rem;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(20px);
        }

        .cta-inner::before {
          content: '';
          position: absolute;
          top: 0; left: 20%; right: 20%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent);
        }

        .cta-glow {
          position: absolute;
          top: -60px; left: 50%;
          transform: translateX(-50%);
          width: 250px; height: 250px;
          background: radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);
          filter: blur(30px);
          pointer-events: none;
        }

        .cta-symbol {
          font-size: 2.8rem;
          display: block;
          margin-bottom: 1.2rem;
          animation: pulse-glow 4s ease-in-out infinite;
          filter: drop-shadow(0 0 12px rgba(212,175,55,0.5));
        }

        .cta-inner h2 {
          font-size: 2rem;
          font-weight: 900;
          color: #e8eaf5;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .cta-inner h2 span { color: #d4af37; }

        .cta-inner p {
          font-size: 0.9rem;
          color: rgba(180,185,210,0.5);
          margin-bottom: 2rem;
          font-weight: 300;
          line-height: 1.65;
        }

        /* ─── TOAST ─── */
        .toast {
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(10,13,28,0.96);
          border: 1px solid rgba(212,175,55,0.25);
          border-radius: 12px;
          padding: 0.75rem 1.5rem;
          font-size: 0.82rem;
          font-weight: 600;
          color: #e8eaf5;
          z-index: 9999;
          backdrop-filter: blur(20px);
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          animation: toast-in 0.3s cubic-bezier(0.16,1,0.3,1);
          white-space: nowrap;
        }

        @keyframes toast-in {
          from { opacity: 0; transform: translateX(-50%) translateY(12px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 1024px) {
          .sims-grid { grid-template-columns: 1fr 1fr; }
          .sims-grid > .sim-card:first-child { grid-column: span 2; }
        }

        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr; gap: 2.5rem; }
          .hero-visual { order: -1; }
          .orbit-canvas { width: 240px; height: 240px; }
          .orbit-r1 { width: 240px; height: 240px; }
          .orbit-r2 { width: 180px; height: 180px; }
          .orbit-r3 { width: 120px; height: 120px; }
          .stats-inner { grid-template-columns: repeat(2, 1fr); }
          .sims-grid { grid-template-columns: 1fr; }
          .sims-grid > .sim-card:first-child { grid-column: span 1; }
          .hero-actions { flex-direction: column; align-items: flex-start; }
          .cta-inner { padding: 2.5rem 1.5rem; }
        }

        @media (max-width: 480px) {
          .hero { padding: 5rem 1rem 3rem; }
          .sims-section { padding: 3rem 1rem; }
          .cta-section { padding: 2rem 1rem 4rem; }
          .stats-strip { padding: 2rem 1rem; }
          .stat-item { padding: 0.7rem; gap: 0.7rem; }
        }
      `}</style>

      <div className="home-root">
        {/* Background */}
        <div className="home-bg">
          <div className="home-glow-1" />
          <div className="home-glow-2" />
          <div className="home-glow-3" />
          <div className="home-grid" />
        </div>

        {/* ─── HERO ─── */}
        <section className="hero">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-dot" />
                موسوعة فلكية تفاعلية
              </div>

              <h1 className="hero-title">
                اكتشف<br />
                <span className="hero-title-gold">أسرار الكون</span>
              </h1>

              <p className="hero-desc">
                خمس محاكيات تفاعلية تأخذك في رحلة علمية عبر الثقوب السوداء،
                الزمكان، النجوم، وأعماق ميكانيكا الكم.
              </p>

              <div className="hero-actions">
                <Link
                  to={user ? "/black-hole" : "/login"}
                  className="hero-btn-primary"
                >
                  ✦ ابدأ الاستكشاف
                </Link>
                <a
                  href="#sims"
                  className="hero-btn-secondary"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("sims")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  تصفح المحاكيات ↓
                </a>
              </div>
            </div>

            {/* Orbit visual */}
            <div className="hero-visual">
              <div className="orbit-canvas">
                <div className="orbit-ring orbit-r1" />
                <div className="orbit-ring orbit-r2" />
                <div className="orbit-ring orbit-r3" />

                {/* Planets */}
                <div style={{ position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%) rotate(0deg) translateX(127px) rotate(0deg)",
                  animation: "spin 18s linear infinite",
                  width: 14, height: 14,
                  background: "#60a5fa", borderRadius: "50%",
                  boxShadow: "0 0 10px rgba(96,165,250,0.7)" }} />

                <div style={{ position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%) rotate(120deg) translateX(85px)",
                  animation: "spin 10s linear infinite reverse",
                  width: 10, height: 10,
                  background: "#f87171", borderRadius: "50%",
                  boxShadow: "0 0 8px rgba(248,113,113,0.7)" }} />

                <div className="orbit-center">✦</div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── STATS ─── */}
        <div className="stats-strip">
          <div className="stats-inner">
            {[
              { icon: "⬡", val: 5, suffix: "", label: "محاكيات" },
              { icon: "✦", val: 100, suffix: "%", label: "تفاعلية" },
              { icon: "◎", val: 50, suffix: "+", label: "موضوع علمي" },
              { icon: "⊛", val: 1, suffix: "", label: "موسوعة كونية" },
            ].map((s) => (
              <div className="stat-item" key={s.label}>
                <div className="stat-icon-wrap">{s.icon}</div>
                <div className="stat-text">
                  <h3><Counter target={s.val} suffix={s.suffix} /></h3>
                  <p>{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SIMS ─── */}
        <section className="sims-section" id="sims">
          <div className="sims-inner">
            <div className="section-header">
              <div className="section-eyebrow">◉ محاكيات تفاعلية</div>
              <h2 className="section-title">
                استكشف <span>الكون</span> من الداخل
              </h2>
              <p className="section-subtitle">
                تجارب علمية غامرة تجمع بين الفيزياء الحقيقية والتصور التفاعلي
              </p>
            </div>

            <div className="sims-grid">
              {SIMS.map((sim) => (
                <SimCard
                  key={sim.id}
                  sim={sim}
                  user={user}
                  onLoginRequired={handleLoginRequired}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        {!authLoading && !user && (
          <section className="cta-section">
            <div className="cta-inner">
              <div className="cta-glow" />
              <span className="cta-symbol">✦</span>
              <h2>انضم إلى <span>رحلة الاستكشاف</span></h2>
              <p>
                سجّل دخولك للوصول إلى جميع المحاكيات التفاعلية والانطلاق في
                رحلة علمية فريدة عبر الكون.
              </p>
              <Link to="/login" className="hero-btn-primary">
                ✦ سجّل دخولك الآن
              </Link>
            </div>
          </section>
        )}
      </div>

      {/* Toast */}
      {showToast && (
        <div className="toast" dir="rtl">
          <span>🔒</span>
          يجب تسجيل الدخول للوصول إلى المحاكيات —{" "}
          <Link to="/login" style={{ color: "#d4af37", textDecoration: "none", fontWeight: 700 }}>
            سجّل الآن
          </Link>
        </div>
      )}
    </>
  );
}
