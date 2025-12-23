import { Code2, Database, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Software Engineer and Graduate Engineer Trainee at Coforge with strong foundations in Java full-stack development and experience building secure, scalable applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Hands-on experience across backend systems, frontend interfaces, databases, and blockchain-based architectures. Delivered multiple academic and practical projects focusing on security, performance, and usability.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Actively developing enterprise-grade skills in Java, Spring Boot, REST APIs, React, SQL, and microservices, with a strong interest in building reliable software systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Full-Stack Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building end-to-end applications with modern frameworks and best practices
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Database Design
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Architecting efficient and scalable database solutions
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Security & Blockchain
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementing secure systems with encryption and blockchain
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
