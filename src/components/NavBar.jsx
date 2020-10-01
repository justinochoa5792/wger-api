import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdbreact";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <MDBIcon icon="home" size="4x" />
      </Link>
      <h1>Lifestyle Helper</h1>
    </div>
  );
};

export default NavBar;
