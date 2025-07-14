import React, { useState, useEffect } from 'react';
import { Menu, X, Facebook, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Treningi', to: '/treningi' },
    { label: 'Kadra', to: '/kadra' },
    { label: 'Media', to: '/media' },
    { label: 'Muaythai', to: '/muaythai' },
    { label: 'Kontakt', to: '/kontakt' },
    { label: 'O nas', to: '/o-nas' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/10 backdrop-blur-lg border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/e7f9213d-6dd7-4558-9527-936220d50f87.png" 
              alt="Am Nat Logo" 
              className="h-12" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <Link 
                key={item.to} 
                to={item.to}
                className={`relative text-white hover:text-yellow-400 transition-all duration-300 group ${
                  location.pathname === item.to ? 'text-yellow-400' : ''
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Language & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white">
              <button className="hover:text-yellow-400 transition-colors">PL</button>
              <span>|</span>
              <button className="hover:text-yellow-400 transition-colors">EN</button>
              <span>|</span>
              <button className="hover:text-yellow-400 transition-colors">RU</button>
            </div>
            <a 
              href="https://www.facebook.com/AmNatMuayThaiGym/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full transition-all duration-300"
            >
              <Facebook className="w-4 h-4 text-white" />
            </a>
            <a 
              href="https://www.instagram.com/amnatgym/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-white" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white hover:text-yellow-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black/90 backdrop-blur-lg border-t border-white/20 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              {navItems.map(item => (
                <Link 
                  key={item.to} 
                  to={item.to}
                  onClick={() => setIsOpen(false)}
                  className={`block text-white hover:text-yellow-400 transition-colors text-left ${
                    location.pathname === item.to ? 'text-yellow-400' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center space-x-4 mb-4">
                  <button className="text-white hover:text-yellow-400">PL</button>
                  <button className="text-white hover:text-yellow-400">EN</button>
                  <button className="text-white hover:text-yellow-400">RU</button>
                </div>
                <div className="flex space-x-2">
                  <a 
                    href="https://www.facebook.com/AmNatMuayThaiGym/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-lg transition-all duration-300 text-white"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/amnatgym/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-lg transition-all duration-300 text-white"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navigation;