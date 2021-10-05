import React, { Component } from "react";
import home_banner from "../Assets/home_banner.png";
import "../Styles/Banner.css";

export class Banner extends Component {
  render() {
    return (
      <div className='banner__container'>
        <div className='banner__background'></div>
        <img src={home_banner} alt='logo' className='banner__image' />
        <h1 className='banner__text'>Home anywhere and everywhere</h1>
      </div>
    );
  }
}

export default Banner;
