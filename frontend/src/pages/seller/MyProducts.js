import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Plus, Package } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const MyProducts = () => {
  const { language } = useLanguage();
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const content = {
    en: {
      title: 'My Products',
      addNew: 'Add New Product',
      noProducts: 'You haven\'t added any products yet',
      pending: 'Pending Review',
      approved: 'Approved',
      rejected: 'Rejected',
    },
    rw: {
      title: 'Ibicuruzwa Byanjye',
      addNew: 'Ongeraho Igicuruzwa Gishya',
      noProducts: 'Ntabwo wongeyeho ibicuruzwa',
      pending: 'Birimo Gusuzumwa',
      approved: 'Byemejwe',
      rejected: 'Byanze',
    },
    sw: {
      title: 'Bidhaa Zangu',
      addNew: 'Ongeza Bidhaa Mpya',
      noProducts: 'Hujaongeza bidhaa bado',
      pending: 'Inasubiri Ukaguzi',
      approved: 'Imeidhinishwa',
      rejected: 'Imekataliwa',
    },
  };

  const t = content[language];

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    if (user.account_type !== 'seller') {
      navigate('/');
      return;
    }
    fetchProducts();
  }, [user]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${API}/seller/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return t.pending;
      case 'approved': return t.approved;
      case 'rejected': return t.rejected;
      default: return status;
    }
  };

  if (!user || user.account_type !== 'seller') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{t.title}</h1>
          <Button
            onClick={() => navigate('/seller/add-product')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-5 w-5 mr-2" />
            {t.addNew}
          </Button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading...</p>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-16">
            <Package className="h-24 w-24 mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-500 mb-6">{t.noProducts}</p>
            <Button
              onClick={() => navigate('/seller/add-product')}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Plus className="h-5 w-5 mr-2" />
              {t.addNew}
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardContent className="p-0">
                  {product.images && product.images[0] && (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-lg line-clamp-2">{product.name}</h3>
                      <Badge className={getStatusColor(product.status)}>
                        {getStatusText(product.status)}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {product.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="font-bold text-lg">${product.price}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Pool Price</p>
                        <p className="font-bold text-lg text-green-600">${product.pool_price}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProducts;