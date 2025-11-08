import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { SocialLinks } from "@/components/SocialLinks";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CONTACT_INFO, NAV_LINKS } from "@/config/constants";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useSmoothScroll();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-background py-2 px-4 hidden md:block">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href={`tel:${CONTACT_INFO.phoneFormatted}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label={`Llamar al ${CONTACT_INFO.phone}`}>
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">Tel: {CONTACT_INFO.phone}</span>
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label={`Enviar email a ${CONTACT_INFO.email}`}>
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span className="font-medium">{CONTACT_INFO.email}</span>
            </a>
          </div>
          <SocialLinks variant="text" />
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky transition-all duration-300 ${
          isScrolled ? "top-0 bg-background/95 backdrop-blur-sm shadow-lg" : "top-[48px] bg-background"
        } z-40`}
        role="banner"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" aria-label="Panini Club - Inicio" className="block pr-3 md:pr-6 mr-4 md:mr-8 py-1">
              <Logo size="lg" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-display text-xl"
                  aria-label={`Ir a ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="hidden md:flex font-display text-lg shadow-[var(--shadow-glow)]"
              onClick={() => scrollToSection("ubicaciones")}
            >
              ORDENAR AHORA
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-background border-t border-border" role="navigation" aria-label="Menú móvil">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-display text-xl py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label={`Ir a ${link.name}`}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                size="lg" 
                className="w-full font-display text-lg mt-4 shadow-[var(--shadow-glow)]"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  scrollToSection("ubicaciones");
                }}
              >
                ORDENAR AHORA
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
