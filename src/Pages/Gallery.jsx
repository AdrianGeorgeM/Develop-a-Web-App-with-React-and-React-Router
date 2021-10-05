import React, { Component } from "react";
import data from "../Assets/data.json";

import "../Styles/Gallery.css";

export class Gallery extends Component {
  render() {
    const listItems = data.map((elt) => (
      <li key={elt.id} className='card'>
        <div className='card__wrap'>
          <div className='banner_background'></div>
          <img src={elt.cover} className='card_image' alt='' />
          <h2 className='card__title'>{elt.title}</h2>
        </div>
      </li>
    ));
    return <div className='gallery'>{listItems}</div>;
  }
}

export default Gallery;
