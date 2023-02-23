import { useEffect, useState } from "react";
import BoardSquare from "../BoardSquare/BoardSquare";
import style from "./ScoreBoard.module.css";

const ScoreBoard = () => {
  // since there is only 2 possibilities then false means Banana
  //true means Apple.
  const [nextValue, setNextValue] = useState<boolean>(false);

  //values of the squares
  const [SquaresValues, setSquaresValues] = useState<string[]>([]);

  //function to pass for all squares in the board to edit its value when clicked
  const handleClick = (index: number) => {
    setSquareValue(index);
  };

  const setSquareValue = (index: number) => {
    const newValues = [...SquaresValues];
    newValues[index] = nextValue ? "Apple" : "Banana";
    setSquaresValues(newValues);
    setNextValue(!nextValue);
  };

  const checkWinner = () => {
    //all possible winning values
    const winningSituations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    winningSituations.forEach((values) => {
      const [a, b, c] = values;
      if (
        SquaresValues[a] &&
        SquaresValues[a] === SquaresValues[b] &&
        SquaresValues[a] === SquaresValues[c]
      ) {
        console.log(SquaresValues[a] + " Is the winner");
      }
    });
  };
  //Whenever anysquare value change, we check for any winners.
  useEffect(() => {
    checkWinner();
  }, [SquaresValues]);

  return (
    <div className={style.container}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
        <BoardSquare
          value={SquaresValues[index]}
          handleClick={handleClick}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
};

export default ScoreBoard;
