import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3YIvtw3oQhaqOyj4vKanlf8LLaa1p0hAdA&usqp=CAU"
            alt="store"
            width="55"
            height="50"
            className="navbar-brand"
          />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button>
            <i className="fas fa-cart-plus" />
            my cart
          </button>
        </Link>
      </div>
    );
  }
}
export default Navbar;
