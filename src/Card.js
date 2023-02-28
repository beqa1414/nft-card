import React from "react";
import Rect from "./images/image-equilibrium.jpg";
import Comb_shape from "./images/Combined Shape.png";
import shape from "./images/Shape.png";
import oval_img from "./images/Oval.png";
import shape_1 from "./images/Shape (1).png";
import styles from "./Card.module.css";

function Card({ name, textName, creation, creation2, days, ethText }) {
  let showLight = true;
  let showMainText = true;

  return (
    <div className={styles.card}>
      {showLight ? (
        <div className={styles.image}>
          <img src={Rect} alt="" className={styles.main_img} />
          <div className={styles.eye}>
            <img src={shape_1} alt="" className={styles.eye_img} />
          </div>
        </div>
      ) : null}
      <div className={styles.eqiul}>
        <span>{showMainText ? name : null}</span>
      </div>
      <div className={styles.our_eqiul}>{textName}</div>
      <div className={styles.days_price}>
        <div className={styles.price}>
          <img
            src={Comb_shape}
            alt=""
            style={{ width: "11px", height: "18px" }}
          />
          {ethText}
        </div>
        <div className={styles.days}>
          <img src={shape} alt="" />
          {days}
        </div>
      </div>
      <div className={styles.oval_img}>
        <img src={oval_img} alt="" />
        Creation of {true ? <span>{creation}</span> : <span>{creation2}</span>}
      </div>
    </div>
  );
}

export default Card;
