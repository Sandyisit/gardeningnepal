
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Blog = () => {
  useEffect(() => {
    document.title = "Gardening Nepal - Blog";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-6">Plant Care Blog</h1>
          <p className="text-sage-600 max-w-2xl mb-12">
            Tips, guides and insights about caring for your succulents and cacti. Learn how to help your plants thrive.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* This is a placeholder for the blog content */}
            <div className="flex items-center justify-center h-64 bg-sage-50 rounded-lg border border-sage-100">
              <p className="text-sage-500">Blog content coming soon...</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
