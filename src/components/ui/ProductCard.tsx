
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

const ProductCard = ({ id, name, price, image, category, isNew, isPopular }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group relative bg-white rounded-lg overflow-hidden hover-lift"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {(isNew || isPopular) && (
        <div className="absolute top-3 left-3 z-10">
          {isNew && (
            <span className="inline-block bg-sage-600 text-white text-xs px-2 py-1 rounded-full">
              New
            </span>
          )}
          {isPopular && (
            <span className="inline-block bg-earth-500 text-white text-xs px-2 py-1 rounded-full ml-1">
              Popular
            </span>
          )}
        </div>
      )}
      
      {/* Wishlist button */}
      <button className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm p-1.5 rounded-full text-sage-500 hover:text-sage-700 transition-colors">
        <Heart size={18} />
      </button>
      
      {/* Image container */}
      <Link to={`/product/${id}`} className="block aspect-square relative overflow-hidden bg-sage-50">
        <img 
          src={image} 
          alt={name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Quick add button that appears on hover */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <Button className="bg-white text-sage-700 hover:bg-sage-50 shadow-md">
            <ShoppingCart size={18} className="mr-2" />
            Quick Add
          </Button>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="p-4">
        <div className="text-sm text-sage-500 mb-1">{category}</div>
        <Link to={`/product/${id}`} className="block">
          <h3 className="font-serif text-lg font-medium text-sage-800 transition-colors group-hover:text-sage-600">
            {name}
          </h3>
        </Link>
        <div className="mt-2 font-medium text-earth-600">
          NPR {price.toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
