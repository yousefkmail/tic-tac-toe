import style from "./BoardSquare.module.css";
const Banana = require("../../Assets/Banana.png");
const Apple = require("../../Assets/Apple.png");

interface props {
  handleClick: (index: number) => void;
  index: number;
  value: string | undefined;
}

const BoardSquare = ({ handleClick, index, value }: props) => {
  const stylesClasses = () => {
    let classes = style.square;

    const addClassToString = (ClassName?: string) => {
      classes += " " + ClassName;
    };
    if ([1, 2, 3].includes(index)) {
      addClassToString(style.top);
    }
    if ([1, 4, 7].includes(index)) {
      addClassToString(style.left);
    }
    if ([3, 6, 9].includes(index)) {
      addClassToString(style.right);
    }
    if ([7, 8, 9].includes(index)) {
      addClassToString(style.bottom);
    }
    return classes;
  };

  return (
    <div onClick={() => handleClick(index)} className={stylesClasses()}>
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
