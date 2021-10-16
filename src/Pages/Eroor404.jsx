import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Eroor404 extends Component {
  render() {
    return (
      <div className='error-main'>
        <p className='error__title'>404</p>
        <p className='error-tagline'>
          Oops! It looks like this page doesn't exist.
        </p>
        <Link to='/' className='error__link'>
          Go back to home page
        </Link>
      </div>
    );
  }
}

export default Eroor404;
