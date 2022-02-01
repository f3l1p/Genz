import ReactPlayer from "react-player";
import { CardTools } from "../../components/Card/CardTools";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { ToolsInfo } from "./ToolsInfo";
export const Tools = () => {
  return (
    <section id="tools" className="sectionTools">
      <TitleSection title={"Herramientas"} />
      <div className="videoAndText">
        <div className="video">
          <ReactPlayer
            url={require("../../assets/video/Power BI en 1 minuto.mp4")}
            className="react-player"
            playing={true}
            width="100%"
            height="100%"
            controls
            muted
          />
        </div>
        <div className="text">
          <div className="line"></div>
          <p>
            Utilizamos Microsoft Power BI, una herramienta de Business
            Intelligence (BI) que permite unificar más de 65 fuentes de datos
            diferentes en la nube y que arroja una vista de los datos más
            trascendentales de tu empresa para así poder mejorarlos desde un
            análisis de negocio.
          </p>
        </div>
      </div>
      <div className="toolsCards">
        {ToolsInfo.map((info) => (
          <CardTools info={info} key={info.id} />
        ))}
      </div>
    </section>
  );
};
