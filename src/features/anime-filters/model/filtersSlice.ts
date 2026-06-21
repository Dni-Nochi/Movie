import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const savedScore = localStorage.getItem('minScore');
const parsedSavedScore = savedScore ? JSON.parse(savedScore) : null;

const savedGenre = localStorage.getItem('genre');
const parsedSavedGenre = savedGenre ? JSON.parse(savedGenre) : null;

const savedYear = localStorage.getItem('year');
const parsedSavedYear = savedYear ? JSON.parse(savedYear) : null;

interface FiltersState {
  minScore: number | null;
  genre: number | null;
  year: number | null;
}

const initialState: FiltersState = {
  minScore: parsedSavedScore,
  genre: parsedSavedGenre,
  year: parsedSavedYear,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setMinScore: (state, action: PayloadAction<number | null>) => {
      state.minScore = action.payload;
      localStorage.setItem('minScore', JSON.stringify(state.minScore));
    },
    setGenre: (state, action: PayloadAction<number | null>) => {
      state.genre = action.payload;
      localStorage.setItem('genre', JSON.stringify(state.genre));
    },

    setYear: (state, action: PayloadAction<number | null>) => {
      state.year = action.payload;
      localStorage.setItem('year', JSON.stringify(state.year));
    },

    resetFilters: () => initialState,
  },
});

export const { setMinScore, setGenre, setYear, resetFilters } =
  filtersSlice.actions;
