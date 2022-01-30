import React from "react";
import "./Home.scss";
import tablet from "../../assets/images/tablet.png";
import hero from "../../assets/images/fondo_hero_gráfico.png";

import { MyButton } from "../../components/Button/Button";
import { Link } from "react-scroll";

export const Home = () => {
	return (
		<section id="home" className="home-container">
			<div className="text-container">
				<div className="title">
					<p>El poder de la ciencia de datos</p>
					<h1>al alcance de tus manos.</h1>
				</div>
				<div className="text">
					<p>
						¡El momento es ahora! Agilizá tus procesos transformando
						digitalmente la gestión de tu negocio.
					</p>
				</div>
				<Link activeClass="active" to="solutions" spy={true} smooth={true}>
					<MyButton buttonName="Conocé nuestros servicios" />
				</Link>
			</div>{" "}
			<div className="images">
				<img src={tablet} alt="tablet" className="tablet" id="tablet" />
				<img src={hero} alt="tablet" className="hero" />
			</div>
		</section>
	);
};
