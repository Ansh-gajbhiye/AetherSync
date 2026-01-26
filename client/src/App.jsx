import React from "react";
import "./index.css";
import Login from "./LoginPage/Signup";
import Signup from "./LoginPage/login";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
       <Route path="/" component={Login} exact />
        <Route path="/signup" component={Signup} />
        <Route component={Error} /> 
      </Routes>
        
      
    </div>
  );
}

export default App;
