
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-semibold text-sage-700">GreenMind Grove</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sage-800 hover:text-sage-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-sage-800 hover:text-sage-600 font-medium transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sage-800 hover:text-sage-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-sage-800 hover:text-sage-600 font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-sage-800 hover:text-sage-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-sage-700 hover:text-sage-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-sage-700 hover:text-sage-500 transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-earth-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-sage-700 hover:text-sage-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-t border-sage-100 animate-fade-in-up">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-sage-800 hover:text-sage-600 py-2 px-4 hover:bg-sage-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className="text-sage-800 hover:text-sage-600 py-2 px-4 hover:bg-sage-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-sage-800 hover:text-sage-600 py-2 px-4 hover:bg-sage-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="text-sage-800 hover:text-sage-600 py-2 px-4 hover:bg-sage-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-sage-800 hover:text-sage-600 py-2 px-4 hover:bg-sage-50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              
              <div className="pt-2 pb-4">
                <div className="relative">
                  <Input 
                    type="search" 
                    placeholder="Search for plants..." 
                    className="pl-10 pr-4 py-2"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-sage-400" size={16} />
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
