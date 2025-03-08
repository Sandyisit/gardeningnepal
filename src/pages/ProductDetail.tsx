
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { toast } from '@/components/ui/sonner';

// Import sample product data (same as in Shop and ProductShowcase)
const products = [
  {
    id: "1",
    name: "Echeveria Elegans",
    price: 450,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1520302519846-3ada7295df21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
    description: "Known as the Mexican Snowball, this beautiful rosette-forming succulent has powder-blue leaves with pink-purple margins in bright light. Easy to care for and perfect for beginners.",
    light: "Bright indirect light to full sun",
    water: "Allow soil to dry completely between waterings",
    size: "Small (10-15cm diameter pot)",
    isNew: true
  },
  {
    id: "2",
    name: "Haworthia Fasciata",
    price: 380,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    description: "Commonly known as Zebra Plant, this small succulent has distinctive white striped leaves that grow in a rosette formation. Native to South Africa, it's perfect for indoor growing.",
    light: "Partial to bright indirect light",
    water: "Water sparingly, allowing soil to dry out completely",
    size: "Small (8-12cm diameter pot)",
    isPopular: true
  },
  {
    id: "3",
    name: "Cactus Collection",
    price: 1200,
    category: "Cactus",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    description: "A beautiful collection of 4 different cacti varieties, each in their own ceramic pot. Perfect for creating an eye-catching display in your home or office.",
    light: "Bright direct light to full sun",
    water: "Very sparingly, only when completely dry",
    size: "Set of 4 small cacti (6-8cm pots)"
  },
  {
    id: "4",
    name: "Aloe Vera",
    price: 350,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    description: "A medicinal succulent with thick, fleshy leaves containing a gel used for healing burns and skin conditions. Easy to care for and beneficial to have in your home.",
    light: "Bright indirect light",
    water: "Allow soil to dry before watering again",
    size: "Medium (15-20cm diameter pot)"
  },
  {
    id: "5",
    name: "Jade Plant",
    price: 500,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80",
    description: "Also known as the Money Plant, this popular succulent has thick, woody stems and oval-shaped leaves. Symbolizes good luck and prosperity in many cultures.",
    light: "Bright indirect to direct light",
    water: "Allow to dry out between waterings",
    size: "Medium (12-18cm diameter pot)",
    isNew: true,
    isPopular: true
  },
  {
    id: "6",
    name: "Zebra Plant",
    price: 420,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    description: "The Zebra Plant is a small haworthia succulent with distinctive white ridges on its leaves. Low maintenance and perfect for small spaces like desks or shelves.",
    light: "Partial to bright indirect light",
    water: "Water sparingly, allowing soil to dry out completely",
    size: "Small (8-12cm diameter pot)"
  },
  {
    id: "7",
    name: "Prickly Pear Cactus",
    price: 390,
    category: "Cactus",
    image: "https://images.unsplash.com/photo-1520302519846-3ada7295df21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
    description: "The Prickly Pear is a distinctive paddle-shaped cactus native to the Americas. Known for its edible fruits and pads when mature, it makes a fascinating houseplant.",
    light: "Bright direct light to full sun",
    water: "Very sparingly, only when completely dry",
    size: "Medium (15-20cm diameter pot)"
  },
  {
    id: "8",
    name: "Aeonium Kiwi",
    price: 480,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    description: "The Aeonium 'Kiwi' is a striking succulent with rosettes of spoon-shaped leaves in variegated green, yellow and red colors. The coloration intensifies with more sunlight.",
    light: "Bright indirect to direct light",
    water: "Allow soil to dry between waterings",
    size: "Medium (12-15cm diameter pot)",
    isPopular: true
  }
];

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  useEffect(() => {
    document.title = "Gardening Nepal - Product Detail";
    window.scrollTo(0, 0);
    
    // Find the product by id
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct);
  }, [id]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-serif text-sage-800">Product not found</h1>
            <Button 
              onClick={() => navigate('/shop')} 
              className="mt-4"
              variant="outline"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Shop
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const handleAddToCart = () => {
    setIsAddingToCart(true);
    
    // Simulate adding to cart with delay
    setTimeout(() => {
      setIsAddingToCart(false);
      toast("Added to cart", {
        description: `${quantity} × ${product.name} added to your cart`,
      });
    }, 600);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Button 
            onClick={() => navigate('/shop')} 
            variant="ghost" 
            className="mb-6 text-sage-600 hover:text-sage-800 hover:bg-sage-50"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Shop
          </Button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="bg-sage-50 rounded-lg overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            
            {/* Product Details */}
            <div>
              <div className="mb-6">
                <div className="text-sage-500 mb-1">{product.category}</div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-sage-800 mb-2">
                  {product.name}
                </h1>
                <p className="text-2xl font-medium text-earth-600 mb-4">
                  NPR {product.price.toFixed(2)}
                </p>
                
                <div className="prose text-sage-700 mb-6">
                  <p>{product.description}</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8 border-y border-sage-100 py-6">
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Light</span>
                  <span className="font-medium text-sage-800">{product.light}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Water</span>
                  <span className="font-medium text-sage-800">{product.water}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sage-600">Size</span>
                  <span className="font-medium text-sage-800">{product.size}</span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center border border-sage-200 rounded-md">
                    <button 
                      className="px-3 py-2 text-sage-600 hover:text-sage-800 disabled:opacity-50"
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-2 font-medium text-sage-800">{quantity}</span>
                    <button 
                      className="px-3 py-2 text-sage-600 hover:text-sage-800"
                      onClick={() => setQuantity(q => q + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <Button 
                    className="flex-1" 
                    onClick={handleAddToCart} 
                    disabled={isAddingToCart}
                  >
                    {isAddingToCart ? (
                      <>
                        <Check size={20} className="mr-2" />
                        Added
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={20} className="mr-2" />
                        Add to Cart
                      </>
                    )}
                  </Button>
                  <Button variant="outline" className="flex-none p-3">
                    <Heart size={20} />
                  </Button>
                </div>
              </div>
              
              <div className="mt-8 text-sage-500 text-sm">
                <p>Free delivery within Lalitpur Metropolitan City.</p>
                <p>Delivery outside Lalitpur available for additional fee.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
