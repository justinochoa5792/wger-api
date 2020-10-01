import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [exercise, setExercise] = useState([]);

  const renderExercise = async () => {
    const response = await Axios.get(
      "https://wger.de/api/v2/exercise/?muscles=1&equipment=3"
    );
    console.log(response.data.results);
    setExercise(response.data.results);
  };

  useEffect(() => {
    renderExercise();
  }, []);
  return (
    <div className="App">
      <h1>Exercises</h1>
      {exercise.map((eachExercise) => {
        return (
          <ul>
            <li>{eachExercise.name}</li>
            <li
              dangerouslySetInnerHTML={{ __html: eachExercise.description }}
            ></li>
          </ul>
        );
      })}
    </div>
  );
}

export default App;
