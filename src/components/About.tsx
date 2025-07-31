import React from 'react';
import { Code2, Brain, Rocket } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: 'Full Stack Development',
      description: 'Experienced in building complete web applications from frontend to backend with modern technologies.'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Integration',
      description: 'Passionate about integrating intelligent systems and AI-powered solutions into web applications.'
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Problem Solver',
      description: 'Focused on creating scalable, ethical, and meaningful digital solutions for real-world challenges.'
    }
  ];

  return (
    <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              I'm an innovative and solution-oriented full-stack web developer and AI enthusiast with practical experience in building functional web applications and integrating intelligent systems.
            </p>
            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              My passion lies in creating scalable, ethical, and meaningful digital solutions that solve real-world problems using cutting-edge technology. I believe in the power of technology to make a positive impact on society.
            </p>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Currently pursuing my Bachelor's degree in Economics while actively developing my technical skills through hands-on projects and collaborative development experiences.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg transition-all duration-300 hover:shadow-lg ${
                  darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className={`text-blue-500 mb-4`}>
                  {highlight.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {highlight.title}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;