import React, { Component } from "react";
import arrowRight from "../Assets/arrowRight.svg";
import "../Styles/Dropdowns.css";
// import PropTypes from "prop-types";

export class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.title = this.props.title;
    this.page = this.props.page; //content
  }
  toggleList = () => {
    this.setState(this.state.open === false ? { open: true } : { open: false });
  };

  render() {
    return (
      <div className='dropdown__item'>
        {/* <h3 onClick={() => this.toggleList()}>
          {console.log(this.title)}
          <span
            className={
              this.state.open ? "fas fa-chevron-up" : "fas fa-chevron-down"
            }
          ></span>
        </h3> */}

        <div
          className={`dropdown__item--title ${this.page}`}
          onClick={this.toggleList}
        >
          <p>{this.title}</p>
          <img
            src={arrowRight}
            alt=''
            className={
              this.state.open === false
                ? "dropdown__item--arrow-up"
                : "dropdown__item--arrow-down"
            }
          ></img>
        </div>

        {Array.isArray(this.page) ? (
          <ul
            className={`dropdown-list ${
              this.state.open ? "drop-open" : "drop-close"
            }`}
          >
            {this.page.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p
            className={`dropdown-list ${
              this.state.open ? "drop-open" : "drop-close"
            }`}
          >
            {this.props.content}
          </p>
        )}
      </div>
    );
  }
}

export default Dropdown;
