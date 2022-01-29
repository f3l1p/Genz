export const CardList = ({ info, list }) => {
  const listItem = list.map((text) => <li>{text}</li>);
  return (
    <div className="card">
      <img src={info.icon} alt="icon" className="icon" />
      {/* <img src={info.img} />  */}
      <div className="iconDiv">
        <p className="titleCard">{info.title}</p>
      </div>
      <div className="linearGradient">
        <div className="text">
          <div className="line"></div>
          <ul>{listItem}</ul>
        </div>
      </div>
    </div>
  );
};
