import React, { Component } from "react";
import arrowLeft from "../Assets/arrowLeft.svg";
import arrowRight from "../Assets/arrowRight.svg";
import "../Assets/data.json";
import "../Styles/GallerySlider.css";

export class Gallery_Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPicture: 0 }; //state current currentPicture
    this.pictures = this.props.apartment.pictures;
    this.imagesLength = this.pictures.length;
  }
  // if the user is on the last image in the gallery and clicks on Next Image, it  displays the first image
  nextPicture = () => {
    //setState() is the only legitimate way to update state after the initial state setup
    //Here, we’re passing an object to setState(). The object contains the part of the state we want to update
    this.setState(
      this.state.currentPicture === this.pictures.length - 1
        ? { currentPicture: 0 }
        : { currentPicture: this.state.currentPicture + 1 }
    );
    // Logic explained if state curent currentPicture is ===  to how max images of every ap(this.pictures.length - 1),it
    //should go to first ap{currentPicture:0}
    // console.log(this.state);
    // console.log(this.pictures.length);
  };

  prevPicture = () => {
    //setState() is the only legitimate way to update state after the initial state setup
    //Here, we’re passing an object to setState(). The object contains the part of the state we want to update
    this.setState(
      this.state.currentPicture === 0
        ? { currentPicture: this.pictures.length - 1 }
        : { currentPicture: this.state.currentPicture - 1 }
    );
    console.log(this.state);
    console.log(this.pictures.length);
  };
  render() {
    return (
      <div className='gallery__slider'>
        <img
          src={arrowLeft}
          alt='arrowLeft'
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
          alt='arrowRight'
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

        {this.pictures.map((photos, index) => {
          return (
            <div
              className={
                //conditional (ternary) operator
                //condition ? exprIfTrue : exprIfFalse
                this.state.currentPicture === index
                  ? "activeState"
                  : "inactiveState"
              }
              //   Each child in a list should have a unique "key" prop.
              //   Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
              //   When you don’t have stable IDs for rendered items, you may use the item index as a key as a last resort

              key={index}
            >
              <img
                src={photos}
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
