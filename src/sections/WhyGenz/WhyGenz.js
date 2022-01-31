import React from "react";
import "./WhyGenz.scss";

import check from "../../assets/icons/checkmark-circle-outline.svg";
import ima from "../../assets/images/elegirnos2.png";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { ButtonGeneral } from "../../components/ButtonGeneral/ButtonGeneral";
import { Link } from "react-scroll";

export const WhyGenz = () => {
  const db = [
    "Notás cierto atraso en tu empresa respecto a la implementación de tecnología",
    "Te demanda mucho tiempo elaborar reportes de gestión de tu negocio",
    "Contás con escasa información para la toma de decisiones",
    "Tu personal necesita ser capacitado en el manejo y gestión de datos",
    "Querés dedicar tu tiempo a asuntos que agreguen valor a tu negocio",
    "Tus herramientas actuales son limitadas",
  ];

  const listItems = db.map((item) => {
    return (
      <div className="list-item" key={item}>
        <img src={check} alt="check-icon" className="check-icon" />
        <li className="item" key={db[0].slice(0, 1)}>
          {item}
        </li>
      </div>
    );
  });

  return (
    // data-aos="fade-right" data-aos-duration="2000"
    // data-aos="fade-left" data-aos-duration="2000"
    <section id="why" className="section-why">
      <TitleSection title="¿Por que elegirnos?" />
      <div className="container-why">
        <div className="l-col">
          <img className="image" src={ima} alt="imagen-elegirnos" />
        </div>
        <div className="r-col">
          <ul>{listItems}</ul>
          <Link activeClass="active" to="contact" spy={true} smooth={true}>
            <ButtonGeneral
              type="button"
              buttonName={"Realizá tu consulta"}
              style={{ width: "309px", height: "64px", padding: "15px, 20px" }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};
