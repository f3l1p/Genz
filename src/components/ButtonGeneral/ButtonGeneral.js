import React from "react";
import "./ButtonGeneral.scss";

export const ButtonGeneral = ({
	buttonName,
	onClick,
	style,
	disabled,
	type,
}) => (
	<button
		type={type}
		style={style}
		className="button-general"
		onClick={onClick}
	>
		<p>{buttonName}</p>
	</button>
);
