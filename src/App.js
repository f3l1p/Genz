import React from "react";
import "./scss/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "./components/Navbar/Navbar";
import { About } from "./sections/About/About";
import { Solution } from "./sections/Solutions/Solutions";
import { Tools } from "./sections/Tools/Tools";
import { Footer } from "./components/Footer/Footer";
AOS.init();
//COMPONENTS
//card, navbar, footer => giovanni
// title, button => felipe

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      {/* 
			<Navbar/> => giovanni
			<Home/> => Felipe
			<About/> => Felipe / Giovanni las cards
			<WhyGenz/> => Felipe
			<Solutions /> => Giovanni
			<Process/> => Felipe / Giovanni las cards
			<Tools/> => Giovanni
			<Contact/> => Felipe // queda pendiente el form.
			 */}
      <About />
      <Solution />
      <Tools />
      <Footer />
    </>
  );
}

export default App;
