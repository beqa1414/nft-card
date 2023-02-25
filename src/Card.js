import React from "react";
import Rect from "./images/image-equilibrium.jpg";
import Comb_shape from "./images/Combined Shape.png";
import shape from "./images/Shape.png";
import oval_img from "./images/Oval.png";
import "./Card.css";

function Card() {
  return (
    <div className="card">
      <div className="image">
        <img src={Rect} alt="" className="main-img" />
      </div>
      <div className="equil">
        <h3>Equilibrium #3429</h3>
      </div>
      <div className="our-eqiul">
        Our Equilibrium collection promotes <span>balance and calm.</span>
      </div>
      <div className="days-price">
        <div className="price">
          <img
            src={Comb_shape}
            alt="comb-shap"
            style={{ width: "11px", height: "18px" }}
          />
          0.041 ETH
        </div>
        <div className="days">
          <img scr={shape} alt="" />3 days left
        </div>
      </div>
      <div className="oval-img">
        <img src={oval_img} alt="" />
        Creation of <span>Jules Wyvern</span>
      </div>
    </div>
  );
}

export default Card;
