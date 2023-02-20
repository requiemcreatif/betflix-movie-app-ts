import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../redux/features/movie/movieSlice";
import "../../styles/searchInput/searchInput.css";

const SearchInput: React.FC = () => {
  const { searchQuery } = useSelector((state: { movie: { searchQuery: string } }) => state.movie);
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(event.target.value.toLowerCase()));
  };

  console.log(searchQuery);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search movies by title"
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchInput;
