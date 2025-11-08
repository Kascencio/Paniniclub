import { Users, MapPin, Award, Calendar } from "lucide-react";
import { CONTACT_INFO, LOCATIONS } from "@/config/constants";

export const Stats = () => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - parseInt(CONTACT_INFO.established);

  const stats = [
    {
      icon: Calendar,
      value: `${yearsInBusiness}+`,
      label: "Años de Experiencia",
      description: "Desde 2014",
    },
    {
      icon: MapPin,
      value: LOCATIONS.length.toString(),
      label: "Sucursales",
      description: "En toda Villahermosa",
    },
    {
      icon: Users,
      value: "10K+",
      label: "Clientes Satisfechos",
      description: "Cada mes",
    },
    {
      icon: Award,
      value: "50K+",
      label: "Paninis Vendidos",
      description: "Desde el inicio",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-32 bg-primary/5 relative overflow-hidden" aria-labelledby="stats-heading">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pattern-panini" aria-hidden="true" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-6 md:p-8 text-center hover-lift shadow-[var(--shadow-card)] animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="font-display text-4xl md:text-5xl lg:text-6xl text-primary font-bold mb-2">
                {stat.value}
              </div>
              <h3 className="font-display text-xl md:text-2xl text-card-foreground mb-2">
                {stat.label}
              </h3>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


