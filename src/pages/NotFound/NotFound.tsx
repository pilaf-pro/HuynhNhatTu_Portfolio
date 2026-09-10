import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import Button from '../../components/ui/Button';
import HomeIcon from '@mui/icons-material/Home';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const NotFound = () => {
  return (
    <PageTransition>
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center py-12 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="relative text-8xl md:text-9xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 bg-clip-text text-transparent tracking-tighter">
            404
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 max-w-md mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-600 bg-amber-50 border border-amber-200/80 shadow-xs">
            <SentimentDissatisfiedIcon fontSize="small" />
            <span>Page Not Found</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
            Oops! Page Not Found
          </h2>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            The page you are looking for doesn't exist, has been removed, or is
            temporarily unavailable.
          </p>

          <div className="pt-4 flex justify-center">
            <Button to="/" variant="primary">
              <HomeIcon fontSize="small" /> Back to Home
            </Button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
