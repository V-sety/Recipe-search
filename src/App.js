/* eslint-disable import/first */
import React, { Component } from "react";
import dotenv, { config } from "dotenv";
require("dotenv").config();
import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
