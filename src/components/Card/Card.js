import icon from "../../assets/icons/valores_icono.svg";
export const Card = ({ info }) => {
  return (
    <div className="card">
      <div className="icon">
        {/* <img src={icons.map((img) => img.icon)} alt="icon" />
         */}
        <img src={icon} alt="icon" />
        <p className="titleCard">{info.title}</p>
      </div>
      <div className="linearGradient">
        <div className="text">
          <div className="line"></div>
          <p>{info.text}</p>
        </div>
      </div>
    </div>
  );
};
