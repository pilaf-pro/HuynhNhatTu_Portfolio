import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
}

const SectionHeading = ({ title, subtitle, badge }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-14">
      {badge && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-3"
        >
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 px-3.5 py-1.5 rounded-full shadow-xs">
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 dark:from-slate-100 dark:via-blue-200 dark:to-indigo-300 bg-clip-text text-transparent pb-1"
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="flex items-center justify-center space-x-3 my-4"
      >
        <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-blue-500 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-blue-600 shadow-xs shadow-blue-500" />
        <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-blue-500 rounded-full" />
      </motion.div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-slate-600 dark:text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
