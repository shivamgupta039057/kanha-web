import { TOKEN_NAME } from '@/utils/APIConstant';
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
        localStorage.setItem(TOKEN_NAME, action.payload);
        document.cookie = `${TOKEN_NAME}=${action.payload}; path=/;`;
      }
    },
    clearToken: (state) => {
      state.token = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem(TOKEN_NAME);
        document.cookie = `${TOKEN_NAME}=${action.payload}; path=/;`;
      }
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
