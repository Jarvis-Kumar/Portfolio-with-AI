import React from 'react';
import { Award } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'AI Tools & Techniques',
      description: 'AI, Data Structures, Algorithms, Ethics',
      icon: '🤖'
    },
    {
      title: 'Advanced Digital Marketing',
      description: 'SEO, Analytics, Branding',
      icon: '📊'
    },
    {
      title: 'Python for Data Analysis & Web Development',
      description: 'Python programming for data science and web applications',
      icon: '🐍'
    },
    {
      title: 'Front-End Web Development',
      description: 'HTML5, CSS3, Responsive UI',
      icon: '💻'
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                  <span className="text-2xl">{certification.icon}</span>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <Award className={`h-5 w-5 mr-2 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} />
                    <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {certification.title}
                    </h3>
                  </div>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {certification.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;