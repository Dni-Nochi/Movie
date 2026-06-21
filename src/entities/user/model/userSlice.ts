import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const saved = localStorage.getItem('auth');
const parsed = saved ? JSON.parse(saved) : null;

interface UserInfoState {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const initialState: UserInfoState = {
  userName: parsed?.userName ?? '',
  userEmail: parsed?.userEmail ?? '',
  userPassword: '',
};

export const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<UserInfoState>) => {
      state.userName = action.payload.userName;
      state.userEmail = action.payload.userEmail;
      state.userPassword = action.payload.userPassword;
      localStorage.setItem(
        'auth',
        JSON.stringify({
          userName: action.payload.userName,
          userEmail: action.payload.userEmail,
        }),
      );
    },
  },
});

export const { login } = userSlice.actions;
