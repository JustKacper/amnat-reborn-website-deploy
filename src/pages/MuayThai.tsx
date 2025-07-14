
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Scroll, Crown, Sword, Music } from 'lucide-react';

const MuayThai = () => {
  const sections = [
    {
      title: 'Początki Muay Thai',
      icon: Scroll,
      content: `Wiele materiałów archiwalnych dotyczących Muay Thai zostało zniszczonych w wyniku wojen pomiędzy Birmańczykami i Tajami. Informacje, które obecnie posiadamy pochodzą od birmańskich i kambodżańskich podróżników, wczesnych turystów z Europy oraz niektórych kronikarzy z Chiang Mai Lung.

Początki Muay Thai związane są z plemieniem Tai ("wolni"), które w XII i XIII wieku wędrowało z prowincji Juang-Xi, Sichuan i Hubei w południowych Chinach na tereny znane dziś jako Tajlandia. Stąd zapewne wzięły się spekulacje, że Muay Thai, jak twierdzą, ma swoje korzenie w Kung Fu (chińskim boksie), choć obecny styl walki i metody treningowe są zupełnie inne.`
    },
    {
      title: 'Chupasart - Biblia Wojownika',
      icon: Sword,
      content: `Tajscy wojownicy zapisali swoje strategie i techniki walki już ponad tysiąc lat temu. Dokumentacja na przestrzeni lat, bitew stoczonych przez wojownicze klany, aż do momentu osiedlenia się na terenie dzisiejszej Tajlandii. Ta starożytna kolekcja, znana jako Chupasart, zawiera instrukcje dotyczące walki nożem, mieczem, włócznią, toporem, kulą i łukiem. Stała się ona biblią wojownika i podręcznikiem dla młodych adeptów.

Legendy mówią, że z pomocą tego podręcznika doświadczeni wojownicy uczyli młodych adeptów walki bronią, tylko... bez broni. Kije i miecze zostały zastąpione przez ręce i nogi. Ich ciała były używane jako broń i tak narodziło się Muay Thai.`
    }
  ];

  const historicalEvents = [
    {
      year: 'XIV wiek',
      title: 'Walka o Tron',
      description: 'Zmarł król Sen Tai Muang, a jego dwaj synowie rozpoczęli walkę o tron. Postanowiono, że przedstawiciele obu frakcji będą walczyć między sobą, a przywódca zwycięskiej grupy zostanie koronowany.',
      icon: Crown
    },
    {
      year: '1560',
      title: 'Pojedynek Księciów',
      description: 'Spotkanie tajskiego księcia Naresuana z Bynaungiem, synem króla Birmy. Pojedynek zakończył się śmiercią birmańskiego księcia i uratowaniem Tajlandii przed najazdem.',
      icon: Sword
    },
    {
      year: '1767',
      title: 'Nai Khanom Tom',
      description: 'Legendarny bokser Nai Khanom Tom pokonał dziewięciu birmańskich przeciwników jednego po drugim, wykonując przed każdą walką tradycyjny taniec Wai Kru.',
      icon: Music
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
              Muay Thai
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Poznaj bogatą historię i tradycje sztuki ośmiu kończyn
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Historia Muay Thai
                </span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Wiele materiałów archiwalnych dotyczących Muay Thai zostało zniszczonych w wyniku wojen pomiędzy Birmańczykami i Tajami. Informacje, które obecnie posiadamy pochodzą od birmańskich i kambodżańskich podróżników, wczesnych turystów z Europy oraz niektórych kronikarzy z Chiang Mai Lung.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Początki Muay Thai związane są z plemieniem Tai ("wolni"), które w XII i XIII wieku wędrowało z prowincji Juang-Xi, Sichuan i Hubei w południowych Chinach na tereny znane dziś jako Tajlandia. Stąd zapewne wzięły się spekulacje, że Muay Thai, jak twierdzą, ma swoje korzenie w Kung Fu (chińskim boksie), choć obecny styl walki i metody treningowe są zupełnie inne.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Sections */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {sections.map((section, index) => (
              <Card 
                key={index}
                  className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                    <h3 className="text-2xl font-bold text-white">{section.title}</h3>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-300 leading-relaxed mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Events Timeline */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                Ważne Wydarzenia
              </span>
            </h2>
            <p className="text-xl text-gray-300">
              Kluczowe momenty w historii Muay Thai
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {historicalEvents.map((event, index) => (
                <div key={index} className="relative">
                  <Card className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <event.icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-4">
                            <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-bold mr-4">
                              {event.year}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{event.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  Tradycja
                </span>
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  Muzyka, rytuały przedmeczowe, przezwiska dla zawodników - to zwyczaje, które do dziś są obecne w Muay Thai. Tradycje te wywodzą się z buddyzmu i są nieodłączną częścią tajskiej kultury, ale może się zdarzyć, że bojownicy innych kultur nie będą ich przestrzegać.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                  W Tajlandii zawodnicy walczą przy akompaniamencie orkiestry, która gra specyficzną, rytmiczną muzykę odzwierciedlającą dynamiczny charakter walki. Orkiestra składa się z bębnów, cymbałów i fletów jawajskich. Jeśli tempo i dynamika walki wzrasta, muzyka przyspiesza i na odwrót.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Jak wspomniano wcześniej, stary zwyczaj Wai Kru jest wyrazem szacunku. Najpierw bokser wita się z publicznością ceremonialnymi ukłonami i szerokimi ruchami rąk w kierunku głowy. Następnie wykonuje serię swobodnych, pucołowatych, tanecznych ruchów charakterystycznych dla sportowca i szkoły, do której należy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MuayThai;
