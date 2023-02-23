import { useState } from "react";
import Button from "../../Components/Button/Button";
import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import WinnerPopUp from "../../Components/WinnerPopUp/WinnerPopUp";
import style from "./MainPage.module.css";
const MainPage = () => {
  const [winner, setWinner] = useState<string | null>(null);
  const [SquaresValues, setSquaresValues] = useState<string[]>([]);

  const resetGame = () => {
    setWinner(null);
    setSquaresValues([]);
  };
  return (
    <div className={style.container}>
      <Button value="Reset game" ResetClick={resetGame} />
      <WinnerPopUp resetGame={resetGame} winner={winner} />
      <ScoreBoard
        setWinner={setWinner}
        setSquaresValues={setSquaresValues}
        SquaresValues={SquaresValues}
      />
    </div>
  );
};

export default MainPage;
