import { Button } from "@/components/ui/button";
import { Calendar, Percent } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export const Promotions = () => {
  const scrollToSection = useSmoothScroll();
  const promos = [
    {
      title: "¡3x2 Martes!",
      description: "Compra 3 paninis y paga solo 2. Válido todos los martes en todo el menú. No acumulable con otras promociones.",
      discount: "3x2",
      icon: Calendar,
      color: "primary",
      highlight: true,
    },
  ];

  return (
    <section id="promociones" className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-kraft-pattern" aria-labelledby="promotions-heading">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-muted/20 to-background/95" aria-hidden="true" />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pattern-panini" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-primary/20 text-primary px-4 md:px-6 py-2 rounded-full text-sm md:text-base font-semibold border-2 border-primary/50">
              🎯 OFERTAS LIMITADAS
            </span>
          </div>
          <h2 id="promotions-heading" className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground">
            <span className="text-gradient">PROMOCIONES</span> ESPECIALES
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Aprovecha nuestras ofertas exclusivas y disfruta más por menos. No dejes pasar estas oportunidades únicas.
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {promos.map((promo, index) => (
            <div
              key={promo.title}
              className={`rounded-2xl p-8 hover-lift shadow-[var(--shadow-card)] relative overflow-hidden group animate-on-scroll ${
                promo.highlight 
                  ? "bg-primary text-background border-4 border-primary" 
                  : "bg-card"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 pattern-panini" />
              </div>

              {/* Background Icon */}
              <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity ${
                promo.highlight ? "text-background" : "text-primary"
              }`} aria-hidden="true">
                <promo.icon className="w-24 h-24" />
              </div>

              {/* Discount Badge */}
              <div
                className={`inline-block mb-6 px-6 py-3 rounded-full font-display text-3xl font-bold ${
                  promo.highlight
                    ? "bg-background/20 text-background border-2 border-background/30"
                    : promo.color === "primary"
                    ? "bg-primary/20 text-primary border-2 border-primary/30"
                    : "bg-accent/20 text-accent border-2 border-accent/30"
                }`}
              >
                {promo.discount}
              </div>

              {/* Content */}
              <h3 className={`font-display text-3xl md:text-4xl mb-4 ${
                promo.highlight ? "text-background" : "text-card-foreground"
              }`}>
                {promo.title}
              </h3>
              <p className={`text-lg mb-6 ${
                promo.highlight ? "text-background/90" : "text-card-foreground/80"
              }`}>
                {promo.description}
              </p>

              <Button
                variant={promo.highlight ? "secondary" : "outline"}
                className={`w-full border-2 ${
                  promo.highlight
                    ? "bg-background text-primary hover:bg-background/90 border-background"
                    : "hover:bg-primary/10 border-primary"
                }`}
                onClick={() => scrollToSection("ubicaciones")}
              >
                Ordenar Ahora
              </Button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
