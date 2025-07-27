import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null, // or use: typeof window !== 'undefined' ? localStorage.getItem("token") : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('khana-token', action.payload);
      }
    },
    clearToken: (state) => {
      state.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('khana-token');
      }
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
