import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { History, Globe, Trophy, BookOpen } from 'lucide-react';
const MuayThaiSection = () => {
  const historyPoints = [{
    icon: History,
    title: 'Starożytne Korzenie',
    description: 'Muay Thai wywodzi się z tradycyjnych technik walki sięgających XVI wieku w Królestwie Syjamu.',
    year: '1500s'
  }, {
    icon: Globe,
    title: 'Światowe Uznanie',
    description: 'Dziś Muay Thai jest uznawane na całym świecie jako jedna z najskuteczniejszych sztuk walki.',
    year: 'Dzisiaj'
  }, {
    icon: Trophy,
    title: 'Sport Narodowy',
    description: 'W Tajlandii Muay Thai jest sportem narodowym i integralną częścią kultury.',
    year: 'Tradycja'
  }, {
    icon: BookOpen,
    title: 'Zachowana Wiedza',
    description: 'Mimo zniszczeń wojennych, zachowaliśmy autentyczne techniki dzięki mistrzom sztuki.',
    year: 'Dziedzictwo'
  }];
  return <section id="muaythai" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Muay Thai
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Sztuka Ośmiu Kończyn - poznaj historię i tradycję najskuteczniejszej sztuki walki świata
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Historical Content */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-6">
                Historia <span className="text-orange-400">Muay Thai</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Wiele materiałów archiwalnych dotyczących Muay Thai zostało zniszczonych w wyniku wojen 
                pomiędzy Birmańczykami i Tajami. Informacje, które obecnie posiadamy pochodzą od birmańskich 
                i kambodżańskich podróżników, wczesnych turystów z Europy oraz niektórych kronikarzy.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                Mimo strat historycznych, Muay Thai przetrwało jako żywa tradycja, przekazywana z pokolenia 
                na pokolenie przez mistrzów sztuki, którzy zachowali jej autentyczną formę i duchowe znaczenie.
              </p>
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Poznaj więcej
              </Button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl p-2">
                <img src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" alt="Traditional Muay Thai" className="w-full h-48 object-cover rounded-lg" />
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-yellow-400/20 rounded-xl p-2">
                <img src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" alt="Muay Thai Training" className="w-full h-32 object-cover rounded-lg" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-xl p-2">
                <img src="https://images.unsplash.com/photo-1551038247-3d9af20df552" alt="Thai Culture" className="w-full h-32 object-cover rounded-lg" />
              </div>
              <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-2">
                <img src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" alt="Muay Thai Spirit" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {historyPoints.map((point, index) => <Card key={index} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <point.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-orange-400 font-bold text-sm">{point.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{point.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default MuayThaiSection;