import { User, Target, Lightbulb, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
                <User className="text-blue-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Hello! I'm SHARVESHWARAN S
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  A motivated B.E Computer Science Engineering student graduating in 2026, aspiring to excel as a Software Developer.
                   I leverage strong coding skills and logical thinking to develop innovative and efficient software solutions that solve real-world problems.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <div className="relative bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-2xl p-8 border-2 border-cyan-200 dark:border-cyan-800">
                <Target className="text-cyan-600 mb-4" size={40} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Focus
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Specializing in user-centered design, accessibility, and
                  performance-driven interfaces. I create intuitive designs that not only
                  look beautiful but also provide seamless user experiences across all
                  devices.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 shadow-xl">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-600 rounded-lg">
                  <Lightbulb className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Design Philosophy
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Every pixel has a purpose. I believe in creating designs that are not
                    just aesthetically pleasing but solve real user problems with
                    elegance and efficiency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-600 rounded-lg">
                  <Code className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Development Approach
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Clean, maintainable code that brings designs to life. I focus on
                    responsive design, performance optimization, and implementing
                    delightful micro-interactions.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold">
                  Projects Completed
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  83%
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-semibold">
                  Academic Score
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
