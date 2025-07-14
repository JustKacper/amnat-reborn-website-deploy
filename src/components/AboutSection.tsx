
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Target, Users, Award } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Zap,
      title: 'Wewnętrzna Siła',
      description: 'Rozwijamy nie tylko sprawność fizyczną, ale przede wszystkim duchową siłę wojownika.'
    },
    {
      icon: Target,
      title: 'Pierwotna Forma',
      description: 'Skupiamy się wyłącznie na nauce autentycznego boksu tajskiego w jego tradycyjnej formie.'
    },
    {
      icon: Users,
      title: 'Społeczność',
      description: 'Dołącz do krakowskiej społeczności pasjonatów sztuk walki i tradycyjnej kultury Tajlandii.'
    },
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Nasi instruktorzy posiadają wieloletnie doświadczenie w treningu i nauczaniu Muay Thai.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              O Nas
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Am Nat to nie tylko klub - to filozofia życia oparta na tradycyjnych wartościach 
            sztuk walki i nieustannym dążeniu do doskonałości.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Nasza <span className="text-yellow-400">Misja</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Am Nat po tajsku znaczy siła. Odczytujemy to nie tylko jako sprawność fizyczną, 
                ale przede wszystkim jako wewnętrzną siłę drzemiącą w duchu zawodnika. 
                Krakowski klub Am Nat skupia się tylko i wyłącznie na nauce boksu tajskiego, 
                w ten sposób pozwala na poznanie pierwotnej formy tej sztuki walki.
              </p>
              <Button 
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Dowiedz się więcej
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl p-2">
              <img
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23"
                alt="Muay Thai Training"
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur-xl opacity-50"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20 group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
