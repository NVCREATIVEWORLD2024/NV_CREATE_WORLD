import React, { useState } from 'react';
import { Sparkles, Frame, Music4, Bookmark, Magnet, Image as ImageIcon, ShoppingBag, Instagram, MessageCircle, Heart } from 'lucide-react';
import myImage from './nv.jpg';

type Product = {
  id: number;
  name: string;
  description: string;
  image: string;
  icon: React.ReactNode;
};

function App() {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    requirements: ''
  });

  const handleWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      `Hi, I would like to place an order!\n\n` +
      `*Product:* ${selectedProduct}\n` +
      `*Name:* ${orderDetails.name}\n` +
      `*Requirements:* ${orderDetails.requirements}`
    );
    window.open(`https://wa.me/message/IFN7ULHNRJ27F1?text=${message}`, '_blank');
    setIsOrderFormOpen(false);
  };

  const products: Product[] = [
    {
      id: 1,
      name: "Resin Art",
      description: "Custom handcrafted resin pieces that capture your imagination",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80&w=800",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Picture Frames",
      description: "Beautifully designed frames to showcase your precious moments",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800",
      icon: <Frame className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Spotify Plaques",
      description: "Custom Spotify song plaques for your favorite music",
      image: "https://images.unsplash.com/photo-1611339555312-e607c8352fd7?auto=format&fit=crop&q=80&w=800",
      icon: <Music4 className="w-6 h-6" />
    },
    {
      id: 4,
      name: "Bookmarks",
      description: "Personalized bookmarks to make reading more special",
      image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?auto=format&fit=crop&q=80&w=800",
      icon: <Bookmark className="w-6 h-6" />
    },
    {
      id: 5,
      name: "Fridge Magnets",
      description: "Custom magnets to brighten up your space",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      icon: <Magnet className="w-6 h-6" />
    },
    {
      id: 6,
      name: "Polaroids",
      description: "Artistic polaroid-style prints of your memories",
      image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae?auto=format&fit=crop&q=80&w=800",
      icon: <ImageIcon className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <header className="py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 opacity-30 animate-gradient"></div>
         <img 
          src={myImage}
          alt="NV Creative World Logo" 
          className="w-32 h-32 mx-auto mb-6 rounded-full shadow-xl animate-float"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4 animate-fadeIn">
          NV Creative World
          <span className="inline-block ml-2 animate-spin-slow">🧿</span>
        </h1>
        <p className="text-lg text-purple-700 mb-2 animate-slideUp">Est. 2024</p>
        <p className="text-gray-600 max-w-2xl mx-auto px-4 animate-slideUp delay-200">
          Handcrafted with love and care just for you ❤️
        </p>
      </header>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl animate-fadeIn"
              style={{ animationDelay: `${product.id * 100}ms` }}
            >
              <div className="relative group">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  {product.icon}
                  <h3 className="text-xl font-semibold ml-2 text-purple-900">{product.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button
                  onClick={() => {
                    setSelectedProduct(product.name);
                    setIsOrderFormOpen(true);
                  }}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  Place Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Order Form Modal */}
      {isOrderFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full animate-scaleUp">
            <h2 className="text-2xl font-semibold mb-4 text-purple-900">
              Order {selectedProduct}
            </h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  value={orderDetails.name}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Requirements</label>
                <textarea 
                  value={orderDetails.requirements}
                  onChange={(e) => setOrderDetails(prev => ({ ...prev, requirements: e.target.value }))}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  placeholder="Tell us your requirements"
                ></textarea>
              </div>
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setIsOrderFormOpen(false)}
                  className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppRedirect}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors text-center flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send on WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a 
              href="https://wa.me/message/IFN7ULHNRJ27F1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-600 hover:text-green-700 transform hover:scale-110 transition-transform"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
            <a 
              href="#" 
              className="text-pink-600 hover:text-pink-700 transform hover:scale-110 transition-transform"
            >
              <Instagram className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-600 flex items-center justify-center">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" /> by NV Creative World
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
