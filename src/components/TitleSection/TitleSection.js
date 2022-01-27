import React from "react";
import "./TitleSection.scss";

// Titulo de las secciones
export const TitleSection = ({ title }) => (
  <div className="container">
    <div className="title-container">
      <h2 className="title-name">{title}</h2>
    </div>
  </div>
);
