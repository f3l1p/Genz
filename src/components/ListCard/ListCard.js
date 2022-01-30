import React from "react";
import "./ListCard.scss";

export const ListCard = ({ title, list, titleResponsive, image }) => {
  let listItem = list.map((item) => <li className="item">{item}</li>);

  return (
    <div className="list-card">
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <img src={image} className="imagen-procesos" alt="imagen-procesos" />
        <h2 className="title-responsive">{titleResponsive}</h2>
      </div>
      <div className="list-container-list">
        <ul className="list">{listItem}</ul>
      </div>
    </div>
  );
};
