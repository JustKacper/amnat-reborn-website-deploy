import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Image, Video, Calendar, Play, Eye } from 'lucide-react';
const Media = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const photos = [{
    id: 1,
    src: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
    title: 'Trening podstawowy',
    description: 'Nauka podstawowych technik Muay Thai',
    category: 'treningi'
  }, {
    id: 2,
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    title: 'Sparring',
    description: 'Zaawansowany trening sparringowy',
    category: 'sparring'
  }, {
    id: 3,
    src: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    title: 'Ceremonia Wai Kru',
    description: 'Tradycyjna tajska ceremonia przed treningiem',
    category: 'tradycje'
  }, {
    id: 4,
    src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    title: 'Zawody',
    description: 'Nasi zawodnicy w akcji',
    category: 'zawody'
  }, {
    id: 5,
    src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    title: 'Trening kobiet',
    description: 'Specjalne zajęcia dla pań',
    category: 'treningi'
  }, {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Praca techniczna',
    description: 'Doskonalenie techniki z instruktorem',
    category: 'treningi'
  }, {
    id: 7,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
    title: 'Grupa młodzieżowa',
    description: 'Treningi dla najmłodszych adeptów',
    category: 'młodzież'
  }, {
    id: 8,
    src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',
    title: 'Zawody krajowe',
    description: 'Mistrzostwa Polski w Muay Thai',
    category: 'zawody'
  }, {
    id: 9,
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    title: 'Seminarium',
    description: 'Warsztaty z mistrzem z Tajlandii',
    category: 'wydarzenia'
  }, {
    id: 10,
    src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2',
    title: 'Egzaminy stopni',
    description: 'Ceremonia nadawania stopni',
    category: 'wydarzenia'
  }, {
    id: 11,
    src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b',
    title: 'Trening kondycyjny',
    description: 'Przygotowanie fizyczne zawodników',
    category: 'treningi'
  }, {
    id: 12,
    src: 'https://images.unsplash.com/photo-1566492031773-4f4e44671d66',
    title: 'Obóz treningowy',
    description: 'Letnie zgrupowanie w górach',
    category: 'wydarzenia'
  }];
  const videos = [{
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23',
    title: 'Podstawy Muay Thai',
    duration: '5:32',
    views: '2.1k',
    description: 'Wprowadzenie do podstawowych technik'
  }, {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625',
    title: 'Techniki łokciowe',
    duration: '3:45',
    views: '1.8k',
    description: 'Jak wykonać skuteczny atak łokciem'
  }, {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1551038247-3d9af20df552',
    title: 'Wai Kru Ram Muay',
    duration: '7:12',
    views: '3.2k',
    description: 'Tradycyjny taniec przed walką'
  }, {
    id: 4,
    thumbnail: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b',
    title: 'Sparring highlights',
    duration: '4:20',
    views: '5.5k',
    description: 'Najlepsze momenty z treningów'
  }, {
    id: 5,
    thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155',
    title: 'Mistrzostwa Polski',
    duration: '12:15',
    views: '8.9k',
    description: 'Relacja z mistrzostw krajowych'
  }, {
    id: 6,
    thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837',
    title: 'Techniki kolan',
    duration: '6:30',
    views: '2.7k',
    description: 'Skuteczne techniki z użyciem kolan'
  }];
  return <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
              Media
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Galeria zdjęć i filmów z życia naszego klubu
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-12 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-lg rounded-full p-2 border border-white/10">
              <div className="flex space-x-2">
                {[{
                id: 'photos',
                label: 'Zdjęcia',
                icon: Image
              }, {
                id: 'videos',
                label: 'Filmy',
                icon: Video
              }].map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-8 py-4 rounded-full transition-all duration-300 ${activeTab === tab.id ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg' : 'text-gray-300 hover:text-white hover:bg-white/10'}`}>
                    <tab.icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photos Tab */}
      {activeTab === 'photos' && <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
              {photos.map(photo => <Card key={photo.id} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group overflow-hidden cursor-pointer">
                  <div className="relative overflow-hidden">
                    <img src={photo.src} alt={photo.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="text-white font-bold mb-1 text-sm">{photo.title}</h3>
                      <p className="text-gray-200 text-xs">{photo.description}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                        {photo.category}
                      </div>
                    </div>
                  </div>
                </Card>)}
            </div>
          </div>
        </section>}

      {/* Videos Tab */}
      {activeTab === 'videos' && <section className="py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
              {videos.map(video => <Card key={video.id} className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 group overflow-hidden cursor-pointer">
                  <div className="relative">
                    <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-white font-bold mb-2">{video.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{video.description}</p>
                    <div className="flex items-center justify-between text-gray-400 text-xs">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {video.views} wyświetleń
                      </div>
                      <div className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>}

      <Footer />
    </div>;
};
export default Media;