
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MuayThaiSection from '@/components/MuayThaiSection';
import TrainingSection from '@/components/TrainingSection';
import TeamSection from '@/components/TeamSection';
import MediaSection from '@/components/MediaSection';
import EventsSection from '@/components/EventsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Star } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      {/* 5-Star Review Section */}
      <section className="py-12 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-white mb-4">Am Nat Muay Thai Gym</h3>
            <div className="flex items-center justify-center mb-2">
              <span className="text-2xl font-bold text-white mr-2">5,0</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-300">na 553 opinie</p>
          </div>
        </div>
      </section>
      
      <AboutSection />
      <MuayThaiSection />
      <TrainingSection />
      <TeamSection />
      <MediaSection />
      <EventsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
