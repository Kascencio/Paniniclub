import { Smartphone, MapPin, Clock } from "lucide-react";
import { LOCATIONS } from "@/config/constants";
import { LocationCard } from "@/components/LocationCard";

export const DeliverySection = () => {

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
    <section id="ubicaciones" className="py-12 md:py-20 lg:py-32 bg-muted/20" aria-labelledby="delivery-heading">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="delivery-heading" className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground">
            <span className="text-gradient">DELIVERY</span> A TU PUERTA
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Disfruta de nuestros paninis sin salir de casa. Ordena ahora a través de tus apps favoritas.
          </p>
          <div className="flex justify-center items-center gap-6 md:gap-10 mt-6">
            <div className="flex items-center justify-center h-10 md:h-12 min-w-[120px]">
              <img
                src="/delivery/uber-eats.png"
                alt="Uber Eats"
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML =
                      '<span class="text-lg md:text-xl font-bold text-[#06C167]">Uber Eats</span>';
                  }
                }}
              />
            </div>
            <div className="flex items-center justify-center h-10 md:h-12 min-w-[120px]">
              <img
                src="/delivery/rappi.png"
                alt="Rappi"
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML =
                      '<span class="text-base md:text-lg font-bold bg-[#FF441F] text-white px-3 py-1 rounded-lg">Rappi</span>';
                  }
                }}
              />
            </div>
            <div className="flex items-center justify-center h-10 md:h-12 min-w-[120px]">
              <img
                src="/delivery/didi-food.png"
                alt="DiDi Food"
                className="h-8 md:h-10 w-auto object-contain"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement) {
                    target.parentElement.innerHTML =
                      '<span class="text-base md:text-lg font-bold bg-[#FF6600] text-white px-3 py-1 rounded-lg">DiDi Food</span>';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <benefit.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-2xl mb-2 text-foreground">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Ubicaciones y pedidos por sucursal */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-4 md:mb-8 max-w-6xl mx-auto">
          {LOCATIONS.map((location) => (
            <LocationCard key={location.name} location={location as any} variant="detailed" />
          ))}
        </div>
      </div>
    </section>
  );
};
