import "./App.css";
import React from "react";
import ItemList from "./components/items/ItemList";

function App() {
  //log 1 : app genereal
  console.log("render app");

  return (
    <div className="App">
      <div className="container">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
