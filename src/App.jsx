import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import ProductGrid from "./components/ProductGrid";
import PromoBanner from "./components/PromoBanner";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Hero/>
      <CategorySection />
      <ProductGrid />
      <PromoBanner/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default App