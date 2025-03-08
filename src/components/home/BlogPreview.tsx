
import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
  {
    id: "1",
    title: "The Ultimate Guide to Succulent Care",
    excerpt: "Learn the essential tips for keeping your succulents healthy and thriving in any environment.",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09",
    date: "June 15, 2023",
    category: "Plant Care"
  },
  {
    id: "2",
    title: "How Plants Improve Mental Health",
    excerpt: "Discover the science behind plant therapy and why adding greenery to your space can reduce stress and anxiety.",
    image: "https://images.unsplash.com/photo-1575574202425-ba42a224118b",
    date: "July 2, 2023",
    category: "Plant Therapy"
  },
  {
    id: "3",
    title: "Creating a Sustainable Home Garden",
    excerpt: "Simple steps to make your gardening practices more eco-friendly and sustainable for the planet.",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8",
    date: "July 28, 2023",
    category: "Sustainability"
  }
];

const BlogPreview = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-sage-100 text-sage-700 rounded-full mb-4">
            Our Blog
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-sage-800 mb-4">
            Learn & Grow With Us
          </h2>
          <p className="text-sage-600">
            Explore our latest articles on plant care, sustainability, and the therapeutic benefits of connecting with nature.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className={`bg-white rounded-lg overflow-hidden shadow-sm border border-sage-100 hover-lift transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Link to={`/blog/${post.id}`} className="block aspect-video relative overflow-hidden">
                <img 
                  src={`${post.image}?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80`} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </Link>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-sage-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.category}</span>
                </div>
                
                <Link to={`/blog/${post.id}`} className="block">
                  <h3 className="font-serif text-xl font-medium text-sage-800 mb-3 hover:text-sage-600 transition-colors">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-sage-600 mb-4">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-sage-700 hover:text-sage-900 font-medium"
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-sage-200 text-sage-700 hover:bg-sage-50">
            <Link to="/blog" className="flex items-center">
              <span>View All Articles</span>
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
