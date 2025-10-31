import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { allProducts } from '../mock/allProducts';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Cart = () => {
  const { language, t } = useLanguage();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedItems = cartItems.map(item =>
      item.product_id === productId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedItems);
  };

  const removeItem = async (productId) => {
    try {
      await axios.delete(`${API}/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setCartItems(cartItems.filter(item => item.product_id !== productId));
    } catch (error) {
      console.error('Error removing item:', error);
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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'en' ? 'Loading...' : 'Birimo Gupakira...'}</div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {language === 'en' ? 'Your Cart is Empty' : 'Ikibanza Cyawe Kirimo Ubusa'}
          </h1>
          <p className="text-gray-600 mb-8">
            {language === 'en' ? 'Add some products to get started!' : 'Ongeraho ibicuruzwa kugira ngo utangire!'}
          </p>
          <Button onClick={() => navigate('/products')} size="lg" className="bg-blue-600 hover:bg-blue-700">
            {language === 'en' ? 'Continue Shopping' : 'Komeza Kugura'}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {t.cart || (language === 'en' ? 'Shopping Cart' : 'Ikibanza cyo Kugura')}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => {
              const product = getProductDetails(item.product_id);
              if (!product) return null;
              
              const price = item.is_pool_purchase ? product.poolPrice : product.perItemPrice;
              const itemTotal = (price * item.quantity).toFixed(2);

              return (
                <Card key={`${item.product_id}-${item.is_pool_purchase}`} className="overflow-hidden">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={product.image}
                        alt={language === 'en' ? product.name : product.nameRw}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {language === 'en' ? product.name : product.nameRw}
                        </h3>
                        {item.is_pool_purchase && (
                          <span className="inline-block bg-green-100 text-green-700 text-xs px-2 py-1 rounded mb-2">
                            {language === 'en' ? 'Pool Price' : 'Igiciro cy\'Itsinda'}
                          </span>
                        )}
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="font-semibold w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="text-xl font-bold text-blue-700">${itemTotal}</div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.product_id)}
                            className="ml-auto text-red-600 hover:text-red-700 hover:bg-red-50"
                          >
                            <Trash2 className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6">
                  {language === 'en' ? 'Order Summary' : 'Incamake y\'Itumwa'}
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === 'en' ? 'Subtotal' : 'Igiteranyo'}:
                    </span>
                    <span className="font-semibold">${calculateTotal()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === 'en' ? 'Shipping' : 'Ikohereza'}:
                    </span>
                    <span className="font-semibold text-green-600">
                      {language === 'en' ? 'FREE' : 'UBUNTU'}
                    </span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">
                        {language === 'en' ? 'Total' : 'Igiteranyo'}:
                      </span>
                      <span className="font-bold text-2xl text-blue-700">${calculateTotal()}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => navigate('/checkout')}
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  {language === 'en' ? 'Proceed to Checkout' : 'Komeza ku Kwishyura'}
                </Button>

                <Button 
                  onClick={() => navigate('/products')}
                  variant="outline"
                  size="lg" 
                  className="w-full mt-3"
                >
                  {language === 'en' ? 'Continue Shopping' : 'Komeza Kugura'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
