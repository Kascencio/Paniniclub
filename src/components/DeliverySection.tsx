import { Button } from "@/components/ui/button";
import { Smartphone, MapPin, Clock } from "lucide-react";

export const DeliverySection = () => {
  const deliveryApps = [
    {
      name: "Uber Eats",
      color: "bg-[#06C167]",
      link: "#",
    },
    {
      name: "Rappi",
      color: "bg-[#FF441F]",
      link: "#",
    },
    {
      name: "DiDi Food",
      color: "bg-[#FF6600]",
      link: "#",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "30-40 minutos promedio",
    },
    {
      icon: MapPin,
      title: "Cobertura Amplia",
      description: "Toda la ciudad",
    },
    {
      icon: Smartphone,
      title: "Pedido Fácil",
      description: "En 3 simples pasos",
    },
  ];

  return (
    <section id="ubicaciones" className="py-12 md:py-20 lg:py-32 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground">
            <span className="text-gradient">DELIVERY</span> A TU PUERTA
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Disfruta de nuestros paninis sin salir de casa. Ordena ahora a través de tus apps favoritas.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Delivery Apps CTA */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl text-center mb-8 text-card-foreground">
              ORDENA AHORA EN:
            </h3>
            <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
              {deliveryApps.map((app) => (
                <Button
                  key={app.name}
                  size="lg"
                  className={`${app.color} hover:opacity-90 text-white font-display text-xl h-16 px-12 hover-lift`}
                  asChild
                >
                  <a href={app.link} target="_blank" rel="noopener noreferrer">
                    {app.name}
                  </a>
                </Button>
              ))}
            </div>
            <div className="text-center">
              <p className="text-card-foreground/80 mb-4">
                O llámanos directamente para ordenar por teléfono
              </p>
              <a
                href="tel:+525512345678"
                className="font-display text-3xl text-primary hover:text-primary/80 transition-colors"
              >
                55.1234.5678
              </a>
            </div>
          </div>
        </div>

        {/* Locations Preview */}
        <div className="mt-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl mb-6 text-foreground">
            NUESTRAS UBICACIONES
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {[
              { name: "Polanco", address: "Av. Presidente Masaryk 123" },
              { name: "Roma Norte", address: "Calle Orizaba 45" },
              { name: "Condesa", address: "Av. Amsterdam 67" },
            ].map((location) => (
              <div key={location.name} className="bg-card rounded-xl p-6 shadow-md hover-lift">
                <h4 className="font-display text-xl text-card-foreground mb-2">
                  {location.name}
                </h4>
                <p className="text-card-foreground/80 text-sm">{location.address}</p>
              </div>
            ))}
          </div>
          <Button size="lg" variant="outline" className="font-display text-lg border-2">
            VER TODAS LAS SUCURSALES
          </Button>
        </div>
      </div>
    </section>
  );
};
