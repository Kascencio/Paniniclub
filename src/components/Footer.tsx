import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { LocationCard } from "@/components/LocationCard";
import { LOCATIONS, CONTACT_INFO } from "@/config/constants";

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-background border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Logo size="lg" />
          </div>
          <p className="text-muted-foreground text-base md:text-lg">
            La mejor experiencia en paninis artesanales desde {CONTACT_INFO.established}
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 max-w-6xl mx-auto">
          {LOCATIONS.map((location) => (
            <LocationCard key={location.name} location={location} variant="detailed" />
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <SocialLinks variant="icons" />

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
