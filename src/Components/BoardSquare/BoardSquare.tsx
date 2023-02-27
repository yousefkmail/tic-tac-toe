import style from "./BoardSquare.module.css";
const Banana = require("../../Assets/Banana.png");
const Apple = require("../../Assets/Apple.png");

interface props {
  handleClick: (index: number) => void;
  index: number;
  value: string | undefined;
}

const BoardSquare = ({ handleClick, index, value }: props) => {
  return (
    <div onClick={() => handleClick(index)} className={style.square}>
      {value && (
        <img
          className={style.icon}
          src={value === "Apple" ? Apple : Banana}
          alt=""
        />
      )}
    </div>
  );
};

export default BoardSquare;
