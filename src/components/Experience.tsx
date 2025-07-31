import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experience = {
    title: 'Frontend Web Developer',
    company: 'Self-Initiated Collaborative Project',
    duration: 'Mar 2025 – Apr 2025',
    location: 'Remote',
    responsibilities: [
      'Built and deployed a functional, responsive website with a pan-India remote team',
      'Designed frontend UI using HTML, CSS, and JavaScript',
      'Integrated APIs and managed user authentication using Supabase',
      'Participated in full project lifecycle: planning, development, debugging, deployment',
      'Used Git/GitHub for version control; deployed on Netlify'
    ]
  };

  return (
    <section id="experience" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`relative pl-8 pb-8 ${darkMode ? 'border-l-2 border-gray-600' : 'border-l-2 border-gray-200'}`}>
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
            
            <div className={`rounded-lg p-8 shadow-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {experience.title}
                  </h3>
                  <p className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {experience.company}
                  </p>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0">
                  <div className={`flex items-center mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className={`flex items-center ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className={`flex items-start ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;