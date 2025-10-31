import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Package, Clock, CheckCircle, XCircle, Truck } from 'lucide-react';
import { allProducts } from '../mock/allProducts';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Orders = () => {
  const { language } = useLanguage();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchOrders();
  }, [user]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API}/orders`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setOrders(response.data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing': return <Clock className="h-5 w-5" />;
      case 'shipped': return <Truck className="h-5 w-5" />;
      case 'delivered': return <CheckCircle className="h-5 w-5" />;
      case 'cancelled': return <XCircle className="h-5 w-5" />;
      default: return <Package className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    const statusMap = {
      en: {
        processing: 'Processing',
        shipped: 'Shipped',
        delivered: 'Delivered',
        cancelled: 'Cancelled'
      },
      rw: {
        processing: 'Birimo Gutunganywa',
        shipped: 'Byoherejwe',
        delivered: 'Byagejejwe',
        cancelled: 'Byahagaritswe'
      }
    };
    return statusMap[language][status] || status;
  };

  const getProductDetails = (productId) => {
    return allProducts.find(p => p.id === productId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">{language === 'en' ? 'Loading...' : 'Birimo Gupakira...'}</div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Package className="h-24 w-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold mb-4 text-gray-800">
            {language === 'en' ? 'No Orders Yet' : 'Nta Byo Watumije'}
          </h1>
          <p className="text-gray-600">
            {language === 'en' ? 'Your order history will appear here.' : 'Amateka y\'ibyo watumije azagaragara hano.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          {language === 'en' ? 'My Orders' : 'Ibyo Natumije'}
        </h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <Card key={order.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">
                      {language === 'en' ? 'Order ID' : 'Nimero y\'Itumwa'}: <span className="font-semibold text-gray-800">{order.id}</span>
                    </p>
                    <p className="text-sm text-gray-600">
                      {language === 'en' ? 'Date' : 'Itariki'}: {new Date(order.created_at).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <Badge className={`${getStatusColor(order.order_status)} flex items-center gap-2 px-3 py-1`}>
                      {getStatusIcon(order.order_status)}
                      {getStatusText(order.order_status)}
                    </Badge>
                  </div>
                </div>

                <div className="border-t pt-4">
                  {order.items.map((item, idx) => {
                    const product = getProductDetails(item.product_id);
                    if (!product) return null;
                    return (
                      <div key={idx} className="flex gap-4 mb-4 last:mb-0">
                        <img
                          src={product.image}
                          alt={language === 'en' ? product.name : product.nameRw}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">
                            {language === 'en' ? product.name : product.nameRw}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {language === 'en' ? 'Quantity' : 'Umubare'}: {item.quantity}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">{language === 'en' ? 'Total' : 'Igiteranyo'}:</span>
                    <span className="text-2xl font-bold text-blue-700">${order.total_amount.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;