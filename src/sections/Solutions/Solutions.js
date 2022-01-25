import { Card } from "../../components/Card/Card";
import { SolutionsInfo } from "./SolutionsInfo";

export const Solution = () => {
  return (
    <section className="sectionSolutions">
      {SolutionsInfo.map((info) => (
        <Card info={info} key={info.title} />
      ))}
    </section>
  );
};
