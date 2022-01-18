import logo from "../../assets/logo/logo_GENZ.svg";
export const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="divLogo">
        <img src={logo} alt="logo-Genz" className="logo" />
      </div>
      <div className="linksMenu">
        <a href="#nose">Inicio</a>
        <a href="#nose2">¿Quiénes Somos?</a>
        <a href="#nose3">Soluciones</a>
        <a href="#nose4">Procesos</a>
        <a href="#nose5">Contacto</a>
      </div>
    </nav>
  );
};
