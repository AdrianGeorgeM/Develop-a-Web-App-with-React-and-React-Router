import React, { Component } from "react";
// import ReactDOM from "react-dom";

// import { Redirect } from "react-router-dom";
// import Gallery from "./Gallery";
// import Home from "./Home";
import data from "../Assets/data.json";
import Gallery_Slider from "./Gallery_Slider";
// import Gallery_Info from "./Gallery_Info";
// import PropTypes from "prop-types";
import "../Styles/Apartment_Info.css";
import "../Styles/Tags.css";
import star_blank from "../Assets/star_blank.svg";
import star_filled from "../Assets/star_filled.svg";
import Dropdown from "../Components/Dropdown";

// Rendering a <Redirect> will navigate to a new location.
// The new location will override the current location in the history stack, like server-side redirects

export class Apartment extends Component {
  // create constructor i.e constructor(props) {} and inside it declare the id as avariable to the class. Pass the value of match.params.id to the id by using id: this.props.match.params.id.
  //  so i can access the variable anywhere in my code

  // Solution 2
  // useParams returns an object of key/value pairs of URL parameters. Use it to access match.params of the current <Route>.
  // const params = useParams();
  // useParams hook from react-router-dom for this instead
  //   const { id } = useParams();
  //   It means whatever you set up in useParams(ex: title), your params have to match with the <Route path='/path/:title'> .
  constructor(props) {
    super(props);
    // this.id = this.props.match.params.id;
    // this.accommodation = data.find((entry) => entry.id === this.id);

    // this.id = this.props.match.params.id;
    // Those props contain the params under the  property, so we can use object destructuring to get back our id
    // const { id } = props.match.params;
    // const { id } = useParams();
    // this.apartments = data.find((ap) => ap.id === params.id);
    // this.apartments = data.find((ap) => ap.id === this.id);

    // const apartment = this.props.apartments.filter(
    //   (ap) => ap.id === this.props.match.params.id
    // );
    // const currentApartment = data.filter((ap) => ap.id === idParam)[0];
    // const getThisApartment = (id) =>
    //   housingList.find((housing) => housing.id === id);

    // renderElement = () => {
    //   if (!this.idParams === undefined) {
    //     <Redirect to='/404' />;
    //   }
    // };
    // const currentLocation = data.filter((elt) => elt.pictures === this.id)[0];

    // const idParam = this.props.match.params.id;
    // if (!data.some((elt) => elt.id === idParam)) return <Redirect to='/404' />;

    // const currentLocation = data.filter((elt) => elt.id === idParam)[0];
    // this.idParam = this.props.match.params.id;
    // this.apartment = this.props.data.filter(
    //   (ap) => ap.id === this.props.match.params.idParam
    // );

    this.idParam = this.props.match.params.id;
    this.apartment = data.find((datas) => datas.id === this.idParam);
    // if (!data.some((app) => app.id === this.idParam))
    //   return <Redirect to='/404' />;
  }
  render() {
    const range = Array.from(Array(5).keys());
    return (
      <div className='apartment'>
        <Gallery_Slider apartment={this.apartment} />

        <main>
          <div className='info'>
            <div className='info__header'>
              <h1 className='info__header--title'>{this.apartment.title}</h1>
              <p className='info__header--location'>
                {this.apartment.location}
              </p>
              <div className='intro__header--tags'>
                {this.apartment.tags.map((tag, index) => {
                  return (
                    <span className='tag' key={index}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>
            <div className='info__profile'>
              <div className='info__host'>
                <p className='info__host--name'>{this.apartment.host.name}</p>
                <div className='info__host--picture'>
                  <img src={this.apartment.host.picture} alt=''></img>
                </div>
              </div>
              <div className='info__rating'>
                {range.map((count, index) => {
                  return (
                    <img
                      src={
                        index < this.apartment.rating ? star_filled : star_blank
                      }
                      alt=''
                      className='star'
                      key={index}
                    ></img>
                  );
                })}
              </div>
            </div>
          </div>
          <div className='collapse'>
            {/* <Dropdown
              title='Description'
              title={this.apartment.title}
              page='accommodation'
            />
            <Dropdown
              title='Amenities'
              content={this.apartment.amenities}
              page='accommodation'
            /> */}
            <Dropdown
              title='Description'
              content={this.apartment.description}
            />
            <Dropdown title='Equipements' content={this.apartment.Amenities} />
          </div>
        </main>
      </div>
    );
  }
}

export default Apartment;
