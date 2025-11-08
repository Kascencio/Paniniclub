import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuPreview } from "@/components/MenuPreview";
import { Promotions } from "@/components/Promotions";
import { DeliverySection } from "@/components/DeliverySection";
import { Testimonials } from "@/components/Testimonials";
import { Stats } from "@/components/Stats";
import { PromotionBanner } from "@/components/PromotionBanner";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll animations observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <PromotionBanner />
      <Header />
      <main id="main-content" role="main">
        <Hero />
        <Stats />
        <MenuPreview />
        <Promotions />
        <Testimonials />
        <About />
        <DeliverySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
