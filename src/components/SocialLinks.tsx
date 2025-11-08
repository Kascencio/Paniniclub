import { Instagram, Facebook } from "lucide-react";
import { SOCIAL_LINKS } from "@/config/constants";

interface SocialLinksProps {
  variant?: "text" | "icons";
  className?: string;
}

export const SocialLinks = ({ variant = "icons", className = "" }: SocialLinksProps) => {
  if (variant === "text") {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <a
          href={SOCIAL_LINKS.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity font-medium"
          aria-label={SOCIAL_LINKS.instagram.label}
        >
          Instagram
        </a>
        <a
          href={SOCIAL_LINKS.facebook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity font-medium"
          aria-label={SOCIAL_LINKS.facebook.label}
        >
          Facebook
        </a>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-6 ${className}`}>
      <a
        href={SOCIAL_LINKS.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all hover-lift"
        aria-label={SOCIAL_LINKS.instagram.label}
      >
        <Instagram className="w-5 h-5" aria-hidden="true" />
      </a>
      <a
        href={SOCIAL_LINKS.facebook.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-background transition-all hover-lift"
        aria-label={SOCIAL_LINKS.facebook.label}
      >
        <Facebook className="w-5 h-5" aria-hidden="true" />
      </a>
    </div>
  );
};




