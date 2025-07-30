import React, { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle, Bot, User, Clock } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm your shopping assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    // Predefined responses based on keywords
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! Welcome to ShopEasy! I'm here to help you find the perfect products. What are you looking for today?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('expensive')) {
      return "We offer competitive prices on all our products! You can use the filter options to sort by price range. We also have many items on sale with great discounts.";
    }
    
    if (message.includes('shipping') || message.includes('delivery')) {
      return "We offer free shipping on orders over $50! For orders under $50, shipping is $9.99. Most orders are delivered within 3-5 business days.";
    }
    
    if (message.includes('return') || message.includes('refund')) {
      return "We have a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund. Items must be in original condition.";
    }
    
    if (message.includes('electronics') || message.includes('headphones') || message.includes('laptop')) {
      return "Great choice! Our electronics section has amazing deals on headphones, laptops, smartwatches, and more. All electronics come with manufacturer warranty.";
    }
    
    if (message.includes('clothing') || message.includes('shirt') || message.includes('apparel')) {
      return "Our clothing collection features high-quality materials and trendy designs. We have various sizes and colors available. Check out our size guide for the perfect fit!";
    }
    
    if (message.includes('sale') || message.includes('discount') || message.includes('deal')) {
      return "We have amazing deals running right now! Look for items marked with the 'SALE' badge for discounted prices. You can also subscribe to our newsletter for exclusive offers.";
    }
    
    if (message.includes('account') || message.includes('login') || message.includes('register')) {
      return "You can create an account to track your orders, save your favorite items, and get personalized recommendations. Click on the user icon in the header to get started!";
    }
    
    if (message.includes('size') || message.includes('fit')) {
      return "For clothing items, we provide detailed size charts. For electronics, you can find specifications in the product details. If you're unsure, feel free to ask specific questions!";
    }
    
    if (message.includes('payment') || message.includes('credit card') || message.includes('checkout')) {
      return "We accept all major credit cards, PayPal, and Apple Pay. All transactions are secure and encrypted. Your payment information is never stored on our servers.";
    }
    
    if (message.includes('help') || message.includes('support') || message.includes('problem')) {
      return "I'm here to help! You can ask me about products, shipping, returns, or anything else. If you need human assistance, you can contact our support team at support@shopeasy.com or call (555) 123-4567.";
    }
    
    if (message.includes('recommend') || message.includes('suggest') || message.includes('best')) {
      return "I'd be happy to recommend products! Our bestsellers include wireless headphones, smartwatches, and premium t-shirts. What category are you interested in?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! I'm glad I could help. Is there anything else you'd like to know about our products or services?";
    }
    
    if (message.includes('bye') || message.includes('goodbye')) {
      return "Thank you for chatting with me! Feel free to come back anytime if you have more questions. Happy shopping at ShopEasy!";
    }
    
    // Default response
    return "I understand you're asking about that. Let me help you find what you need! You can browse our products by category, use the search bar, or ask me specific questions about shipping, returns, or our products.";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputMessage),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickActions = [
    "What are your bestsellers?",
    "Tell me about shipping",
    "How do returns work?",
    "Show me electronics",
    "Any current deals?"
  ];

  const handleQuickAction = (action: string) => {
    setInputMessage(action);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-white rounded-lg shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="bg-primary-600 text-white px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5" />
            <span className="font-semibold">Shopping Assistant</span>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-primary-600 text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                  <div>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-primary-200'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-xs bg-gray-100 text-gray-800 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bot className="h-4 w-4" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
            <div className="space-y-1">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action)}
                  className="block w-full text-left text-xs text-primary-600 hover:text-primary-700 py-1 px-2 rounded hover:bg-primary-50 transition-colors duration-200"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputMessage.trim() || isTyping}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;