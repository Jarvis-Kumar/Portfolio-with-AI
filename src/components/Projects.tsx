import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'AI-Powered Full-Stack Portfolio Website',
      description: 'Developed a portfolio with authentication, real-time contact form, and user session handling.',
      technologies: ['React.js', 'Supabase', 'Netlify'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Smart Calculator Collection',
      description: 'Built calculators (BMI, Currency, Interest, Geometry) with responsive UI and real-time data.',
      technologies: ['JavaScript', 'External APIs', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI App Prototype',
      description: 'Designed AI app for bias-free reasoning and creative problem-solving using real-world insights.',
      technologies: ['Python', 'OpenAI API', 'Machine Learning'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Editing Tools Web Platform',
      description: 'Built an AI-driven online editing tool with payment integration, user auth, and cloud storage.',
      technologies: ['Stability AI', 'Stripe', 'PostgreSQL', 'Supabase'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {project.title}
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors duration-200 ${
                      darkMode
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md border transition-colors duration-200 ${
                      darkMode
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;