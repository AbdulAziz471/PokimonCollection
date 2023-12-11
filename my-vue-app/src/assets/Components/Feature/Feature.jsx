import React from "react";
import { Link } from "react-router-dom";

export default function Feature({ favorites }) {
  return (
    <div>
      {favorites.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <Link to={`/CardDetail/${item.id}`}>
            <img src={item?.images?.small} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}
