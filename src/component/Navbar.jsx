import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const NAV_ITEMS = [
  { to: "/", label: "الرئيسية", icon: "✦" },
  { to: "/black-hole", label: "الثقوب السوداء", icon: "◉" },
  { to: "/spacetime", label: "الزمكان", icon: "⌁" },
  { to: "/solar-system", label: "النظام الشمسي", icon: "☼" },
  { to: "/schrodinger", label: "قطة شرودنغر", icon: "◌" },
  { to: "/stars", label: "النجوم", icon: "✧" },
  { to: "/wavelength-energy", label: "الطاقة والموجة", icon: "∿" },
];

function NavButton({ item, active, onClick, mobile = false }) {
  const baseStyle = mobile
    ? {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.7rem 0.9rem",
        fontSize: "0.85rem",
        fontWeight: 600,
        border: "none",
        borderRadius: "10px",
        width: "100%",
      }
    : {
        display: "flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.42rem 0.8rem",
        fontSize: "0.78rem",
        fontWeight: 600,
        border: active ? "1px solid rgba(212, 175, 55, 0.2)" : "none",
        borderRadius: "8px",
      };

  return (
    <button
      onClick={() => onClick(item.to)}
      style={{
        ...baseStyle,
        color: active ? "#d4af37" : "rgba(180, 185, 210, 0.75)",
        background: active ? "rgba(212, 175, 55, 0.1)" : "transparent",
        textDecoration: "none",
        transition: "all 0.22s ease",
        whiteSpace: "nowrap",
        letterSpacing: "0.02em",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={(event) => {
        if (active) return;
        event.currentTarget.style.color = "#d4af37";
        event.currentTarget.style.background = "rgba(212, 175, 55, 0.08)";
      }}
      onMouseLeave={(event) => {
        if (active) return;
        event.currentTarget.style.color = "rgba(180, 185, 210, 0.75)";
        event.currentTarget.style.background = "transparent";
      }}
    >
      <span
        className="link-icon"
        style={{
          fontSize: mobile ? "0.8rem" : "0.7rem",
          width: mobile ? "20px" : "auto",
          textAlign: "center",
          opacity: active ? 1 : 0.5,
        }}
      >
        {item.icon}
      </span>
      {item.label}
    </button>
  );
}

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, setUser);
    return unsub;
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  const handleLogout = async () => {
    await signOut(auth);
    setUserMenuOpen(false);
    navigate("/");
  };

  const handleNavClick = (path) => {
    if (path === "/") {
      navigate(path);
      return;
    }

    if (!user) {
      alert("يجب تسجيل الدخول للوصول إلى هذه الصفحة");
      navigate("/login");
      return;
    }

    navigate(path);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&family=Syne:wght@700;800&display=swap');

        .nav-root {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 0 1.5rem;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Cairo', sans-serif;
        }

        .nav-root.scrolled {
          padding: 0 1.5rem;
        }

        .nav-inner {
          max-width: 1340px;
          margin: 0 auto;
          height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-root.scrolled .nav-inner {
          height: 60px;
          background: rgba(5, 7, 18, 0.92);
          backdrop-filter: blur(24px) saturate(180%);
          border-bottom-color: rgba(212, 175, 55, 0.12);
          border-radius: 0 0 20px 20px;
          padding: 0 1.5rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,55,0.06);
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo-glyph {
          position: relative;
          width: 38px;
          height: 38px;
        }

        .nav-logo-glyph svg {
          width: 100%;
          height: 100%;
          animation: spin-slow 12s linear infinite;
        }

        @keyframes spin-slow {
          to { transform: rotate(360deg); }
        }

        .nav-logo-center {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          animation: spin-slow 12s linear infinite reverse;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
        }

        .nav-logo-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.88rem;
          font-weight: 800;
          color: #d4af37;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .nav-logo-sub {
          font-size: 0.62rem;
          color: rgba(180,180,200,0.5);
          font-weight: 300;
          letter-spacing: 0.08em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
        }

        .nav-login-btn {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          background: linear-gradient(135deg, #d4af37 0%, #b8901e 100%);
          color: #08090f;
          border: none;
          padding: 0.5rem 1.2rem;
          border-radius: 9px;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          transition: all 0.22s ease;
          text-decoration: none;
          letter-spacing: 0.03em;
          box-shadow: 0 2px 12px rgba(212, 175, 55, 0.25);
        }

        .nav-login-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(212, 175, 55, 0.38);
          background: linear-gradient(135deg, #e0be4a 0%, #c9a020 100%);
        }

        .nav-user-wrap {
          position: relative;
        }

        .nav-user-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.22);
          color: #d4af37;
          padding: 0.42rem 0.9rem 0.42rem 0.5rem;
          border-radius: 10px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          font-family: 'Cairo', sans-serif;
          transition: all 0.22s ease;
          letter-spacing: 0.02em;
        }

        .nav-user-btn:hover {
          background: rgba(212, 175, 55, 0.14);
          border-color: rgba(212, 175, 55, 0.4);
        }

        .nav-avatar {
          width: 28px;
          height: 28px;
          background: linear-gradient(135deg, #d4af37, #8a6820);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 700;
          color: #08090f;
          flex-shrink: 0;
        }

        .nav-chevron {
          font-size: 0.6rem;
          opacity: 0.6;
          transition: transform 0.2s;
        }

        .nav-user-btn[aria-expanded="true"] .nav-chevron {
          transform: rotate(180deg);
        }

        .nav-dropdown {
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          min-width: 200px;
          background: #0d1024;
          border: 1px solid rgba(212, 175, 55, 0.15);
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.03);
          animation: dd-in 0.18s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dd-in {
          from { opacity: 0; transform: translateY(-6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .nav-dropdown-email {
          padding: 0.5rem 0.75rem 0.6rem;
          font-size: 0.7rem;
          color: rgba(180,185,210,0.45);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          margin-bottom: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .nav-dropdown-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.55rem 0.75rem;
          background: transparent;
          border: none;
          border-radius: 8px;
          font-family: 'Cairo', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(180, 185, 210, 0.8);
          cursor: pointer;
          text-align: right;
          transition: all 0.18s;
          text-decoration: none;
        }

        .nav-dropdown-item:hover {
          background: rgba(255,255,255,0.04);
          color: #fff;
        }

        .nav-dropdown-item.danger:hover {
          background: rgba(239,68,68,0.08);
          color: #f87171;
        }

        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 4.5px;
          background: transparent;
          border: 1px solid rgba(212, 175, 55, 0.2);
          border-radius: 8px;
          padding: 8px 9px;
          cursor: pointer;
          transition: all 0.22s;
        }

        .nav-hamburger:hover {
          background: rgba(212, 175, 55, 0.07);
          border-color: rgba(212, 175, 55, 0.38);
        }

        .nav-hamburger span {
          display: block;
          width: 18px;
          height: 1.5px;
          background: #d4af37;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .nav-hamburger.open span:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
        }

        .nav-hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .nav-hamburger.open span:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
        }

        .nav-mobile-menu {
          position: fixed;
          top: 68px;
          left: 0;
          right: 0;
          background: rgba(5, 7, 18, 0.97);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(212, 175, 55, 0.1);
          padding: 1rem 1.5rem 1.5rem;
          z-index: 999;
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          animation: mobile-in 0.28s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes mobile-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .nav-mobile-divider {
          height: 1px;
          background: rgba(255,255,255,0.05);
          margin: 0.5rem 0;
        }

        .nav-mobile-actions {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 0.2rem;
        }

        .nav-mobile-actions > * {
          width: 100%;
        }

        .nav-mobile-user {
          display: none;
          align-items: center;
          gap: 0.8rem;
          padding: 0.85rem 0.95rem;
          border-radius: 14px;
          border: 1px solid rgba(212, 175, 55, 0.14);
          background: rgba(212, 175, 55, 0.06);
        }

        .nav-mobile-user-text {
          min-width: 0;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
        }

        .nav-mobile-user-name {
          color: #f8fafc;
          font-size: 0.88rem;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .nav-mobile-user-email {
          color: rgba(180,185,210,0.58);
          font-size: 0.72rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
        }

        @media (max-width: 480px) {
          .nav-root { padding: 0 1rem; }
          .nav-logo-title { font-size: 0.78rem; }
        }

        @media (max-width: 644px) {
          .nav-user-wrap {
            display: none;
          }

          .nav-mobile-user {
            display: flex;
          }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`} dir="rtl">
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <div className="nav-logo-glyph">
              <svg viewBox="0 0 38 38" fill="none">
                <circle cx="19" cy="19" r="17.5" stroke="url(#g1)" strokeWidth="0.8" strokeDasharray="3 2.5" />
                <circle cx="19" cy="19" r="11" stroke="url(#g1)" strokeWidth="0.6" />
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="38" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4af37" />
                    <stop offset="1" stopColor="#8a6820" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="nav-logo-center">✦</div>
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-title">ASTRO</span>
              <span className="nav-logo-sub">الموسوعة الفلكية</span>
            </div>
          </Link>

          <ul className="nav-links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavButton
                  item={item}
                  active={location.pathname === item.to}
                  onClick={handleNavClick}
                />
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {user ? (
              <div className="nav-user-wrap" ref={userMenuRef}>
                <button
                  className="nav-user-btn"
                  onClick={() => setUserMenuOpen((value) => !value)}
                  aria-expanded={userMenuOpen}
                >
                  <div className="nav-avatar">
                    {(user.displayName || user.email || "U")[0].toUpperCase()}
                  </div>
                  <span style={{ maxWidth: 90, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {user.displayName || user.email?.split("@")[0]}
                  </span>
                  <span className="nav-chevron">▼</span>
                </button>

                {userMenuOpen && (
                  <div className="nav-dropdown">
                    <div className="nav-dropdown-email">{user.email}</div>
                    <button className="nav-dropdown-item danger" onClick={handleLogout}>
                      <span>→</span>
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="nav-login-btn">
                <span>✦</span>
                تسجيل الدخول
              </Link>
            )}

            <button
              className={`nav-hamburger${mobileOpen ? " open" : ""}`}
              onClick={() => setMobileOpen((value) => !value)}
              aria-label="القائمة"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="nav-mobile-menu" dir="rtl">
          {NAV_ITEMS.map((item) => (
            <NavButton
              key={item.to}
              item={item}
              active={location.pathname === item.to}
              onClick={handleNavClick}
              mobile
            />
          ))}

          <div className="nav-mobile-divider" />

          <div className="nav-mobile-actions">
            {user ? (
              <>
                <div className="nav-mobile-user">
                  <div className="nav-avatar">
                    {(user.displayName || user.email || "U")[0].toUpperCase()}
                  </div>
                  <div className="nav-mobile-user-text">
                    <span className="nav-mobile-user-name">
                      {user.displayName || user.email?.split("@")[0]}
                    </span>
                    <span className="nav-mobile-user-email">{user.email}</span>
                  </div>
                </div>
                <button
                onClick={() => {
                  handleLogout();
                  setMobileOpen(false);
                }}
                style={{
                  background: "rgba(239,68,68,0.08)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  borderRadius: 9,
                  color: "#f87171",
                  padding: "0.55rem 1rem",
                  fontSize: "0.8rem",
                  fontFamily: "Cairo, sans-serif",
                  fontWeight: 600,
                  cursor: "pointer",
                  flex: 1,
                }}
              >
                → تسجيل الخروج
              </button>
              </>
            ) : (
              <Link to="/login" className="nav-login-btn" onClick={() => setMobileOpen(false)}>
                ✦ تسجيل الدخول
              </Link>
            )}
          </div>
        </div>
      )}
    </>
  );
}
