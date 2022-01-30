import React from "react";
import "./TitleSection.scss";

// Titulo de las secciones
export const TitleSection = ({ title, id }) => (
	<div id={id} className="container">
		<div className="title-container">
			<h2 className="title-name">{title}</h2>
			<span className="line" />
		</div>
	</div>
);
