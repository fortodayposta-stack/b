import React, { useState } from 'react';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Star, Trash2, Check } from 'lucide-react';

const AllReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      product_name: 'Wireless Headphones',
      user_name: 'Jean Baptiste Uwimana',
      rating: 5,
      comment: 'Excellent product! Fast delivery and great quality. Highly recommend!',
      date: '2025-01-15',
      verified: true,
      helpful: 24,
      status: 'approved',
    },
    {
      id: 2,
      product_name: 'Smart Watch',
      user_name: 'Marie Claire Mukamana',
      rating: 4,
      comment: 'Good value for money. The pool buying saved me a lot!',
      date: '2025-01-10',
      verified: true,
      helpful: 18,
      status: 'approved',
    },
    {
      id: 3,
      product_name: 'Running Shoes',
      user_name: 'Patrick Nkurunziza',
      rating: 5,
      comment: 'Best marketplace in Rwanda! Love the group buying feature.',
      date: '2025-01-08',
      verified: true,
      helpful: 31,
      status: 'approved',
    },
    {
      id: 4,
      product_name: 'Coffee Maker',
      user_name: 'Grace Uwase',
      rating: 4,
      comment: 'Product quality is great. Delivery took a bit longer than expected.',
      date: '2025-01-05',
      verified: true,
      helpful: 12,
      status: 'approved',
    },
    {
      id: 5,
      product_name: 'Laptop Stand',
      user_name: 'Emmanuel Habimana',
      rating: 5,
      comment: 'Amazing experience! The customer service is top-notch.',
      date: '2025-01-02',
      verified: true,
      helpful: 27,
      status: 'approved',
    },
  ]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      setReviews(reviews.filter(r => r.id !== id));
    }
  };

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">All Reviews ({reviews.length})</h2>
        <p className="text-gray-600">Manage customer reviews and ratings</p>
      </div>

      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-bold text-lg">{review.product_name}</h3>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded flex items-center gap-1">
                      <Check className="h-3 w-3" />
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>By: {review.user_name}</span>
                  <span>Date: {new Date(review.date).toLocaleDateString()}</span>
                  <span>{review.helpful} people found this helpful</span>
                </div>
              </div>
              <Button
                onClick={() => handleDelete(review.id)}
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 font-semibold">{review.rating}/5</span>
            </div>

            <p className="text-gray-700">{review.comment}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AllReviews;