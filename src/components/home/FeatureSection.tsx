
import { LeafyGreen, Heart, RefreshCcw, Truck } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: LeafyGreen,
    title: "Sustainably Grown",
    description: "All our plants are locally grown using eco-friendly practices with minimal environmental impact."
  },
  {
    icon: Heart,
    title: "Plant Therapy",
    description: "Experience the mental health benefits of caring for plants and connecting with nature."
  },
  {
    icon: RefreshCcw,
    title: "Proper Documentation",
    description: "Each plant comes with detailed care instructions and its growth journey documentation."
  },
  {
    icon: Truck,
    title: "Personal Delivery",
    description: "We personally deliver within Kathmandu Valley to ensure plants arrive in perfect condition."
  }
];

const FeatureSection = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-sage-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
            Why Choose Our Plants
          </h2>
          <p className="text-sage-600">
            We're more than just a plant shop. We're cultivating a healthier relationship between people and nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg p-6 shadow-sm border border-sage-100 transition-all duration-700 ease-out hover-lift ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sage-100 text-sage-600 mb-5">
                <feature.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-medium text-sage-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sage-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
