import React from "react";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";

const Coin = ({ image, coinname, price, percentage }) => {
  return (
    <>
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
          <FiArrowUpRight style={{ color: "green" }} />
        </>
      ) : (
        <>
          {percentage}%
          <FiArrowDown style={{ color: "red" }} />
        </>
      )}
    </>
  );
};

export default Coin;
