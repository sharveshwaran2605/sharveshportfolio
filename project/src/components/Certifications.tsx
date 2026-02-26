import { Award, Palette, Code, Shield, Medal } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Completed java course',
      issuer: 'UDEMY',
      description: 'Comprehensive certification in cloud computing concepts, architecture, and deployment models.',
      icon: Code,
      color: 'blue',
    },
    {
      title: 'Completed 1 month of an intership program',
      issuer: 'LOTUS INFO SERVE',
      description: 'Advanced training in user interface and user experience design principles and methodologies.',
      icon: Shield,
      color: 'cyan',
    },
    {
      title: 'Ethical Hacking ',
      issuer: 'KAASHIV INFOTECH ',
      description: 'Hands-on experience in full-stack web development including frontend and backend technologies.',
      icon: Code,
      color: 'teal',
    },
    {
      title: 'Introduction to Unity and AR App development ',
      issuer: 'SCOPIC EDUTECH PVT LTD',
      description: 'National Cadet Corps B and C certificates demonstrating leadership and discipline.',
      icon: Palette,
      color: 'green',
    },
    {
      title: '  Artificial Intelligence Fundamentals',
      issuer: 'IBM',
      description: 'IBM Bootcamp Certified in Artificial Intelligence Fundamentals, with hands-on learning in AI concepts, models, and real-world applications.',
      icon: Medal,
      color: 'blue',
    },
    {
      title: ' Skills Build - Customer Engagement: Communication and Personality Dynamics',
      issuer: 'IBM',
      description: 'Completed IBM SkillsBuild certification in Customer Engagement, focusing on effective communication and personality dynamics.',
      icon: Medal,
      color: 'teal',
    },
    {
      title: 'Skills Build - Customer Engagement: Problem Solving and Process Controls',
      issuer: 'IBM',
      description: 'Completed IBM SkillsBuild certification in Customer Engagement, focusing on problem-solving techniques and process control principles.',
      icon: Medal,
      color: 'cyan',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-600 to-blue-400',
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-600',
      },
      cyan: {
        gradient: 'from-cyan-600 to-cyan-400',
        bg: 'bg-cyan-50 dark:bg-cyan-900/20',
        text: 'text-cyan-600',
      },
      teal: {
        gradient: 'from-teal-600 to-teal-400',
        bg: 'bg-teal-50 dark:bg-teal-900/20',
        text: 'text-teal-600',
      },
      green: {
        gradient: 'from-green-600 to-green-400',
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-600',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and recognitions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            const colorClasses = getColorClasses(cert.color);

            return (
              <div
                key={idx}
                className="group relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${colorClasses.gradient} transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                        {cert.title}
                      </h3>
                      <p className={`text-sm font-semibold ${colorClasses.text}`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2">
                    <Award className={colorClasses.text} size={20} />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Verified Certification
                    </span>
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
