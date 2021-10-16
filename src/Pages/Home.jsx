import React, { Component } from "react";
import Banner from "../Components/Banner";
// import Header from "../Components/Header";
import Gallery from "../Pages/Gallery";
import "../Styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <main className='home'>
        <Banner />
        <Gallery />
      </main>
    );
  }
}

export default Home;
