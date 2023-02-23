import { useRef } from "react";
import style from "./TurnVisuals.module.css";

const Banana = require("../../Assets/Banana.png");
const Apple = require("../../Assets/Apple.png");
const Arrow = require("../../Assets/Arrow.png");
interface props {
  value: boolean;
}

const TurnVisuals = ({ value }: props) => {
  return (
    <div className={style.maincontainer}>
      <div className={style.container}>
        <img src={Banana} alt="" />
        <img src={Apple} alt="" />
      </div>
      <div>
        <img
          className={value === true ? style.Banana : ""}
          src={Arrow}
          alt=""
        />
      </div>
    </div>
  );
};

export default TurnVisuals;
