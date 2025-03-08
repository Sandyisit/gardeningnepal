
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  useEffect(() => {
    document.title = "Gardening Nepal - FAQs";
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-sage-800 mb-6">Frequently Asked Questions</h1>
          <p className="text-sage-600 max-w-2xl mb-12">
            Find answers to common questions about our plants, care tips, and ordering process.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sage-800 hover:text-sage-600">
                  How often should I water my succulents?
                </AccordionTrigger>
                <AccordionContent className="text-sage-600">
                  Most succulents need to be watered only when the soil is completely dry. This is usually once every 1-2 weeks, depending on your indoor climate. During winter, you can water even less frequently.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sage-800 hover:text-sage-600">
                  Do succulents need direct sunlight?
                </AccordionTrigger>
                <AccordionContent className="text-sage-600">
                  Most succulents prefer bright, indirect sunlight. Some can tolerate direct sun for a few hours, but too much direct sunlight can cause sunburn on the leaves.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sage-800 hover:text-sage-600">
                  How do you deliver the plants?
                </AccordionTrigger>
                <AccordionContent className="text-sage-600">
                  We carefully package our plants to ensure they arrive safely. Local delivery within Kathmandu Valley is handled by our team, while we use trusted courier services for deliveries outside the valley.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-sage-800 hover:text-sage-600">
                  What if my plant arrives damaged?
                </AccordionTrigger>
                <AccordionContent className="text-sage-600">
                  We take great care in packaging our plants, but if your plant arrives damaged, please contact us within 48 hours with photos, and we'll arrange a replacement.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-sage-800 hover:text-sage-600">
                  How can plants help with mental health?
                </AccordionTrigger>
                <AccordionContent className="text-sage-600">
                  Caring for plants can reduce stress, increase focus, and provide a sense of accomplishment. The act of tending to plants has been shown to lower anxiety and create a calming environment at home or in the workplace.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
