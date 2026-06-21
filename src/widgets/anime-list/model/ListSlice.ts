import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const savedPage = localStorage.getItem('currentPage');
const parsedSavedPage = savedPage ? JSON.parse(savedPage) : 1;

interface CurrentPage {
  page: number;
}

const initialState: CurrentPage = {
  page: parsedSavedPage,
};

export const currentPageSlice = createSlice({
  name: 'currentPage',
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
      localStorage.setItem('currentPage', JSON.stringify(state.page));
    },

    prevPage: (state) => {
      if (state.page > 1) {
        state.page -= 1;
        localStorage.setItem('currentPage', JSON.stringify(state.page));
      }
    },

    firstPage: (state) => {
      localStorage.setItem('currentPage', JSON.stringify((state.page = 1)));
    },

    prevFive: (state, action: PayloadAction<number>) => {
      if (action.payload - 5 < 1) {
        localStorage.setItem('currentPage', JSON.stringify((state.page = 1)));
      } else {
        state.page = action.payload - 5;
      }
    },

    nextTen: (state, action: PayloadAction<number>) => {
      if (state.page === action.payload) {
        state.page = action.payload + 10;
        localStorage.setItem('currentPage', JSON.stringify(state.page));
      }
    },

    nextFive: (state, action: PayloadAction<number>) => {
      if (state.page === action.payload) {
        state.page = action.payload + 5;
        localStorage.setItem('currentPage', JSON.stringify(state.page));
      }
    },
  },
});

export const { nextPage, prevPage, firstPage, prevFive, nextFive, nextTen } =
  currentPageSlice.actions;
