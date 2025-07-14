import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: 'O nas',
    href: '#about'
  }, {
    name: 'Treningi',
    href: '#training'
  }, {
    name: 'Kadra',
    href: '#team'
  }, {
    name: 'Kontakt',
    href: '#contact'
  }];
  const resources = [{
    name: 'FAQ',
    href: '#contact'
  }, {
    name: 'Grafik treningów',
    href: '#training'
  }, {
    name: 'Polski Związek Muaythai',
    href: '#'
  }, {
    name: 'IFMA',
    href: '#'
  }, {
    name: 'WMC',
    href: '#'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <footer className="bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-yellow-400/5 to-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/lovable-uploads/e7f9213d-6dd7-4558-9527-936220d50f87.png" alt="Am Nat Logo" className="h-12 overflow-auto " />
              
            </div>
            <p className="text-gray-300 leading-relaxed">
              Krakowski klub Muay Thai skupiający się na nauce tradycyjnej formy sztuki walki. 
              Rozwijamy wewnętrzną siłę i ducha wojownika.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/AmNatMuayThaiGym/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 hover:scale-110 text-orange-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/amnatgym/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 hover:scale-110 text-yellow-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Szybkie linki</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => <li key={index}>
                  <button onClick={() => scrollToSection(link.href)} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-left">
                    {link.name}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Zasoby</h3>
            <ul className="space-y-3">
              {resources.map((resource, index) => <li key={index}>
                  <a href={resource.href} className="text-gray-300 hover:text-yellow-400 transition-colors duration-300">
                    {resource.name}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-yellow-400" />
                <span className="text-sm">662 132 334</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-yellow-400" />
                <span className="text-sm">klub@amnat.pl</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 text-yellow-400 mt-1" />
                <span className="text-sm">ul. Cystersów 3<br />Kraków</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Am Nat. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Polityka prywatności
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Regulamin
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;