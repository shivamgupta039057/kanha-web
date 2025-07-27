import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import loginModalReducer from './features/loginModalSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loginModal: loginModalReducer,
  },
});
