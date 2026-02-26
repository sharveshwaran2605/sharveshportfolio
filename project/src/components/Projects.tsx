import { ExternalLink, Figma, Code, Sparkles,Laptop, X,  } from 'lucide-react';
import { useState } from 'react';

import chatgptVideo from '../assets/projects/chatgpt.mp4';
import glarixVideo from '../assets/projects/glarix.in.mp4';
import glarixMockup from '../assets/projects/glarix.png';

type MediaBlock = {
  video?: string;
  image?: string;
};

type Project = {
  title: string;
  tools: string[];
  icon: any;
  gradient: string;
  link?: string;
  video?: string;
  mockup?: string;
  mediaBlocks?: MediaBlock[];
  cover?: string; 
};

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'Smart Laptop Monitoring and remote security system',
      tools: ['java', 'cloud','springboot','HTML','CSS','JS'],
      icon: Laptop,
      gradient: 'from-green-600 to-emerald-600',
    },
    {
      title: 'AI-Based Maintenance Tracking System',
      tools: ['Figma', 'UI Design', 'AI Integration'],
      icon: Code,
      gradient: 'from-blue-600 to-cyan-600',
      link: 'https://maintainease.created.app/',
    },
    {
      title: 'AI Resume Analyzer with ATS Optimization',
      tools: ['Figma', 'UX Research', 'AI Integration'],
      icon: Sparkles,
      gradient: 'from-green-600 to-emerald-600',
      link: 'https://jobfinderpro.created.app/',
    },
    {
      title: 'Glarix.in – Freelance UI/UX Project',
      tools: ['Figma', 'Branding', 'Responsive Design'],
      icon: Figma,
      gradient: 'from-cyan-600 to-teal-600',
      video: glarixVideo,
      mockup: glarixMockup,
      cover: glarixMockup,
    },
    {
      title: 'ChatGPT Landing Page – UI Concept',
      tools: ['Figma', 'Prototype', 'Motion UI'],
      icon: Figma,
      gradient: 'from-teal-600 to-green-600',
      video: chatgptVideo,
    },

    {
      title: 'AI-Based Badminton Trainer',
      tools: ['Figma', 'UX Research'],
      icon: Sparkles,
      gradient: 'from-green-600 to-emerald-600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full" />
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work in UI/UX design and frontend development
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <div
                key={idx}
                className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
              >
                <div className={`p-4 rounded-xl bg-gradient-to-r ${project.gradient} inline-flex mb-4`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-semibold dark:text-white mb-4">
                  {project.title}
                </h3>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-white dark:bg-gray-700 rounded-full"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold"
                  >
                    View Project <ExternalLink size={16} />
                  </a>
                )}

                {(project.video || project.mediaBlocks) && (
                  <button
                    onClick={() => setActiveProject(project)}
                    className="inline-flex items-center gap-2 text-green-600 font-semibold"
                  >
                    View Preview
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {activeProject && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden">

            {/* CLOSE */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 bg-black/60 text-white p-2 rounded-full"
            >
              <X size={22} />
            </button>

            {/* ONE SCROLL CONTAINER */}
            <div className="h-full overflow-y-auto">

              {/* VIDEO ON TOP (NORMAL PROJECTS) */}
              {activeProject.video && !activeProject.mediaBlocks && (
                <video
                  src={activeProject.video}
                  controls
                  autoPlay
                  className="w-full h-[60vh] object-contain bg-black"
                />
              )}

              {/* CONTENT */}
              <div className="p-6 space-y-12">
              {/* 🔹 VIDEO LAST (ONLY UI/UX EXPLORATIONS) */}
               {activeProject.video && activeProject.title === 'UI/UX Design Explorations' && (
                 <video 
                 src={activeProject.video}
                  controls className="w-full h-[60vh] object-contain bg-black" 
                  />
                   )}
                {/* TITLE */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>

                {/* MULTI MEDIA BLOCKS */}
                {activeProject.mediaBlocks?.map((block, index) => (
                  <div key={index} className="space-y-6">
                    {block.video && (
                      <video
                        src={block.video}
                        controls
                        className="w-full h-[60vh] object-contain bg-black rounded-xl"
                      />
                    )}

                    {block.image && (
                      <img
                        src={block.image}
                        alt="Project mockup"
                        className="w-full rounded-xl shadow-lg"
                      />
                    )}
                  </div>
                ))}

                {/* SINGLE MOCKUP */}
                {activeProject.mockup && !activeProject.mediaBlocks && (
                  <img
                    src={activeProject.mockup}
                    alt="Project mockups"
                    className="w-full rounded-xl shadow-lg"
                  />
                )}

              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
