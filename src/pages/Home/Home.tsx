import { motion } from 'framer-motion';
import PageTransition from '../../components/PageTransition';
import Button from '../../components/ui/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DownloadIcon from '@mui/icons-material/Download';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Typewriter from '../../components/ui/Typewriter';
import avatarImg from '../../assets/avatar/avatar.jpg';

const Home = () => {
  return (
    <PageTransition>
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 min-h-[75vh] py-8">
        <article className="flex-1 space-y-6 text-center md:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 shadow-xs mb-4">
              <AutoAwesomeIcon fontSize="small" className="text-amber-500" />
              <span>Available for Frontend Intern Opportunities</span>
            </div>

            <h2 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              Hi, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent tracking-tight leading-tight mb-3 whitespace-nowrap">
              HUYNH NHAT TU
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold min-h-[40px] flex items-center justify-center md:justify-start">
              <Typewriter
                prefix="Frontend Developer "
                words={['Intern', 'ReactJS', 'React Native']}
                typeSpeed={90}
                deleteSpeed={50}
                delayBetweenWords={2000}
                textClassName="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent"
                cursorClassName="text-blue-600 dark:text-blue-400 animate-cursor-blink ml-1 font-normal"
              />
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-slate-600 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            A Frontend-focused developer seeking a Frontend Developer Intern
            position, with hands-on experience building cross-platform
            applications using ReactJS and React Native, backed by a solid
            JavaScript/TypeScript foundation. Passionate about crafting
            high-quality user experiences and collaborating in Agile teams,
            while actively deepening Node.js knowledge toward a Full-Stack
            Developer path.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
          >
            <Button to="/projects" variant="primary">
              View Projects <ArrowForwardIcon fontSize="small" />
            </Button>
            <Button
              href="/CV/CV_FrontendDeveloperIntern_HuynhNhatTu.pdf"
              variant="outline"
            >
              Download CV <DownloadIcon fontSize="small" />
            </Button>
          </motion.div>
        </article>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex-1 flex justify-center items-center relative"
        >
          {/* Ambient Radial Glow background matching MLN122 */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-amber-300/20 blur-3xl rounded-full pointer-events-none" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 flex justify-center"
          >
            <img
              src={avatarImg}
              alt="HUYNH NHAT TU Avatar"
              className="max-w-full max-h-[480px] w-auto h-auto rounded-3xl shadow-2xl shadow-blue-950/15 object-contain hover:scale-102 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;
