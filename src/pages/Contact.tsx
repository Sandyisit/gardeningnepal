
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    document.title = "Gardening Nepal - Contact Us";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-6">Contact Us</h1>
          <p className="text-sage-600 max-w-2xl mb-12">
            Have questions about our plants or need assistance? Reach out to us and we'll be happy to help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-serif font-medium text-sage-700 mb-4">Get in Touch</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sage-600">Your Name</label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sage-600">Email Address</label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sage-600">Message</label>
                  <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                
                <Button className="bg-sage-600 hover:bg-sage-700 text-white">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-2xl font-serif font-medium text-sage-700 mb-4">Our Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage-700">Address</h3>
                    <p className="text-sage-600">191 Danda Gaun Marga, Bhaisepati-25, Lalitpur Metropolitan City, Lalitpur, Nepal</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Phone className="text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage-700">Phone</h3>
                    <p className="text-sage-600">+977 9812345678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-sage-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-sage-700">Email</h3>
                    <p className="text-sage-600">gardeningnepal2023@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
