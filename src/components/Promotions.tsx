import { Button } from "@/components/ui/button";
import { Calendar, Clock, Percent } from "lucide-react";
import promoImage from "@/assets/promo-image.jpg";

export const Promotions = () => {
  const promos = [
    {
      title: "Martes de 2x1",
      description: "Compra un panini y llévate otro completamente gratis. Válido todos los martes en todos nuestros productos.",
      discount: "2x1",
      icon: Percent,
      color: "primary",
    },
  ];

  return (
    <section id="promociones" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-foreground">
            <span className="text-gradient">PROMOCIONES</span> ESPECIALES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Aprovecha nuestras ofertas exclusivas y disfruta más por menos
          </p>
        </div>

        {/* Promotions Grid */}
        <div className="grid md:grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">
          {promos.map((promo, index) => (
            <div
              key={promo.title}
              className="bg-card rounded-2xl p-8 hover-lift shadow-[var(--shadow-card)] relative overflow-hidden group animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <promo.icon className="w-24 h-24" />
              </div>

              {/* Discount Badge */}
              <div
                className={`inline-block mb-6 px-4 py-2 rounded-full font-display text-2xl ${
                  promo.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : "bg-accent/20 text-accent"
                }`}
              >
                {promo.discount}
              </div>

              {/* Content */}
              <h3 className="font-display text-3xl mb-4 text-card-foreground">
                {promo.title}
              </h3>
              <p className="text-card-foreground/80 text-lg mb-6">
                {promo.description}
              </p>

              <Button
                variant="outline"
                className="w-full border-2 hover:bg-primary/10"
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
