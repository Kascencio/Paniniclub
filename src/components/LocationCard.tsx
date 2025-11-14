import { MapPin, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Location {
  name: string;
  address: string;
  phone?: string;
  hours?: string;
  mapUrl?: string;
  deliveryLinks?: {
    uber?: string;
    rappi?: string;
    didi?: string;
  };
}

interface LocationCardProps {
  location: Location;
  variant?: "simple" | "detailed";
  className?: string;
}

export const LocationCard = ({ location, variant = "detailed", className = "" }: LocationCardProps) => {
  if (variant === "simple") {
    return (
      <div className={`bg-card rounded-xl p-6 shadow-md hover-lift ${className}`}>
        <h4 className="font-display text-xl text-card-foreground mb-2">
          {location.name}
        </h4>
        <p className="text-card-foreground/80 text-sm mb-2">{location.address}</p>
        {location.hours && (
          <p className="text-card-foreground/60 text-xs font-semibold">{location.hours}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`bg-card rounded-2xl p-6 md:p-8 hover-lift shadow-[var(--shadow-card)] h-full flex flex-col ${className}`}>
      <h3 className="font-display text-2xl md:text-3xl text-card-foreground mb-4 md:mb-6">
        {location.name}
      </h3>
      
      <div className="space-y-4 flex-1">
        <div className="flex items-start gap-3 text-card-foreground/80">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" aria-hidden="true" />
          <span className="text-sm md:text-base leading-relaxed">{location.address}</span>
        </div>
        
        {location.phone && (
          <div className="space-y-3">
            <a
              href={`tel:+52${location.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 text-card-foreground/80 hover:text-primary transition-colors group"
              aria-label={`Llamar a ${location.name} al ${location.phone}`}
            >
              <Phone className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span className="text-sm md:text-base font-medium">{location.phone}</span>
            </a>
            
            <a
              href={`https://wa.me/52${location.phone.replace(/\s/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-card-foreground/80 hover:text-[#25D366] transition-colors group"
              aria-label={`Contactar ${location.name} por WhatsApp al ${location.phone}`}
            >
              <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="text-sm md:text-base font-medium">WhatsApp</span>
            </a>
          </div>
        )}
        
        {location.hours && (
          <div className="flex items-center gap-3 text-card-foreground/80 pt-2 border-t border-border">
            <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm md:text-base font-semibold" aria-label={`Horario de ${location.name}: ${location.hours}`}>
              {location.hours}
            </span>
          </div>
        )}
      </div>

      {/* Botones de acción */}
      <div className="mt-6 pt-4 border-t border-border space-y-3">
        {/* Botones de apps de delivery por sucursal */}
        {location.deliveryLinks && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {location.deliveryLinks.uber && (
              <Button asChild className="w-full font-display text-white bg-[#06C167] hover:bg-[#20BA5A]" size="lg">
                <a
                  href={location.deliveryLinks.uber}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ordenar en Uber Eats - ${location.name}`}
                >
                  <img
                    src="/delivery/uber-eats.png"
                    alt="Uber Eats"
                    className="h-5 w-auto mr-2"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <span className="font-semibold text-sm">Uber Eats</span>
                </a>
              </Button>
            )}
            {location.deliveryLinks.rappi && (
              <Button asChild className="w-full font-display text-white bg-[#FF441F] hover:bg-[#E63D1C]" size="lg">
                <a
                  href={location.deliveryLinks.rappi}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ordenar en Rappi - ${location.name}`}
                >
                  <img
                    src="/delivery/rappi.png"
                    alt="Rappi"
                    className="h-5 w-auto mr-2"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <span className="font-semibold text-sm">Rappi</span>
                </a>
              </Button>
            )}
            {location.deliveryLinks.didi && (
              <Button asChild className="w-full font-display text-white bg-[#FF6600] hover:bg-[#E65C00]" size="lg">
                <a
                  href={location.deliveryLinks.didi}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ordenar en DiDi Food - ${location.name}`}
                >
                  <img
                    src="/delivery/didi-food.png"
                    alt="DiDi Food"
                    className="h-5 w-auto mr-2"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                  <span className="font-semibold text-sm">DiDi Food</span>
                </a>
              </Button>
            )}
          </div>
        )}

        {/* Botón WhatsApp - Ordenar ahora */}
        {location.phone && (
          <Button
            asChild
            className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-display"
            size="lg"
          >
            <a
              href={`https://wa.me/52${location.phone.replace(/\s/g, '')}?text=Hola, me gustaría hacer un pedido en ${location.name}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ordenar ahora por WhatsApp en ${location.name}`}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Ordenar ahora
            </a>
          </Button>
        )}

        {/* Botón Ver ubicación */}
        <Button
          asChild
          variant="outline"
          className="w-full border-2 font-display"
          size="lg"
        >
          <a
            href={location.mapUrl ? location.mapUrl : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Ver ubicación de ${location.name} en Google Maps`}
          >
            <Navigation className="w-5 h-5 mr-2" aria-hidden="true" />
            Ver ubicación
          </a>
        </Button>
      </div>
    </div>
  );
};




