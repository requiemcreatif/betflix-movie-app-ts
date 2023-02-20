import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../../styles/movieDetail/movieDetails.css";
import { RootState } from "../../redux/store";
import { Movie } from "../../redux/features/movie/movieSlice";
import BackBtn from "../backButton/BackBtn";
import Navbar from "../Navbar/Navbar";
import MovieNotFound from "../MovieNotfound/MovieNotFound";
interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const MovieDetail: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const movie = useSelector<RootState, Movie | undefined>((store) =>
    store.movie.movieItems.find((item) => item.id === parseInt(id || ""))
  );

  if (!movie) {
    return (
      <div>
        <MovieNotFound />
      </div>
    );
  }

  const { name, description, genres, rate, length, img } = movie;
  // create a button for each genre
  const genreButtons = genres.map((genre) => <button key={genre}>{genre}</button>);

  return (
    <div>
      <Navbar />
      <motion.section className="wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <BackBtn />
        <div className="movie-content">
          <div className="image-wrapper">
            <img src={img} alt={name} />
          </div>
          <div className="movie-footer-content">
            <h1>{name}</h1>
            <div className="rate">
              <p>Rate: {rate}/10</p>
              <p>Length: {length} </p>
            </div>
            <p className="movie-description">{description}</p>
            <div className="genre-buttons">{genreButtons}</div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MovieDetail;
