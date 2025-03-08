
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import FeatureSection from '../components/home/FeatureSection';
import ProductShowcase from '../components/home/ProductShowcase';
import BenefitsSection from '../components/home/BenefitsSection';
import BlogPreview from '../components/home/BlogPreview';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <ProductShowcase />
        <BenefitsSection />
        <BlogPreview />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
