import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CONTACT_INFO } from "@/config/constants";
import heroImage from "@/assets/hero-panini.jpg";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Cargar todas las imágenes de /assets/images/slider en orden (imagen1, imagen2, ...)
  const slides = useMemo(() => {
    const modules = import.meta.glob("@/assets/images/slider/*.{jpg,jpeg,png,webp}", {
      eager: true,
      as: "url",
    }) as unknown as Record<string, string>;
    const entries = Object.entries(modules);
    // Ordenar por número si el archivo contiene 'imagen<number>'
    entries.sort((a, b) => {
      const getNum = (s: string) => {
        const m = s.match(/imagen(\d+)/i);
        return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
      };
      return getNum(a[0]) - getNum(b[0]);
    });
    return entries.map(([, url]) => url);
  }, []);

  useEffect(() => {
    if (!slides || slides.length === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000); // 4s por slide
    return () => clearInterval(id);
  }, [slides]);

  const scrollToSection = useSmoothScroll();
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section - Panini Club">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Imagen del slider (o fallback) */}
        <img
          key={(slides && slides.length > 0 ? slides[currentIndex] : heroImage) as string}
          src={(slides && slides.length > 0 ? slides[currentIndex] : heroImage) as string}
          alt={`Paninis artesanales frescos de Panini Club - ${CONTACT_INFO.tagline} desde ${CONTACT_INFO.established}`}
          className="w-full h-full object-cover animate-in fade-in duration-700"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge - Promoción Principal */}
          <div className="inline-block mb-4 md:mb-6 animate-in fade-in slide-in-from-left-5 duration-700">
            <a 
              href="#promociones"
              className="bg-primary/20 text-primary px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border-2 border-primary/50 hover:bg-primary/30 transition-colors inline-block"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("promociones");
              }}
            >
              🎉 3x2 MARTES - ¡Aprovecha la promoción!
            </a>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-4 md:mb-6 leading-none animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
            <span className="text-foreground">EAT LIKE A</span>
            <br />
            <span className="text-primary font-script text-5xl sm:text-6xl md:text-8xl lg:text-[10rem]">REAL</span>
            <br />
            <span className="text-gradient font-script text-5xl sm:text-6xl md:text-8xl lg:text-[10rem]">Panininati</span>
          </h1>
          <span className="sr-only">Panini Club - La mejor experiencia en paninis artesanales desde 2014</span>

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
            Ingredientes <span className="text-primary font-semibold">{CONTACT_INFO.tagline}</span> desde {CONTACT_INFO.established}. 
            Descubre por qué somos el club favorito de los amantes del buen comer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-in fade-in slide-in-from-left-5 duration-700 delay-300">
            <Button 
              size="lg" 
              className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 font-display shadow-[var(--shadow-glow)]"
              onClick={() => scrollToSection("menu")}
            >
              VER MENÚ
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 font-display border-2 border-primary hover:bg-primary hover:text-background"
              onClick={() => scrollToSection("ubicaciones")}
            >
              ¡PIDE A DOMICILIO!
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
