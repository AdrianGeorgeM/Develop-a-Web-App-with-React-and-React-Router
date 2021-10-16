import heroHome from "./Assets/header_logo.svg";
import ReactDOM from "react-dom";
import React from "react";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import Home from "./Pages/Home";
import About from "./Pages/About";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
//A <BrowserRouter> uses regular URL paths. These are generally the best-looking URLs
import "./Styles/App.css";
import Apartment from "./Pages/Apartment";
import Gallery from "./Pages/Gallery";
import Thumbnail from "./Components/Thumbnail";

function App() {
  return (
    <div className='container'>
      <Router>
        <Header />

        {/* Switch as soon as it goes to one route and it matches the url it gonna stop and only render that compoment*/}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/apartment/:id' component={Apartment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
{
  /* <Router>
  <Header />
  <Home />
</Router>; */
}
