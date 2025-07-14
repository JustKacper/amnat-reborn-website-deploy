
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Trophy, Medal } from 'lucide-react';

const Kadra = () => {
  const trainers = [
    {
      name: 'Grzegorz Bąk',
      title: 'Główny Instruktor',
      image: '/lovable-uploads/b7f591e4-b92f-49fc-9787-f0d596a00cdc.png',
      achievements: ['Brązowy medalista Pucharu Europy', 'Wielokrotny medalista Mistrzostw Polski', 'Instruktor i sędzia Muay Thai'],
      experience: '15+ lat doświadczenia'
    },
    {
      name: 'Kru Anna Kowalska',
      title: 'Instruktor Senior',
      image: '/lovable-uploads/b989ff40-0021-438b-a8f6-f32064103d33.png',
      achievements: ['Mistrzyni Europy 2019', 'Instruktor 4 Dan', 'Psycholog Sportu'],
      experience: '12 lat doświadczenia'
    },
    {
      name: 'Kru Tomasz Wiśniewski',
      title: 'Instruktor',
      image: '/lovable-uploads/5fc03e4d-f8fb-4719-8307-47e58b957ff2.png',
      achievements: ['Medalista MŚ 2020', 'Instruktor 3 Dan', 'Trener Personalny'],
      experience: '8 lat doświadczenia'
    },
    {
      name: 'Kru Marek Nowak',
      title: 'Instruktor Młodzieżowy',
      image: '/lovable-uploads/81bdbfdb-9b30-46a2-8be7-810e45a43878.png',
      achievements: ['Mistrz Polski 2018', 'Specjalista treningów młodzieżowych', 'Instruktor 2 Dan'],
      experience: '6 lat doświadczenia'
    },
    {
      name: 'Kru Katarzyna Zielińska',
      title: 'Instruktor',
      image: '/lovable-uploads/0f2804ad-0bbc-4e87-a5a6-14951f61ce13.png',
      achievements: ['Wicemistrzyni Polski 2021', 'Instruktor 2 Dan', 'Specjalista fitness'],
      experience: '5 lat doświadczenia'
    }
  ];

  const fighters = [
    {
      name: 'Michał Kowalski',
      category: 'Waga lekkociężka',
      image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66',
      achievements: ['Mistrz Polski 2023', '3 miejsce ME 2022'],
      record: '12-3-1'
    },
    {
      name: 'Agnieszka Nowak',
      category: 'Waga piórkowa',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      achievements: ['Wicemistrzyni Polski 2023', 'Mistrzyni Krakowa 2022'],
      record: '8-2-0'
    },
    {
      name: 'Paweł Zieliński',
      category: 'Waga średnia',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      achievements: ['3 miejsce MP 2023', 'Mistrz Małopolski 2022'],
      record: '10-4-2'
    },
    {
      name: 'Kamila Wiśniewska',
      category: 'Waga półśrednia',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      achievements: ['Mistrzyni Małopolski 2023', '2 miejsce MP 2022'],
      record: '6-1-1'
    },
    {
      name: 'Łukasz Jankowski',
      category: 'Waga ciężka',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
      achievements: ['Wicemistrz Polski 2022', 'Mistrz Krakowa 2023'],
      record: '15-5-0'
    },
    {
      name: 'Marta Kowalczyk',
      category: 'Waga kogucza',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
      achievements: ['3 miejsce MP 2023', 'Mistrzyni Krakowa 2022'],
      record: '7-3-1'
    },
    {
      name: 'Adrian Lewandowski',
      category: 'Waga lekkopółśrednia',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      achievements: ['Mistrz Małopolski 2023', '4 miejsce MP 2022'],
      record: '9-2-0'
    },
    {
      name: 'Natalia Szymańska',
      category: 'Waga mucha',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e32b14',
      achievements: ['Wicemistrzyni Małopolski 2023', 'Debiut na MP 2023'],
      record: '4-1-0'
    },
    {
      name: 'Bartosz Wójcik',
      category: 'Waga półcięższa',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      achievements: ['Mistrz Krakowa 2023', '5 miejsce MP 2022'],
      record: '11-6-1'
    },
    {
      name: 'Julia Mazur',
      category: 'Waga słomkowa',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
      achievements: ['Mistrzyni Małopolski 2022', 'Debiut na ME 2023'],
      record: '5-0-1'
    }
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
              Nasza Kadra
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Poznaj doświadczonych instruktorów i utalentowanych zawodników naszego klubu
          </p>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Instruktorzy
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Doświadczeni profesjonaliści, którzy poprowadzą Cię przez drogę poznawania Muay Thai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {trainers.map((trainer, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-2">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0">
                      {trainer.title}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{trainer.name}</h3>
                  <p className="text-orange-400 font-semibold mb-4">{trainer.experience}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2 text-yellow-400" />
                      Osiągnięcia:
                    </h4>
                    <div className="space-y-1">
                      {trainer.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-center text-gray-300">
                          <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mr-3"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fighters Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Zawodnicy
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Nasi utalentowani sportowcy reprezentujący klub na zawodach krajowych i międzynarodowych
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {fighters.map((fighter, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden"
              >
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-2">
                    <img
                      src={fighter.image}
                      alt={fighter.name}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 text-xs">
                      {fighter.record}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{fighter.name}</h3>
                  <p className="text-orange-400 font-semibold mb-3 text-sm">{fighter.category}</p>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-2 flex items-center text-sm">
                      <Trophy className="w-3 h-3 mr-1 text-yellow-400" />
                      Osiągnięcia:
                    </h4>
                    <div className="space-y-1">
                      {fighter.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start text-gray-300">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs leading-tight">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kadra;
