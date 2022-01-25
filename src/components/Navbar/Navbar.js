import { useState } from "react";
import logo from "../../assets/logo/logo_GENZ.svg";
import { Menu } from "./Menu";
export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    return setOpen(!open);
  };

  return (
    <nav className="navBar">
      <div className="divLogo">
        <img src={logo} alt="logo-Genz" className="logo" />
      </div>
      <Menu className={open ? "two" : "one"} />
      <div className="menuResponsive">
        {<span onClick={toggleOpen}> &#9776; </span>}
      </div>
    </nav>
  );
};
