export const CardTools = ({ info }) => {
  return (
    <>
      <div className="card">
        <img src={info.img} alt="icon" className="img" />
        <div className="iconDiv">
          <p className="titleCard">{info.title}</p>
        </div>
        <div className="linearGradient">
          <div className="text">
            <div className="line"></div>
            <p>{info.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
