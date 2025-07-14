
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Target, Users, Award, Heart, Shield } from 'lucide-react';

const ONas = () => {
  const values = [
    {
      icon: Zap,
      title: 'Wewnętrzna Siła',
      description: 'Am Nat po tajsku znaczy siła - nie tylko fizyczna, ale przede wszystkim duchowa siła wojownika.'
    },
    {
      icon: Target,
      title: 'Specjalizacja',
      description: 'Skupiamy się wyłącznie na nauce boksu tajskiego w jego pierwotnej, tradycyjnej formie.'
    },
    {
      icon: Users,
      title: 'Małe Grupy',
      description: 'Zajęcia w małych grupach pozwalają na indywidualne podejście do każdego uczestnika.'
    },
    {
      icon: Award,
      title: 'Doświadczenie',
      description: 'Nasz główny instruktor to brązowy medalista Pucharu Europy z wieloletnim doświadczeniem.'
    },
    {
      icon: Heart,
      title: 'Pasja',
      description: 'Każdy trening prowadzony jest z pełnym zaangażowaniem i miłością do Muay Thai.'
    },
    {
      icon: Shield,
      title: 'Bezpieczeństwo',
      description: 'Dbamy o bezpieczeństwo treningów i stopniowe wprowadzanie nowych technik.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              O Nas
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Am Nat - krakowski klub Muay Thai, gdzie siła oznacza więcej niż tylko sprawność fizyczną
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Content */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Nasza <span className="text-yellow-400">Filozofia</span>
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    <strong className="text-yellow-400">Am Nat</strong> po tajsku znaczy siła. Odczytujemy to nie tylko jako sprawność fizyczną, ale przede wszystkim jako wewnętrzną siłę drzemiącą w duchu zawodnika.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Krakowski klub Am Nat skupia się tylko i wyłącznie na nauce boksu tajskiego, w ten sposób pozwala na poznanie pierwotnej formy Muay Thai, nie mieszając z nią innych stylów walki. Ta wąska specjalizacja spowodowała dostosowanie sali treningowej do potrzeb związanych z uprawianiem takiej dyscypliny sportu, jaką jest boks tajski.
                  </p>
                </div>
                <Button 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Dołącz do nas
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
        </div>
      </section>

      {/* Instructor Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Nasz Instruktor
                </span>
              </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-1">
                  <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-2xl p-2">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                      alt="Grzegorz Bąk"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <h3 className="text-2xl font-bold text-white mb-4">Grzegorz Bąk</h3>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Zajęcia prowadzi <strong className="text-orange-400">brązowy medalista Pucharu Europy</strong>, wielokrotny medalista Mistrzostw oraz Pucharu Polski Grzegorz Bąk, od dwóch lat będący instruktorem i sędzią podczas zawodów Muay Thai.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Treningi są prowadzone zarówno dla osób, które traktują boks tajski jako aktywną formę rekreacji, jak i dla tych, którzy pragną poznać prawdziwą, sportową rywalizację podczas zawodów. Jakkolwiek od każdego trener wymaga podczas treningów całkowitego zaangażowania, by nauczyć się jak najlepiej i jak najwięcej.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Nasze Wartości
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Co wyróżnia klub Am Nat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Nasze Podejście
                </span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Zajęcia prowadzone w małych grupach pozwalają na dostosowanie ich poziomu do trenujących osób, systematycznie podnosząc ich poziom zaawansowania. Każdy uczestnik otrzymuje indywidualną uwagę i może rozwijać się w swoim tempie.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                  Nasza sala treningowa została specjalnie dostosowana do potrzeb związanych z uprawianiem boksu tajskiego. Dysponujemy profesjonalnym sprzętem treningowym, który pozwala na kompleksowe przygotowanie zarówno techniczne, jak i kondycyjne.
                </p>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6">
                    Odwiedź klub Am Nat i poznaj szlachetną sztukę walki Muay Thai!
                  </h3>
                  <div className="text-3xl font-bold text-white">
                    Zapraszamy!
                  </div>
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

export default ONas;
