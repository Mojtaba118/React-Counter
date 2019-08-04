import React from "react";
import logo from "./logo.svg";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container-fluid">
      <Counters />
    </div>
  );
}

export default App;
