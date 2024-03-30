import { createSlice } from '@reduxjs/toolkit'

export interface NavbarPopupState {
    isOpen: boolean;
  }

  const initialState: NavbarPopupState = {
    isOpen: false,
  };

  export const navbarPopupSlice = createSlice({
    name: 'navbarPopup',
    initialState,
    reducers: {
      openPopup: (state) => {
        state.isOpen = true;
      },
      closePopup: (state) => {
        state.isOpen = false;
      },
      togglePopup: (state) => {
        state.isOpen = !state.isOpen;
      },
    },
  });

// Action creators are generated for each case reducer function
export const { openPopup, closePopup, togglePopup } = navbarPopupSlice.actions;

export default navbarPopupSlice.reducer;
