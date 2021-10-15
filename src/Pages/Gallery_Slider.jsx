import React, { Component } from "react";
import arrowLeft from "../Assets/arrow-left.svg";
import arrowRight from "../Assets/arrow-right.svg";
import data from "../Assets/data.json";
import GallerySlider from "../Styles/GallerySlider.css";

export class Gallery_Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { current: 0 };
    this.picture = this.props.apartment.pictures;
    this.imagesLength = this.picture.length;
  }
  // if the user is on the last image in the gallery and clicks on Next Image, it  displays the first image
  nextPicture = () => {
    this.setState(
      this.state.current === this.picture.length - 1
        ? { current: 0 }
        : { current: this.state.current + 1 }
    );
    // Logic explained if state curent is ===  to how max images of every ap(this.picture.length - 1),it
    //should go to first ap{current:0}
    // console.log(this.state);
    // console.log(this.picture.length);
  };

  prevPicture = () => {
    this.setState(
      this.state.current === 0
        ? { current: this.picture.length - 1 }
        : { current: this.state.current - 1 }
    );
    console.log(this.state);
    console.log(this.picture.length);
  };
  render() {
    return (
      <div className='gallery__slider'>
        <img
          src={arrowLeft}
          alt='arrow-left'
          //If there is only one image, the Next and Previous buttons do not appear
          //   "id": "cb02d69b",
          // "title": "Beautiful Rivoli Apartment"
          //   if the Images Length is === 1 image then no arrows(inactiveState)
          className={
            //conditional (ternary) operator
            //condition ? exprIfTrue : exprIfFalse
            this.imagesLength === 1 ? "inactiveState" : "arrow-left"
          }
          onClick={this.prevPicture}
        ></img>
        <img
          src={arrowRight}
          alt='arrow-right'
          // If there is only one image, the Next and Previous buttons do not appear
          //   "id": "cb02d69b",
          // "title": "Beautiful Rivoli Apartment"
          //   if the Images Length is === 1 image then no arrows(inactiveState)
          className={
            //conditional (ternary) operator
            //condition ? exprIfTrue : exprIfFalse
            this.imagesLength === 1 ? "inactiveState" : "arrow-right"
          }
          onClick={this.nextPicture}
        ></img>

        {this.picture.map((images, index) => {
          return (
            <div
              className={
                //conditional (ternary) operator
                //condition ? exprIfTrue : exprIfFalse
                this.state.current === index ? "activeState" : "inactiveState"
              }
              //   Each child in a list should have a unique "key" prop.
              //   Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
              //   When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort

              key={index}
            >
              <img
                src={images}
                alt='Apartment Photo'
                className='gallery__image'
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Gallery_Slider;
