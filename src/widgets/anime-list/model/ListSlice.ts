import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

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
  },
});

export const { nextPage, prevPage, firstPage } = currentPageSlice.actions;
