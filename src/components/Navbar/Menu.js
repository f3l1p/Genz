import { Link } from "react-scroll";

export const Menu = ({ className }) => {
	const defaultClass = "linksMenu ";
	return (
		<div className={defaultClass + className}>
			<a href="#nose">
				<Link activeClass="active" to="home" spy={true} smooth={true}>
					Inicio
				</Link>
			</a>
			<a href="#nose2">
				<Link activeClass="active" to="about" spy={true} smooth={true}>
					¿Quiénes Somos?
				</Link>
			</a>
			<a href="#nose3">
				<Link activeClass="active" to="solutions" spy={true} smooth={true}>
					Soluciones
				</Link>
			</a>
			<a href="#nose4">
				<Link activeClass="active" to="process" spy={true} smooth={true}>
					Procesos
				</Link>
			</a>
			<a href="#nose5">
				<Link activeClass="active" to="contact" spy={true} smooth={true}>
					Contacto
				</Link>
			</a>
		</div>
	);
};
