// Información de contacto
export const CONTACT_INFO = {
  // Teléfono principal de domicilio: sucursal Petrolera
  phone: "993 318 4832",
  phoneFormatted: "+529933184832",
  phoneWhatsApp: "9933184832",
  email: "",
  website: "https://paniniclub.mx",
  established: "2014",
  tagline: "FRESH AND HANDMADE",
} as const;

// Redes sociales
export const SOCIAL_LINKS = {
  instagram: {
    url: "https://www.instagram.com/paniniclubmx",
    handle: "@paniniclubmx",
    label: "Síguenos en Instagram",
  },
  facebook: {
    url: "https://www.facebook.com/paniniclubmx",
    label: "Síguenos en Facebook",
  },
} as const;

// Aplicaciones de delivery
export const DELIVERY_APPS = [
  {
    name: "Uber Eats",
    color: "bg-[#06C167]",
    link: "https://www.ubereats.com/store-browse-uuid/3d7e8dcf-dce1-4e9d-ae7b-00a53cdaec05?diningMode=DELIVERY",
  },
  {
    name: "Rappi",
    color: "bg-[#FF441F]",
    link: "https://www.rappi.com.mx/restaurantes/delivery/40385-panini-club?utm_source=app&utm_medium=deeplink&utm_campaign=share",
  },
  {
    name: "DiDi Food",
    color: "bg-[#FF6600]",
    link: "https://www.didiglobal.com/mx/food/restaurant/panini-club",
  },
] as const;

// Ubicaciones de todas las sucursales
export const LOCATIONS = [
  {
    name: "Petrolera",
    address: "Av. de Los Árboles 101, Plaza Cascada",
    phone: "993 318 4832",
    hours: "12:30 PM - 11:30 PM",
    mapUrl: "https://maps.app.goo.gl/YYrpRd1jRzyDfMtM7",
  },
  {
    name: "Antojeria Food Park",
    address: "Paseo de la Choca #126",
    phone: "993 450 1624",
    hours: "4:30 PM - 11:30 PM",
    mapUrl: "https://maps.app.goo.gl/ygEQWSB84Mx2o3s98",
  },
  {
    name: "Deportiva",
    address: "Explanada del Estadio Centenario",
    phone: "993 703 2822",
    hours: "2:30 PM - 11:30 PM",
    mapUrl: "https://maps.app.goo.gl/P58qwjFNKkXNhfFu7",
  },
] as const;

// Enlaces de navegación
export const NAV_LINKS = [
  { name: "Menú", href: "#menu" },
  { name: "Promociones", href: "#promociones" },
  { name: "Ubicaciones", href: "#ubicaciones" },
  { name: "Contacto", href: "#contacto" },
] as const;




