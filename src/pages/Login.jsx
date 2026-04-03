import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";

export default function Login() {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  /* Redirect if already logged in */
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) navigate("/", { replace: true });
    });
    return unsub;
  }, [navigate]);

  const clearError = () => setError("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();
    setLoading(true);
    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (name.trim()) {
          await updateProfile(cred.user, { displayName: name.trim() });
        }
      }
      navigate("/");
    } catch (err) {
      const msg = err.code || "";
      if (msg.includes("user-not-found") || msg.includes("wrong-password") || msg.includes("invalid-credential")) {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
      } else if (msg.includes("email-already-in-use")) {
        setError("هذا البريد الإلكتروني مستخدم بالفعل");
      } else if (msg.includes("weak-password")) {
        setError("كلمة المرور قصيرة جداً (6 أحرف على الأقل)");
      } else if (msg.includes("invalid-email")) {
        setError("صيغة البريد الإلكتروني غير صحيحة");
      } else {
        setError("حدث خطأ ما، حاول مجدداً");
      }
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    clearError();
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (err) {
      if (!err.code?.includes("popup-closed")) {
        setError("فشل تسجيل الدخول بجوجل، حاول مجدداً");
      }
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .login-root {
          min-height: 100vh;
          background: #05070f;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          font-family: 'Cairo', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Background atmosphere */
        .login-bg-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          pointer-events: none;
          z-index: 0;
        }

        .login-bg-glow-1 {
          width: 560px; height: 560px;
          top: -180px; right: -100px;
          background: radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%);
        }

        .login-bg-glow-2 {
          width: 440px; height: 440px;
          bottom: -120px; left: -80px;
          background: radial-gradient(circle, rgba(40, 60, 140, 0.12) 0%, transparent 70%);
        }

        /* Grid texture */
        .login-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(212,175,55,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%);
          pointer-events: none;
          z-index: 0;
        }

        /* Stars */
        .login-stars {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        .login-star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: star-twinkle var(--d, 3s) ease-in-out infinite;
          animation-delay: var(--delay, 0s);
        }

        @keyframes star-twinkle {
          0%, 100% { opacity: var(--op, 0.2); }
          50% { opacity: 0.9; }
        }

        /* Card */
        .login-card {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 440px;
          background: rgba(10, 13, 28, 0.85);
          border: 1px solid rgba(212, 175, 55, 0.14);
          border-radius: 24px;
          padding: 2.8rem 2.4rem;
          backdrop-filter: blur(20px);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.03),
            0 32px 80px rgba(0,0,0,0.55),
            0 0 60px rgba(212,175,55,0.04);
          animation: card-in 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes card-in {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* Top accent line */
        .login-card::before {
          content: '';
          position: absolute;
          top: 0; left: 15%; right: 15%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent);
          border-radius: 50%;
        }

        /* Logo area */
        .login-logo {
          text-align: center;
          margin-bottom: 2rem;
        }

        .login-logo-ring {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          position: relative;
          margin-bottom: 0.9rem;
        }

        .login-logo-ring svg {
          position: absolute;
          inset: 0;
          animation: spin-slow 10s linear infinite;
        }

        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        .login-logo-ring-inner {
          font-size: 1.5rem;
          z-index: 1;
          animation: spin-slow 10s linear infinite reverse;
        }

        .login-logo-name {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 800;
          letter-spacing: 0.25em;
          color: #d4af37;
          text-transform: uppercase;
          margin-bottom: 0.2rem;
        }

        .login-logo-sub {
          font-size: 0.68rem;
          color: rgba(180,185,210,0.4);
          font-weight: 300;
          letter-spacing: 0.06em;
        }

        /* Heading */
        .login-heading {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .login-heading h1 {
          font-size: 1.45rem;
          font-weight: 700;
          color: #e8eaf5;
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }

        .login-heading p {
          font-size: 0.78rem;
          color: rgba(180,185,210,0.45);
          font-weight: 300;
        }

        /* Mode tabs */
        .login-tabs {
          display: flex;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 11px;
          padding: 3px;
          margin-bottom: 1.6rem;
          gap: 3px;
        }

        .login-tab {
          flex: 1;
          padding: 0.52rem;
          border-radius: 9px;
          border: none;
          background: transparent;
          font-family: 'Cairo', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: rgba(180, 185, 210, 0.5);
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          letter-spacing: 0.02em;
        }

        .login-tab.active {
          background: linear-gradient(135deg, rgba(212,175,55,0.18), rgba(212,175,55,0.08));
          color: #d4af37;
          border: 1px solid rgba(212,175,55,0.22);
          box-shadow: 0 2px 12px rgba(212,175,55,0.1);
        }

        /* Error */
        .login-error {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 10px;
          padding: 0.65rem 0.9rem;
          font-size: 0.78rem;
          color: #fca5a5;
          margin-bottom: 1.1rem;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        /* Form */
        .login-form {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
        }

        .login-field {
          display: flex;
          flex-direction: column;
          gap: 0.38rem;
        }

        .login-label {
          font-size: 0.73rem;
          font-weight: 600;
          color: rgba(180,185,210,0.6);
          letter-spacing: 0.04em;
        }

        .login-input-wrap {
          position: relative;
        }

        .login-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 11px;
          padding: 0.7rem 1rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.88rem;
          color: #e8eaf5;
          outline: none;
          transition: all 0.22s ease;
          direction: ltr;
          text-align: left;
        }

        .login-input.rtl-input {
          direction: rtl;
          text-align: right;
        }

        .login-input::placeholder {
          color: rgba(180,185,210,0.25);
        }

        .login-input:focus {
          border-color: rgba(212,175,55,0.45);
          background: rgba(212,175,55,0.04);
          box-shadow: 0 0 0 3px rgba(212,175,55,0.07);
        }

        .login-input-eye {
          position: absolute;
          left: 0.75rem;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: rgba(180,185,210,0.35);
          cursor: pointer;
          font-size: 0.85rem;
          transition: color 0.18s;
          padding: 2px;
          line-height: 1;
        }

        .login-input-eye:hover {
          color: rgba(212,175,55,0.7);
        }

        /* Submit */
        .login-submit {
          width: 100%;
          background: linear-gradient(135deg, #d4af37 0%, #b8901e 100%);
          color: #08090f;
          border: none;
          border-radius: 11px;
          padding: 0.8rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
          letter-spacing: 0.03em;
          box-shadow: 0 4px 20px rgba(212,175,55,0.22);
          position: relative;
          overflow: hidden;
          margin-top: 0.2rem;
        }

        .login-submit::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.12), transparent);
          opacity: 0;
          transition: opacity 0.22s;
        }

        .login-submit:hover:not(:disabled)::after {
          opacity: 1;
        }

        .login-submit:hover:not(:disabled) {
          transform: translateY(-1.5px);
          box-shadow: 0 8px 30px rgba(212,175,55,0.36);
        }

        .login-submit:active:not(:disabled) {
          transform: translateY(0);
        }

        .login-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .login-submit-spinner {
          display: inline-block;
          width: 14px; height: 14px;
          border: 2px solid rgba(0,0,0,0.2);
          border-top-color: #000;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          vertical-align: middle;
          margin-left: 6px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Divider */
        .login-divider {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin: 1.2rem 0;
          color: rgba(180,185,210,0.3);
          font-size: 0.72rem;
          letter-spacing: 0.06em;
        }

        .login-divider::before,
        .login-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
        }

        /* Google */
        .login-google {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 11px;
          padding: 0.72rem;
          font-family: 'Cairo', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          color: rgba(200,205,225,0.85);
          cursor: pointer;
          transition: all 0.22s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          letter-spacing: 0.02em;
        }

        .login-google:hover:not(:disabled) {
          background: rgba(255,255,255,0.07);
          border-color: rgba(255,255,255,0.14);
          color: #fff;
        }

        .login-google:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .google-icon {
          display: flex;
          align-items: center;
          font-size: 1rem;
        }

        /* Footer link */
        .login-footer {
          text-align: center;
          margin-top: 1.6rem;
          font-size: 0.72rem;
          color: rgba(180,185,210,0.35);
        }

        .login-footer a {
          color: rgba(212,175,55,0.75);
          text-decoration: none;
          font-weight: 600;
          transition: color 0.18s;
        }

        .login-footer a:hover {
          color: #d4af37;
        }

        /* Back to home */
        .login-back {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: rgba(180,185,210,0.4);
          font-size: 0.72rem;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.18s;
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          z-index: 2;
        }

        .login-back:hover {
          color: rgba(212,175,55,0.75);
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 2rem 1.5rem;
            border-radius: 20px;
          }
        }
      `}</style>

      <div className="login-root" dir="rtl">
        {/* Background */}
        <div className="login-bg-glow login-bg-glow-1" />
        <div className="login-bg-glow login-bg-glow-2" />
        <div className="login-grid" />
        <div className="login-stars" id="login-stars" />

        <Link to="/" className="login-back">
          ← الرئيسية
        </Link>

        <div className="login-card">

          {/* Logo */}
          <div className="login-logo">
            <div className="login-logo-ring">
              <svg viewBox="0 0 58 58" fill="none">
                <circle cx="29" cy="29" r="27.5" stroke="url(#lg1)" strokeWidth="0.8" strokeDasharray="4 3" />
                <circle cx="29" cy="29" r="18" stroke="url(#lg1)" strokeWidth="0.6" strokeDasharray="2 4" />
                <defs>
                  <linearGradient id="lg1" x1="0" y1="0" x2="58" y2="58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4af37" />
                    <stop offset="1" stopColor="#d4af37" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="login-logo-ring-inner">✦</div>
            </div>
            <div className="login-logo-name">ASTRO</div>
            <div className="login-logo-sub">الموسوعة الفلكية</div>
          </div>

          {/* Heading */}
          <div className="login-heading">
            <h1>{mode === "login" ? "مرحباً بعودتك" : "انضم إلى الكون"}</h1>
            <p>
              {mode === "login"
                ? "سجّل دخولك لاستكشاف المحاكيات التفاعلية"
                : "أنشئ حسابك وابدأ رحلة الاستكشاف"}
            </p>
          </div>

          {/* Tabs */}
          <div className="login-tabs">
            <button
              className={`login-tab${mode === "login" ? " active" : ""}`}
              onClick={() => { setMode("login"); clearError(); }}
            >
              تسجيل الدخول
            </button>
            <button
              className={`login-tab${mode === "signup" ? " active" : ""}`}
              onClick={() => { setMode("signup"); clearError(); }}
            >
              إنشاء حساب
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="login-error">
              <span>⚠</span> {error}
            </div>
          )}

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit}>
            {mode === "signup" && (
              <div className="login-field">
                <label className="login-label">الاسم</label>
                <div className="login-input-wrap">
                  <input
                    type="text"
                    className="login-input rtl-input"
                    placeholder="اسمك الكامل"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="name"
                  />
                </div>
              </div>
            )}

            <div className="login-field">
              <label className="login-label">البريد الإلكتروني</label>
              <div className="login-input-wrap">
                <input
                  type="email"
                  className="login-input"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  style={{ paddingLeft: "2.4rem" }}
                />
              </div>
            </div>

            <div className="login-field">
              <label className="login-label">كلمة المرور</label>
              <div className="login-input-wrap">
                <input
                  type={showPass ? "text" : "password"}
                  className="login-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete={mode === "login" ? "current-password" : "new-password"}
                  style={{ paddingLeft: "2.4rem" }}
                />
                <button
                  type="button"
                  className="login-input-eye"
                  onClick={() => setShowPass((v) => !v)}
                  tabIndex={-1}
                >
                  {showPass ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <button type="submit" className="login-submit" disabled={loading}>
              {loading ? (
                <>
                  جارٍ التحميل
                  <span className="login-submit-spinner" />
                </>
              ) : mode === "login" ? (
                "دخول ✦"
              ) : (
                "إنشاء الحساب ✦"
              )}
            </button>
          </form>

          <div className="login-divider">أو</div>

          <button className="login-google" onClick={handleGoogle} disabled={loading}>
            <span className="google-icon">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </span>
            المتابعة مع Google
          </button>

          <div className="login-footer">
            {mode === "login" ? (
              <>
                ليس لديك حساب؟{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); setMode("signup"); clearError(); }}>
                  أنشئ حساباً
                </a>
              </>
            ) : (
              <>
                لديك حساب بالفعل؟{" "}
                <a href="#" onClick={(e) => { e.preventDefault(); setMode("login"); clearError(); }}>
                  سجّل دخولك
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Inject stars */}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var c = document.getElementById('login-stars');
            if (!c) return;
            for (var i = 0; i < 80; i++) {
              var s = document.createElement('div');
              s.className = 'login-star';
              var sz = Math.random() * 2 + 0.5;
              s.style.cssText = 'left:'+Math.random()*100+'%;top:'+Math.random()*100+'%;width:'+sz+'px;height:'+sz+'px;--op:'+(Math.random()*0.4+0.05)+';--d:'+(Math.random()*4+2)+'s;--delay:'+(Math.random()*6)+'s';
              c.appendChild(s);
            }
          })();
        `
      }} />
    </>
  );
}
