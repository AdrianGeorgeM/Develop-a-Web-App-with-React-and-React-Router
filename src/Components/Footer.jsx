import React, { Component } from "react";
import footer_logo from "../Assets/footer_logo.svg";
import FooterPage from "../Styles/FooterPage.css";

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <img src={footer_logo} alt='' className='footer__logo'></img>
        <p className='footer__text'>© 2020 Kasa. All rights reserved. </p>
      </div>
    );
  }
}

export default Footer;
