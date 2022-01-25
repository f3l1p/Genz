import React from "react";
import "./Process.scss";

import { TitleSection } from "../../components/TitleSection/TitleSection";
import ima from "../../assets/images/elipses secuencia.svg";

export const Process = () => {
	return (
		<section className="process-section">
			<TitleSection title="Procesos de trabajo" />
			<div>
				<img src={ima} alt="elipses-secuential" />
			</div>
		</section>
	);
};
