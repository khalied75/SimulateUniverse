import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';

const Layout = ({ children }) => {
  const { i18n } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleLanguage = () => {
    const newLng = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLng);
    localStorage.setItem('language', newLng);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsProfileOpen(false);
  };

  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-yellow-500/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-xl">🌌</span>
              </div>
              <span className="text-xl font-bold text-yellow-400">SimUniverse</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-gray-300 hover:text-yellow-400 transition">
                {i18n.language === 'en' ? 'Home' : 'الرئيسية'}
              </Link>
              <div className="text-gray-300 hover:text-yellow-400 cursor-pointer transition group">
                {i18n.language === 'en' ? 'Simulations' : 'المحاكاات'}
                <div className="hidden group-hover:block absolute bg-slate-900 border border-yellow-500/20 rounded-lg py-2 min-w-48">
                  <Link to="/simulations/black-hole" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                    {i18n.language === 'en' ? 'Black Hole' : 'الثقوب السوداء'}
                  </Link>
                  <Link to="/simulations/spacetime" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                    {i18n.language === 'en' ? 'Spacetime' : 'الزمكان'}
                  </Link>
                  <Link to="/simulations/solar-system" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                    {i18n.language === 'en' ? 'Solar System' : 'النظام الشمسي'}
                  </Link>
                  <Link to="/simulations/schrodinger" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                    {i18n.language === 'en' ? "Schrödinger's Cats" : 'قطط شرودنغر'}
                  </Link>
                  <Link to="/simulations/stars" className="block px-4 py-2 text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10">
                    {i18n.language === 'en' ? 'Stars' : 'النجوم'}
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - User & Language */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 transition text-sm font-semibold"
              >
                {i18n.language === 'en' ? 'العربية' : 'English'}
              </button>

              {user ? (
                <div className="relative">
                  <button
                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                    className="px-4 py-2 rounded-lg bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 transition"
                  >
                    👤 {user.email?.split('@')[0]}
                  </button>
                  {isProfileOpen && (
                    <div className="absolute right-0 mt-2 bg-slate-900 border border-yellow-500/20 rounded-lg py-2 min-w-40">
                      <button
                        onClick={handleLogout}
                        className="w-full px-4 py-2 text-left text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10 transition"
                      >
                        {i18n.language === 'en' ? 'Logout' : 'خروج'}
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-lg bg-yellow-500 text-slate-900 font-semibold hover:bg-yellow-400 transition"
                >
                  {i18n.language === 'en' ? 'Login' : 'دخول'}
                </Link>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-yellow-400 hover:text-yellow-300"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 border-t border-yellow-500/20">
              <Link to="/" className="block px-4 py-2 text-gray-300 hover:text-yellow-400">
                {i18n.language === 'en' ? 'Home' : 'الرئيسية'}
              </Link>
              <div className="px-4 py-2 text-gray-300">
                <p className="font-semibold mb-2">{i18n.language === 'en' ? 'Simulations' : 'المحاكاات'}</p>
                <Link to="/simulations/black-hole" className="block text-sm py-1 text-gray-400 hover:text-yellow-400">
                  {i18n.language === 'en' ? 'Black Hole' : 'الثقوب السوداء'}
                </Link>
                <Link to="/simulations/spacetime" className="block text-sm py-1 text-gray-400 hover:text-yellow-400">
                  {i18n.language === 'en' ? 'Spacetime' : 'الزمكان'}
                </Link>
                <Link to="/simulations/solar-system" className="block text-sm py-1 text-gray-400 hover:text-yellow-400">
                  {i18n.language === 'en' ? 'Solar System' : 'النظام الشمسي'}
                </Link>
                <Link to="/simulations/schrodinger" className="block text-sm py-1 text-gray-400 hover:text-yellow-400">
                  {i18n.language === 'en' ? "Schrödinger's Cats" : 'قطط شرودنغر'}
                </Link>
                <Link to="/simulations/stars" className="block text-sm py-1 text-gray-400 hover:text-yellow-400">
                  {i18n.language === 'en' ? 'Stars' : 'النجوم'}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16 min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-yellow-500/20 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 SimUniverse. {i18n.language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
