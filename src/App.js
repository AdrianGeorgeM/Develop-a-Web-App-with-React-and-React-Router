import heroHome from "./Assets/header_logo.svg";
import React from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router } from "react-router-dom";
//A <BrowserRouter> uses regular URL paths. These are generally the best-looking URLs
import "./Styles/App.css";

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
