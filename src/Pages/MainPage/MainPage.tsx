import { useState } from "react";
import Button from "../../Components/Button/Button";
import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import TurnVisuals from "../../Components/TurnVisuals/TurnVisuals";
import WinnerPopUp from "../../Components/WinnerPopUp/WinnerPopUp";
import style from "./MainPage.module.css";
const MainPage = () => {
  const [winner, setWinner] = useState<string | null>(null);
  const [SquaresValues, setSquaresValues] = useState<string[]>([]);
  const [nextValue, setNextValue] = useState<boolean>(false);

  const resetGame = () => {
    setWinner(null);
    setSquaresValues([]);
    setNextValue(false);
  };
  return (
    <div className={style.container}>
      <TurnVisuals value={nextValue} />
      <div className={style.scorebaordcontainer}>
        <Button value="Reset game" ResetClick={resetGame} />
        <WinnerPopUp resetGame={resetGame} winner={winner} />
        <ScoreBoard
          nextValue={nextValue}
          setNextValue={setNextValue}
          setWinner={setWinner}
          setSquaresValues={setSquaresValues}
          SquaresValues={SquaresValues}
        />
      </div>
    </div>
  );
};

export default MainPage;
