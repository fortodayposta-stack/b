import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch with the KIVU team',
      name: 'Your Name',
      email: 'Your Email',
      phone: 'Phone Number',
      message: 'Your Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully! We\'ll get back to you soon.',
      error: 'Failed to send message. Please try again.',
      info: {
        title: 'Contact Information',
        address: 'Kigali, Rwanda',
        email: 'support@kivu.market',
        phone: '+250 788 000 000',
      },
      hours: {
        title: 'Business Hours',
        weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
        saturday: 'Saturday: 9:00 AM - 4:00 PM',
        sunday: 'Sunday: Closed',
      },
    },
    rw: {
      title: 'Twandikire',
      subtitle: 'Vugana n\'ikipe ya KIVU',
      name: 'Amazina Yawe',
      email: 'Imeri Yawe',
      phone: 'Numero ya Telefoni',
      message: 'Ubutumwa Bwawe',
      send: 'Ohereza Ubutumwa',
      sending: 'Birimo Koherezwa...',
      success: 'Ubutumwa bwoherejwe neza! Tuzagusubiza vuba.',
      error: 'Ntibyashobotse kohereza ubutumwa. Ongera ugerageze.',
      info: {
        title: 'Amakuru yo Kuvugana',
        address: 'Kigali, Rwanda',
        email: 'support@kivu.market',
        phone: '+250 788 000 000',
      },
      hours: {
        title: 'Amasaha y\'Akazi',
        weekdays: 'Ku wa Mbere - Ku wa Gatanu: 8:00 AM - 6:00 PM',
        saturday: 'Ku wa Gatandatu: 9:00 AM - 4:00 PM',
        sunday: 'Ku Cyumweru: Turafunze',
      },
    },
    sw: {
      title: 'Wasiliana Nasi',
      subtitle: 'Pata mawasiliano na timu ya KIVU',
      name: 'Jina Lako',
      email: 'Barua Pepe Yako',
      phone: 'Nambari ya Simu',
      message: 'Ujumbe Wako',
      send: 'Tuma Ujumbe',
      sending: 'Inatuma...',
      success: 'Ujumbe umetumwa! Tutakujibu hivi karibuni.',
      error: 'Imeshindwa kutuma ujumbe. Tafadhali jaribu tena.',
      info: {
        title: 'Maelezo ya Mawasiliano',
        address: 'Kigali, Rwanda',
        email: 'support@kivu.market',
        phone: '+250 788 000 000',
      },
      hours: {
        title: 'Masaa ya Biashara',
        weekdays: 'Jumatatu - Ijumaa: 8:00 AM - 6:00 PM',
        saturday: 'Jumamosi: 9:00 AM - 4:00 PM',
        sunday: 'Jumapili: Imefungwa',
      },
    },
  };

  const t = content[language];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setSubmitting(false);
      alert(t.success);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-gray-800">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">{t.name}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">{t.email}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">{t.phone}</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={submitting}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">{t.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={submitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={submitting}
                  >
                    <Send className="h-5 w-5 mr-2" />
                    {submitting ? t.sending : t.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.info.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-600">{t.info.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">{t.info.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">{t.info.phone}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.hours.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-gray-700">{t.hours.weekdays}</p>
                <p className="text-sm text-gray-700">{t.hours.saturday}</p>
                <p className="text-sm text-gray-700">{t.hours.sunday}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;