import React from "react";
import "./Process.scss";

import { TitleSection } from "../../components/TitleSection/TitleSection";
import ima from "../../assets/images/elipses secuencia.svg";
import { processDB } from "./ProcessDB";
import { ListCard } from "../../components/ListCard/ListCard";

export const Process = () => {
  return (
    <section className="process-section">
      <TitleSection title="Procesos de trabajo" />
      <div className="image-container">
        <img src={ima} alt="elipses-secuential" />
      </div>
      <div className="list-container">
        <ListCard
          titleResponsive="DIAGNÓSTICO"
          title={processDB[0].id}
          list={processDB[0].list}
          image={processDB[0].image}
        />
        <div className="vertical-line"></div>

        <ListCard
          titleResponsive="PROPUESTA COMERCIAL"
          title={processDB[1].id}
          list={processDB[1].list}
          image={processDB[1].image}
        />
        <div className="vertical-line"></div>

        <ListCard
          titleResponsive="IMPLEMENTACION"
          title={processDB[2].id}
          list={processDB[2].list}
          image={processDB[2].image}
        />
        <div className="vertical-line"></div>

        <ListCard
          titleResponsive="SEGUIMIENTO"
          title={processDB[3].id}
          list={processDB[3].list}
          image={processDB[3].image}
        />
      </div>
    </section>
  );
};
