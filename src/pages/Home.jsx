import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { i18n } = useTranslation();
  const { user } = useAuth();

  const simulations = [
    {
      id: 'black-hole',
      icon: '⚫',
      titleEn: 'Black Hole Simulation',
      titleAr: 'محاكاة الثقوب السوداء',
      descEn: 'Explore the mysteries of black holes and their gravity effects',
      descAr: 'استكشف أسرار الثقوب السوداء وتأثيرات جاذبيتها',
      link: '/simulations/black-hole',
      stats: [20, 100, 200, 88]
    },
    {
      id: 'spacetime',
      icon: '🌀',
      titleEn: 'Spacetime Simulation',
      titleAr: 'محاكاة الزمكان',
      descEn: 'Understand the structure of space and time',
      descAr: 'افهم بنية الفضاء والزمن',
      link: '/simulations/spacetime',
      stats: [15, 80, 150, 76]
    },
    {
      id: 'solar-system',
      icon: '☀️',
      titleEn: 'Solar System Simulation',
      titleAr: 'محاكاة النظام الشمسي',
      descEn: 'Explore our solar system and planetary motion',
      descAr: 'استكشف نظامنا الشمسي وحركة الكواكب',
      link: '/simulations/solar-system',
      stats: [25, 120, 250, 92]
    },
    {
      id: 'schrodinger',
      icon: '🐱',
      titleEn: "Schrödinger's Cats",
      titleAr: 'قطط شرودنغر',
      descEn: 'Discover quantum mechanics principles',
      descAr: 'اكتشف مبادئ الميكانيكا الكمية',
      link: '/simulations/schrodinger',
      stats: [10, 60, 120, 85]
    },
    {
      id: 'stars',
      icon: '⭐',
      titleEn: 'Stars Simulation',
      titleAr: 'محاكاة النجوم',
      descEn: 'Explore stars and their characteristics',
      descAr: 'استكشف النجوم وخصائصها',
      link: '/simulations/stars',
      stats: [18, 95, 180, 89]
    }
  ];

  const isRTL = i18n.language === 'ar';

  return (
    <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-5xl">🌌</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {i18n.language === 'en' ? 'Discover the Universe' : 'اكتشف الكون'}
            </h1>
            <p className="text-xl text-gray-300 mb-2">
              {i18n.language === 'en'
                ? 'Explore the secrets of space with interactive simulations'
                : 'استكشف أسرار الفضاء من خلال محاكاات تفاعلية'}
            </p>
            <p className="text-lg text-yellow-400 font-semibold mb-8">
              {i18n.language === 'en'
                ? 'An integrated platform for discovering astronomical secrets'
                : 'منصة متكاملة لاستكشاف أسرار الفضاء والبحث'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-yellow-500 text-slate-900 font-bold hover:bg-yellow-400 transition transform hover:scale-105">
                ⭐ {i18n.language === 'en' ? 'Browse Guides' : 'استكشف الكوكبة'}
              </button>
              <a
                href="#simulations"
                className="px-8 py-3 rounded-full border-2 border-yellow-500 text-yellow-400 font-bold hover:bg-yellow-500/10 transition"
              >
                🚀 {i18n.language === 'en' ? 'Explore Simulations' : 'استكشف المحاكاات'}
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4 text-center hover:border-yellow-400/50 transition">
              <p className="text-3xl font-bold text-yellow-400">+20</p>
              <p className="text-gray-400 text-sm">{i18n.language === 'en' ? 'Simulations' : 'المحاكاات'}</p>
            </div>
            <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4 text-center hover:border-yellow-400/50 transition">
              <p className="text-3xl font-bold text-yellow-400">100</p>
              <p className="text-gray-400 text-sm">{i18n.language === 'en' ? 'Articles' : 'المقالات'}</p>
            </div>
            <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4 text-center hover:border-yellow-400/50 transition">
              <p className="text-3xl font-bold text-yellow-400">+200</p>
              <p className="text-gray-400 text-sm">{i18n.language === 'en' ? 'Galaxies' : 'المجرات'}</p>
            </div>
            <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-4 text-center hover:border-yellow-400/50 transition">
              <p className="text-3xl font-bold text-yellow-400">88</p>
              <p className="text-gray-400 text-sm">{i18n.language === 'en' ? 'Rating' : 'التقييم'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simulations Section */}
      <section id="simulations" className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
          {i18n.language === 'en' ? 'Famous Simulations' : 'أشهر المحاكاات'}
        </h2>
        <p className="text-center text-gray-400 mb-12">
          {i18n.language === 'en'
            ? 'Choose a simulation to explore'
            : 'اختر محاكاة لاستكشافها'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {simulations.map((sim) => (
            <Link
              key={sim.id}
              to={user ? sim.link : '/login'}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-yellow-500/20 rounded-lg overflow-hidden hover:border-yellow-400 transition transform hover:scale-105"
            >
              <div className="p-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition transform">
                  {sim.icon}
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  {i18n.language === 'en' ? sim.titleEn : sim.titleAr}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {i18n.language === 'en' ? sim.descEn : sim.descAr}
                </p>
                {!user && (
                  <p className="text-sm text-orange-400 font-semibold">
                    {i18n.language === 'en' ? 'Login required' : 'تسجيل دخول مطلوب'}
                  </p>
                )}
              </div>
              <div className="bg-yellow-500/10 px-6 py-3 text-yellow-400 font-semibold group-hover:bg-yellow-500/20 transition">
                {i18n.language === 'en' ? 'Open Simulation' : 'فتح المحاكاة'} →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          {i18n.language === 'en' ? 'Why Choose SimUniverse?' : 'لماذا تختار سيميونيفيرس؟'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-400 transition">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              {i18n.language === 'en' ? 'Interactive Learning' : 'تعلم تفاعلي'}
            </h3>
            <p className="text-gray-400">
              {i18n.language === 'en'
                ? 'Experience astronomy through interactive 3D simulations'
                : 'اختبر علم الفلك من خلال محاكاات ثلاثية الأبعاد التفاعلية'}
            </p>
          </div>

          <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-400 transition">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              {i18n.language === 'en' ? 'Scientific Accuracy' : 'دقة علمية'}
            </h3>
            <p className="text-gray-400">
              {i18n.language === 'en'
                ? 'All simulations are based on actual scientific research'
                : 'جميع المحاكاات تستند على أبحاث علمية فعلية'}
            </p>
          </div>

          <div className="bg-slate-800/50 border border-yellow-500/20 rounded-lg p-6 hover:border-yellow-400 transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-xl font-bold text-yellow-400 mb-2">
              {i18n.language === 'en' ? 'Mobile Friendly' : 'متوافق مع الهواتف'}
            </h3>
            <p className="text-gray-400">
              {i18n.language === 'en'
                ? 'Access simulations on any device'
                : 'احصل على الوصول إلى المحاكاات على أي جهاز'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
