import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  booking: null,
};

const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
    openLoginModal: (state, action) => {
      console.log("dsfdkjhdkfdlkstatestatestate" , state);
      
      state.isOpen = true;
      state.booking = action.payload?.booking || null;
    },
    closeLoginModal: (state) => {
      state.isOpen = false;
      state.booking = null;
    },
  },
});

export const { openLoginModal, closeLoginModal } = loginModalSlice.actions;
export default loginModalSlice.reducer; 