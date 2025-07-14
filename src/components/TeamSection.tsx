
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Users, Trophy } from 'lucide-react';

const TeamSection = () => {
  const instructors = [
    {
      name: 'Kru Marek Nowak',
      title: 'Główny Instruktor',
      experience: '15 lat doświadczenia',
      specialization: 'Tradycyjne Muay Thai',
      achievements: ['Mistrz Polski 2018', 'Instruktor 5 Dan', 'Sędzia Międzynarodowy'],
      description: 'Specjalizuje się w tradycyjnych technikach Muay Thai i przygotowaniu zawodników do zawodów.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158'
    },
    {
      name: 'Kru Anna Kowalska',
      title: 'Instruktor Senior',
      experience: '12 lat doświadczenia',
      specialization: 'Muay Thai dla kobiet',
      achievements: ['Mistrzyni Europy 2019', 'Instruktor 4 Dan', 'Psycholog Sportu'],
      description: 'Prowadzi zajęcia dedykowane kobietom oraz pracuje z młodzieżą.',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7'
    },
    {
      name: 'Kru Tomasz Wiśniewski',
      title: 'Instruktor',
      experience: '8 lat doświadczenia',  
      specialization: 'Kondycja i sparring',
      achievements: ['Medalista MŚ 2020', 'Instruktor 3 Dan', 'Trener Personalny'],
      description: 'Ekspert w przygotowaniu kondycyjnym i technikach sparringowych.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952'
    }
  ];

  const stats = [
    { icon: Users, number: '200+', label: 'Uczniów' },
    { icon: Trophy, number: '15+', label: 'Tytułów' },
    { icon: Award, number: '25+', label: 'Lat Doświadczenia' },
    { icon: Star, number: '5.0', label: 'Ocena Google' },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Nasza Kadra
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Poznaj doświadczonych instruktorów, którzy poprowadzą Cię przez drogę poznawania Muay Thai
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Instructors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-2">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-64 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0">
                    {instructor.title}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{instructor.name}</h3>
                <p className="text-orange-400 font-semibold mb-2">{instructor.experience}</p>
                <p className="text-gray-300 text-sm mb-4">{instructor.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Specjalizacja:</h4>
                  <Badge variant="outline" className="border-orange-400 text-orange-400">
                    {instructor.specialization}
                  </Badge>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-2">Osiągnięcia:</h4>
                  <div className="space-y-1">
                    {instructor.achievements.map((achievement, achievementIndex) => (
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

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dołącz do naszej <span className="text-orange-400">rodziny</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Nasze doświadczone kadra instruktorska pomoże Ci osiągnąć cele i rozwinąć umiejętności w Muay Thai.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
              Umów się na trening próbny
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
