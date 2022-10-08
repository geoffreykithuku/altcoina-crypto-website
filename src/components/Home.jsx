import React, { useState } from "react";
import bg from "../assets/hero-img.png";
import "./css/Home.css";

const Home = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleClick() {
    setInput("");
  }
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <p>Buy & Sell Crypto 24/7 at your convenience</p>
          <h1>Invest in cryptocurrency today</h1>
          <p>Compare hundreds of cryptocurrencies all over the world</p>
          <div className="input-container">
            <input
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              value={input}
            />
            <button onClick={handleClick} className="btn">
              Get Started
            </button>
          </div>
        </div>
        <div className="right">
          <div className="image-container">
            <img src={bg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
