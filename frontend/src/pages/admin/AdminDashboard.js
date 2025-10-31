import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Card, CardContent } from '../../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Package, ShoppingCart, MessageSquare, Users } from 'lucide-react';
import PendingProducts from './PendingProducts';
import AllOrders from './AllOrders';
import AllReviews from './AllReviews';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const { user, token } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingProducts: 0,
    totalReviews: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    // Check if user is admin
    if (!user || user.email !== 'admin@kivu.market') {
      navigate('/');
      return;
    }

    const fetchStats = async () => {
      if (!token) return;
      try {
        const pendingResponse = await axios.get(`${API}/admin/products/pending`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        setStats(prevStats => ({
          ...prevStats,
          pendingProducts: pendingResponse.data.length || 0,
          totalOrders: 156, 
          totalReviews: 89,
          totalUsers: 1234,
        }));

      } catch (error) {
        console.error("Failed to fetch admin stats", error);
      }
    };
    
    fetchStats();
  }, [user, navigate, token]);

  const handlePendingCountChange = (newCount) => {
     setStats(prevStats => ({
        ...prevStats,
        pendingProducts: newCount
     }));
  };

  if (!user || user.email !== 'admin@kivu.market') {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your KIVU marketplace</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-800">{stats.totalOrders}</p>
                </div>
                <ShoppingCart className="h-12 w-12 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Products</p>
                  <p className="text-3xl font-bold text-yellow-600">{stats.pendingProducts}</p>
                </div>
                <Package className="h-12 w-12 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Reviews</p>
                  <p className="text-3xl font-bold text-gray-800">{stats.totalReviews}</p>
                </div>
                <MessageSquare className="h-12 w-12 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Users</p>
                  <p className="text-3xl font-bold text-gray-800">{stats.totalUsers}</p>
                </div>
                <Users className="h-12 w-12 text-purple-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="products" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="products">Pending Products</TabsTrigger>
                <TabsTrigger value="orders">All Orders</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="products">
                <PendingProducts onStatsChange={handlePendingCountChange} />
              </TabsContent>

              <TabsContent value="orders">
                <AllOrders />
              </TabsContent>

              <TabsContent value="reviews">
                <AllReviews />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;