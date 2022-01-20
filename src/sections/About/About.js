import { Card } from "../../components/Card/Card";
import { useEffect, useState } from "react";
import cardsAbout from "../../data/cardsAbout.json";
export const About = () => {
  const [infoCard, setInfoCard] = useState([]);
  useEffect(() => {
    setInfoCard(cardsAbout);
  }, []);
  return (
    <section className="sectionAbout">
      {infoCard?.map((info) => (
        <Card info={info} key={info.title} />
      ))}
    </section>
  );
};
