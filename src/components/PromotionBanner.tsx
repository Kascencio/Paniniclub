import { X, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export const PromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollToSection = useSmoothScroll();

  // Ocultar banner si el usuario ya lo cerró (usando localStorage)
  useEffect(() => {
    const bannerClosed = localStorage.getItem("promotionBannerClosed");
    if (bannerClosed === "true") {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("promotionBannerClosed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-primary text-background shadow-lg animate-in slide-in-from-top duration-500">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1">
            <Calendar className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <p className="font-display text-sm md:text-base font-semibold">
                🎉 <span className="font-bold">3x2 MARTES</span> - Compra 3 paninis y paga solo 2. 
                <button
                  onClick={() => scrollToSection("promociones")}
                  className="underline hover:no-underline ml-2 font-bold"
                >
                  Ver detalles
                </button>
              </p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="flex-shrink-0 p-1 hover:bg-background/20 rounded transition-colors"
            aria-label="Cerrar banner de promoción"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};


