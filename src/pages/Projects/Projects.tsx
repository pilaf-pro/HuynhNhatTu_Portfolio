import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import PageTransition from '../../components/PageTransition';
import SectionHeading from '../../components/ui/SectionHeading';
import Card from '../../components/ui/Card';
import projectsRawData from '../../data/projects.json';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import type { Project } from '../../types/project';

const projectsData = projectsRawData as Project[];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const allTags: string[] = [
    'All',
    ...new Set(projectsData.flatMap((p) => p.tags)),
  ];

  // Configure Fuse.js for Fuzzy Search
  const fuse = useMemo(() => {
    return new Fuse(projectsData, {
      keys: ['title', 'description', 'tags'],
      threshold: 0.35,
      includeScore: true,
    });
  }, []);

  const searchedProjects: Project[] = useMemo(() => {
    if (!searchQuery.trim()) return projectsData;
    return fuse.search(searchQuery).map((result) => result.item);
  }, [searchQuery, fuse]);

  const filteredProjects: Project[] = useMemo(() => {
    if (activeFilter === 'All') return searchedProjects;
    return searchedProjects.filter((p) => p.tags.includes(activeFilter));
  }, [searchedProjects, activeFilter]);

  return (
    <PageTransition>
      <section className="space-y-12">
        <SectionHeading
          badge="Portfolio Gallery"
          title="Featured Projects"
          subtitle="Real-world products and academic projects."
        />

        {/* Search Bar & Filter Section */}
        <div className="space-y-6 max-w-xl mx-auto mb-10">
          <div className="relative flex items-center">
            <SearchIcon
              className="absolute left-4 text-slate-400 dark:text-slate-500 pointer-events-none"
              fontSize="small"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by title, description, or tech stack..."
              className="w-full pl-11 pr-10 py-3 bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 rounded-2xl text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 shadow-sm transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Clear search"
              >
                <ClearIcon fontSize="small" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2.5">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 outline-none focus:ring-2 focus:ring-blue-500 ${
                  activeFilter === tag
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:bg-blue-50/60 dark:hover:bg-blue-950/60 hover:text-blue-600 dark:hover:text-blue-400 shadow-xs'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid / Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-white/60 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-xs max-w-md mx-auto">
            <p className="text-slate-600 dark:text-slate-300 text-base mb-4 font-medium">
              No projects found matching "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveFilter('All');
              }}
              className="px-4 py-2 bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-800 rounded-xl text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors shadow-xs"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                delay={0.1 * idx}
                className="flex flex-col group h-full hover:border-blue-400/50 dark:hover:border-blue-500/50 hover:shadow-2xl transition-all duration-500 rounded-3xl"
              >
                <div className="h-64 bg-slate-900 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent z-10 opacity-70" />
                  <img
                    src={project.thumbnail}
                    alt={`${project.title} thumbnail`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2 justify-end">
                    {project.githubLinks && project.githubLinks.length > 0 ? (
                      project.githubLinks.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View Source Code (${link.label})`}
                          title={`GitHub (${link.label})`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md transition-all transform hover:scale-105"
                        >
                          <GitHubIcon fontSize="small" />
                          <span>{link.label}</span>
                        </a>
                      ))
                    ) : project.githubLink ? (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Source Code"
                        title="GitHub"
                        className="p-2.5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md rounded-full text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md transition-all transform hover:scale-110"
                      >
                        <GitHubIcon fontSize="small" />
                      </a>
                    ) : null}

                    {project.isDeployed && project.demoLink ? (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Live Demo"
                        title="Live Demo"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 backdrop-blur-md rounded-full text-white text-xs font-bold hover:bg-blue-700 shadow-md shadow-blue-500/30 transition-all transform hover:scale-105"
                      >
                        <OpenInNewIcon fontSize="small" />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <div className="relative group/tooltip inline-block">
                        <button
                          disabled
                          type="button"
                          aria-label="Demo - Not Deployed"
                          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-md rounded-full text-slate-400 dark:text-slate-500 border border-slate-200/80 dark:border-slate-700 text-xs font-bold cursor-not-allowed opacity-80 shadow-xs"
                        >
                          <OpenInNewIcon
                            fontSize="small"
                            className="text-slate-400 dark:text-slate-500"
                          />
                          <span>Demo</span>
                        </button>

                        {/* Animated Glassmorphism Tooltip */}
                        <div className="absolute right-0 top-full mt-2.5 opacity-0 scale-95 translate-y-[-4px] group-hover/tooltip:opacity-100 group-hover/tooltip:scale-100 group-hover/tooltip:translate-y-0 transition-all duration-200 ease-out pointer-events-none z-30 flex items-center gap-2 bg-slate-900/95 dark:bg-slate-950/95 backdrop-blur-md text-slate-200 text-xs font-semibold px-3 py-1.5 rounded-xl shadow-2xl border border-slate-700/60 whitespace-nowrap">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                          <span>Not Deployed</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-7 flex flex-col flex-grow relative z-20 bg-white/90 dark:bg-slate-900/90">
                  <h3 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-50 dark:bg-blue-950/80 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-lg shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
};

export default Projects;
