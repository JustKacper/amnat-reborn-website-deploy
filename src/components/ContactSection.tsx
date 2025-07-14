
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      info: '662 132 334',
      description: 'Pon-Pt: 9:00-21:00'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'klub@amnat.pl',
      description: 'Odpowiedź w ciągu 24h'
    },
    {
      icon: MapPin,
      title: 'Adres',
      info: 'ul. Cystersów 3, Kraków',
      description: 'Wejście od podwórka'
    },
    {
      icon: Clock,
      title: 'Godziny otwarcia',
      info: 'Pon-Pt: 16:00-22:00',
      description: 'Sob: 10:00-14:00'
    }
  ];

  const socialLinks = [
    { icon: Facebook, name: 'Facebook', color: 'text-orange-500', link: 'https://www.facebook.com/AmNatMuayThaiGym/' },
    { icon: Instagram, name: 'Instagram', color: 'text-yellow-500', link: 'https://www.instagram.com/amnatgym/' }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Kontakt
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Skontaktuj się z nami i rozpocznij swoją przygodę z Muay Thai już dziś
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Napisz do <span className="text-orange-400">nas</span>
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Imię i nazwisko"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        placeholder="Telefon"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Twoja wiadomość..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-orange-400 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white font-semibold py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
                  >
                    Wyślij wiadomość
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">Znajdź nas w social media</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="bg-white/5 backdrop-blur-lg border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{info.title}</h3>
                      <p className="text-orange-400 font-semibold mb-1">{info.info}</p>
                      <p className="text-gray-300 text-sm">{info.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Map */}
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 overflow-hidden">
              <div className="relative h-64 bg-gradient-to-br from-orange-500/20 to-yellow-600/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Am Nat Gym</h3>
                  <p className="text-gray-300">ul. Cystersów 3, Kraków</p>
                  <p className="text-gray-300 text-sm mt-2">Wejście od podwórka</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <Card className="bg-white/5 backdrop-blur-lg border-white/10">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">
                Najczęściej zadawane <span className="text-orange-400">pytania</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Czy mogę przyjść na trening próbny?</h4>
                    <p className="text-gray-300 text-sm">Tak! Oferujemy bezpłatny trening próbny dla wszystkich nowych osób. Wystarczy się z nami skontaktować.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Jaki sprzęt jest potrzebny na początku?</h4>
                    <p className="text-gray-300 text-sm">Na start wystarczą wygodne sportowe ubrania. Rękawice i ochraniacze można wypożyczyć w klubie.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Od jakiego wieku można zacząć treningi?</h4>
                    <p className="text-gray-300 text-sm">Przyjmujemy dzieci od 10 roku życia. Mamy specjalne grupy dla różnych grup wiekowych.</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Czy prowadzicie treningi dla kobiet?</h4>
                    <p className="text-gray-300 text-sm">Oczywiście! Mamy specjalne zajęcia dedykowane kobietom oraz grupy mieszane.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
