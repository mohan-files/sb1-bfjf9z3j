import { Mail, Phone, MapPin, Github, Linkedin, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface ProfileData {
  name: string;
  title: string;
  image_url: string;
}

export default function Hero() {
  const [profile, setProfile] = useState<ProfileData>({
    name: 'Mohan Sai Bakkamunthala',
    title: 'Software Engineer | Graduate Engineer Trainee at Coforge',
    image_url: 'https://drive.usercontent.google.com/uc?id=1xdoBZFMZWJeFhyHrXAQAUJlSEBnpMhox&export=download'
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await supabase
        .from('portfolio_profile')
        .select('name, title, image_url')
        .limit(1)
        .maybeSingle();

      if (data) {
        setProfile(data);
      }
    };

    fetchProfile();
  }, []);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profile.image_url}
              alt={profile.name}
              className="w-32 h-32 mx-auto mb-6 rounded-full object-cover shadow-xl ring-4 ring-blue-500 dark:ring-blue-400"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            {profile.title}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 text-gray-600 dark:text-gray-400">
            <a
              href="mailto:bakkamanthulamohansai@gmail.com"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">bakkamanthulamohansai@gmail.com</span>
            </a>
            <a
              href="tel:+919182054415"
              className="flex items-center gap-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9182054415</span>
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>India</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 mb-12">
            <a
              href="https://github.com/mohan-21491A12B8"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohan-sai-bakkamunthala"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
