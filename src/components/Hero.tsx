import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { CONTACT_INFO } from "@/config/constants";
import heroImage from "@/assets/hero-panini.webp";

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // Cargar todas las imágenes de /assets/images/slider en orden (imagen1, imagen2, ...)
  const slides = useMemo(() => {
    const modules = import.meta.glob("@/assets/images/slider/*.{jpg,jpeg,png,webp}", {
      eager: true,
      as: "url",
    }) as unknown as Record<string, string>;
    const entries = Object.entries(modules);
    // Ordenar por número si el archivo contiene 'imagen<number>'
    entries.sort((a, b) => {
      const getNum = (s: string) => {
        const m = s.match(/imagen(\d+)/i);
        return m ? parseInt(m[1], 10) : Number.MAX_SAFE_INTEGER;
      };
      return getNum(a[0]) - getNum(b[0]);
    });
    return entries.map(([, url]) => url);
  }, []);

  // Pre-carga y cambio suave de imágenes para mejorar estabilidad en producción
  const currentIndexRef = useRef(0);

  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (!slides || slides.length === 0) return;

    let isActive = true;
    let timeoutId: number | undefined;

    const preloadImage = (url: string) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        if (typeof (img as any).decode === "function") {
          (img as any)
            .decode()
            .then(() => resolve())
            .catch(() => resolve());
        } else {
          img.onload = () => resolve();
          img.onerror = () => resolve();
        }
      });
    };

    const scheduleNext = async () => {
      // Espera 4s antes de intentar avanzar
      timeoutId = window.setTimeout(async () => {
        if (!isActive || slides.length === 0) return;
        const next = (currentIndexRef.current + 1) % slides.length;
        try {
          await preloadImage(slides[next]);
        } catch {
          // Ignorar errores de pre-carga
        }
        if (!isActive) return;
        setCurrentIndex(next);
        currentIndexRef.current = next;
        scheduleNext();
      }, 4000);
    };

    scheduleNext();

    return () => {
      isActive = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [slides]);

  const scrollToSection = useSmoothScroll();
  return (
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden" aria-label="Hero section - Panini Club">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        {/* Imagen del slider (o fallback) */}
        <img
          key={(slides && slides.length > 0 ? slides[currentIndex] : heroImage) as string}
          src={(slides && slides.length > 0 ? slides[currentIndex] : heroImage) as string}
          alt={`Paninis artesanales frescos de Panini Club - ${CONTACT_INFO.tagline} desde ${CONTACT_INFO.established}`}
          className="w-full h-full object-cover animate-in fade-in duration-700"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="100vw"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" aria-hidden="true" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} aria-hidden="true" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="max-w-4xl">
          {/* Badge - Promoción Principal */}
          <div className="inline-block mb-6 md:mb-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            <a 
              href="#promociones"
              className="bg-primary/20 text-primary px-6 md:px-8 py-2 rounded-full text-sm md:text-base font-semibold border border-primary/40 hover:bg-primary/30 transition-all hover:scale-105 inline-block backdrop-blur-sm"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("promociones");
              }}
            >
              ✨ 3x2 - VÁLIDO SOLO LOS MARTES
            </a>
          </div>

          {/* Main Title */}
          <h1 className="mb-8 md:mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
            <span className="text-foreground block font-display text-lg md:text-2xl tracking-[0.15em] md:tracking-[0.3em] uppercase mb-2 md:mb-4 opacity-90">
              SABOR ÚNICO EN VILLAHERMOSA
            </span>
            <span className="text-primary font-display text-5xl sm:text-8xl md:text-9xl lg:text-[11rem] leading-[0.9] block tracking-tighter drop-shadow-2xl">
              PANINI CLUB
            </span>
          </h1>
          <span className="sr-only">Panini Club - Sabor único en Villahermosa</span>

          {/* Subtitle */}
          <p className="text-lg md:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-700 delay-200">
            Disfruta de la <span className="text-primary font-medium">mejor calidad</span> y frescura en cada bocado. 
            <br className="hidden md:block" />
            La experiencia gastronómica que nos hace únicos.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-5 duration-700 delay-300">
            <Button 
              size="lg" 
              className="text-lg h-14 px-10 font-display shadow-[var(--shadow-glow)] hover:scale-105 transition-transform"
              onClick={() => scrollToSection("menu")}
            >
              VER MENÚ
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg h-14 px-10 font-display border-2 border-primary/50 hover:border-primary hover:bg-primary/10 backdrop-blur-sm hover:scale-105 transition-all"
              onClick={() => scrollToSection("ubicaciones")}
            >
              PEDIR AHORA
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
