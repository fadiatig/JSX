import './App.css';
import React from "react";
import Myphoto from "./Component/profile/ProfilePhoto";
import Myname from "./Component/profile/FullName";
import Myadresse from './Component/profile/Address';
function App() {
  return (
  
    <div className="App">
      <Myname />
      <Myadresse />
      <Myphoto />
      
    </div>
  )
}

export default App;
