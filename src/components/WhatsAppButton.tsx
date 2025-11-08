import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/config/constants";

export const WhatsAppButton = () => {
  const message = "¡Hola! Me interesa hacer un pedido en Panini Club 🍞";
  const whatsappUrl = `https://wa.me/52${CONTACT_INFO.phoneWhatsApp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 group"
      aria-label="Contactar por WhatsApp para hacer un pedido"
    >
      <Button
        size="lg"
        className="rounded-full w-14 h-14 md:w-16 md:h-16 p-0 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-float"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
      </Button>
      <span className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-ping opacity-75" />
      <span className="absolute -top-2 -right-2 w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full" />
      <span className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 translate-x-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity bg-background text-foreground px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg border border-border">
        ¡Ordena por WhatsApp!
      </span>
    </a>
  );
};

