import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError(i18n.language === 'en' ? 'Passwords do not match' : 'كلمات المرور غير متطابقة');
      return;
    }

    if (password.length < 6) {
      setError(i18n.language === 'en' ? 'Password must be at least 6 characters' : 'يجب أن تكون كلمة المرور 6 أحرف على الأقل');
      return;
    }

    setLoading(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError(i18n.language === 'en' ? 'Email already in use' : 'البريد الإلكتروني قيد الاستخدام بالفعل');
      } else {
        setError(i18n.language === 'en' ? 'Error creating account' : 'خطأ في إنشاء الحساب');
      }
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
            <div className="text-4xl mb-4">🌟</div>
            <h1 className="text-3xl font-bold text-yellow-400">
              {i18n.language === 'en' ? 'Join Us' : 'انضم إلينا'}
            </h1>
            <p className="text-gray-400 mt-2">
              {i18n.language === 'en' 
                ? 'Create an account to start exploring' 
                : 'أنشئ حسابا لبدء الاستكشاف'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
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

            <div>
              <label className="block text-gray-300 mb-2">
                {i18n.language === 'en' ? 'Confirm Password' : 'تأكيد كلمة المرور'}
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? (i18n.language === 'en' ? 'Creating account...' : 'جاري إنشاء الحساب...') : (i18n.language === 'en' ? 'Sign Up' : 'تسجيل')}
            </button>
          </form>

          <p className="text-center text-gray-400 mt-6">
            {i18n.language === 'en' ? 'Already have an account? ' : 'هل لديك حساب بالفعل؟ '}
            <Link to="/login" className="text-yellow-400 hover:text-yellow-300 font-semibold">
              {i18n.language === 'en' ? 'Login' : 'دخول'}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
