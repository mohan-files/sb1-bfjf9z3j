import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import type { Experience } from '../types';

export default function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: '1',
      title: 'Software Engineer – Graduate Engineer Trainee',
      company: 'Coforge',
      period: 'Oct 2024 – Present',
      responsibilities: [
        'Undergoing enterprise training in Java full-stack development',
        'Working with Java, Spring Boot, databases, and frontend frameworks',
        'Gaining exposure to industry-standard coding practices and system design',
        'Collaborating in team-based development environments',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-10 shadow-xl border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 ml-16">
                {exp.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {resp}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
