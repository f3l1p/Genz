import logoBlanco from "../../assets/logo/logo_Genz_blanco.svg";
import iconMail from "../../assets/icons/icono_mailv_1.svg";
import iconPhone from "../../assets/icons/icono_phonev_1.svg";
import iconLocal from "../../assets/icons/icono_localv_1.svg";

export const Footer = () => {
  return (
    <footer className="sectionFooter">
      <div>
        <img src={logoBlanco} alt="logo-genz-blanco" className="logoBlanco" />
      </div>
      <div className="text">
        <p>Todos los derechos son reservados.</p>
        <p>Genz 2022</p>
      </div>
      <div className="divList">
        <ul>
          <li>
            <img src={iconMail} alt="icon-mail" />
            contacto.genz@gmail.com
          </li>
          <li>
            <img src={iconPhone} alt="icon-phone" />
            +54 9 3534 59 7586
          </li>
          <li>
            <img src={iconLocal} alt="icon-local" />
            Córdoba, Argentina
          </li>
        </ul>
      </div>
    </footer>
  );
};
