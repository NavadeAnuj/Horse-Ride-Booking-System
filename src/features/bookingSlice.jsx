import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  selectedHorse: '',
  bookingDetails: null,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },
    selectHorse: (state, action) => {
      state.selectedHorse = action.payload;
    },
    setBookingDetails: (state, action) => {
      state.bookingDetails = action.payload;
    },
    resetBooking: (state) => {
      state.step = 0;
      state.selectedHorse = '';
      state.bookingDetails = null;
    },
  },
});

export const { setStep, selectHorse, setBookingDetails, resetBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
