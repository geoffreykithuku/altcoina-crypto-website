import React, { useState } from "react";
import trade from "../assets/trade.png";
import "./css/Earn.css";

const Earn = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleClick() {
    setInput("");
  }
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
            <input
              type="email"
              placeholder="Enter your  email"
              value={input}
              onChange={handleChange}
            />
            <button className="btn" onClick={handleClick}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earn;
