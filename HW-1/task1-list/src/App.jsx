import "./App.css";
import React from "react";
import ItemList from "./components/items/ItemList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
