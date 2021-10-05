import React, { Component } from "react";
import Banner from "../Components/Banner";
import "../Styles/Home.css";

export class Home extends Component {
  render() {
    return (
      <main className='home'>
        <Banner />
      </main>
    );
  }
}

export default Home;
