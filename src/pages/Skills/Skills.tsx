import PageTransition from '../../components/PageTransition';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import skillsData from '../../data/skills.json';

interface SkillItem {
  name: string;
  level?: number;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  gradient: string;
  skills: SkillItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  Code: <CodeIcon fontSize="medium" />,
  Terminal: <TerminalIcon fontSize="medium" />,
  Storage: <StorageIcon fontSize="medium" />,
  Psychology: <PsychologyIcon fontSize="medium" />,
  Build: <BuildIcon fontSize="medium" />,
};

const skillCategories = skillsData.categories as SkillCategory[];
const softSkills = skillsData.softSkills as string[];

const Skills = () => {
  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto space-y-12">
        <SectionHeading
          badge="Technical Expertise"
          title="Skills & Proficiencies"
          subtitle="A comprehensive overview of my technical arsenal and interpersonal skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <Card
              key={category.id || idx}
              delay={0.1 * idx}
              className="p-6 flex flex-col group hover:border-blue-400/50"
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.gradient} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  {iconMap[category.icon] || <CodeIcon fontSize="medium" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
                  {category.title}
                </h3>
              </div>

              <ul className="space-y-4 flex-grow">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                        {!skill.level && (
                          <CheckCircleIcon
                            fontSize="inherit"
                            className="text-emerald-500"
                          />
                        )}
                        {skill.name}
                      </span>
                      {skill.level && (
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">
                          {skill.level}%
                        </span>
                      )}
                    </div>
                    {skill.level && (
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-200/60 dark:border-slate-700/60 shadow-inner">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + 0.1 * sIdx,
                            ease: 'easeOut',
                          }}
                          className="bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 h-2 rounded-full"
                        />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <Card
          delay={0.6}
          className="p-8 relative overflow-hidden bg-gradient-to-br from-white/90 via-blue-50/40 to-white/90 dark:from-slate-900/90 dark:via-blue-950/30 dark:to-slate-900/90"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-6 text-center">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3.5 relative z-10">
            {softSkills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + 0.1 * idx }}
                className="bg-white dark:bg-slate-800 border border-blue-200/80 dark:border-blue-800 px-5 py-2.5 rounded-2xl text-blue-700 dark:text-blue-300 font-bold shadow-xs hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default flex items-center gap-2"
              >
                <CheckCircleIcon fontSize="small" className="text-blue-500" />
                {skill}
              </motion.span>
            ))}
          </div>
        </Card>
      </section>
    </PageTransition>
  );
};

export default Skills;
