// import { useEffect, useState } from "react";

function MovieFilter({ filter, setFilter }) {
  return (
    <div className="movieCategories">
      <ul>
        <li className="filter-popular">
          <button className="filterBtn" onClick={() => setFilter("popular")}>Popular</button>
        </li>
        <li className="filter-top-rated">
          <button className="filterBtn" onClick={() => setFilter("top_rated")}>Top-Rated</button>
        </li>
        <li className="filter-now-playing">
          <button className="filterBtn" onClick={() => setFilter("now_playing")}>Now Playing</button>
        </li>
        <li className="filter-upcoming">
          <button className="filterBtn" onClick={() => setFilter("upcoming")}>UpComing</button>
        </li>
      </ul>
    </div>
  );
}

export default MovieFilter;