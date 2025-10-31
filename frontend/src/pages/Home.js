import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import ProductCard from '../components/ProductCard';
import { allProducts, allCategories } from '../mock/allProducts';
import { Package, Users, TrendingDown, Shield } from 'lucide-react';

const Home = () => {
  const { language, t } = useLanguage();
  const navigate = useNavigate();

  const featuredProducts = allProducts.slice(0, 8);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/19755751/pexels-photo-19755751.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-800/70"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => navigate('/products')}
              className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {t.hero.shopNow}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/register')}
              className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-6 shadow-xl transition-all transform hover:scale-105"
            >
              {t.register}
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {language === 'en' ? 'Quality Products' : 'Ibicuruzwa Byiza'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Verified sellers only' : 'Abacuruzi bemejwe gusa'}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {language === 'en' ? 'Group Buying' : 'Kugura mu Tsinda'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Save more together' : 'Kuzigama cyane hamwe'}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {language === 'en' ? 'Best Prices' : 'Ibiciro Byiza'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? 'Up to 30% off' : 'Kugeza 30% ku igiciro'}
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {language === 'en' ? 'Secure Payment' : 'Kwishyura Neza'}
              </h3>
              <p className="text-gray-600">
                {language === 'en' ? '100% protected' : '100% birinzwe'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            {t.categories}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {allCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => navigate(`/products?category=${category.name}`)}
                className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:from-blue-100 hover:to-blue-200 transition-all shadow-md hover:shadow-xl transform hover:scale-105 duration-300"
              >
                <p className="font-semibold text-gray-800 text-center">
                  {language === 'en' ? category.name : category.nameRw}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              {language === 'en' ? 'Featured Products' : 'Ibicuruzwa Byihariye'}
            </h2>
            <Button 
              variant="outline" 
              onClick={() => navigate('/products')}
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            >
              {t.allProducts}
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;