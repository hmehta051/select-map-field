import React from "react";
import "./App.css";
import MappingTable from "./component/MappingTable";

function App() {
  return (
    <div className="App">
      <center>
        <h1>Assignment</h1>
        {/* <h1>CallHub Assignment</h1> */}
      </center>
      <div className="mapTable">
        <MappingTable />
      </div>
    </div>
  );
}

export default App;
