import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useData } from "../../../DataContext";
import "./Article.css";
import Heartbutton from "../HeartButton/HeartButton";

export default function Article({ data }) {
  const { favorites, addFavorite, removeFavorite } = useData();

  const isFavorited = favorites.some((item) => item.id === data.id);

  const togglefav = () => {
    if (isFavorited) {
      removeFavorite(data.id);
      alert(`Remove  in Favourite ${data.id}`);
    } else {
      addFavorite(data);
      alert(`add in Favourite ${data.id}`);
    }
  };
  return (
    <>
      <div className="card ">
        <div className="container">
          <Link to={`/CardDetail/${data.id}`}>
            <img src={data?.images?.small} alt="Avatar" />
          </Link>
          <h2>{data.name}</h2>
          <Heartbutton onClick={togglefav} isfav={isFavorited} />
        </div>
      </div>
    </>
  );
}
