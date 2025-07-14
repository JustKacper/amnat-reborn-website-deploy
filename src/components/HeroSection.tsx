import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play, Star } from 'lucide-react';
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/65f983ef-99b2-4d0b-b5e9-901ec85ad2dc.png')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-transparent to-orange-500/20"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 mb-8 animate-fade-in">
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-white text-sm font-medium">Krakowski Klub Muay Thai</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                AM NAT
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-white mb-8 font-light animate-fade-in delay-300">
              Siła Ukryta w <span className="text-yellow-400 font-semibold">Duchu Wojownika</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-500">
              Am Nat po tajsku znaczy siła. Odkryj pierwotną formę sztuk walki, 
              rozwijaj wewnętrzną siłę i dołącz do tradycji sięgającej tysiącleci.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in delay-700">
              <Button size="lg" className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50" onClick={() => scrollToSection('training')}>
                Rozpocznij Trening
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('about')} className="border-white/30 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-base bg-slate-100 text-slate-950">
                <Play className="w-5 h-5 mr-2" />
                Poznaj Historię
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-bounce">
              <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-yellow-400 transition-colors">
                <ArrowDown className="w-8 h-8 mx-auto" />
                <p className="text-sm mt-2">Przewiń w dół</p>
              </button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Review Section */}
      
    </>;
};
export default HeroSection;