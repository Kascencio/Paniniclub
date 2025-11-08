import { Button } from "@/components/ui/button";
import { Smartphone, MapPin, Clock } from "lucide-react";
import { DELIVERY_APPS, CONTACT_INFO } from "@/config/constants";

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

        {/* Delivery Apps CTA */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-3xl md:text-4xl text-center mb-8 text-card-foreground">
              ORDENA AHORA EN:
            </h3>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              {DELIVERY_APPS.map((app) => (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:shadow-2xl transition-all duration-300 hover-lift min-w-[200px] border-2 border-transparent hover:border-primary/20"
                  aria-label={`Ordenar en ${app.name}`}
                >
                  <div className="mb-4 flex items-center justify-center h-20 w-full">
                    {app.name === "Uber Eats" && (
                      <img 
                        src="/delivery/uber-eats.png" 
                        alt="Uber Eats" 
                        className="h-12 w-auto object-contain max-w-[180px]"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<span class="text-2xl font-bold text-[#06C167]">Uber Eats</span>';
                        }}
                      />
                    )}
                    {app.name === "Rappi" && (
                      <img 
                        src="/delivery/rappi.png" 
                        alt="Rappi" 
                        className="h-12 w-auto object-contain max-w-[180px]"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<span class="text-2xl font-bold bg-[#FF441F] text-white px-4 py-2 rounded-lg">Rappi</span>';
                        }}
                      />
                    )}
                    {app.name === "DiDi Food" && (
                      <img 
                        src="/delivery/didi-food.png" 
                        alt="DiDi Food" 
                        className="h-12 w-auto object-contain max-w-[180px]"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.parentElement!.innerHTML = '<span class="text-xl font-bold bg-[#FF6600] text-white px-4 py-2 rounded-lg">DiDi Food</span>';
                        }}
                      />
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors font-medium">
                    Ordenar ahora
                  </span>
                </a>
              ))}
            </div>
            <div className="text-center">
              <p className="text-card-foreground/80 mb-4">
                O llámanos directamente para ordenar por teléfono
              </p>
              <a
                href={`tel:${CONTACT_INFO.phoneFormatted}`}
                className="font-display text-3xl text-primary hover:text-primary/80 transition-colors"
                aria-label={`Llamar al ${CONTACT_INFO.phone} para servicio a domicilio`}
              >
                {CONTACT_INFO.phone}
              </a>
              <p className="text-sm text-card-foreground/60 mt-2">
                Servicio a domicilio disponible
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
