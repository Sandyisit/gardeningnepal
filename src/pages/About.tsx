
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => {
  useEffect(() => {
    document.title = "Gardening Nepal - About Us";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-6">Our Story</h1>
          <p className="text-sage-600 max-w-2xl mb-12">
            Learn about our journey with succulents and cacti in Nepal, and how we're promoting plant therapy for mental wellbeing.
          </p>
          
          <div className="bg-sage-50 p-8 rounded-lg border border-sage-100">
            <p className="text-sage-600 mb-4">
              At Gardening Nepal, we believe in the power of plants to transform spaces and minds. Our journey began with a simple love for succulents and has grown into a mission to bring nature's serenity to homes across Nepal.
            </p>
            <p className="text-sage-600">
              Full about section coming soon...
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
