import { createSlice } from "@reduxjs/toolkit";
import movieItems from "../../../data/movieItems";

export const genres = [
  "action",
  "adventure",
  "comedy",
  "crime",
  "biography",
  "drama",
  "history",
  "sport",
  "mystery",
  "thriller",
  "scifi",
] as const;

export type Genre = typeof genres[number] | "all";

export interface Movie {
  id: number;
  keyId: string;
  name: string;
  description: string;
  genres: string[];
  rate: number;
  length: number;
  img: string;
}

interface MovieState {
  movieItems: Movie[];
  isLoading: boolean;
  selectedGenre: Genre | null;
  searchQuery: string;
}

const initialState: MovieState = {
  movieItems: movieItems.map((movie) => ({
    ...movie,
    rate: Number(movie.rate),
    length: Number(movie.length),
  })),
  isLoading: false,
  selectedGenre: null,
  searchQuery: "",
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});
export const { setSelectedGenre, setSearchQuery } = movieSlice.actions;
export default movieSlice.reducer;
