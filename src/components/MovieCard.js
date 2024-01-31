import FavouriteButton from "./FavouriteButton";
import { IMAGE_URL_BASE } from "../utilities/api";
import { useNavigate } from "react-router-dom";
import { formatReleaseDate } from "../utilities/toolbelt";
import { GlobalProvider } from "../context/GlobalContext";
import "../sass/_home.scss";

const defaultMovieData = {
  adult: false,
  backdrop_path: "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
  genre_ids: [878, 12, 28],
  id: 609681,
  original_language: "en",
  original_title: "The Marvels",
  overview:
    "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
  popularity: 2186.428,
  poster_path: "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
  release_date: "2023-11-08",
  title: "The Marvels",
  video: false,
  vote_average: 6.342,
  vote_count: 1067,
};

// the structure of the response results (array of objects):

// const defaultMovieData = {
//   adult: boolean, // false,
//   backdrop_path: string,// "/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg",
//   genre_ids: 'array of integers', // [878, 12, 28],
//   id: integer, // 609681,
//   original_language: string, // "en",
//   original_title: string, // "The Marvels",
//   overview: string, // "Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe. When her duties send her to an anomalous wormhole linked to a Kree revolutionary, her powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol’s estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
//   popularity: Number, // 2186.428,
//   poster_path: string, // "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
//   release_date: string, //  "2023-11-08",
//   title: string, // "The Marvels",
//   video: boolean, //  false,
//   vote_average: Number, // 6.342,
//   vote_count: integer, // 1067,
// };

function truncateText(text, maxLength) {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  } else {
    return text;
  }
}

function MovieCard({ movieData = defaultMovieData }) {
  const imagePath = `${IMAGE_URL_BASE}/w500${movieData.poster_path}`;
  console.log(imagePath);
  console.log(movieData);
  const navigate = useNavigate();

  return (
    <GlobalProvider>
      <article className="movie-card">
        <img
          src={imagePath}
          alt={movieData.title}
          className="movie-card-image"
        />
        <div className="movie-hidden-info">
          <div>
            <p className="vote-average">{(movieData.vote_average * 10).toFixed()}%</p>
            <FavouriteButton movieData={movieData} />
          </div>
          <p>{truncateText(movieData.overview, 150)}</p>
          <button onClick={() => {
            navigate(`/movie/${movieData.id}`);
          }}>More Info</button>
        </div>
        <div className="title-and-release">
          <p className="release-date">
            {formatReleaseDate(movieData.release_date)}
          </p>
          <h3 className="title">{truncateText(movieData.title, 20)}</h3>
        </div>
      </article>
    </GlobalProvider>
  );
}

export default MovieCard;
