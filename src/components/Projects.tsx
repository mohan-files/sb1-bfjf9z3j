import { Lock, BookOpen, Thermometer, Star } from 'lucide-react';
import type { Project } from '../types';

export default function Projects() {
  const projects: Project[] = [
    {
      id: '1',
      title: 'Blockchain-Powered E-Vault System',
      role: 'Software Engineer | 4-2 Major Project',
      tech: [
        'Ethereum',
        'Solidity',
        'React.js',
        'Flask',
        'MongoDB',
        'AES-256',
        'SHA-256',
      ],
      description:
        'Designed a blockchain-based e-vault for secure legal document storage with role-based access control and cryptographic security.',
      highlights: [
        'Implemented Solidity smart contracts with role-based access control (Admin/User/Auditor)',
        'Ensured document immutability using cryptographic hashes stored on Ethereum',
        'Achieved 100% tamper resistance during testing',
        'Conducted load testing with 1,000+ concurrent users, achieving ~1.8s response time',
        'Built a React.js UI with a 4.6/5 user satisfaction score',
        'Validated encryption and security with zero plaintext data exposure',
      ],
    },
    {
      id: '2',
      title: 'Library Management System',
      role: 'Developer',
      tech: ['Java', 'SQL'],
      description:
        'Developed a comprehensive system for managing book issue/return operations, user authentication, and administrative functions.',
      highlights: [
        'Implemented user login and admin operations',
        'Focused on data consistency and query optimization',
        'Built with reliability and system stability in mind',
      ],
    },
    {
      id: '3',
      title: 'Next Gen Dairy – Smart Livestock Cooling System',
      role: 'System Designer',
      tech: ['IoT', 'Sensors', 'Automation', 'Solar Power'],
      description:
        'Designed an innovative solar-powered, temperature-based automatic cooling system for livestock.',
      highlights: [
        'Implemented temperature-based automation logic',
        'Integrated sensor networks for real-time monitoring',
        'Designed sustainable solar-powered solution',
      ],
    },
  ];

  const icons: Record<string, typeof Lock> = {
    '1': Lock,
    '2': BookOpen,
    '3': Thermometer,
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = icons[project.id];
            const isFeatured = index === 0;

            return (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 ${
                  isFeatured ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''
                }`}
              >
                {isFeatured && (
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 px-6 py-2 flex items-center gap-2">
                    <Star className="w-5 h-5 text-white fill-white" />
                    <span className="text-white font-semibold">
                      Featured Project
                    </span>
                  </div>
                )}

                <div className="p-8 md:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
                        {project.role}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    {project.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
                      >
                        <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {highlight}
                        </p>
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
