import React from "react";
import { connect } from "react-redux";
import OneMovie from "../OneMovie/OneMovie";
import "../../styles/movieList/movieList.css";
import GenreFilter from "../MovieFilter/GenreFilter";
import SearchInput from "../SearchInput/SearInput";
import { Movie } from "../../redux/features/movie/movieSlice";
import { RootState } from "../../redux/store";
import { motion } from "framer-motion";

interface MovieListProps {
  movieItems: Movie[];
  selectedGenre: string | null;
  searchQuery: string;
}

class MovieList extends React.Component<MovieListProps> {
  render() {
    const { movieItems, selectedGenre, searchQuery } = this.props;

    const filteredMovies = movieItems.filter(
      (movie) =>
        (selectedGenre === null || selectedGenre === "all"
          ? true
          : movie.genres.includes(selectedGenre)) &&
        (searchQuery ? movie.name.toLowerCase().includes(searchQuery) : true)
    );

    return (
      <motion.main
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}>
        <div className="intro-text"></div>
        <div className="top-content">
          <SearchInput />
          <GenreFilter />
        </div>

        <section className="card-container">
          {filteredMovies.map((movie) => (
            <OneMovie {...movie} key={movie.keyId} />
          ))}
        </section>
      </motion.main>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    movieItems: state.movie.movieItems,
    selectedGenre: state.movie.selectedGenre,
    searchQuery: state.movie.searchQuery,
  };
};

export default connect(mapStateToProps)(MovieList);
