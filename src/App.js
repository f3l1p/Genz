import React from "react";
import "./scss/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavBar } from "./components/Navbar/Navbar";
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
      <div>
        <h1>Ready?</h1>
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
      </div>
    </>
  );
}

export default App;
