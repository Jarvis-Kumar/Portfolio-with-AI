import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:harishp@example.com"
              className={`p-3 rounded-full transition-all duration-300 ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:text-gray-900'
              } shadow-md hover:shadow-lg transform hover:-translate-y-1`}
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          <div className={`text-center ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <p className="flex items-center justify-center mb-2">
              Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Dinesh Kumar P.
            </p>
            <p className="text-sm">
              © 2025 Dinesh Kumar P. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;