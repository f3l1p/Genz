import { Card } from "../../components/Card/Card";
import { TitleSection } from "../../components/TitleSection/TitleSection";
import { SolutionsInfo } from "./SolutionsInfo";

export const Solution = () => {
	return (
		<section
			className="sectionSolutions"
			data-aos="fade-up"
			data-aos-duration="3000"
		>
			<TitleSection title={"Nuestras Soluciones"} />
			<div className="divCardsSolutions">
				{SolutionsInfo.map((info) => (
					<Card info={info} key={info.title} />
				))}
			</div>
		</section>
	);
};
