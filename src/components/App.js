import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  let [para,setPara] = useState(false);
  
  function display(){
    setPara(true);
  }

  return (
    <div id="main">
      <button id="click" onClick={display}>Click Me</button>
      {
        para && (
        <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      )}
      
    </div>
  );
}


export default App;
