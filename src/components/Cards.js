import React from "react";
import "./Cards.css";
import iphoneXR from "./image/iphoneXR.jpg";

class Cards extends React.Component {
  render() {
    return (
      <div className="card">
        <img src={iphoneXR} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title">Apple iPhone XR</h6>
          <p className="card-text">
            <b>₹49,900</b>
          </p>
        </div>
      </div>
    );
  }
}
export default Cards;
