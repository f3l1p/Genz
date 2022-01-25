export const Menu = ({ className }) => {
  const defaultClass = "linksMenu ";
  return (
    <div className={defaultClass + className}>
      <a href="#nose">Inicio</a>
      <a href="#nose2">¿Quiénes Somos?</a>
      <a href="#nose3">Soluciones</a>
      <a href="#nose4">Procesos</a>
      <a href="#nose5">Contacto</a>
    </div>
  );
};
