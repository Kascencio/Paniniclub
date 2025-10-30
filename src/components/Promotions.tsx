import { Button } from "@/components/ui/button";
import { Calendar, Clock, Percent } from "lucide-react";
import promoImage from "@/assets/promo-image.jpg";

export const Promotions = () => {
  const promos = [
    {
      title: "Martes de 2x1",
      description: "Compra un panini y llévate otro completamente gratis",
      discount: "50% OFF",
      icon: Percent,
      color: "primary",
    },
    {
      title: "Happy Hour",
      description: "De 2pm a 4pm todos los días obtén 20% de descuento",
      discount: "20% OFF",
      icon: Clock,
      color: "accent",
    },
    {
      title: "Combo del Día",
      description: "Panini + Bebida + Papas por solo $149",
      discount: "$149",
      icon: Calendar,
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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Featured Promo Banner */}
        <div className="bg-card rounded-3xl overflow-hidden shadow-2xl grid md:grid-cols-2 gap-8 items-center">
          <div className="p-8 md:p-12">
            <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OFERTA LIMITADA
            </span>
            <h3 className="font-display text-4xl md:text-5xl text-card-foreground mb-4">
              PRUEBA NUESTRO NUEVO <span className="text-primary">PANINI PREMIUM</span>
            </h3>
            <p className="text-card-foreground/80 text-lg mb-6">
              Ingredientes importados de Italia con un descuento especial de lanzamiento
            </p>
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-5xl text-primary">$139</span>
              <span className="text-2xl line-through text-muted-foreground">$179</span>
              <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-bold">
                -22%
              </span>
            </div>
            <Button size="lg" className="font-display text-lg">
              ORDENAR AHORA
            </Button>
          </div>
          <div className="relative h-full min-h-[400px]">
            <img
              src={promoImage}
              alt="Promo panini"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
