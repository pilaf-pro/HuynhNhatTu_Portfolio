import PageTransition from '../../components/PageTransition';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';

const Resume = () => {
  return (
    <PageTransition>
      <section className="max-w-5xl mx-auto space-y-12">
        <div>
          <SectionHeading
            badge="Curriculum Vitae"
            title="Resume"
            subtitle="My profile, education, and experience."
          />
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold mt-[-1.5rem]">
            <span className="bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs px-4 py-2 rounded-full text-slate-700 dark:text-slate-200">
              📍 Ho Chi Minh City, Vietnam
            </span>
            <span className="bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs px-4 py-2 rounded-full text-slate-700 dark:text-slate-200">
              ✉️ huynhnhattu5676@gmail.com
            </span>
            <span className="bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xs px-4 py-2 rounded-full text-slate-700 dark:text-slate-200">
              📞 +84 908 835 676
            </span>
            <a
              href="https://linkedin.com/in/huynhnhattu"
              target="_blank"
              rel="noreferrer"
              className="bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800/80 hover:bg-blue-100/70 dark:hover:bg-blue-900/60 px-4 py-2 rounded-full transition-colors shadow-xs"
            >
              🔗 linkedin.com/in/huynhnhattu
            </a>
            <a
              href="https://github.com/pilaf-pro"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 border border-slate-700 dark:border-slate-600 px-4 py-2 rounded-full transition-colors shadow-xs"
            >
              💻 github.com/pilaf-pro
            </a>
          </div>
        </div>

        <Card delay={0.2} className="p-8 border-l-4 border-l-blue-600">
          <h3 className="text-2xl font-extrabold mb-3 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <StarIcon className="text-amber-500" /> Career Objective
          </h3>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            A Frontend-focused developer seeking a Frontend Developer Intern
            position, with hands-on experience building cross-platform
            applications using ReactJS and React Native, backed by a solid
            JavaScript/TypeScript foundation. Passionate about crafting
            high-quality user experiences and collaborating in Agile teams,
            while actively deepening Node.js knowledge toward a Full-Stack
            Developer path.
          </p>
        </Card>

        {/* Interactive Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-200 dark:before:from-blue-900 before:via-indigo-300 dark:before:via-indigo-800 before:to-amber-200 dark:before:to-amber-900">
          {/* FPT University */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-11 h-11 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <SchoolIcon fontSize="small" />
            </div>
            <Card
              delay={0.3}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 hover:border-blue-400/50"
            >
              <div className="flex flex-col mb-2">
                <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800 px-3 py-1 rounded-full w-fit mb-2">
                  Oct 2022 – May 2026
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  FPT University
                </h4>
                <p className="text-slate-700 dark:text-slate-300 font-semibold mt-1">
                  Bachelor of Information Technology, Major in Software
                  Engineering
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm leading-relaxed">
                GPA:{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-bold">
                  3.1 / 4.0
                </strong>{' '}
                | Graduation Grade:{' '}
                <strong className="text-slate-900 dark:text-slate-100 font-bold">
                  Good
                </strong>{' '}
                <br />
                <span className="text-amber-600 dark:text-amber-400 font-semibold">
                  Honorable Student: Fall 2025 & Summer 2024
                </span>
              </p>
            </Card>
          </div>

          {/* UOW Malaysia KDU */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-11 h-11 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <SchoolIcon fontSize="small" />
            </div>
            <Card
              delay={0.4}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 hover:border-blue-400/50"
            >
              <div className="flex flex-col mb-2">
                <span className="inline-block text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800 px-3 py-1 rounded-full w-fit mb-2">
                  Feb 2023 – Mar 2023
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  UOW Malaysia KDU
                </h4>
                <p className="text-slate-700 dark:text-slate-300 font-semibold mt-1">
                  English Enhancement Programme
                </p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm leading-relaxed">
                Completed an academic English program in Malaysia covering all
                four language skills.
              </p>
            </Card>
          </div>

          {/* Amazing Tech */}
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-11 h-11 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-br from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <WorkIcon fontSize="small" />
            </div>
            <Card
              delay={0.5}
              className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 hover:border-indigo-400/50"
            >
              <div className="flex flex-col mb-3">
                <span className="inline-block text-xs font-bold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/80 border border-indigo-200/80 dark:border-indigo-800 px-3 py-1 rounded-full w-fit mb-2">
                  Jan 2025 – Apr 2025
                </span>
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-slate-100">
                  AMAZING TECHNOLOGY AND SOLUTION COMPANY LIMITED
                </h4>
                <p className="text-indigo-700 dark:text-indigo-300 font-bold mt-1">
                  Frontend Developer Intern
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs mt-2 italic bg-slate-100 dark:bg-slate-800/80 p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60">
                  Project: Business website for advertising signage and lightbox
                  design & installation | Team Size: 3
                </p>
              </div>
              <ul className="list-disc list-outside text-slate-600 dark:text-slate-300 space-y-2 ml-4 text-sm marker:text-indigo-500">
                <li>
                  Engineered real-time data synchronization utilizing WebSockets
                  for instant content updates without page reloads.
                </li>
                <li>
                  Developed a dynamic CMS implementing QuillJS for seamless rich
                  text editing of news and services.
                </li>
                <li>
                  Architected centralized state management using Redux Toolkit
                  and Axios interceptors for optimized API requests.
                </li>
                <li>
                  Designed a responsive UI leveraging Ant Design and Material-UI
                  for an engaging cross-device experience.
                </li>
                <li>
                  Implemented SEO optimization utilizing React Helmet to enhance
                  platform visibility and search engine indexing.
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Resume;
