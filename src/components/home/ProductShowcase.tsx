
import { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProductCard from '../ui/ProductCard';
import { Link } from 'react-router-dom';

// Sample product data
const products = [
  {
    id: "1",
    name: "Echeveria Elegans",
    price: 450,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1520302519846-3ada7295df21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
    isNew: true
  },
  {
    id: "2",
    name: "Haworthia Fasciata",
    price: 380,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    isPopular: true
  },
  {
    id: "3",
    name: "Cactus Collection",
    price: 1200,
    category: "Cactus",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
  },
  {
    id: "4",
    name: "Aloe Vera",
    price: 350,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
  },
  {
    id: "5",
    name: "Jade Plant",
    price: 500,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80",
    isNew: true,
    isPopular: true
  },
  {
    id: "6",
    name: "Zebra Plant",
    price: 420,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
  },
  {
    id: "7",
    name: "Prickly Pear Cactus",
    price: 390,
    category: "Cactus",
    image: "https://images.unsplash.com/photo-1520302519846-3ada7295df21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
  },
  {
    id: "8",
    name: "Aeonium Kiwi",
    price: 480,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    isPopular: true
  }
];

const ProductShowcase = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10); // 10px buffer
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', checkScrollability);
      // Initial check
      checkScrollability();
    }
    
    return () => {
      observer.disconnect();
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', checkScrollability);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div className={`max-w-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
              Our Featured Collection
            </h2>
            <p className="text-sage-600">
              Discover our handpicked selection of beautiful succulents and cacti, each grown with care in Kathmandu Valley.
            </p>
          </div>
          
          <div className={`flex space-x-2 mt-4 md:mt-0 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft} 
              disabled={!canScrollLeft}
              className="bg-white border-sage-200 text-sage-700 hover:bg-sage-50 disabled:opacity-40"
            >
              <ArrowLeft size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight} 
              disabled={!canScrollRight}
              className="bg-white border-sage-200 text-sage-700 hover:bg-sage-50 disabled:opacity-40"
            >
              <ArrowRight size={20} />
            </Button>
            <Button asChild variant="ghost" className="text-sage-700 hover:text-sage-900 hover:bg-transparent pl-2">
              <Link to="/shop" className="flex items-center">
                <span>View All</span>
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div 
          ref={scrollRef} 
          className={`flex space-x-6 overflow-x-auto pb-6 scrollbar-none transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="min-w-[280px] max-w-[280px]"
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
