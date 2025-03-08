
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Shop = () => {
  useEffect(() => {
    document.title = "Gardening Nepal - Shop";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-6">Our Plants</h1>
          <p className="text-sage-600 max-w-2xl mb-12">
            Explore our collection of home-grown succulents and cacti. Each plant is carefully nurtured in Lalitpur, Nepal, and comes with care instructions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* This is a placeholder for the shop content */}
            <div className="flex items-center justify-center h-64 bg-sage-50 rounded-lg border border-sage-100">
              <p className="text-sage-500">Shop content coming soon...</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
