import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Clothing',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'Home & Garden',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
  },
  {
    id: '4',
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    price: 79.99,
    originalPrice: 99.99,
    description: 'Premium wireless headphones with noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    rating: 4.5,
    reviews: 128,
    inStock: true,
    features: ['Noise Cancellation', '30-hour battery', 'Bluetooth 5.0', 'Quick charge']
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-rich smartwatch with health monitoring and GPS tracking.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    rating: 4.8,
    reviews: 94,
    inStock: true,
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', 'Sleep Tracking']
  },
  {
    id: '3',
    name: 'Premium Cotton T-Shirt',
    price: 29.99,
    originalPrice: 39.99,
    description: 'Comfortable and stylish cotton t-shirt perfect for everyday wear.',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=400&h=400&fit=crop'
    ],
    category: 'Clothing',
    rating: 4.3,
    reviews: 67,
    inStock: true,
    features: ['100% Cotton', 'Machine Washable', 'Various Colors', 'Comfortable Fit']
  },
  {
    id: '4',
    name: 'Laptop Stand',
    price: 49.99,
    description: 'Ergonomic adjustable laptop stand for better posture and comfort.',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop'
    ],
    category: 'Electronics',
    rating: 4.6,
    reviews: 45,
    inStock: true,
    features: ['Adjustable Height', 'Foldable', 'Aluminum Build', 'Heat Dissipation']
  },
  {
    id: '5',
    name: 'Yoga Mat',
    price: 34.99,
    description: 'Non-slip yoga mat perfect for your daily practice.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop'
    ],
    category: 'Sports',
    rating: 4.4,
    reviews: 89,
    inStock: true,
    features: ['Non-slip Surface', 'Eco-friendly', 'Lightweight', 'Easy to Clean']
  },
  {
    id: '6',
    name: 'Coffee Maker',
    price: 89.99,
    originalPrice: 119.99,
    description: 'Programmable coffee maker with thermal carafe.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop'
    ],
    category: 'Home & Garden',
    rating: 4.7,
    reviews: 156,
    inStock: true,
    features: ['Programmable', 'Thermal Carafe', '12-cup Capacity', 'Auto Shut-off']
  }
];