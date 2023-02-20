import React from "react";
import "./App.css";
import Rect from "./images/image-equilibrium.jpg";
import Comb_shape from "./images/Combined Shape.png";

function Card() {
  return (
    <div className="container">
      <div className="card-bg">
        <img src={Rect} alt="rect" />
        <div className="equil-text">
          <h1 className="main-text">Equilibrium #3429</h1>
        </div>
        <div className="our-eqiul">
          <p className="our-equil-text">
            Our Equilibrium collection promotes
            <br /> balance and calm.
          </p>
        </div>
        <div className="comb-shape">
          <img src={Comb_shape} alt="comb-shap" />
        </div>
        <div className="eth">
          <p className="text-eth">0.041 ETH</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
