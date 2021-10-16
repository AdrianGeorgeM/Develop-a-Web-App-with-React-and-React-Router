import "../Styles/Header.css";
import header_logo from "../Assets/header_logo.svg";
import { NavLink } from "react-router-dom";
import About from "../Pages/About";
import React, { Component } from "react"; // Destructuring assignment

class Header extends Component {
  render() {
    return (
      <header>
        <img src={header_logo} className='header__logo' alt='Logo' />
        <nav>
          <ul className='navbar__list'>
            <li className='navbar__list-item'>
              <NavLink
                //<NavLink> A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
                exact //exact: boolWhen true, the active class/style will only be applied if the location is matched exactly.
                //exact: It is used to match the exact value with the URL. For Eg., exact path=’/about’ will only render the component if it exactly matches the path but if we remove exact from the syntax, then UI will still be rendered even if the strucute is like /about/10.
                activeClassName='navbar__link--active'
                className='navbar__link'
                activeStyle={
                  {
                    //activeStyle: object The styles to apply to the element when it is active.
                    // fontWeight: "bold",
                    // color: "red",
                    // textDecoration: "underline",
                  }
                }
                to='/' //to: object A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
              >
                Home
              </NavLink>
            </li>
            <li className='navbar__list-item'>
              <NavLink
                //<NavLink> A special version of the <Link> that will add styling attributes to the rendered element when it matches the current URL.
                exact //exact: boolWhen true, the active class/style will only be applied if the location is matched exactly.
                activeClassName='navbar__link navbar__link--active'
                className='navbar__link'
                activeStyle={
                  {
                    //activeStyle: object The styles to apply to the element when it is active.
                    // textDecoration: "underline",
                  }
                }
                to='/about' //to: object A string representation of the Link location, created by concatenating the location’s pathname, search, and hash properties.
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
