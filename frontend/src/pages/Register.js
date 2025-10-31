import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';

const Register = () => {
  const { language, t } = useLanguage();
  const { register } = useAuth();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    account_type: 'buyer',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await register(formData.name, formData.email, formData.password, formData.account_type);
    
    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1718242767860-716aa0aafd3d)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-blue-800/80"></div>
      
      <Card className="relative z-10 w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
            {t.auth.createAccount}
          </CardTitle>
          <p className="text-gray-600">{t.siteName}</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700">
                <AlertCircle className="h-5 w-5" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="accountType" className="text-gray-700">
                {language === 'en' ? 'Account Type' : language === 'rw' ? 'Ubwoko bwa Konti' : 'Aina ya Akaunti'}
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, account_type: 'buyer'})}
                  className={`p-3 border-2 rounded-lg transition-all ${
                    formData.account_type === 'buyer'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {language === 'en' ? 'Buyer' : language === 'rw' ? 'Umuguzi' : 'Mnunuzi'}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, account_type: 'seller'})}
                  className={`p-3 border-2 rounded-lg transition-all ${
                    formData.account_type === 'seller'
                      ? 'border-blue-600 bg-blue-50 text-blue-700 font-semibold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {language === 'en' ? 'Seller' : language === 'rw' ? 'Umucuruzi' : 'Muuzaji'}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">{t.auth.name}</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.auth.name}
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-10"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">{t.auth.email}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.auth.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">{t.auth.password}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder={t.auth.password}
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6"
              disabled={loading}
            >
              {loading ? (language === 'en' ? 'Creating Account...' : 'Urimo Gukora Konti...') : t.auth.signUp}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              {t.auth.hasAccount}{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
                {t.login}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;