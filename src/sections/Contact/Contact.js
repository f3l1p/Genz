import React from "react";
import "./Contact";
import { TitleSection } from "../../components/TitleSection/TitleSection";

import { FormG } from "./FormG";

export const Contact = () => {
	return (
		<section className="contactSection">
			<TitleSection id="contact" title="Contacto" className="title" />
			<div className="container-form">
				<div className="form">
					<FormG />
				</div>
				<div className="info">
					<p style={{ fontWeight: "bold" }}>¡Contactanos!</p>
					<p>
						Cada vez más cerca de la <strong>transformación digital</strong> de
						tu empresa
					</p>
				</div>
			</div>
		</section>
	);
};
