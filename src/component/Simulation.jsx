import React, { useState } from "react";
import Result from "./Result";
import Question from "./Question";

let questionsInput = {};

function Simulation() {
  //  現在の質問
  var [currentQuestion, setQuestion] = useState(0);

  function Click(event) {
    if (currentQuestion === 4) {
      questionsInput[event.currentTarget.name] = event.currentTarget.id;
      if (event.currentTarget.id === "") {
        setQuestion((prevNum) => {
          return prevNum - 1;
        });
      }
    } else if (currentQuestion === 3) {
      questionsInput[event.currentTarget.id] = event.currentTarget.innerText;
      console.log(event.currentTarget.id);
      console.log(event.currentTarget.innerText);
    } else {
      let clickedId = event.currentTarget.id;
      let clickedName = event.currentTarget.name;
      questionsInput[clickedName] = clickedId;
      console.log(questionsInput);
    }

    setQuestion((prevNum) => {
      return prevNum + 1;
    });
  }

  function Return(event) {
    setQuestion((prevNum) => {
      if (currentQuestion <= 0) {
        return 0;
      }
      return prevNum - 1;
    });
  }

  return (
    <div>
      {currentQuestion <= 4 ? (
        <Question cQ={currentQuestion} click={Click} return={Return} />
      ) : (
        <Result qI={questionsInput} />
      )}
    </div>
  );
}

export default Simulation;
