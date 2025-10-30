import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  const sections = [
    {
      title: "Menú",
      links: [
        { name: "Clásicos", href: "#" },
        { name: "Premium", href: "#" },
        { name: "Vegetarianos", href: "#" },
        { name: "Bebidas", href: "#" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { name: "Nosotros", href: "#" },
        { name: "Franquicias", href: "#" },
        { name: "Trabaja con Nosotros", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Términos y Condiciones", href: "#" },
        { name: "Política de Privacidad", href: "#" },
        { name: "Cookies", href: "#" },
      ],
    },
  ];

  return (
    <footer id="contacto" className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Panini Club" className="h-12 w-12" />
              <span className="font-display text-2xl text-foreground">
                PANINI <span className="text-primary">CLUB</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La mejor experiencia en paninis artesanales. Ingredientes frescos, 
              sabores únicos y pasión en cada bocado.
            </p>
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="tel:+525512345678"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>55.1234.5678</span>
              </a>
              <a
                href="mailto:hola@paniniclub.mx"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hola@paniniclub.mx</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Ciudad de México, MX</span>
              </div>
            </div>
          </div>

          {/* Link Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display text-xl mb-4 text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
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
            <p className="text-muted-foreground text-sm text-center">
              © {new Date().getFullYear()} Panini Club. Todos los derechos reservados.
            </p>

            {/* Newsletter */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground mb-2">
                Suscríbete a nuestro newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Tu email"
                  className="px-4 py-2 rounded-lg bg-muted border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button className="px-4 py-2 bg-primary text-background rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
