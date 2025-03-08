
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sage-800/40 to-sage-900/40 mix-blend-multiply" />
        <img 
          src="https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80" 
          alt="Beautiful succulent garden" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto md:mx-0">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-block px-3 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-full mb-4">
              Handcrafted with care in Kathmandu Valley
            </span>
          </div>
          
          <h1 className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Bringing Nature's <span className="text-earth-300">Serenity</span> to Your Space
          </h1>
          
          <p className={`text-white/90 text-lg md:text-xl mb-8 max-w-xl transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Discover our collection of home-grown succulents and cacti, nurturing both your space and mind. Each plant is grown with sustainable practices and comes with its own story.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white border-none rounded-md px-6 py-3 h-auto text-base">
              <Link to="/shop">
                Explore Collection
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 rounded-md px-6 py-3 h-auto text-base group">
              <Link to="/about" className="flex items-center">
                <span>Our Story</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-subtle-bounce">
        <div className="h-12 w-6 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <div className="h-2 w-1 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
