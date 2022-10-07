import React from "react";
import "./css/Card.css";

const Card = ({ avatar, name, designation, message }) => {
  return (
    <div className="card1">
      <img
        className="thumb"
        style={{ width: "20%", borderRadius: "50%" }}
        src={avatar}
        alt="a person"
      />
      <div className="myCarousel content">
        <h3>{name}</h3>
        <h4>{designation}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Card;
