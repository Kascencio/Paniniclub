import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-panini.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Delicious panini" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block mb-4 md:mb-6 animate-in fade-in slide-in-from-left-5 duration-700">
            <span className="bg-accent/20 text-accent px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-accent/30">
              ¡Nuevo! Ahora con delivery
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-9xl mb-4 md:mb-6 leading-none animate-in fade-in slide-in-from-left-5 duration-700 delay-100">
            <span className="text-foreground">LA MEJOR</span>
            <br />
            <span className="text-gradient">EXPERIENCIA</span>
            <br />
            <span className="text-foreground">EN PANINIS</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 max-w-2xl animate-in fade-in slide-in-from-left-5 duration-700 delay-200">
            Ingredientes frescos, recetas únicas y el sabor que buscas. 
            Descubre por qué somos el club favorito de los amantes del buen comer.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-in fade-in slide-in-from-left-5 duration-700 delay-300">
            <Button size="lg" className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 font-display shadow-[var(--shadow-glow)]">
              VER MENÚ
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 font-display border-2"
            >
              ORDENA AHORA
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
