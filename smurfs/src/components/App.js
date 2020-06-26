import React, { Component } from "react";
import { Provider } from "react-redux";
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf";
import store from "../store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
      <AddSmurf />
      <Smurfs />
    </Provider>
  );
};

export default App;
