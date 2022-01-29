import React from "react";
import "./ListCard.scss";

export const ListCard = ({ title, list, titleResponsive }) => {
	let listItem = list.map((item) => <li className="item">{item}</li>);

	return (
		<div className="list-card">
			<div className="title-container">
				<h1 className="title">{title}</h1>
				<h2 style={{ display: "none" }}>{titleResponsive}</h2>
				<img style={{ display: "none" }} />
			</div>
			<div className="list-container">
				<ul className="list">{listItem}</ul>
			</div>
		</div>
	);
};
