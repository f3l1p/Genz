import React from "react";
import "./WhyGenz.scss";

import check from "../../assets/icons/checkmark-circle-outline.svg";
import ima from "../../assets/images/elegirnos2.png";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import MyButton from "../../components/Button/Button";

export const WhyGenz = () => {
  const db = [
    "Notás cierto atraso en tu empresa respecto a la implementación de tecnología",
    "Te demanda mucho tiempo elaborar reportes de gestión de tu negocio",
    "Contás con escasa información para la toma de decisiones",
    "Tu personal necesita ser capacitado en el manejo y gestión de datos",
    "Querés dedicar tu tiempo a asuntos que agreguen valor a tu negocio",
    "Tus herramientas actuales son limitadas",
  ];
  console.log(db[0].slice(0, 1));

  const listItems = db.map((item) => {
    return (
      <div className="list-item">
        <img src={check} alt="check-icon" className="check-icon" />
        <li className="item" key={db[0].slice(0, 1)}>
          {item}
        </li>
      </div>
    );
  });

  console.log(listItems);

  return (
    <section className="section-why">
      <TitleSection title="¿Por que elegirnos?" />
      <div className="container-why">
        <div className="l-col">
          <img className="image" src={ima} alt="imagen-elegirnos" />
        </div>
        <div className="r-col">
          <ul>{listItems}</ul>
          <MyButton buttonName={"Realizá tu consulta"} />
        </div>
      </div>
    </section>
  );
};
