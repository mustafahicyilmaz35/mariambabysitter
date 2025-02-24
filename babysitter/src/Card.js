import React from "react";
import "./Card.css";

function Card({ name, location, image, reviews }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-location">{location}</p>
        <p className="card-reviews">{reviews} Reviews</p>
      </div>
    </div>
  );
}

export default Card;
