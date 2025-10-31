import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Eye, Package, Truck, CheckCircle } from 'lucide-react';

const AllOrders = () => {
  const [orders] = useState([
    {
      id: 'KIVU-2025-001',
      customer_name: 'Alice Mukamana',
      customer_email: 'alice@email.com',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 89.99 },
        { name: 'Smart Watch', quantity: 1, price: 199.99 },
      ],
      total_amount: 289.98,
      status: 'processing',
      payment_method: 'MTN MoMo',
      country: 'Rwanda',
      created_at: '2025-01-20T14:30:00',
    },
    {
      id: 'KIVU-2025-002',
      customer_name: 'John Habimana',
      customer_email: 'john@email.com',
      items: [
        { name: 'Running Shoes', quantity: 2, price: 79.99 },
      ],
      total_amount: 159.98,
      status: 'shipped',
      payment_method: 'Stripe',
      country: 'Tanzania',
      created_at: '2025-01-19T10:15:00',
    },
    {
      id: 'KIVU-2025-003',
      customer_name: 'Grace Uwase',
      customer_email: 'grace@email.com',
      items: [
        { name: 'Coffee Maker', quantity: 1, price: 129.99 },
        { name: 'Kitchen Set', quantity: 1, price: 49.99 },
      ],
      total_amount: 179.98,
      status: 'delivered',
      payment_method: 'PayPal',
      country: 'Uganda',
      created_at: '2025-01-18T08:45:00',
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'processing': return <Package className="h-4 w-4" />;
      case 'shipped': return <Truck className="h-4 w-4" />;
      case 'delivered': return <CheckCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">All Orders ({orders.length})</h2>
        <p className="text-gray-600">View and manage customer orders</p>
      </div>

      {orders.map((order) => (
        <Card key={order.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold">{order.id}</h3>
                <p className="text-sm text-gray-600">Customer: {order.customer_name}</p>
                <p className="text-sm text-gray-600">Email: {order.customer_email}</p>
                <p className="text-sm text-gray-600">Date: {new Date(order.created_at).toLocaleString()}</p>
              </div>
              <Badge className={`${getStatusColor(order.status)} flex items-center gap-2 px-3 py-1`}>
                {getStatusIcon(order.status)}
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Badge>
            </div>

            <div className="border-t pt-4 mb-4">
              <h4 className="font-semibold mb-2">Order Items:</h4>
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm mb-1">
                  <span>{item.name} (x{item.quantity})</span>
                  <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t pt-4">
              <div>
                <p className="text-sm text-gray-600">Total Amount</p>
                <p className="text-xl font-bold text-blue-700">${order.total_amount.toFixed(2)}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Payment Method</p>
                <p className="font-semibold">{order.payment_method}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Delivery Country</p>
                <p className="font-semibold">{order.country}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllOrders;