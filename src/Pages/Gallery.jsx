import React, { Component } from "react";
import Thumbnail from "../Components/Thumbnail";
import data from "../Assets/data.json";

import "../Styles/Gallery.css";

export class Gallery extends Component {
  render() {
    return (
      <main>
        <ul className='gallery__main'>
          {data.map((datas) => (
            <Thumbnail title={datas.title} cover={datas.cover} />
          ))}
        </ul>
      </main>
    );
  }
}

export default Gallery;
