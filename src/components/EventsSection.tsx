
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users, Trophy, BookOpen } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: 'Seminarium z Kru Somchai',
      description: 'Wyjątkowe seminarium z mistrzem z Tajlandii - nauka tradycyjnych technik i filozofii Muay Thai.',
      date: '2024-02-15',
      time: '10:00-16:00',
      location: 'Am Nat Gym, ul. Cystersów 3',
      type: 'Seminarium',
      level: 'Wszystkie poziomy',
      price: '150 zł',
      participants: '30 osób',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Mistrzostwa Małopolski',
      description: 'Regionalne zawody Muay Thai - nasi zawodnicy będą walczyć o tytuły mistrzowskie.',
      date: '2024-03-20',
      time: '12:00-20:00',
      location: 'Hala Sportowa, Kraków',
      type: 'Zawody',
      level: 'Zaawansowani',
      price: 'Bezpłatne',
      participants: '100+ zawodników',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Obóz letni Muay Thai',
      description: 'Intensywny 7-dniowy obóz treningowy nad morzem z codziennymi treningami i warsztatami.',
      date: '2024-07-10',
      time: 'Cały dzień',
      location: 'Władysławowo',
      type: 'Obóz',
      level: 'Wszystkie poziomy',
      price: '800 zł/osoba',
      participants: '20 osób',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Egzaminy pasa',
      description: 'Regularne egzaminy na stopnie w Muay Thai - okazja do zdobycia wyższego pasa.',
      date: '2024-01-28',
      time: '15:00-18:00',
      location: 'Am Nat Gym, ul. Cystersów 3',
      type: 'Egzamin',
      level: 'Wszystkie poziomy',
      price: '50 zł',
      participants: '15 osób',
      image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      status: 'past'
    }
  ];

  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const pastEvents = events.filter(event => event.status === 'past');

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Seminarium': return 'bg-orange-500';
      case 'Zawody': return 'bg-yellow-500';
      case 'Obóz': return 'bg-orange-600';
      case 'Egzamin': return 'bg-yellow-600';
      default: return 'bg-orange-400';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Seminarium': return BookOpen;
      case 'Zawody': return Trophy;
      case 'Obóz': return Users;
      case 'Egzamin': return Trophy;
      default: return Calendar;
    }
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Wydarzenia
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Zapoznaj się ze zbliżającymi się wydarzeniami w świecie Muay Thai
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Nadchodzące <span className="text-orange-400">Wydarzenia</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => {
              const TypeIcon = getTypeIcon(event.type);
              return (
                <Card 
                  key={event.id}
                  className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={`${getTypeColor(event.type)} text-white border-0`}>
                        {event.type}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                        <TypeIcon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-300 text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-orange-400" />
                        {new Date(event.date).toLocaleDateString('pl-PL')}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Clock className="w-4 h-4 mr-2 text-yellow-400" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-orange-400" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-300 text-sm">
                        <Users className="w-4 h-4 mr-2 text-yellow-400" />
                        {event.participants}
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="border-orange-400 text-orange-400">
                        {event.level}
                      </Badge>
                      <span className="text-lg font-bold text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text">
                        {event.price}
                      </span>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Zapisz się
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Przeszłe <span className="text-gray-400">Wydarzenia</span>
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {pastEvents.map((event, index) => {
              const TypeIcon = getTypeIcon(event.type);
              return (
                <Card 
                  key={event.id}
                  className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                      <div className="md:col-span-1">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-32 md:h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-75"
                        />
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex items-center justify-between mb-3">
                          <Badge className={`${getTypeColor(event.type)} text-white border-0 opacity-75`}>
                            {event.type}
                          </Badge>
                          <TypeIcon className="w-5 h-5 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-200 mb-2">{event.title}</h3>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <Calendar className="w-3 h-3 mr-2" />
                          {new Date(event.date).toLocaleDateString('pl-PL')}
                        </div>
                        <p className="text-gray-400 text-sm">{event.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
