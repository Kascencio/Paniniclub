import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuPreview } from "@/components/MenuPreview";
import { Promotions } from "@/components/Promotions";
import { DeliverySection } from "@/components/DeliverySection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Promotions />
        <DeliverySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
