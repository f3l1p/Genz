import { CardTools } from "../../components/Card/CardTools";
import { ToolsInfo } from "./ToolsInfo";
export const Tools = () => {
  return (
    <section className="sectionTools">
      {ToolsInfo.map((info) => (
        <CardTools info={info} key={info.id} />
      ))}
    </section>
  );
};
