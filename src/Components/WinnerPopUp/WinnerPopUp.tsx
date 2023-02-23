import style from "./WinnerPopUp.module.css";
import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button/Button";
interface props {
  winner: string | null;
  resetGame: () => void;
}

const WinnerPopUp = ({ winner, resetGame }: props) => {
  return winner ? (
    <div className={style.popupbackgroud}>
      <motion.div
        className={style.container}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <h3>{winner + " Won the game"}</h3>

        <Button value="Reset game" ResetClick={resetGame} />
      </motion.div>
    </div>
  ) : (
    <></>
  );
};
export default WinnerPopUp;
