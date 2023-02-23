import ScoreBoard from "../../Components/ScoreBoard/ScoreBoard";
import style from "./MainPage.module.css";
const MainPage = () => {
  return (
    <div className={style.container}>
      <ScoreBoard />
    </div>
  );
};

export default MainPage;
