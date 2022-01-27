import logoBlanco from "../../assets/logo/logo_Genz_blanco.svg";
import iconMail from "../../assets/icons/icono_mailv_1.svg";
import iconPhone from "../../assets/icons/icono_phonev_1.svg";
import iconLocal from "../../assets/icons/icono_localv_1.svg";
import iconWsp from "../../assets/icons/whatsapp_icono.svg";
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
        <div className="imgList">
          <img src={iconMail} alt="icon-mail" />
          <img src={iconPhone} alt="icon-phone" />
          <img src={iconLocal} alt="icon-local" />
        </div>
        <div className="list">
          <p>contacto.genz@gmail.com</p>
          <p>+54 9 3534 59 7586</p>
          <p>Córdoba, Argentina</p>
        </div>
      </div>
      <div className="iconWsp">
        <img src={iconWsp} alt="Whatsapp" />
      </div>
    </footer>
  );
};
