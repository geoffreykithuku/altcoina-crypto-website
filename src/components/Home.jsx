import React from "react";
import bg from "../assets/bg.jpg";
import "./css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <p>Buy & Sell Crypto 24/7 at your convenience</p>
          <h1>Invest in cryptocurrency with any amount</h1>
          <p>Compare hundreds of cryptocurrencies all over the world</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button className="btn">Get Started</button>
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
