import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";
import './App.css';
import { Content } from "./Components/Content";
import { Login } from './Components/Login/Login';


const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/" exact={true} component={() => <Content />} />
      <Route path="/login/" component={() => <Login />} />
    </div>
  );
}

export default App;
