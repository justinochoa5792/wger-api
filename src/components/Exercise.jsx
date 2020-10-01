import React from "react";
import "../App.css";

function Exercise(props) {
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Exercises</h1>
      {props.exercise.map((eachExercise) => {
        return (
          <ul>
            <li style={{ fontWeight: "bold" }}>{eachExercise.name}</li>
            <li
              dangerouslySetInnerHTML={{ __html: eachExercise.description }}
            ></li>
          </ul>
        );
      })}
    </div>
  );
}
export default Exercise;
