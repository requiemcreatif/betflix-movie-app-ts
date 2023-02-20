import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGenre, genres, Genre } from "../../redux/features/movie/movieSlice";
import "../../styles/genreFilter/genreFilter.css";

const GenreFilter: React.FC = () => {
  const { selectedGenre } = useSelector(
    (store: { movie: { selectedGenre: Genre | null } }) => store.movie
  );
  const dispatch = useDispatch();

  const handleGenreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGenre = event.target.value as Genre;
    dispatch(setSelectedGenre(selectedGenre === "all" ? "all" : selectedGenre));
  };

  return (
    <div className="genre-filters">
      {/* <h2>Filter by Genre:</h2> */}
      <select value={selectedGenre || "all"} onChange={handleGenreSelect}>
        <option value="all">All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GenreFilter;
