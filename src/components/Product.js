import React from "react";
import Carousel from "./Carousel";
import Cards from "./Cards.js";

class Product extends React.Component {
  render() {
    return (
      <div>
        <Carousel />
        <div className="row">
          <div className="col-4">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
