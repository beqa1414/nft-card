import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  let showLight = props.showLight;
  let showMainText = true;

  return (
    <div style={{ ...cardStyle.card }}>
      {showLight ? (
        <div className={styles.image}>
          <img src={props.Rect} alt="" className={styles.main_img} />
          <div className={styles.eye}>
            <img src={props.shape_1} alt="" className={styles.eye_img} />
          </div>
        </div>
      ) : null}
      <div className={styles.eqiul}>
        <span>{showMainText ? props.name : null}</span>
      </div>
      <div className={styles.our_eqiul}>{props.textName}</div>
      <div className={styles.days_price}>
        <div className={styles.price}>
          <img
            src={props.Comb_shape}
            alt=""
            style={{ width: "11px", height: "18px" }}
          />
          {props.ethText}
        </div>
        <div className={styles.days}>
          <img src={props.shape} alt="" />
          {props.days}
        </div>
      </div>
      <div className={styles.oval_img}>
        <img src={props.oval_img} alt="" />
        Creation of{" "}
        {true ? <span>{props.creation}</span> : <span>{props.creation2}</span>}
      </div>
    </div>
  );
}

export default Card;
const cardStyle = {
  card: {
    backgroundColor: "hsl(216, 50%, 16%)",
    borderRadius: "15px",
    boxShadow: "0px 25px 50px",
    width: "302px",
    padding: "1.5rem",
  },
};
