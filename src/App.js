import React from "react";
import "./scss/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { Home } from "./sections/Home/Home";
import { About } from "./sections/About/About";
import { WhyGenz } from "./sections/WhyGenz/WhyGenz";
import { Process } from "./sections/Process/Process";
import { Solution } from "./sections/Solutions/Solutions";
import { NavBar } from "./components/Navbar/Navbar";
import { Tools } from "./sections/Tools/Tools";

AOS.init();

function App() {
	return (
		<div>
			<NavBar />
			<Home />
			<About />
			<WhyGenz />
			<Process />
			<Solution />
			<Tools />
		</div>
	);
}

export default App;
