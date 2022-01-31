import React from "react";
import "./About.scss";
import Vector from "../../assets/images/Group MKT.svg";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { Card } from "../../components/Card/Card";
import { AboutInfo } from "./AboutInfo";

import { ListAbout } from "../../components/Card/ListAbout";

export const About = () => {
  const infoValores = [
    {
      id: "3",
      title: "Valores",
      icon: require("../../assets/icons/valores_icono.png"),
      list: [
        " Innovación ",
        "Profesionalismo ",
        "Compromiso ",
        "Integridad ",
        "Adaptabilidad ",
      ],
    },
  ];
  return (
    // data - aos= "fade-up" data - aos - duration="1000"
    //   data-aos="fade-up" data-aos-duration="3000"
    <section className="section-about">
      <TitleSection id="about" title={"Sobre Genz"} />
      <div className="container-about">
        <div className="l-col">
          <img className="image" src={Vector} alt="img-about" />
        </div>
        <div className="r-col">
          <p>
            <strong>GENZ</strong> nace como un proyecto para ofrecer a la
            industria y el comercio la posibilidad de innovar a través del uso
            de tecnología, que permita gestionar los negocios de una manera más
            inteligente, agregando valor y facilitando los procesos de toma de
            decisiones.
          </p>
        </div>
      </div>
      <div className="sectionAbout">
        {AboutInfo.map((info) => (
          <Card info={info} key={info.id} />
        ))}
        {infoValores.map((info) => (
          <ListAbout info={info} list={infoValores[0].list} key={info.id} />
        ))}
      </div>
    </section>
  );
};
