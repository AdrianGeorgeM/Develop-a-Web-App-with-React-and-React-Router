import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Thumbnail.css";

export class Thumbnail extends Component {
  constructor(props) {
    //   Props stands for “properties,” and they are used in a React application to send data from one React component to another React component.
    super(props);
    this.id = this.props.id;
    this.cover = this.props.cover;
    this.title = this.props.title;
  }
  render() {
    //   destructuring props
    // const { title, cover, id,type } = this.props;
    return (
      <li className='thumb__apartment'>
        <Link className='thumb__link'>
          <div className='thumb__container'>
            <img src={this.cover} alt='' className='thumb__image' />
            <div className='thumb__background'></div>
            <h2 className='thumb__title'>{this.title}</h2>
          </div>
        </Link>
      </li>
    );
  }
}

export default Thumbnail;
