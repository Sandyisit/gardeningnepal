
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-sage-50 pt-16 pb-8 border-t border-sage-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-serif font-semibold text-sage-700">GreenMind Grove</span>
            </Link>
            <p className="text-sage-600 mb-4">
              Home-grown succulents and cacti from Kathmandu Valley, Nepal. Bringing the joy of plants and their therapeutic benefits to your home.
            </p>
            <div className="flex space-x-4 text-sage-600">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sage-800 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:contact@greenmindgrove.com" className="hover:text-sage-800 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-medium text-sage-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-sage-600 hover:text-sage-800 transition-colors">
                  Shop Plants
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sage-600 hover:text-sage-800 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sage-600 hover:text-sage-800 transition-colors">
                  Plant Care Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-sage-600 hover:text-sage-800 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sage-600 hover:text-sage-800 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-medium text-sage-800 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-sage-600 mt-0.5 flex-shrink-0" />
                <span className="text-sage-600">Kathmandu Valley, Nepal</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone size={20} className="text-sage-600 mt-0.5 flex-shrink-0" />
                <span className="text-sage-600">+977 9812345678</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-sage-600 mt-0.5 flex-shrink-0" />
                <span className="text-sage-600">contact@greenmindgrove.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-lg font-medium text-sage-800 mb-4">Join Our Newsletter</h3>
            <p className="text-sage-600 mb-4">
              Subscribe to get plant care tips, special offers, and updates.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white border-sage-200"
              />
              <Button className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-sage-200 text-center">
          <p className="text-sage-500 text-sm">
            &copy; {new Date().getFullYear()} GreenMind Grove. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
