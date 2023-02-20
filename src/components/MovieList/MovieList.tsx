import React from "react";
import { connect } from "react-redux";
import OneMovie from "../OneMovie/OneMovie";
import "../../styles/movieList/movieList.css";
import GenreFilter from "../MovieFilter/GenreFilter";
import SearchInput from "../SearchInput/SearInput";
import { Movie } from "../../redux/features/movie/movieSlice";
import { RootState } from "../../redux/store";

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
      <main>
        <div className="intro-text">
          <p>
            Welcome to our exciting new movie collection application! We are thrilled to provide you
            with a unique and user-friendly experience that will take your movie-watching to the
            next level. We hope you enjoy our app and find it useful in your movie-watching
            endeavors.
          </p>
        </div>
        <div className="top-content">
          <SearchInput />
          <GenreFilter />
        </div>

        <section className="card-container">
          {filteredMovies.map((movie) => (
            <OneMovie {...movie} key={movie.keyId} />
          ))}
        </section>
      </main>
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
