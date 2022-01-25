import React from "react";
import "./Button.scss";

const MyButton = ({ buttonName, click }) => {
	return (
		<div className="button-container" onClick={click}>
			<p className="button-name">{buttonName}</p>
		</div>
	);
};

export default MyButton;
