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
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 36px)',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-5xl md:text-7xl mb-6 text-foreground">
            ¿POR QUÉ <span className="text-gradient">PANINI CLUB</span>?
          </h2>
          <p className="text-xl text-muted-foreground">
            No somos solo un restaurante, somos una experiencia gastronómica. 
            Cada bocado cuenta una historia de sabor, calidad y dedicación.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 hover-lift shadow-[var(--shadow-card)] group animate-in fade-in duration-700"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-3xl mb-4 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-card-foreground/80 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
