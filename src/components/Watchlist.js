import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Я хочу посмотреть</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Фильм" : "Фильмов"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
            {watchlist.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">Тут пока нет фильмов, добавьте их!</h2>
        )}
      </div>
    </div>
  );
};
