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
      <div className=" shadow-2xl rounded-3xl  transition ease-in delay-150 w-full dark:bg-slate-600 dark:shadow-2xl dark:shadow-slate-500 dark:hover:shadow-none hover:shadow-none animate-fadeInUp  ">
        <div className="container p-4">
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
