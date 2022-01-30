import { Link } from "react-scroll";

export const Menu = ({ className }) => {
  const defaultClass = "linksMenu ";
  return (
    <div className={defaultClass + className}>
      <Link
        activeClass="active"
        className="links"
        to="home"
        spy={true}
        smooth={true}
      >
        Inicio
      </Link>

      <Link
        activeClass="active"
        className="links"
        to="about"
        spy={true}
        smooth={true}
      >
        ¿Quiénes Somos?
      </Link>

      <Link
        activeClass="active"
        className="links"
        to="solutions"
        spy={true}
        smooth={true}
      >
        Soluciones
      </Link>

      <Link
        activeClass="active"
        className="links"
        to="process"
        spy={true}
        smooth={true}
      >
        Procesos
      </Link>

      <Link
        activeClass="active"
        className="links"
        to="contact"
        spy={true}
        smooth={true}
      >
        Contacto
      </Link>
    </div>
  );
};
