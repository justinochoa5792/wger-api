import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Axios from "axios";

import Home from "./components/Home";
import Exercise from "./components/Exercise";
import Food from "./components/Food";
import NavBar from "./components/NavBar";

const App = () => {
  const [exercise, setExercise] = useState([]);
  const [food, setFood] = useState([]);

  const renderExercise = async () => {
    const response = await Axios.get(
      "https://wger.de/api/v2/exercise/?muscles=1&equipment=3"
    );
    console.log(response.data.results);
    setExercise(response.data.results);
  };

  const renderFood = async () => {
    const res = await Axios.get("https://wger.de/api/v2/ingredient/?limit=20");
    console.log(res.data.results);
    setFood(res.data.results);
  };

  useEffect(() => {
    renderExercise();
    renderFood();
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} />}
        ></Route>

        <Route
          exact
          path="/exercise"
          component={(props) => <Exercise {...props} exercise={exercise} />}
        ></Route>
        <Route
          exact
          path="/food"
          component={(props) => <Food {...props} food={food} />}
        ></Route>
      </Switch>
    </div>
  );
};

export default App;
