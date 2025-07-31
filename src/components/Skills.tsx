import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Python', 'JavaScript', 'C', 'HTML', 'CSS']
    },
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend & Databases',
      skills: ['Node.js', 'Supabase', 'REST APIs', 'JSON', 'PlanetScale', 'PostgreSQL']
    },
    {
      title: 'Cloud & Deployment',
      skills: ['Supabase', 'Netlify', 'Vercel', 'AWS S3', 'Cloudflare R2', 'Docker']
    },
    {
      title: 'Authentication & Payments',
      skills: ['Supabase Auth', 'Stripe', 'OAuth', 'Session Management']
    },
    {
      title: 'AI/ML & Tools',
      skills: ['Python ML', 'Deep Learning', 'Computer Vision', 'NLP', 'Reinforcement Learning', 'AI Ethics']
    },
    {
      title: 'Dev Tools & APIs',
      skills: ['OpenAI', 'Stability AI', 'Clipdrop', 'Git', 'GitHub', 'VS Code', 'Figma']
    }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
                      darkMode
                        ? 'bg-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
                    } shadow-sm hover:shadow-md cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;