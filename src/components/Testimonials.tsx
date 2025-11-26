import { Star, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SOCIAL_LINKS, CONTACT_INFO } from "@/config/constants";

export const Testimonials = () => {
  const baseTestimonials = [
    {
      name: "María González",
      rating: 5,
      comment: "Los mejores paninis que he probado. Siempre frescos y deliciosos. Mi favorito es el Nápoles.",
      location: "Villahermosa",
    },
    {
      name: "Carlos Rodríguez",
      rating: 5,
      comment: "Excelente servicio y calidad. Los paninis están increíbles, especialmente el Barcelona. ¡Altamente recomendado!",
      location: "Villahermosa",
    },
    {
      name: "Ana Martínez",
      rating: 5,
      comment: "Desde 2014 son mis favoritos. La promoción 3x2 de los martes es perfecta. Ingredientes frescos siempre.",
      location: "Villahermosa",
    },
    {
      name: "Roberto Sánchez",
      rating: 5,
      comment: "Calidad premium y sabores únicos. El servicio a domicilio es rápido y eficiente. ¡5 estrellas!",
      location: "Villahermosa",
    },
    {
      name: "Laura Fernández",
      rating: 5,
      comment: "Increíble sabor y frescura. El panini Madagascar es mi debilidad. Definitivamente volveré.",
      location: "Villahermosa",
    },
    {
      name: "José López",
      rating: 5,
      comment: "El mejor lugar para paninis en la ciudad. Calidad excepcional y servicio rápido. Muy recomendado.",
      location: "Villahermosa",
    },
    {
      name: "Patricia Ramírez",
      rating: 5,
      comment: "Sabor auténtico y ingredientes de primera. El delivery siempre llega a tiempo y caliente.",
      location: "Villahermosa",
    },
    {
      name: "Miguel Torres",
      rating: 5,
      comment: "Paninis artesanales deliciosos. La variedad de sabores es impresionante. ¡Excelente!",
      location: "Villahermosa",
    },
    {
      name: "Carmen Silva",
      rating: 5,
      comment: "Mi lugar favorito desde hace años. Los paninis siempre frescos y el servicio impecable.",
      location: "Villahermosa",
    },
    {
      name: "Fernando Cruz",
      rating: 5,
      comment: "Calidad premium en cada bocado. El panini Barcelona es simplemente perfecto. ¡5 estrellas!",
      location: "Villahermosa",
    },
    {
      name: "Sofía Morales",
      rating: 5,
      comment: "Los mejores paninis de Villahermosa. Ingredientes frescos y sabores únicos. ¡Delicioso!",
      location: "Villahermosa",
    },
    {
      name: "Diego Herrera",
      rating: 5,
      comment: "Excelente relación calidad-precio. Los paninis son deliciosos y el servicio es rápido.",
      location: "Villahermosa",
    },
    {
      name: "Valentina Castro",
      rating: 5,
      comment: "Sabor auténtico italiano. El panini Nápoles es mi favorito. Definitivamente regresaré.",
      location: "Villahermosa",
    },
    {
      name: "Andrés Vega",
      rating: 5,
      comment: "Calidad excepcional y sabores increíbles. El mejor lugar para paninis artesanales.",
      location: "Villahermosa",
    },
    {
      name: "Isabella Ruiz",
      rating: 5,
      comment: "Paninis frescos y deliciosos. El servicio a domicilio es rápido y eficiente. ¡Perfecto!",
      location: "Villahermosa",
    },
  ];

  // Construir exactamente 25 testimonios visibles a partir de la base
  const visibleTestimonials = Array.from({ length: 25 }, (_, i) => baseTestimonials[i % baseTestimonials.length]);

  return (
    <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden bg-background" aria-labelledby="testimonials-heading">
      {/* Degradado superior */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" aria-hidden="true" />
      
      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 id="testimonials-heading" className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground">
            LO QUE DICEN <span className="text-gradient">NUESTROS CLIENTES</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Miles de clientes satisfechos desde {CONTACT_INFO.established}. Descubre por qué somos el favorito de Villahermosa.
          </p>
        </div>

        {/* Infinite Scroll Gallery 5x5 */}
        <div className="relative h-[520px] sm:h-[680px] md:h-[840px] lg:h-[1000px] xl:h-[1100px] overflow-hidden">
          {/* Track con altura auto para bucle continuo */}
          <div className="absolute inset-0 z-10">
            <div className="absolute inset-0 animate-scroll-vertical" style={{ willChange: "transform" }}>
              {/* Primer grid (5x5) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-1 sm:px-2">
                {visibleTestimonials.map((testimonial, index) => (
                  <Card
                    key={`${testimonial.name}-${index}`}
                    className="bg-card rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow h-full min-h-[200px] sm:min-h-[220px] flex flex-col overflow-hidden"
                    role="article"
                    aria-label={`Testimonio de ${testimonial.name}`}
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                          aria-label={`${testimonial.rating} estrellas`}
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/30 mb-3" aria-hidden="true" />
                    <div className="flex-1 overflow-hidden">
                      <p className="text-card-foreground/90 text-xs sm:text-sm md:text-base leading-relaxed italic break-words line-clamp-6 md:line-clamp-8">
                        “{testimonial.comment}”
                      </p>
                    </div>
                    <div className="mt-auto shrink-0 pt-3 border-t border-border">
                      <p className="font-display text-sm md:text-base text-card-foreground font-semibold truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </Card>
                ))}
              </div>
              
              {/* Segundo grid (duplicado) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 lg:gap-8 px-1 sm:px-2">
                {visibleTestimonials.map((testimonial, index) => (
                  <Card
                    key={`duplicate-${testimonial.name}-${index}`}
                    className="bg-card rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow h-full min-h-[200px] sm:min-h-[220px] flex flex-col overflow-hidden"
                    role="article"
                    aria-label={`Testimonio de ${testimonial.name}`}
                  >
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-primary text-primary"
                          aria-label={`${testimonial.rating} estrellas`}
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/30 mb-3" aria-hidden="true" />
                    <div className="flex-1 overflow-hidden">
                      <p className="text-card-foreground/90 text-xs sm:text-sm md:text-base leading-relaxed italic break-words line-clamp-6 md:line-clamp-8">
                        “{testimonial.comment}”
                      </p>
                    </div>
                    <div className="mt-auto shrink-0 pt-3 border-t border-border">
                      <p className="font-display text-sm md:text-base text-card-foreground font-semibold truncate">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Degradados superiores/Inferiores más marcados */}
          <div className="absolute top-0 left-0 right-0 h-20 sm:h-28 md:h-36 lg:h-40 bg-gradient-to-b from-background via-background/90 to-transparent z-30 pointer-events-none" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 md:h-36 lg:h-40 bg-gradient-to-t from-background via-background/90 to-transparent z-30 pointer-events-none" aria-hidden="true" />
        </div>

        {/* Social Media Link */}
        <div className="text-center mt-12 md:mt-16 relative z-30">
          <p className="text-muted-foreground mb-4">
            Síguenos en Instagram para ver más fotos y reviews
          </p>
          <a
            href={SOCIAL_LINKS.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-primary hover:text-primary/80 transition-colors font-display text-lg group"
            aria-label={SOCIAL_LINKS.instagram.label}
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>{SOCIAL_LINKS.instagram.handle}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

