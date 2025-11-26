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
        <div className="flex flex-col justify-center">
          <span className={`font-display ${textSizes[size]} text-foreground leading-none tracking-wide`}>
            PANINI<span className="text-primary font-bold">CLUB</span>
          </span>
        </div>
      )}
    </div>
  );
};








