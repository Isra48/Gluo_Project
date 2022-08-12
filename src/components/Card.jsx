import React from "react";
import "./Card.css";

const Card = ({ title, subTitle, img, handleDelete }) => {
  return (
    <div className="Card">
      <div className="card-data">
        <img className="img_card" src={img.replace("http", "https")}></img>
        <div className="Card_detail">
          <div className="Card_Title">{title}</div>
          <div className="info_Card">{subTitle}</div>
        </div>
      </div>
      <div onClick={handleDelete} className="Erase">
        <p>X</p>
      </div>
    </div>
  );
};

export default Card;
