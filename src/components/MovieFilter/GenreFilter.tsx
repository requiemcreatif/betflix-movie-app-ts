import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedGenre, genres, Genre } from "../../redux/features/movie/movieSlice";
import "../../styles/genreFilter/genreFilter.css";
import { RootState } from "../../redux/store";

const GenreFilter: React.FC = () => {
  const { selectedGenre } = useSelector((store: RootState) => store.movie);
  const dispatch = useDispatch();

  const handleGenreSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setSelectedGenre(event.target.value as Genre));
  };

  return (
    <div className="genre-filters">
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
