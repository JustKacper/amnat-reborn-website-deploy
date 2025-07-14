
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Users, Dumbbell, Target, Calendar, MapPin } from 'lucide-react';

const TrainingSection = () => {
  const trainingTypes = [
    {
      title: 'Trening Podstawowy',
      description: 'Idealne wprowadzenie do świata Muay Thai dla początkujących',
      duration: '90 min',
      level: 'Początkujący',
      participants: '8-12 osób',
      price: '80 zł/miesiąc',
      features: ['Podstawowe techniki', 'Rozgrzewka i stretching', 'Praca na workach', 'Podstawy obrony']
    },
    {
      title: 'Trening Zaawansowany',
      description: 'Intensywny trening dla doświadczonych zawodników',
      duration: '120 min',
      level: 'Zaawansowany',
      participants: '6-10 osób',
      price: '120 zł/miesiąc',
      features: ['Zaawansowane kombinacje', 'Sparring', 'Techniki z kolan i łokci', 'Taktyka walki']
    },
    {
      title: 'Trening Indywidualny',
      description: 'Spersonalizowany program dostosowany do Twoich potrzeb',
      duration: '60 min',
      level: 'Wszystkie',
      participants: '1 osoba',
      price: '150 zł/sesja',
      features: ['Program personalny', '100% uwagi trenera', 'Szybszy postęp', 'Elastyczne godziny']
    }
  ];

  const schedule = [
    { day: 'Poniedziałek', time: '18:00-19:30', type: 'Podstawowy', instructor: 'Kru Marek' },
    { day: 'Wtorek', time: '19:00-21:00', type: 'Zaawansowany', instructor: 'Kru Tomasz' },
    { day: 'Środa', time: '18:00-19:30', type: 'Podstawowy', instructor: 'Kru Anna' },
    { day: 'Czwartek', time: '19:00-21:00', type: 'Zaawansowany', instructor: 'Kru Marek' },
    { day: 'Piątek', time: '18:00-19:30', type: 'Podstawowy', instructor: 'Kru Tomasz' },
    { day: 'Sobota', time: '10:00-12:00', type: 'Sparring', instructor: 'Kru Anna' },
  ];

  return (
    <section id="training" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Treningi
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne treningi Muay Thai dostosowane do każdego poziomu zaawansowania
          </p>
        </div>

        {/* Training Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trainingTypes.map((training, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-500"></div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{training.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{training.description}</p>
                  <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-4">
                    {training.price}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm">{training.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Target className="w-4 h-4 mr-2 text-orange-400" />
                    <span className="text-sm">{training.level}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-4 h-4 mr-2 text-yellow-400" />
                    <span className="text-sm">{training.participants}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  {training.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Zapisz się
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white">
              Grafik <span className="text-orange-400">Treningów</span>
            </h3>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
              <span>ul. Cystersów 3, Kraków</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schedule.map((session, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-white">{session.day}</h4>
                  <Calendar className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-3 h-3 mr-2 text-yellow-400" />
                    <span className="text-sm">{session.time}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Dumbbell className="w-3 h-3 mr-2 text-orange-400" />
                    <span className="text-sm">{session.type}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Users className="w-3 h-3 mr-2 text-yellow-400" />
                    <span className="text-sm">{session.instructor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
