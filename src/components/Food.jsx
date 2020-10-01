import React from "react";
import "../App.css";

const Food = (props) => {
  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Food List</h1>
      {props.food.map((foodList) => {
        return (
          <ul>
            <li style={{ fontWeight: "bold" }}>
              <h2>{foodList.name}</h2>
            </li>
            <li>
              <h3>Calories:</h3> {foodList.energy}
            </li>
            <li>
              <h3>Protein:</h3> {foodList.protein}
            </li>
            <li>
              <h3>Carbs:</h3> {foodList.carbohydrates}
            </li>
            <li>
              <h3>Fats:</h3> {foodList.fat}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Food;
