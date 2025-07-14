
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Euro, Calendar } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Treningi = () => {
  const pricingPlans = [
    {
      name: 'Classic',
      price: '240 zł',
      description: 'Miesięczny karnet obejmuje 3 treningi od poniedziałku do piątku + trening w soboty',
      features: ['3 treningi w tygodniu', 'Poniedziałek-Piątek', 'Dodatkowy trening w soboty']
    },
    {
      name: 'Open',
      price: '300 zł',
      description: 'Nielimitowane treningi od poniedziałku do soboty',
      features: ['Nielimitowane treningi', 'Poniedziałek-Sobota', 'Pełny dostęp']
    },
    {
      name: 'Młodzieżowy',
      price: '200 zł',
      description: 'Osoby poniżej 18 roku życia. 4 treningi w tygodniu',
      features: ['Dla osób poniżej 18 lat', '4 treningi w tygodniu', 'Specjalna cena']
    },
    {
      name: 'Wejście jednorazowe',
      price: '40 zł',
      description: 'Pojedynczy trening',
      features: ['Jeden trening', 'Bez zobowiązań', 'Test zajęć']
    }
  ];

  const scheduleRoom1 = [
    { day: 'Poniedziałek', groups: [
      { name: 'Średnia Grupa 1', time: '17:00-18:00', level: 'medium' },
      { name: 'Nowa Początkująca 2', time: '18:15-19:15', level: 'beginner' },
      { name: 'Grupa Średnia 3', time: '19:30-20:30', level: 'medium' },
      { name: 'Grupa Początkująca 6 miesięcy 4', time: '20:30-21:30', level: 'beginner' },
      { name: 'Grupa Początkująca 3 miesiące', time: '07:00-08:00', level: 'beginner' }
    ]},
    { day: 'Wtorek', groups: [
      { name: 'Grupa początkująca 3-6 msc 5', time: '17:00-18:00', level: 'beginner' },
      { name: 'Grupa średnia 6', time: '18:15-19:15', level: 'medium' },
      { name: 'Grupa Początkująca 6 miesięcy 7', time: '19:30-20:30', level: 'beginner' },
      { name: 'Grupa Początkująca 3-6 msc', time: '20:30-21:30', level: 'beginner' }
    ]},
    { day: 'Środa', groups: [
      { name: 'Średnia Grupa 1', time: '17:00-18:00', level: 'medium' },
      { name: 'Nowa Początkująca 2', time: '18:15-19:15', level: 'beginner' },
      { name: 'Grupa Średnia 3', time: '19:30-20:30', level: 'medium' },
      { name: 'Grupa Początkująca 6 miesięcy 4', time: '20:30-21:30', level: 'beginner' },
      { name: 'Grupa Początkująca 3 miesiące', time: '07:00-08:00', level: 'beginner' }
    ]},
    { day: 'Czwartek', groups: [
      { name: 'Grupa początkująca 3-6 msc 5', time: '17:00-18:00', level: 'beginner' },
      { name: 'Grupa średnia 6', time: '18:15-19:15', level: 'medium' },
      { name: 'Grupa Początkująca 6 miesięcy 7', time: '19:30-20:30', level: 'beginner' },
      { name: 'Grupa Początkująca 3-6 msc', time: '20:30-21:30', level: 'beginner' }
    ]},
    { day: 'Piątek', groups: [
      { name: 'Średnia Grupa 1', time: '17:00-18:00', level: 'medium' },
      { name: 'Nowa Początkująca 2', time: '20:30-21:30', level: 'beginner' },
      { name: 'Grupa Średnia 3', time: '19:30-20:30', level: 'medium' },
      { name: 'Grupa Początkująca 6 miesięcy 4', time: '20:30-21:30', level: 'beginner' },
      { name: 'Grupa Początkująca 3 miesiące', time: '07:00-08:00', level: 'beginner' }
    ]},
    { day: 'Sobota', groups: [
      { name: 'Grupa średnia 6', time: '18:15-19:15', level: 'medium' },
      { name: 'Grupa Początkująca 3-6 msc 5', time: '09:00-10:00', level: 'beginner' },
      { name: 'Grupa Początkująca 6 miesięcy 7', time: '11:15-12:15', level: 'beginner' },
      { name: 'Grupa Początkująca 3-6 msc', time: '09:00-10:00', level: 'beginner' },
      { name: 'Sobotnia 9', time: '10:00-11:00', level: 'mixed' }
    ]}
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'advanced': return 'bg-orange-600/20 text-orange-300 border-orange-600/30';
      case 'mixed': return 'bg-yellow-600/20 text-yellow-300 border-yellow-600/30';
      case 'youth': return 'bg-orange-400/20 text-orange-200 border-orange-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Treningi
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Profesjonalne zajęcia Muay Thai dostosowane do każdego poziomu zaawansowania
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Cennik Zajęć
              </span>
            </h2>
            <div className="mb-8">
              <h3 className="text-xl text-gray-300 mb-4">Nasi partnerzy</h3>
              <div className="flex justify-center items-center space-x-4">
                <Badge className="bg-orange-600 text-white px-4 py-2">Benefit Systems</Badge>
                <Badge className="bg-yellow-600 text-white px-4 py-2">Fit Profit</Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-4">
                      {plan.price}
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-2">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Training */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Treningi Personalne
              </span>
            </h3>
            <div className="text-center text-gray-300">
              <p className="mb-4">Cennik treningów personalnych</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">1 trening</h4>
                  <p className="text-2xl font-bold text-orange-400">150 zł</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">4+ treningów</h4>
                  <p className="text-2xl font-bold text-orange-400">120 zł</p>
                  <p className="text-sm text-gray-400">za trening</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Instruktor</h4>
                  <p className="text-sm text-gray-300">Nasi doświadczeni instruktorzy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Grafik Zajęć
              </span>
            </h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-semibold">
                Jeśli chcesz być na bieżąco ze zmianami w grafiku, śledź naszego facebooka.
              </p>
            </div>
          </div>

          {/* Room 1 Schedule */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Sala 1 <span className="text-gray-400">(stara sala)</span>
            </h3>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/20">
                    <TableHead className="text-white font-semibold">Dzień</TableHead>
                    <TableHead className="text-white font-semibold">Grupy</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduleRoom1.map((day, index) => (
                    <TableRow key={index} className="border-white/10">
                      <TableCell className="text-white font-semibold align-top">{day.day}</TableCell>
                      <TableCell>
                        <div className="space-y-2">
                          {day.groups.map((group, groupIndex) => (
                            <div key={groupIndex} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                              <div>
                                <h4 className="text-white font-medium">{group.name}</h4>
                                <div className="flex items-center text-gray-300 text-sm">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {group.time}
                                </div>
                              </div>
                              <Badge className={getLevelColor(group.level)}>
                                {group.level === 'beginner' && 'Początkująca'}
                                {group.level === 'medium' && 'Średnia'}
                                {group.level === 'advanced' && 'Zaawansowana'}
                                {group.level === 'mixed' && 'Mieszana'}
                                {group.level === 'youth' && 'Młodzieżowa'}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>

          {/* Legend */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Legenda poziomów:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Grupa początkująca</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Grupa średniozaawansowana</Badge>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Grupa zaawansowana</Badge>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">Grupa mieszana</Badge>
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Grupa młodzieżowa</Badge>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Treningi;
