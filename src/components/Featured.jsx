import React, { useEffect, useState } from "react";
import "./css/Featured.css";
import Coin from "./Coin";
import axios from "axios";
import Spinner from "./Spinner";
const Featured = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(url)
      .then((resp) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const coinItem = data.map((coin) => {
    return (
      <Coin
        key={coin.id}
        coinname={coin.name}
        image={coin.image}
        percentage={coin.price_change_percentage_24h.toFixed(2)}
        price={coin.current_price}
      />
    );
  });
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h2>
            Explore top Cryptos like Bitcoin, Ethereum, Binance, Dongecoin and
            more!
          </h2>
          <p>See all available assets: Coins and NFTs(Price in USD)</p>
          <button className="btn">See More Coins</button>
        </div>
        <div className="right">{loading ? <Spinner /> : coinItem}</div>
      </div>
    </div>
  );
};

export default Featured;
