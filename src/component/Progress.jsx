import React from "react";
import completed from "../images/completed.svg";
import uncompleted from "../images/uncompleted.svg";

function Progress(props) {
  function ProgressBar() {
    let e = [];
    for (let i = 0; i < 5; i++) {
      if (props.cQ > i) {
        e.push(completed);
      } else {
        e.push(uncompleted);
      }
    }
    return e;
  }

  return (
    <div className="overflow">
      {ProgressBar().map((item, index) => (
        <img className="sidemg" src={item} alt="progressImg"></img>
      ))}
    </div>
  );
}

export default Progress;
