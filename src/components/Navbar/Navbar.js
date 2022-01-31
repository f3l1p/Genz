import { useState } from "react";
import logo from "../../assets/logo/logo_GENZ.svg";
import { Menu } from "./Menu";
import { Link } from "react-scroll";
export const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    return setOpen(!open);
  };

  return (
    <nav className="navBar">
      <div className="divLogo">
        <Link activeClass="active" to="home" spy={true} smooth={true}>
          <img src={logo} alt="logo-Genz" className="logo" />
        </Link>
      </div>
      <Menu className={open ? "two" : "one"} />
      <div className="menuResponsive">
        {<span onClick={toggleOpen}> &#9776; </span>}
      </div>
    </nav>
  );
};
