import React from "react";
import "./css/Card.css";

const Card = ({ avatar, name, designation, message }) => {
  return (
    <div className="card">
      <img style={{ width: "30%", borderRadius: "50%" }} src={avatar} />
      <div className="myCarousel content">
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;
