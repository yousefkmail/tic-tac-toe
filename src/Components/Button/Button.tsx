import style from "./Button.module.css";
interface props {
  ResetClick: () => void;
  value: string;
}
const Button = ({ ResetClick, value }: props) => {
  return (
    <button onClick={ResetClick} className={style.button}>
      {value}
    </button>
  );
};

export default Button;
