import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50/60 via-slate-50 to-amber-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-800 dark:text-slate-100 relative overflow-x-hidden transition-colors duration-300">
      {/* Background Decorative Ambient Glows matching MLN122 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-60 dark:opacity-25 transition-opacity duration-300">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-indigo-400/10 dark:bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 left-1/3 w-[26rem] h-[26rem] bg-amber-300/15 dark:bg-amber-500/15 rounded-full blur-3xl" />
      </div>

      <Header />

      {/* Main Content Area */}
      <main className="flex-grow max-w-6xl mx-auto w-full px-4 sm:px-6 py-10 md:py-14 relative z-10">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
