import React from "react";
import "./About.scss";
import Vector from "../../assets/images/Group MKT.svg";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { Card } from "../../components/Card/Card";
import { AboutInfo } from "../About/AboutInfo";

export const About = () => {
	return (
		<section className="section-about">
			<TitleSection title={"Sobre Genz"} />
			<div className="container-about">
				<div className="l-col" data-aos="fade-up" data-aos-duration="1000">
					<img className="image" src={Vector} alt="img-about" />
				</div>
				<div className="r-col" data-aos="fade-up" data-aos-duration="3000">
					<p>
						<strong>GENZ</strong> nace como un proyecto para ofrecer a la
						industria y el comercio la posibilidad de innovar a través del uso
						de tecnología, que permita gestionar los negocios de una manera más
						inteligente, agregando valor y facilitando los procesos de toma de
						decisiones.
					</p>
				</div>
			</div>
			<div className="sectionAbout">
				{AboutInfo.map((info) => (
					<Card info={info} key={info.title} />
				))}
			</div>
		</section>
	);
};
