import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import menuImage from "@/assets/menu-grid.jpg";

// Panini images
import bostonImg from "@/assets/menu/panini-boston.jpg";
import lyonImg from "@/assets/menu/panini-lyon.jpg";
import barcelonaImg from "@/assets/menu/panini-barcelona.jpg";
import madagascarImg from "@/assets/menu/panini-madagascar.jpg";
import napolesImg from "@/assets/menu/panini-napoles.jpg";
import tresQuesosImg from "@/assets/menu/panini-tres-quesos.jpg";
import monterreyImg from "@/assets/menu/panini-monterrey.jpg";
import sonoraImg from "@/assets/menu/panini-sonora.jpg";

// Pepito images
import fileteImg from "@/assets/menu/pepito-filete.jpg";
import choriquesImg from "@/assets/menu/pepito-choriqueso.jpg";
import jamonQuesoImg from "@/assets/menu/pepito-jamon-queso.jpg";

// Pita images
import buenosAiresImg from "@/assets/menu/pita-buenos-aires.jpg";
import mexicoImg from "@/assets/menu/pita-mexico.jpg";
import montrealImg from "@/assets/menu/pita-montreal.jpg";
import quesadillaImg from "@/assets/menu/pita-quesadilla.jpg";
import texasImg from "@/assets/menu/pita-texas.jpg";

// Ensalada images
import coobyImg from "@/assets/menu/ensalada-cooby.jpg";
import frenchyImg from "@/assets/menu/ensalada-frenchy.jpg";

export const MenuPreview = () => {
  const categories = [
    { name: "Paninis", count: 8 },
    { name: "Pepitos", count: 3 },
    { name: "Pitas", count: 5 },
    { name: "Ensaladas", count: 2 },
    { name: "Bebidas", count: 8 },
  ];

  const menuItems = {
    paninis: [
      {
        name: "Boston",
        description: "Jamón de pavo, queso crema, mayo de mostaza antigua, lechuga, jitomate y cebolla",
        badge: "Clásico",
        image: bostonImg,
      },
      {
        name: "Lyon",
        description: "Jamón de pierna, salami, queso manchego, mayo de ajo y mostaza antigua",
        badge: "",
        image: lyonImg,
      },
      {
        name: "Barcelona",
        description: "Jamón serrano, queso gouda, mayo de mostaza antigua, lechuga, jitomate",
        badge: "",
        image: barcelonaImg,
      },
      {
        name: "Madagascar",
        description: "Manchego, cheddar, cabra, jamón de pavo, mayo de tomate deshidratado y aguacate",
        badge: "",
        image: madagascarImg,
      },
      {
        name: "Nápoles",
        description: "Pechuga de pollo al pesto, queso manchego, costra de parmesano",
        badge: "Popular",
        image: napolesImg,
      },
      {
        name: "Tres Quesos",
        description: "Manchego, cheddar, cabra, mayo de tomate deshidratado",
        badge: "Vegetariano",
        image: tresQuesosImg,
      },
      {
        name: "Monterrey",
        description: "Filete de res, cheddar, monterrey jack, frijoles refritos, mayo de chipotle",
        badge: "",
        image: monterreyImg,
      },
      {
        name: "Sonora",
        description: "Pollo adobado, aguacate, jocoque, salsa ranchera, mayo de chipotle",
        badge: "Picoso",
        image: sonoraImg,
      },
    ],
    pepitos: [
      {
        name: "Filete",
        description: "Fajitas de res, queso Oaxaca, frijoles, aguacate, mayo de tomate",
        badge: "",
        image: fileteImg,
      },
      {
        name: "Choriqueso",
        description: "Chorizo español, queso Oaxaca, frijoles, aguacate",
        badge: "Intenso",
        image: choriquesImg,
      },
      {
        name: "Jamón y Queso",
        description: "Jamón de pavo, queso crema, aguacate, lechuga, jitomate",
        badge: "Clásico",
        image: jamonQuesoImg,
      },
    ],
    pitas: [
      {
        name: "Buenos Aires",
        description: "Manchego, cheddar, cabra, jamón de pavo, aguacate, mayo de tomate",
        badge: "",
        image: buenosAiresImg,
      },
      {
        name: "México",
        description: "Pollo adobado, aguacate, jocoque, salsa ranchera, mayo de chipotle",
        badge: "Picoso",
        image: mexicoImg,
      },
      {
        name: "Montreal",
        description: "Pollo al pesto, miel, jocoque, mostaza dulce, mayo de chipotle",
        badge: "Dulce",
        image: montrealImg,
      },
      {
        name: "Quesadilla Pita",
        description: "Manchego, cheddar y cabra",
        badge: "Vegetariano",
        image: quesadillaImg,
      },
      {
        name: "Texas",
        description: "Filete de res, cheddar, monterrey jack, frijoles, mayo de chipotle",
        badge: "",
        image: texasImg,
      },
    ],
    ensaladas: [
      {
        name: "Cooby",
        description: "Lechuga sangría, pollo adobado, cabra, aguacate, cherry, vinagreta casera",
        badge: "Favorita",
        image: coobyImg,
      },
      {
        name: "Frenchy",
        description: "Lechuga sangría, cabra, mandarina, arándano, almendra, vinagreta de frutos",
        badge: "Vegetariana",
        image: frenchyImg,
      },
    ],
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-foreground">
            NUESTRO <span className="text-gradient">MENÚ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora nuestra selección de paninis artesanales, cada uno preparado con amor y los mejores ingredientes.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.name}
              className="bg-card hover:bg-primary/10 text-card-foreground px-6 py-3 rounded-full font-display text-lg border border-border hover:border-primary transition-all hover-lift"
            >
              {category.name}
              <span className="ml-2 text-muted-foreground">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="space-y-20 mb-16">
          {/* Paninis */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
              PANINIS <span className="text-muted-foreground text-2xl">(en focaccia)</span>
            </h3>
            <p className="text-center text-muted-foreground mb-10">Focaccia de arándano, tocino u orégano</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.paninis.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-display text-2xl text-card-foreground">{item.name}</h4>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className={
                            item.badge === "Vegetariano"
                              ? "bg-accent/20 text-accent border-accent/30"
                              : item.badge === "Popular"
                              ? "bg-primary/20 text-primary border-primary/30"
                              : item.badge === "Picoso"
                              ? "bg-red-500/20 text-red-500 border-red-500/30"
                              : ""
                          }
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-card-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pepitos */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
              PEPITOS <span className="text-muted-foreground text-2xl">(tortas con pan de la casa)</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {menuItems.pepitos.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-display text-2xl text-card-foreground">{item.name}</h4>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className={item.badge === "Intenso" ? "bg-primary/20 text-primary border-primary/30" : ""}
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-card-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pitas */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-center mb-4 text-foreground">
              PITAS <span className="text-muted-foreground text-2xl">(tipo wrap)</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems.pitas.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-display text-2xl text-card-foreground">{item.name}</h4>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className={
                            item.badge === "Vegetariano"
                              ? "bg-accent/20 text-accent border-accent/30"
                              : item.badge === "Picoso"
                              ? "bg-red-500/20 text-red-500 border-red-500/30"
                              : item.badge === "Dulce"
                              ? "bg-amber-500/20 text-amber-500 border-amber-500/30"
                              : ""
                          }
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-card-foreground/70 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ensaladas */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-center mb-10 text-foreground">
              ENSALADAS
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {menuItems.ensaladas.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-card rounded-2xl overflow-hidden hover-lift shadow-[var(--shadow-card)] animate-in fade-in duration-700"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-display text-3xl text-card-foreground">{item.name}</h4>
                      <Badge
                        variant="secondary"
                        className={
                          item.badge === "Favorita"
                            ? "bg-primary/20 text-primary border-primary/30"
                            : "bg-accent/20 text-accent border-accent/30"
                        }
                      >
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-card-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bebidas */}
          <div>
            <h3 className="font-display text-4xl md:text-5xl text-center mb-10 text-foreground">
              BEBIDAS
            </h3>
            <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-display text-2xl text-card-foreground mb-4">Refrescos 355ml</h4>
                  <ul className="space-y-2 text-card-foreground/70">
                    <li>• Coca-Cola</li>
                    <li>• Coca-Cola Light</li>
                    <li>• Sidral Mundet</li>
                    <li>• Sprite</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-2xl text-card-foreground mb-4">Aguas</h4>
                  <ul className="space-y-2 text-card-foreground/70">
                    <li>• Natural 600ml (Ciel)</li>
                    <li>• Maracuyá 700ml</li>
                    <li>• Horchata 700ml</li>
                    <li>• Jamaica 700ml</li>
                    <li>• Limón-Chía 700ml</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="text-lg h-14 px-8 font-display">
            VER MENÚ COMPLETO
          </Button>
        </div>
      </div>
    </section>
  );
};
