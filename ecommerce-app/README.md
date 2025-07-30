# ShopEasy - E-commerce Website with Chatbot

A modern, responsive e-commerce website built with React, TypeScript, and Tailwind CSS, featuring an integrated AI chatbot for customer support.

## 🚀 Features

### 🛍️ E-commerce Functionality
- **Product Catalog**: Browse products with filtering and sorting options
- **Product Details**: Detailed product pages with image galleries
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Category Navigation**: Easy browsing by product categories

### 🤖 Intelligent Chatbot
- **24/7 Support**: Always available customer assistance
- **Smart Responses**: Context-aware answers to common questions
- **Product Recommendations**: Get suggestions based on your needs
- **Order Support**: Help with shipping, returns, and policies

### 🎨 Modern UI/UX
- **Beautiful Design**: Clean, modern interface with smooth animations
- **Intuitive Navigation**: Easy-to-use layout and navigation
- **Loading States**: Smooth transitions and feedback
- **Accessibility**: Built with accessibility best practices

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Icons**: Lucide React for beautiful icons
- **State Management**: React Context API and useReducer
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Site footer
│   ├── Hero.tsx        # Hero section with banner
│   ├── ProductCard.tsx # Individual product display
│   ├── ProductGrid.tsx # Product catalog with filters
│   ├── ProductModal.tsx# Product detail modal
│   ├── ShoppingCart.tsx# Shopping cart sidebar
│   └── Chatbot.tsx     # AI chatbot component
├── context/            # React Context for state management
│   └── CartContext.tsx # Shopping cart state
├── data/              # Mock data
│   └── mockData.ts    # Sample products and categories
├── types/             # TypeScript type definitions
│   └── index.ts       # Application types
└── App.tsx            # Main application component
```

## 🎯 Key Components

### Shopping Cart
- Real-time cart updates
- Quantity management
- Price calculations with shipping
- Persistent cart state

### Chatbot Features
- Predefined responses for common queries
- Product recommendations
- Shipping and return policy information
- Order support and troubleshooting

### Product Catalog
- Filter by category, price, and rating
- Sort by name, price, and popularity
- Search functionality
- Responsive grid layout

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## 🎨 Customization

### Colors
The application uses a primary color scheme defined in `tailwind.config.js`. You can customize the colors by modifying the primary color palette:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    // ... other shades
    900: '#1e3a8a',
  },
}
```

### Adding Products
Products are defined in `src/data/mockData.ts`. Add new products to the `products` array:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 99.99,
  description: 'Product description',
  image: 'https://example.com/image.jpg',
  // ... other properties
}
```

### Chatbot Responses
Customize chatbot responses in `src/components/Chatbot.tsx` by modifying the `getBotResponse` function.

## 🌟 Features Highlights

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface

### Performance
- Lazy loading for images
- Optimized bundle size
- Fast rendering with React

### User Experience
- Smooth animations and transitions
- Intuitive navigation
- Clear visual feedback
- Accessibility considerations

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for environment-specific settings:

```env
REACT_APP_API_URL=https://api.yourdomain.com
REACT_APP_STRIPE_KEY=your_stripe_key
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set
- Unsplash for the sample images

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
