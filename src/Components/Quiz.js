import React, { useContext, useState } from 'react';
import { GameStateContext } from '../Helpers/Contexts';
import { Questions } from '../Helpers/Questions';

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(GameStateContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setOptionChosen(""); // Reset chosen option
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  const previousQuestion = () => {
    setCurrQuestion(currQuestion - 1);
  };

  const getOptionClass = (option) => {
    return optionChosen === option ? "selected-option" : "";
  };

  return (
    <div className='Quiz'>
      <h1>{Questions[currQuestion].prompt}</h1>
      <div className='options'>
        <button 
          className={getOptionClass("A")} 
          onClick={() => setOptionChosen("A")}
        >
          {Questions[currQuestion].optionA}
        </button>
        <button 
          className={getOptionClass("B")} 
          onClick={() => setOptionChosen("B")}
        >
          {Questions[currQuestion].optionB}
        </button>
        <button 
          className={getOptionClass("C")} 
          onClick={() => setOptionChosen("C")}
        >
          {Questions[currQuestion].optionC}
        </button>
        <button 
          className={getOptionClass("D")} 
          onClick={() => setOptionChosen("D")}
        >
          {Questions[currQuestion].optionD}
        </button>
      </div>
      
      <div className="button-row">
        {currQuestion > 0 && (
          <button onClick={previousQuestion}>Previous Question</button>
        )}
        {currQuestion === Questions.length - 1 ? (
          <button onClick={finishQuiz}>Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion}>Next Question</button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
