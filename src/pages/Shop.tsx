
import { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/ui/ProductCard';

// Sample product data - same as in ProductShowcase component
const products = [
  {
    id: "1",
    name: "Echeveria Elegans",
    price: 450,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1520302519846-3ada7295df21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80",
    isNew: true
  },
  {
    id: "2",
    name: "Haworthia Fasciata",
    price: 380,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80",
    isPopular: true
  },
  {
    id: "3",
    name: "Cactus Collection",
    price: 1200,
    category: "Cactus",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
  },
  {
    id: "4",
    name: "Aloe Vera",
    price: 350,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80"
  },
  {
    id: "5",
    name: "Jade Plant",
    price: 500,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80",
    isNew: true,
    isPopular: true
  },
  {
    id: "6",
    name: "Zebra Plant",
    price: 420,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
  },
  {
    id: "7",
    name: "Prickly Pear Cactus",
    price: 390,
    category: "Cactus",
    image: "https://images.unsplash.com/photo-1520302519846-3ada7295df21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1615&q=80"
  },
  {
    id: "8",
    name: "Aeonium Kiwi",
    price: 480,
    category: "Succulent",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80",
    isPopular: true
  }
];

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
