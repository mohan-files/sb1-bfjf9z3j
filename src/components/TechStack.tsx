import { Code, Server, Layout, Database, Shield, Wrench } from 'lucide-react';
import type { TechCategory } from '../types';

export default function TechStack() {
  const categories: TechCategory[] = [
    {
      name: 'Languages',
      items: ['Java', 'Python', 'Solidity'],
    },
    {
      name: 'Backend',
      items: ['Spring Boot', 'REST APIs', 'Flask'],
    },
    {
      name: 'Frontend',
      items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      name: 'Databases',
      items: ['MySQL', 'MongoDB'],
    },
    {
      name: 'Blockchain & Security',
      items: ['Ethereum', 'Smart Contracts', 'AES-256 Encryption', 'SHA-256 Hashing'],
    },
    {
      name: 'Tools & Platforms',
      items: ['Git & GitHub', 'AWS EC2', 'Ganache', 'Postman'],
    },
  ];

  const icons: Record<string, typeof Code> = {
    Languages: Code,
    Backend: Server,
    Frontend: Layout,
    Databases: Database,
    'Blockchain & Security': Shield,
    'Tools & Platforms': Wrench,
  };

  return (
    <section id="tech-stack" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const Icon = icons[category.name];
            return (
              <div
                key={category.name}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
