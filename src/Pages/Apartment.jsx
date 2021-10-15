import React, { Component } from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Gallery from "./Gallery";
import Home from "./Home";
import data from "../Assets/data.json";
import Gallery_Slider from "./Gallery_Slider";

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
    this.apartment = data.find((entry) => entry.id === this.idParam);
    // if (!data.some((app) => app.id === this.idParam))
    //   return <Redirect to='/404' />;
  }
  render() {
    return (
      <div className='apartment'>
        <h1>{this.apartment.host.name}</h1>
        <img src={this.apartment.pictures[0]} alt='' />
      </div>
    );
  }
}

export default Apartment;
