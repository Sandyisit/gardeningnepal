
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const BenefitsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-earth-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606922130692-13684139bd2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1586&q=80"
                alt="Person caring for plants"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <div className="text-2xl font-serif font-semibold text-sage-700 mb-2">
                  Plant Therapy
                </div>
                <p className="text-sage-600">
                  "Plants have become my daily meditation ritual, bringing me calm in a busy world."
                </p>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="max-w-lg">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-sage-100 text-sage-700 rounded-full mb-4">
                Plant Therapy
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-6">
                The Mental Health Benefits of Plant Care
              </h2>
              
              <p className="text-sage-600 mb-6">
                Plants do more than beautify your space—they improve your wellbeing. Research shows that caring for plants reduces stress, anxiety, and depression while improving focus and productivity.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-sage-600"></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-sage-800 mb-1">
                      Stress Reduction
                    </h3>
                    <p className="text-sage-600">
                      The simple act of tending to plants can lower cortisol levels, reducing stress and promoting relaxation.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-sage-600"></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-sage-800 mb-1">
                      Mindfulness Practice
                    </h3>
                    <p className="text-sage-600">
                      Caring for plants encourages presence and mindfulness, helping you stay grounded in the moment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="h-6 w-6 rounded-full bg-sage-100 flex items-center justify-center mt-1">
                    <div className="h-2 w-2 rounded-full bg-sage-600"></div>
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-sage-800 mb-1">
                      Improved Air Quality
                    </h3>
                    <p className="text-sage-600">
                      Many plants naturally filter indoor air pollutants, creating a healthier living environment.
                    </p>
                  </div>
                </div>
              </div>
              
              <Button asChild className="bg-sage-600 hover:bg-sage-700 text-white border-none rounded-md px-6 py-3 h-auto text-base">
                <Link to="/blog" className="flex items-center">
                  <span>Read More About Plant Therapy</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
