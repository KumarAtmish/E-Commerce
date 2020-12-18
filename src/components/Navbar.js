import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends React.Component {
  render() {
    return (
      <NavWarapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
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
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWarapper>
    );
  }
}

const NavWarapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainBlue) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;

export default Navbar;
