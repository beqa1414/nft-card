import React from "react";
import Rect from "./images/image-equilibrium.jpg";
import Comb_shape from "./images/Combined Shape.png";
import shape from "./images/Shape.png";
import oval_img from "./images/Oval.png";
import shape_1 from "./images/Shape (1).png";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <img src={Rect} alt="" className={styles.main_img} />
        <div className={styles.eye}>
          <img src={shape_1} alt="" className={styles.eye_img} />
        </div>
      </div>
      <div className="equil">
        <h3>Equilibrium #3429</h3>
      </div>
      <div className={styles.our_eqiul}>
        Our Equilibrium collection promotes <span>balance and calm.</span>
      </div>
      <div className={styles.days_price}>
        <div className={styles.price}>
          <img
            src={Comb_shape}
            alt=""
            style={{ width: "11px", height: "18px" }}
          />
          0.041 ETH
        </div>
        <div className={styles.days}>
          <img src={shape} alt="" />3 days left
        </div>
      </div>
      <div className={styles.oval_img}>
        <img src={oval_img} alt="" className="avatar" />
        Creation of <span>Jules Wyvern</span>
      </div>
    </div>
  );
}

export default Card;
