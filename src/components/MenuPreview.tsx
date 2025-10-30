import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import menuImage from "@/assets/menu-grid.jpg";

export const MenuPreview = () => {
  const categories = [
    { name: "Clásicos", count: 8 },
    { name: "Premium", count: 6 },
    { name: "Vegetarianos", count: 5 },
    { name: "Especiales", count: 4 },
  ];

  const featuredItems = [
    {
      name: "Club Italiano",
      description: "Salami, jamón serrano, queso provolone, tomate y albahaca fresca",
      price: "$125",
      badge: "Más Vendido",
    },
    {
      name: "Pesto Chicken",
      description: "Pollo a la parrilla, pesto casero, queso mozzarella y pimientos",
      price: "$135",
      badge: "Nuevo",
    },
    {
      name: "Veggie Deluxe",
      description: "Verduras asadas, queso de cabra, rúcula y vinagreta balsámica",
      price: "$115",
      badge: "Vegetariano",
    },
  ];

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

        {/* Featured Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <img
              src={menuImage}
              alt="Paninis variety"
              className="relative rounded-3xl shadow-2xl hover-lift"
            />
          </div>

          {/* Items List */}
          <div className="space-y-6">
            {featuredItems.map((item, index) => (
              <div
                key={item.name}
                className="bg-card rounded-2xl p-6 hover-lift shadow-[var(--shadow-card)] animate-in fade-in slide-in-from-right-5 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-display text-2xl text-card-foreground mb-1">
                      {item.name}
                    </h3>
                    <Badge
                      variant={item.badge === "Nuevo" ? "default" : "secondary"}
                      className={
                        item.badge === "Más Vendido"
                          ? "bg-primary/20 text-primary border-primary/30"
                          : item.badge === "Vegetariano"
                          ? "bg-accent/20 text-accent border-accent/30"
                          : ""
                      }
                    >
                      {item.badge}
                    </Badge>
                  </div>
                  <span className="font-display text-2xl text-primary">{item.price}</span>
                </div>
                <p className="text-card-foreground/80 mb-4">{item.description}</p>
                <Button size="sm" variant="outline" className="w-full border-2">
                  Agregar al Carrito
                </Button>
              </div>
            ))}
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
