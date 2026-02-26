import { GraduationCap, Award } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'B.E Computer Science Engineering',
      institution: 'Velammal Institute of Technology',
      year: '2022 - 2026',
      score: '8.4 CGPA',
      icon: GraduationCap,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Model matric Hr. Sec. School',
      year: '2020 - 2022',
      score: '78.88%',
      icon: Award,
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Model matric Hr. Sec. School',
      year: '2019 - 2020',
      score: '54%',
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and achievements
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-600 to-teal-600">
          </div>
          {education.map((item, idx) => {
            const Icon = item.icon;
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={idx}
                className={`relative mb-12 ${
                  isLeft ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                <div
                  className={`flex items-start gap-6 md:gap-8 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg z-10">
                    <Icon className="text-white" size={28} />
                  </div>

                  <div className="ml-24 md:ml-0 w-full">
                    <div
                      className={`group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-600 ${
                        isLeft ? 'md:mr-16' : 'md:ml-16'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {item.degree}
                        </h3>
                        <span className="px-3 py-1 text-sm font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full">
                          {item.score}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-2 font-semibold">
                        {item.institution}
                      </p>
                      <p className="text-gray-500 dark:text-gray-500 text-sm">
                        {item.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
