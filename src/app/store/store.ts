import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '@/entities/user/model/userSlice';
import { currentPageSlice } from '@/widgets/anime-list/model/ListSlice';
import { filtersSlice } from '@/features/anime-filters/model/filtersSlice';
export const store = configureStore({
  reducer: {
    auth: userSlice.reducer,
    currentPage: currentPageSlice.reducer,
    filters: filtersSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
