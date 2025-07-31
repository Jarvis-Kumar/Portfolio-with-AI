import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = {
    institution: 'Loyola College, Chennai',
    degree: 'Bachelor of Arts in Economics',
    duration: '2022 – 2025',
    cgpa: '73%'
  };

  return (
    <section id="education" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`rounded-lg p-8 shadow-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-all duration-300 hover:shadow-xl`}>
            <div className="flex items-start space-x-6">
              <div className={`p-4 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-blue-500'}`}>
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {education.degree}
                    </h3>
                    <p className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      {education.institution}
                    </p>
                  </div>
                  
                  <div className="flex flex-col md:items-end mt-4 md:mt-0">
                    <div className={`flex items-center mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{education.duration}</span>
                    </div>
                    <div className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800'
                    }`}>
                      CGPA: {education.cgpa}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Currently pursuing my Bachelor's degree in Economics while actively developing technical skills 
                    in web development and artificial intelligence. This interdisciplinary approach combines economic 
                    principles with technology to create innovative solutions for real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;