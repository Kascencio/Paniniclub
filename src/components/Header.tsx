import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

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

  const navLinks = [
    { name: "Menú", href: "#menu" },
    { name: "Promociones", href: "#promociones" },
    { name: "Ubicaciones", href: "#ubicaciones" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-background py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+525512345678" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Tel: 55.1234.5678</span>
            </a>
            <a href="mailto:hola@paniniclub.mx" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span className="font-medium">hola@paniniclub.mx</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity font-medium">
              Instagram
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity font-medium">
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-background"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <img src={logo} alt="Panini Club" className="h-12 w-12" />
              <span className="font-display text-2xl text-foreground">
                PANINI <span className="text-primary">CLUB</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-display text-xl"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button size="lg" className="hidden md:flex font-display text-lg">
              ORDENAR AHORA
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-display text-xl py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button size="lg" className="w-full font-display text-lg mt-4">
                ORDENAR AHORA
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
