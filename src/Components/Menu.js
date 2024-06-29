import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../Helpers/Contexts";

function Menu() {
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
  return (
    <div className="Menu">
      <label><h2>Enter Your Name:</h2></label>
      <input
        type="text"
        placeholder="  Ex. John Smith  "
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
