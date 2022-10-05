import React from "react";
import "./css/Featured.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Coin = ({ image, coinname, price, percentage }) => {
  return (
    <div className="card">
      <div className="top">
        <img src={image} alt="" />
      </div>
      <div>
        <h5>{coinname}</h5>
        <p>{price}</p>
      </div>

      {percentage > 0 ? (
        <>
          {percentage}%
          <FiArrowUpRight size={20} style={{ color: "green" }} />
        </>
      ) : (
        <>
          {percentage}%
          <FiArrowDown size={20} style={{ color: "red" }} />
        </>
      )}
    </div>
  );
};

export default Coin;
