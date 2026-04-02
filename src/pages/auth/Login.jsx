import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(i18n.language === 'en' ? 'Invalid email or password' : 'البريد الإلكتروني أو كلمة المرور غير صحيحة');
    } finally {
      setLoading(false);
    }
  };

  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-yellow-500/20 rounded-lg p-8">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">🚀</div>
            <h1 className="text-3xl font-bold text-yellow-400">
              {i18n.language === 'en' ? 'Welcome Back' : 'مرحبا بك'}
            </h1>
            <p className="text-gray-400 mt-2">
              {i18n.language === 'en' 
                ? 'Login to access simulations' 
                : 'سجل دخولك للوصول إلى المحاكاات'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">
                {i18n.language === 'en' ? 'Email' : 'البريد الإلكتروني'}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-yellow-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                {i18n.language === 'en' ? 'Password' : 'كلمة المرور'}
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-700/50 border border-yellow-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-3 rounded-lg bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-400 transition disabled:opacity-50"
            >
              {loading ? (i18n.language === 'en' ? 'Logging in...' : 'جاري الدخول...') : (i18n.language === 'en' ? 'Login' : 'دخول')}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            {i18n.language === 'en' ? "Don't have an account? " : 'ليس لديك حساب؟ '}
            <Link to="/register" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              {i18n.language === 'en' ? 'Sign Up' : 'سجل الآن'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
