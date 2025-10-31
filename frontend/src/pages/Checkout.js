import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { CreditCard, Smartphone, DollarSign, CheckCircle } from 'lucide-react';
import { allProducts } from '../mock/allProducts';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Checkout = () => {
  const { language, t } = useLanguage();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('');
  const [shippingInfo, setShippingInfo] = useState({
    fullName: user?.name || '',
    phone: '',
    address: '',
    city: '',
    district: '',
    country: 'Rwanda'
  });

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchCart();
  }, [user]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(`${API}/cart`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItems(response.data.items || []);
      if (!response.data.items || response.data.items.length === 0) {
        navigate('/cart');
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    }
  };

  const getProductDetails = (productId) => {
    return allProducts.find(p => p.id === productId);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const product = getProductDetails(item.product_id);
      if (!product) return total;
      const price = item.is_pool_purchase ? product.poolPrice : product.perItemPrice;
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const handlePayment = async () => {
    if (!selectedPayment) {
      alert(language === 'en' ? 'Please select a payment method' : 'Hitamo uburyo bwo kwishyura');
      return;
    }

    if (!shippingInfo.phone || !shippingInfo.address || !shippingInfo.city) {
      alert(language === 'en' ? 'Please fill in all shipping information' : 'Uzuza amakuru yose yo kohereza');
      return;
    }

    setLoading(true);

    try {
      // 1. Подготовка данных для отправки
      const orderData = {
        items: cartItems, // Этот массив уже в правильном формате
        total_amount: parseFloat(calculateTotal())
      };

      // 2. Отправка настоящего запроса на бэкенд
      const response = await axios.post(
        `${API}/orders`, 
        orderData,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      // 3. Если бэкенд ответил успехом (код 200)
      const orderId = response.data.id; // Получаем ID настоящего, сохраненного заказа

      // 4. Переходим на страницу успеха, передаем ей РЕАЛЬНЫЕ данные
      navigate('/order-success', { 
        state: { 
          orderId: orderId, // ID из базы данных
          total: calculateTotal(),
          paymentMethod: selectedPayment
        } 
      });

    } catch (error) {
      console.error('Error placing order:', error);
      alert(language === 'en' ? 'Failed to place order. Please try again.' : 'Kunanirwa gushyira itumwa. Ongera ugerageze.');
    } finally {
      setLoading(false);
    }
  };

  const paymentMethods = [
    {
      id: 'stripe',
      name: 'Credit/Debit Card',
      nameRw: 'Ikarita y\'Inguzanyo/Debit',
      icon: <CreditCard className="h-6 w-6" />,
      description: 'Pay securely with Stripe',
      descriptionRw: 'Wishyure mu buryo butse bwa Stripe',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      nameRw: 'PayPal',
      icon: <DollarSign className="h-6 w-6" />,
      description: 'Fast & secure PayPal checkout',
      descriptionRw: 'Kwishyura byihuse kandi bitagira nabi na PayPal',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg'
    },
    {
      id: 'momo-mtn',
      name: 'MTN Mobile Money',
      nameRw: 'MTN Mobile Money',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Pay with MTN MoMo Rwanda',
      descriptionRw: 'Wishyure na MTN MoMo Rwanda',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/MTN_Logo.svg'
    },
    {
      id: 'momo-airtel',
      name: 'Airtel Money',
      nameRw: 'Airtel Money',
      icon: <Smartphone className="h-6 w-6" />,
      description: 'Pay with Airtel Money Rwanda',
      descriptionRw: 'Wishyure na Airtel Money Rwanda',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Airtel_logo_logotype_emblem.png'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'Checkout' : 'Kwishyura'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping & Payment */}
          <div className="lg:col-span-2 space-y-6">
            {/* Shipping Information */}
            <Card>
              <CardHeader>
                <CardTitle>{language === 'en' ? 'Shipping Information' : 'Amakuru yo Kohereza'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">{language === 'en' ? 'Full Name' : 'Amazina Yose'}</Label>
                    <Input
                      id="fullName"
                      value={shippingInfo.fullName}
                      onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">{language === 'en' ? 'Phone Number' : 'Numero ya Telefoni'}</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+250 7XX XXX XXX"
                      value={shippingInfo.phone}
                      onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">{language === 'en' ? 'Street Address' : 'Aderesi'}</Label>
                  <Input
                    id="address"
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">
                    {language === 'en' ? 'Country' : language === 'rw' ? 'Igihugu' : 'Nchi'}
                  </Label>
                  <select
                    id="country"
                    value={shippingInfo.country}
                    onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                    className="w-full p-2 border rounded-md"
                    required
                  >
                    <option value="Rwanda">Rwanda</option>
                    <option value="Tanzania">Tanzania</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Burundi">Burundi</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">{language === 'en' ? 'City' : language === 'rw' ? 'Umujyi' : 'Mji'}</Label>
                    <Input
                      id="city"
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="district">{language === 'en' ? 'District' : language === 'rw' ? 'Akarere' : 'Wilaya'}</Label>
                    <Input
                      id="district"
                      value={shippingInfo.district}
                      onChange={(e) => setShippingInfo({...shippingInfo, district: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle>{language === 'en' ? 'Payment Method' : 'Uburyo bwo Kwishyura'}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    onClick={() => setSelectedPayment(method.id)}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                      selectedPayment === method.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${
                        selectedPayment === method.id ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{language === 'en' ? method.name : method.nameRw}</h3>
                        <p className="text-sm text-gray-600">
                          {language === 'en' ? method.description : method.descriptionRw}
                        </p>
                      </div>
                      {selectedPayment === method.id && (
                        <CheckCircle className="h-6 w-6 text-blue-600" />
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    {language === 'en' 
                      ? '🔒 All payment methods are secure. Payment gateway integration coming soon!' 
                      : '🔒 Uburyo bwose bwo kwishyura ni bwizewe. Guhuza sisitemu yo kwishyura bizaza vuba!'}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>{language === 'en' ? 'Order Summary' : 'Incamake y\'Itumwa'}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => {
                    const product = getProductDetails(item.product_id);
                    if (!product) return null;
                    return (
                      <div key={`${item.product_id}-${item.is_pool_purchase}`} className="flex gap-3">
                        <img
                          src={product.image}
                          alt={language === 'en' ? product.name : product.nameRw}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm line-clamp-2">
                            {language === 'en' ? product.name : product.nameRw}
                          </p>
                          <p className="text-sm text-gray-600">
                            {language === 'en' ? 'Qty' : 'Umubare'}: {item.quantity}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === 'en' ? 'Subtotal' : 'Igiteranyo'}:</span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">{language === 'en' ? 'Shipping' : 'Ikohereza'}:</span>
                    <span className="font-semibold text-green-600">
                      {language === 'en' ? 'FREE' : 'UBUNTU'}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">{language === 'en' ? 'Total' : 'Igiteranyo'}:</span>
                      <span className="font-bold text-2xl text-blue-700">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handlePayment}
                  size="lg" 
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={loading || !selectedPayment}
                >
                  {loading 
                    ? (language === 'en' ? 'Processing...' : 'Birimo Gutunganywa...') 
                    : (language === 'en' ? 'Place Order' : 'Shyira Itumwa')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
