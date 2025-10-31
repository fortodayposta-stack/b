import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Download, Home, Package } from 'lucide-react';

const OrderSuccess = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, total, paymentMethod } = location.state || {};

  if (!orderId) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <Card className="text-center shadow-2xl">
          <CardContent className="p-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-6">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {language === 'en' ? 'Order Placed Successfully!' : 'Itumwa Ryahawe Neza!'}
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              {language === 'en' 
                ? 'Thank you for your purchase! Your order has been received.'
                : 'Murakoze kugura! Itumwa ryanyu ryakiriwe.'}
            </p>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{language === 'en' ? 'Order ID' : 'Nimero y\'Itumwa'}:</span>
                  <span className="font-bold text-blue-700">{orderId}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{language === 'en' ? 'Total Amount' : 'Igiteranyo'}:</span>
                  <span className="font-bold text-2xl text-blue-700">${total}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">{language === 'en' ? 'Payment Method' : 'Uburyo bwo Kwishyura'}:</span>
                  <span className="font-semibold capitalize">{paymentMethod}</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-8">
              <p className="text-sm text-yellow-800">
                {language === 'en'
                  ? '📧 An order confirmation has been sent to your email.'
                  : '📧 Ubutumwa bwo kwemeza itumwa ryanyu bwoherejwe kuri imeri yanyu.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/orders')}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Package className="h-5 w-5 mr-2" />
                {language === 'en' ? 'View Orders' : 'Reba Ibyo Watumije'}
              </Button>
              
              <Button 
                onClick={() => navigate('/')}
                variant="outline"
                size="lg"
              >
                <Home className="h-5 w-5 mr-2" />
                {language === 'en' ? 'Back to Home' : 'Subira ku Rupapuro Rw\'Ibanze'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderSuccess;