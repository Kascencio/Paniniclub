import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_INFO } from "@/config/constants";

export const Footer = () => {
  return (
    <footer id="contacto" className="bg-background border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex flex-col items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Logo size="lg" />
          </div>
          <p className="text-muted-foreground text-base md:text-lg">La mejor experiencia en paninis artesanales desde {CONTACT_INFO.established}</p>
        </div>

        {/* Contact Email */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3">Contacto</h3>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="font-display text-xl md:text-2xl text-primary hover:text-primary/80 transition-colors"
            aria-label={`Enviar email a ${CONTACT_INFO.email}`}
          >
            {CONTACT_INFO.email}
          </a>
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
