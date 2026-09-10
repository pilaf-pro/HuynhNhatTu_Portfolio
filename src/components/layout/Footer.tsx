import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import BuildIcon from '@mui/icons-material/Build';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CodeIcon from '@mui/icons-material/Code';

const Footer = () => {
  const navItems = [
    { href: '/', label: 'Home', icon: HomeIcon },
    { href: '/resume', label: 'Resume', icon: DescriptionIcon },
    { href: '/skills', label: 'Skills', icon: BuildIcon },
    { href: '/projects', label: 'Projects', icon: FolderSpecialIcon },
    { href: '/contact', label: 'Contact', icon: ContactMailIcon },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white overflow-hidden mt-auto">
      {/* Decorative background ambient glows matching MLN122 */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg text-white font-bold">
                <CodeIcon fontSize="small" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Huynh Nhat Tu
                </h3>
                <p className="text-blue-300 text-xs font-medium">
                  Frontend Developer Intern
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              Passionate Frontend-focused developer crafting high-quality user
              interfaces with ReactJS, React Native, and TypeScript.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://github.com/pilaf-pro"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors text-slate-300 hover:text-white"
              >
                <GitHubIcon fontSize="small" />
              </a>
              <a
                href="https://linkedin.com/in/huynhnhattu"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors text-slate-300 hover:text-white"
              >
                <LinkedInIcon fontSize="small" />
              </a>
              <a
                href="mailto:huynhnhattu5676@gmail.com"
                aria-label="Email"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors text-slate-300 hover:text-white"
              >
                <EmailIcon fontSize="small" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-blue-300 transition-colors flex items-center text-sm group"
                    >
                      <Icon className="w-4 h-4 mr-2 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Core Competencies */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Key Competencies
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">→</span> ReactJS &
                React Native
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">→</span> TypeScript &
                JavaScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">→</span> Tailwind CSS
                & AntD / MUI
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">→</span> REST APIs &
                WebSockets
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400 font-bold">→</span> Redux Toolkit
                & State
              </li>
            </ul>
          </div>

          {/* Highlight Quote Card matching MLN122 */}
          <div>
            <h4 className="text-base font-bold text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Developer Statement
            </h4>
            <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-xl p-4 shadow-xl">
              <blockquote className="text-slate-300 italic text-xs leading-relaxed mb-2">
                "Crafting responsive, high-performance web and mobile solutions
                with clean architecture and modern UX standards."
              </blockquote>
              <cite className="text-xs text-blue-300 not-italic font-semibold block">
                — Huynh Nhat Tu
              </cite>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700/60 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Huynh Nhat Tu. All rights
            reserved.
          </div>

          <div className="flex items-center space-x-1.5">
            <span>Crafted with</span>
            <FavoriteIcon
              fontSize="inherit"
              className="text-red-500 animate-pulse"
            />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Decorative bottom rainbow line matching MLN122 */}
      <div className="h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-indigo-600" />
    </footer>
  );
};

export default Footer;
