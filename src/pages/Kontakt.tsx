
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Facebook, Car } from 'lucide-react';

const Kontakt = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adres',
      content: ['ul. Cystersów 3', '31-553 Kraków'],
      color: 'from-orange-400 to-yellow-500'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: ['662 132 334'],
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Mail,
      title: 'Email',
      content: ['klub@amnat.pl'],
      color: 'from-orange-400 to-yellow-500'
    },
    {
      icon: Clock,
      title: 'Godziny otwarcia',
      content: ['Pn-Pt: 17:00-21:30', 'Sb: 09:00-12:00'],
      color: 'from-yellow-400 to-orange-500'
    }
  ];

  const trainingHours = [
    { day: 'Poniedziałek', hours: '17:00 - 21:30' },
    { day: 'Wtorek', hours: '17:00 - 21:30' },
    { day: 'Środa', hours: '17:00 - 21:30' },
    { day: 'Czwartek', hours: '17:00 - 21:30' },
    { day: 'Piątek', hours: '17:00 - 21:30' },
    { day: 'Sobota', hours: '09:00 - 12:00' },
    { day: 'Niedziela', hours: 'Zamknięte' }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Kontakt
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Skontaktuj się z nami i rozpocznij swoją przygodę z Muay Thai
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Dane Kontaktowe
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                  <div className="space-y-1">
                    {info.content.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-gray-300 text-sm">{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Training Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Godziny Treningów
                </span>
              </h3>
              <div className="space-y-3">
                {trainingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-white font-medium">{schedule.day}</span>
                    <span className={`font-semibold ${schedule.hours === 'Zamknięte' ? 'text-red-400' : 'text-orange-400'}`}>
                      {schedule.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Szybki Kontakt
                </span>
              </h3>
              <div className="space-y-3">
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                  onClick={() => window.open('tel:662132334')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Zadzwoń: 662 132 334
                </Button>
                
                <Button 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                  onClick={() => window.open('mailto:klub@amnat.pl')}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email: klub@amnat.pl
                </Button>
                
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm"
                  onClick={() => window.open('https://www.facebook.com/AmNatMuayThaiGym/', '_blank')}
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Lokalizacja
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Znajdź nas w centrum Krakowa
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  <MapPin className="w-6 h-6 inline mr-2 text-orange-400" />
                  ul. Cystersów 3, Kraków
                </h3>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Nasz klub znajduje się w centrum Krakowa, w dogodnej lokalizacji z łatwym dostępem komunikacją publiczną.
                  </p>
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-300">
                        <Car className="w-4 h-4 mr-2 text-orange-400" />
                        <span className="text-sm">Parking dostępny w pobliżu</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                        <span className="text-sm">5 minut pieszo od centrum</span>
                      </div>
                    </div>
                </div>
                
                <Button 
                  className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('https://maps.google.com/maps?q=ul.+Cystersów+3,+Kraków', '_blank')}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Otwórz w Google Maps
                </Button>
              </div>
              
              {/* Map Placeholder */}
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-xl p-4 h-80 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                  <h4 className="text-white font-semibold mb-2">Mapa</h4>
                  <p className="text-gray-300 text-sm">
                    ul. Cystersów 3<br />
                    31-553 Kraków
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontakt;
