import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const locations = [
    {
      name: "Petrolera",
      address: "Av. de Los Árboles 101, Plaza Cascada",
      phone: "993 318 4832",
      hours: "12:30 - 11:30pm",
    },
    {
      name: "Antojeria Food Park",
      address: "Paseo de la Choca #126",
      phone: "993 318 4832",
      hours: "4:30 - 11:30pm",
    },
    {
      name: "Deportiva",
      address: "Explanada del Estadio Centenario",
      phone: "993 318 4832",
      hours: "2:30 - 11:30pm",
    },
  ];

  return (
    <footer id="contacto" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src={logo} alt="Panini Club" className="h-16 w-16" />
            <h2 className="font-display text-4xl text-foreground">
              PANINI <span className="text-primary">CLUB</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            La mejor experiencia en paninis artesanales
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <div
              key={location.name}
              className="bg-card rounded-2xl p-6 hover-lift shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-2xl text-card-foreground mb-4">
                {location.name}
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-card-foreground/80">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{location.address}</span>
                </div>
                
                <a
                  href={`tel:+52${location.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-card-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">{location.phone}</span>
                </a>
                
                <div className="flex items-center gap-3 text-card-foreground/80">
                  <svg className="w-5 h-5 flex-shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold">{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all hover-lift"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all hover-lift"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Panini Club. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
