import React from "react";
import Product from "./Product";
import Title from "./Title";

class ProductList extends React.Component {
  state = {
    products: []
  };
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <Product />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ProductList;
