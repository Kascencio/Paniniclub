import { Flame, Heart, Award } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Flame,
      title: "Recién Hechos",
      description: "Cada panini se prepara al momento con ingredientes frescos del día.",
    },
    {
      icon: Heart,
      title: "Con Pasión",
      description: "Amor por la comida en cada receta que creamos para ti.",
    },
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Solo los mejores ingredientes merecen estar en tu panini.",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 36px)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-foreground">
            ¿POR QUÉ <span className="text-gradient">PANINI CLUB</span>?
          </h2>
          <p className="text-base md:text-xl text-muted-foreground px-4">
            No somos solo un restaurante, somos una experiencia gastronómica. 
            Cada bocado cuenta una historia de sabor, calidad y dedicación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-6 md:p-8 hover-lift shadow-[var(--shadow-card)] group animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl mb-3 md:mb-4 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-card-foreground/80 text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
