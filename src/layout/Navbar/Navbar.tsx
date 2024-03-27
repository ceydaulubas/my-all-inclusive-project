import React from "react";
import { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="navbar-container">
      <div>
        <p>Overview</p>
        <p>Shopping List</p>
        <p>Tasks</p>
        <p>Recipes</p>
        <p>Meal Plan</p>
        <p>Calender</p>
        <p>Pill List</p>
        <p>Travel Plan</p>
      </div>
    </div>
  );
}

export default Navbar;
