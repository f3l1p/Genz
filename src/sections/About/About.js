import { Card } from "../../components/Card/Card";
import { AboutInfo } from "./AboutInfo";

export const About = () => {
  return (
    <section className="sectionAbout">
      {AboutInfo.map((info) => (
        <Card info={info} key={info.title} />
      ))}
    </section>
  );
};
