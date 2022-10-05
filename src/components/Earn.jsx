import React from "react";
import trade from "../assets/trade.png";
import "./css/Earn.css";

const Earn = () => {
  return (
    <div className="earn">
      <div className="container">
        <div className="left">
          <img src={trade} alt="" />
        </div>
        <div className="right">
          <h2>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
          </p>
          <div className="input-container">
            <input type="email" placeholder="Enter your  email" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
