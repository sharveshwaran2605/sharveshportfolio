import { Palette, Code2, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming',
      icon: Cpu,
      color: 'green',
      skills: [
        { name: 'Java (Core)', level: 80 },
        { name: 'OOP', level: 82 },
        { name: 'Python', level: 80 },
        { name: 'SQL', level: 78 },
        { name: 'Data Structures', level: 78 }
      ],
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'blue',
      skills: [
        { name: 'UI Design', level: 90 },
        { name: 'UX Design', level: 85 },
        { name: 'Wireframing', level: 88 },
        { name: 'Prototyping', level: 87 },
        { name: 'Design Systems', level: 82 },
        { name: 'Usability & Accessibility', level: 85 },
      ],
    },
    {
      title: 'Design Tools',
      icon: Wrench,
      color: 'cyan',
      skills: [
        { name: 'Figma', level: 92 },
        { name: 'FigJam', level: 88 },
        { name: 'Adobe Illustrator', level: 80 },
        { name: 'Canva', level: 85 },
        { name: 'Blender', level: 75 },
      ],
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'teal',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 88 },
        { name: 'JavaScript', level: 85 },
        { name: 'Responsive Design', level: 92 },
      ],
    },
    
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        gradient: 'from-blue-600 to-blue-400',
        bg: 'bg-blue-100 dark:bg-blue-900/20',
        border: 'border-blue-200 dark:border-blue-800',
        text: 'text-blue-600',
        progress: 'bg-blue-600',
      },
      cyan: {
        gradient: 'from-cyan-600 to-cyan-400',
        bg: 'bg-cyan-100 dark:bg-cyan-900/20',
        border: 'border-cyan-200 dark:border-cyan-800',
        text: 'text-cyan-600',
        progress: 'bg-cyan-600',
      },
      teal: {
        gradient: 'from-teal-600 to-teal-400',
        bg: 'bg-teal-100 dark:bg-teal-900/20',
        border: 'border-teal-200 dark:border-teal-800',
        text: 'text-teal-600',
        progress: 'bg-teal-600',
      },
      green: {
        gradient: 'from-green-600 to-green-400',
        bg: 'bg-green-100 dark:bg-green-900/20',
        border: 'border-green-200 dark:border-green-800',
        text: 'text-green-600',
        progress: 'bg-green-600',
      },
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const colorClasses = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={idx}
                className={`group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${colorClasses.border}`}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity`}></div>

                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${colorClasses.gradient}`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <div key={skillIdx} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className={`text-sm font-bold ${colorClasses.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${colorClasses.progress} rounded-full transition-all duration-1000 ease-out group-hover/skill:opacity-90`}
                            style={{
                              width: `${skill.level}%`,
                              animation: `slideIn 1s ease-out ${skillIdx * 0.1}s both`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
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
