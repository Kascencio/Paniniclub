import logo from "@/assets/logo.png";
import { CONTACT_INFO } from "@/config/constants";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = "md", showText = true, className = "" }: LogoProps) => {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  const textSizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl md:text-4xl",
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src={logo}
        alt={`Panini Club Logo - Establecido ${CONTACT_INFO.established}, ${CONTACT_INFO.tagline}`}
        className={sizeClasses[size]}
        width={size === "sm" ? 40 : size === "md" ? 48 : 64}
        height={size === "sm" ? 40 : size === "md" ? 48 : 64}
        loading={size === "md" ? "eager" : "lazy"}
        decoding="async"
      />
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground" aria-label={`Establecido en ${CONTACT_INFO.established}`}>
            <span>ESTB</span>
            <span>{CONTACT_INFO.established}</span>
          </div>
          <span className={`font-display ${textSizes[size]} text-foreground leading-tight`}>
            PANINI <span className="text-primary">CLUB</span>
          </span>
          <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider" aria-label={CONTACT_INFO.tagline}>
            {CONTACT_INFO.tagline}
          </span>
        </div>
      )}
    </div>
  );
};







