/**
 * Hook personalizado para hacer scroll suave a una sección
 * @param sectionId - ID de la sección a la que hacer scroll
 * @returns Función para ejecutar el scroll
 */
export const useSmoothScroll = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return scrollToSection;
};








