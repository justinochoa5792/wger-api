import React from "react";
import "../App.css";
import { MDBBtn } from "mdbreact";

const Home = () => {
  return (
    <div className="home">
      <h1 style={{ fontWeight: "bold" }}>Lifestyle Helper</h1>
      <MDBBtn href="/exercise" color="primary">
        Go to Workouts
      </MDBBtn>
      <MDBBtn href="/food" color="primary" style={{ marginTop: "20px" }}>
        Go to Food List
      </MDBBtn>
    </div>
  );
};

export default Home;
