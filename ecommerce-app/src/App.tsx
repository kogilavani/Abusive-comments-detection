import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ShoppingCart from './components/ShoppingCart';
import Chatbot from './components/Chatbot';
import ProductModal from './components/ProductModal';
import { Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleProductModalClose = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <div className="App min-h-screen bg-gray-50">
        {/* Header */}
        <Header 
          onCartClick={handleCartToggle}
          onChatClick={handleChatToggle}
        />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Products Section */}
          <ProductGrid onProductClick={handleProductClick} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Shopping Cart Sidebar */}
        <ShoppingCart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
        />

        {/* Product Detail Modal */}
        <ProductModal
          product={selectedProduct}
          isOpen={isProductModalOpen}
          onClose={handleProductModalClose}
        />

        {/* Chatbot */}
        <Chatbot 
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
        />
      </div>
    </CartProvider>
  );
}

export default App;
