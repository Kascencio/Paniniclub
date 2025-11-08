import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
// Imágenes del menú (usar exactamente los nombres en src/assets/images/menu)
import BOSTON from "@/assets/images/menu/BOSTON.png";
import LYON from "@/assets/images/menu/LYON.png";
import BARCELONA from "@/assets/images/menu/BARCELONA.png";
import MADAGASCAR from "@/assets/images/menu/MADAGASCAR.png";
import NAPOLES from "@/assets/images/menu/NAPOLES.png";
import TRES_QUESOS from "@/assets/images/menu/TRES QUESOS.png";
import MONTERREY from "@/assets/images/menu/MONTERREY.png";
import SONORA from "@/assets/images/menu/SONORA.png";
import PEPITO_FILETE from "@/assets/images/menu/PEPITO-FILETE.png";
import PEPITOCHIRIQUEZO from "@/assets/images/menu/PEPITOCHIRIQUEZO.png";
import PEPITOJAMON from "@/assets/images/menu/PEPITOJAMON.png";
import WRAPBUENOSAIRES from "@/assets/images/menu/WRAPBUENOSAIRES.png";
import WRAPMEXICO from "@/assets/images/menu/WRAPMEXICO.png";
import WRAPMONTREAL from "@/assets/images/menu/WRAPMONTREAL.png";
import QUESAPITA from "@/assets/images/menu/QUESAPITA.png";
import WRAPTEXAS from "@/assets/images/menu/WRAPTEXAS.png";
import ENSALADACOBY from "@/assets/images/menu/ENSALADACOBY.png";
import ENSALADAFRENCHY from "@/assets/images/menu/ENSALADAFRENCHY.png";

export const MenuPreview = () => {
  const scrollToSection = useSmoothScroll();
  const [selectedItem, setSelectedItem] = useState<{
    name: string;
    description: string;
    price?: number;
    badge: string;
    image: string;
    category: string;
  } | null>(null);

  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { name: "all", label: "Todo", count: 18 },
    { name: "paninis", label: "Paninis", count: 8 },
    { name: "pepitos", label: "Pepitos", count: 3 },
    { name: "pitas", label: "Wraps", count: 5 },
    { name: "ensaladas", label: "Ensaladas", count: 2 },
  ];

  const menuItems = {
    paninis: [
      {
        name: "Boston",
        description: "Jamón de pavo, queso crema, mayo de mostaza antigua, lechuga, jitomate y cebolla",
        price: 130,
        badge: "Clásico",
        image: BOSTON,
      },
      {
        name: "Lyon",
        description: "Jamón de pierna, salami, queso manchego, mayo de ajo y mostaza antigua",
        price: 165,
        badge: "",
        image: LYON,
      },
      {
        name: "Barcelona",
        description: "Jamón serrano, queso gouda, mayo de mostaza antigua, lechuga, jitomate",
        price: 180,
        badge: "",
        image: BARCELONA,
      },
      {
        name: "Madagascar",
        description: "Manchego, cheddar, cabra, jamón de pavo, mayo de tomate deshidratado y aguacate",
        price: 170,
        badge: "",
        image: MADAGASCAR,
      },
      {
        name: "Nápoles",
        description: "Pechuga de pollo al pesto, queso manchego, costra de parmesano",
        price: 160,
        badge: "Popular",
        image: NAPOLES,
      },
      {
        name: "Tres Quesos",
        description: "Manchego, cheddar, cabra, mayo de tomate deshidratado",
        price: 150,
        badge: "Vegetariano",
        image: TRES_QUESOS,
      },
      {
        name: "Monterrey",
        description: "Filete de res, cheddar, monterrey jack, frijoles refritos, mayo de chipotle",
        price: 190,
        badge: "",
        image: MONTERREY,
      },
      {
        name: "Sonora",
        description: "Pollo adobado, aguacate, jocoque, salsa ranchera, mayo de chipotle",
        price: 170,
        badge: "Picoso",
        image: SONORA,
      },
    ],
    pepitos: [
      {
        name: "Filete",
        description: "Fajitas de res, queso Oaxaca, frijoles, aguacate, mayo de tomate",
        price: 110,
        badge: "",
        image: PEPITO_FILETE,
      },
      {
        name: "Choriqueso",
        description: "Chorizo español, queso Oaxaca, frijoles, aguacate",
        price: 95,
        badge: "Intenso",
        image: PEPITOCHIRIQUEZO,
      },
      {
        name: "Jamón y Queso",
        description: "Jamón de pavo, queso crema, aguacate, lechuga, jitomate",
        price: 95,
        badge: "Clásico",
        image: PEPITOJAMON,
      },
    ],
    pitas: [
      {
        name: "Buenos Aires",
        description: "Manchego, cheddar, cabra, jamón de pavo, aguacate, mayo de tomate",
        price: 150,
        badge: "",
        image: WRAPBUENOSAIRES,
      },
      {
        name: "México",
        description: "Pollo adobado, aguacate, jocoque, salsa ranchera, mayo de chipotle",
        price: 145,
        badge: "Picoso",
        image: WRAPMEXICO,
      },
      {
        name: "Montreal",
        description: "Pollo al pesto, miel, jocoque, mostaza dulce, mayo de chipotle",
        price: 135,
        badge: "Dulce",
        image: WRAPMONTREAL,
      },
      {
        name: "Quesadilla Pita",
        description: "Manchego, cheddar y cabra",
        price: 120,
        badge: "Vegetariano",
        image: QUESAPITA,
      },
      {
        name: "Texas",
        description: "Filete de res, cheddar, monterrey jack, frijoles, mayo de chipotle",
        price: 175,
        badge: "",
        image: WRAPTEXAS,
      },
    ],
    ensaladas: [
      {
        name: "Cooby",
        description: "Lechuga sangría, pollo adobado, cabra, aguacate, cherry, vinagreta casera",
        price: 160,
        badge: "Favorita",
        image: ENSALADACOBY,
      },
      {
        name: "Frenchy",
        description: "Lechuga sangría, cabra, mandarina, arándano, almendra, vinagreta de frutos",
        price: 150,
        badge: "Vegetariana",
        image: ENSALADAFRENCHY,
      },
    ],
  };

  return (
    <>
      {/* Product Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display text-3xl flex items-center gap-3">
                  {selectedItem.name}
                  {selectedItem.badge && (
                    <Badge
                      variant="secondary"
                      className={
                        selectedItem.badge === "Vegetariano" || selectedItem.badge === "Vegetariana"
                          ? "bg-accent/20 text-accent border-accent/30"
                          : selectedItem.badge === "Popular" || selectedItem.badge === "Favorita"
                          ? "bg-primary/20 text-primary border-primary/30"
                          : selectedItem.badge === "Picoso"
                          ? "bg-red-500/20 text-red-500 border-red-500/30"
                          : selectedItem.badge === "Dulce"
                          ? "bg-amber-500/20 text-amber-500 border-amber-500/30"
                          : ""
                      }
                    >
                      {selectedItem.badge}
                    </Badge>
                  )}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedItem.category}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <img 
                  src={selectedItem.image} 
                  alt={`${selectedItem.name} - ${selectedItem.description}`}
                  className="w-full h-64 md:h-96 object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                <p className="text-lg text-muted-foreground mb-4">
                  {selectedItem.description}
                </p>
                {selectedItem.price && (
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-display text-4xl text-primary font-bold">
                      ${selectedItem.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      IVA incluido
                    </span>
                  </div>
                )}
                <Button 
                  size="lg" 
                  className="w-full font-display text-lg shadow-[var(--shadow-glow)]"
                  onClick={() => {
                    setSelectedItem(null);
                    scrollToSection("ubicaciones");
                  }}
                >
                  ORDENAR AHORA
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <section id="menu" className="py-12 md:py-20 lg:py-32 bg-background relative overflow-hidden" aria-labelledby="menu-heading">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pattern-panini" aria-hidden="true" />
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 id="menu-heading" className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground">
              NUESTRO <span className="text-gradient">MENÚ</span>
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Explora nuestra selección de paninis artesanales, cada uno preparado con amor y los mejores ingredientes.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-2" role="tablist" aria-label="Filtros de categorías del menú">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                role="tab"
                aria-selected={activeCategory === category.name}
                aria-controls={`category-${category.name}`}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-display text-base md:text-lg border-2 transition-all hover-lift ${
                  activeCategory === category.name
                    ? "bg-primary text-background border-primary shadow-[var(--shadow-glow)]"
                    : "bg-card hover:bg-primary/10 text-card-foreground border-border hover:border-primary"
                }`}
                aria-label={`Filtrar por ${category.label}`}
              >
                {category.label}
                <span className={`ml-2 text-sm md:text-base ${
                  activeCategory === category.name ? "text-background/80" : "text-muted-foreground"
                }`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          {/* Menu Sections */}
          <div className="space-y-12 md:space-y-20 mb-12 md:mb-16">
            {/* Paninis */}
            {(activeCategory === "all" || activeCategory === "paninis") && (
            <div id="category-paninis" role="tabpanel" aria-labelledby="category-paninis">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-2 md:mb-4 text-foreground">
                <span className="font-script text-4xl md:text-5xl lg:text-6xl text-primary">Panini</span>
                <span className="text-muted-foreground text-xl md:text-2xl"> (en focaccia)</span>
              </h3>
              <p className="text-center text-muted-foreground mb-6 md:mb-10 text-sm md:text-base">Focaccia de arándano, tocino u orégano</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {menuItems.paninis.map((item, index) => (
                  <div
                    key={item.name}
                    onClick={() => setSelectedItem({ ...item, category: "Panini en Focaccia" })}
                    className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver detalles de ${item.name} - $${item.price}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedItem({ ...item, category: "Panini en Focaccia" });
                      }
                    }}
                  >
                    <div className="relative overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={`${item.name} - ${item.description}`}
                        className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="300"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <h4 className="font-display text-xl md:text-2xl text-card-foreground">{item.name}</h4>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className={
                              item.badge === "Vegetariano"
                                ? "bg-accent/20 text-accent border-accent/30 text-xs"
                                : item.badge === "Popular"
                                ? "bg-primary/20 text-primary border-primary/30 text-xs"
                                : item.badge === "Picoso"
                                ? "bg-red-500/20 text-red-500 border-red-500/30 text-xs"
                                : "text-xs"
                            }
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-card-foreground/70 text-xs md:text-sm line-clamp-2 mb-3">{item.description}</p>
                      {item.price && (
                        <div className="flex items-center gap-2">
                          <span className="font-display text-2xl text-primary font-bold">
                            ${item.price}
                          </span>
                          <span className="text-xs text-muted-foreground">IVA incl.</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Pepitos */}
            {(activeCategory === "all" || activeCategory === "pepitos") && (
            <div id="category-pepitos" role="tabpanel" aria-labelledby="category-pepitos">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-2 md:mb-4 text-foreground">
                <span className="font-script text-4xl md:text-5xl lg:text-6xl text-primary">Pepitos</span>
                <span className="text-muted-foreground text-xl md:text-2xl"> (tortas con pan de la casa)</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                {menuItems.pepitos.map((item, index) => (
                  <div
                    key={item.name}
                    onClick={() => setSelectedItem({ ...item, category: "Pepito (Torta)" })}
                    className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver detalles de ${item.name}${item.price ? ` - $${item.price}` : ''}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedItem({ ...item, category: "Pepito (Torta)" });
                      }
                    }}
                  >
                    <div className="relative overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={`${item.name} - ${item.description}`}
                        className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="300"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <h4 className="font-display text-xl md:text-2xl text-card-foreground">{item.name}</h4>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className={item.badge === "Intenso" ? "bg-primary/20 text-primary border-primary/30 text-xs" : "text-xs"}
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-card-foreground/70 text-xs md:text-sm line-clamp-2 mb-3">{item.description}</p>
                      {item.price && (
                        <div className="flex items-center gap-2">
                          <span className="font-display text-2xl text-primary font-bold">
                            ${item.price}
                          </span>
                          <span className="text-xs text-muted-foreground">IVA incl.</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Pitas */}
            {(activeCategory === "all" || activeCategory === "pitas") && (
            <div id="category-pitas" role="tabpanel" aria-labelledby="category-pitas">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-2 md:mb-4 text-foreground">
                <span className="font-script text-4xl md:text-5xl lg:text-6xl text-primary">Wraps</span>
                <span className="text-muted-foreground text-xl md:text-2xl"> (pan pita)</span>
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {menuItems.pitas.map((item, index) => (
                  <div
                    key={item.name}
                    onClick={() => setSelectedItem({ ...item, category: "Pita (Wrap)" })}
                    className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver detalles de ${item.name}${item.price ? ` - $${item.price}` : ''}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedItem({ ...item, category: "Pita (Wrap)" });
                      }
                    }}
                  >
                    <div className="relative overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={`${item.name} - ${item.description}`}
                        className="w-full h-40 md:h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="300"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                    </div>
                    <div className="p-4 md:p-6">
                      <div className="flex items-start justify-between mb-2 md:mb-3">
                        <h4 className="font-display text-xl md:text-2xl text-card-foreground">{item.name}</h4>
                        {item.badge && (
                          <Badge
                            variant="secondary"
                            className={
                              item.badge === "Vegetariano"
                                ? "bg-accent/20 text-accent border-accent/30 text-xs"
                                : item.badge === "Picoso"
                                ? "bg-red-500/20 text-red-500 border-red-500/30 text-xs"
                                : item.badge === "Dulce"
                                ? "bg-amber-500/20 text-amber-500 border-amber-500/30 text-xs"
                                : "text-xs"
                            }
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-card-foreground/70 text-xs md:text-sm line-clamp-2 mb-3">{item.description}</p>
                      {item.price && (
                        <div className="flex items-center gap-2">
                          <span className="font-display text-2xl text-primary font-bold">
                            ${item.price}
                          </span>
                          <span className="text-xs text-muted-foreground">IVA incl.</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}

            {/* Ensaladas */}
            {(activeCategory === "all" || activeCategory === "ensaladas") && (
            <div id="category-ensaladas" role="tabpanel" aria-labelledby="category-ensaladas">
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-10 text-foreground">
                <span className="font-script text-4xl md:text-5xl lg:text-6xl text-primary">Ensaladas</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
                {menuItems.ensaladas.map((item, index) => (
                  <div
                    key={item.name}
                    onClick={() => setSelectedItem({ ...item, category: "Ensalada" })}
                    className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700 cursor-pointer"
                    style={{ animationDelay: `${index * 50}ms` }}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ver detalles de ${item.name}${item.price ? ` - $${item.price}` : ''}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setSelectedItem({ ...item, category: "Ensalada" });
                      }
                    }}
                  >
                    <div className="relative overflow-hidden group">
                      <img 
                        src={item.image} 
                        alt={`${item.name} - ${item.description}`}
                        className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                        width="500"
                        height="400"
                      />
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                    </div>
                    <div className="p-4 md:p-8">
                      <div className="flex items-start justify-between mb-3 md:mb-4">
                        <h4 className="font-display text-2xl md:text-3xl text-card-foreground">{item.name}</h4>
                        <Badge
                          variant="secondary"
                          className={
                            item.badge === "Favorita"
                              ? "bg-primary/20 text-primary border-primary/30 text-xs"
                              : "bg-accent/20 text-accent border-accent/30 text-xs"
                          }
                        >
                          {item.badge}
                        </Badge>
                      </div>
                      <p className="text-card-foreground/70 text-sm md:text-base mb-4">{item.description}</p>
                      {item.price && (
                        <div className="flex items-center gap-2">
                          <span className="font-display text-3xl text-primary font-bold">
                            ${item.price}
                          </span>
                          <span className="text-sm text-muted-foreground">IVA incl.</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            )}
          </div>

          {/* Legal Note */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              *Todos los precios incluyen IVA. Los precios no incluyen propina.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button 
              size="lg" 
              className="text-base md:text-lg h-12 md:h-14 px-6 md:px-8 font-display shadow-[var(--shadow-glow)]"
              onClick={() => scrollToSection("ubicaciones")}
            >
              ¡PIDE A DOMICILIO!
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};
