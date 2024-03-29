import MovieCard from "./MovieCard";
import "../sass/_moviesContainer.scss";

function MoviesContainer({ title, moviesData }) {
  return (
      <section className="movies-container">
        <h2>{title}</h2>
        <div className="movie-cards">
          {moviesData.length > 0 &&
            moviesData.map((movieData) => {
              return <MovieCard key={movieData.id} movieData={movieData} />;
            })}
        </div>
      </section>
  );
}

export default MoviesContainer;
