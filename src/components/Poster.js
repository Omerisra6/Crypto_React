import React from "react";

export default function Poster() {
  return (
    <div className="poster">
      <div className="left-poster">
        <h5 className="no-comission">0% comission</h5>
        <h2 className="join-best">Join the best cryptocurrency exchange</h2>
        <h5 className="trade-with">
          Trade with over 740 different cryptocurrency and flat currency pairs,
          including Bitcoin, Etherium and BNC exchange
        </h5>
        <button className="start-trading">START TRADING</button>
      </div>

      <div className="right-poster">
        <object
          type="image/svg+xml"
          className="back-img"
          data="assets/crypto-exchange-icon.svg"
        >
          This image is a crypto currency ilustration
        </object>
      </div>
    </div>
  );
}
