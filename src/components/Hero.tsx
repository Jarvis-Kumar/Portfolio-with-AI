import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    } transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className={`w-32 h-32 mx-auto rounded-full ${
              darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gradient-to-r from-blue-500 to-purple-500'
            } flex items-center justify-center mb-8 shadow-lg`}>
              <span className="text-4xl font-bold text-white">DK</span>
            </div>
          </div>

          <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          } animate-fade-in`}>
            Dinesh Kumar P.
          </h1>

          <p className={`text-xl md:text-2xl mb-8 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          } animate-fade-in-delay-1`}>
            Full Stack AI & Web Developer
          </p>

          <p className={`text-lg mb-12 max-w-3xl mx-auto leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          } animate-fade-in-delay-2`}>
            Innovative and solution-oriented full-stack web developer and AI enthusiast, with practical experience in building functional web applications, integrating intelligent systems, and solving real-world problems using technology.
          </p>

          <div className="flex justify-center space-x-6 mb-12 animate-fade-in-delay-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="#contact"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce animate-fade-in-delay-4"
          >
            <ChevronDown className={`h-8 w-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;