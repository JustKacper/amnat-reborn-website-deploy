
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Image, Video, Calendar, Eye } from 'lucide-react';

const MediaSection = () => {
  const [activeTab, setActiveTab] = useState('photos');

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
      title: 'Trening podstawowy',
      description: 'Nauka podstawowych technik Muay Thai'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      title: 'Sparring',
      description: 'Zaawansowany trening sparringowy'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
      title: 'Ceremonia Wai Kru',
      description: 'Tradycyjna tajska ceremonia przed treningiem'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      title: 'Zawody',
      description: 'Nasi zawodnicy w akcji'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Trening kobiet',
      description: 'Specjalne zajęcia dla pań'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      title: 'Praca techniczna',
      description: 'Doskonalenie techniki z instruktorem'
    }
  ];

  const videos = [
    {
      id: 1,
      thumbnail: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
      title: 'Podstawy Muay Thai',
      duration: '5:32',
      views: '2.1k'
    },
    {
      id: 2,
      thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
      title: 'Techniki łokciowe',
      duration: '3:45',
      views: '1.8k'
    },
    {
      id: 3,
      thumbnail: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
      title: 'Wai Kru Ram Muay',
      duration: '7:12',
      views: '3.2k'
    },
    {
      id: 4,
      thumbnail: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
      title: 'Sparring highlights',
      duration: '4:20',
      views: '5.5k'
    }
  ];

  const news = [
    {
      id: 1,
      date: '2024-01-15',
      title: 'Nowy grafik treningów na 2024',
      excerpt: 'Wprowadziliśmy zmiany w grafiku treningów, aby lepiej dostosować się do potrzeb naszych zawodników.',
      image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23'
    },
    {
      id: 2,
      date: '2024-01-10',
      title: 'Sukces na Mistrzostwach Polski',
      excerpt: 'Nasi zawodnicy zdobyli 3 złote medale na Mistrzostwach Polski w Muay Thai.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625'
    },
    {
      id: 3,
      date: '2024-01-05',
      title: 'Seminarium z mistrzem z Tajlandii',
      excerpt: 'W lutym odbędzie się wyjątkowe seminarium prowadzone przez mistrza Muay Thai bezpośrednio z Tajlandii.',
      image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552'
    }
  ];

  return (
    <section id="media" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Media
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Galeria zdjęć, filmów i najnowsze wiadomości z naszego klubu
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-full p-2 border border-white/10">
            <div className="flex space-x-2">
              {[
                { id: 'photos', label: 'Zdjęcia', icon: Image },
                { id: 'videos', label: 'Filmy', icon: Video },
                { id: 'news', label: 'Aktualności', icon: Calendar }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photos Tab */}
        {activeTab === 'photos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {photos.map((photo, index) => (
              <Card 
                key={photo.id}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-white font-bold mb-1">{photo.title}</h3>
                    <p className="text-gray-200 text-sm">{photo.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* Videos Tab */}
        {activeTab === 'videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            {videos.map((video, index) => (
              <Card 
                key={video.id}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group overflow-hidden cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-white font-semibold mb-2 text-sm">{video.title}</h3>
                  <div className="flex items-center text-gray-400 text-xs">
                    <Eye className="w-3 h-3 mr-1" />
                    {video.views} wyświetleń
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* News Tab */}
        {activeTab === 'news' && (
          <div className="space-y-6 animate-fade-in">
            {news.map((article, index) => (
              <Card 
                key={article.id}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
                    <div className="md:col-span-1">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-center text-teal-400 text-sm mb-2">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(article.date).toLocaleDateString('pl-PL')}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-4">{article.excerpt}</p>
                      <Button 
                        variant="outline" 
                        className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black"
                      >
                        Czytaj więcej
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MediaSection;
