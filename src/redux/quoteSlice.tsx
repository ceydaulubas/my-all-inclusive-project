import { createSlice } from '@reduxjs/toolkit'

export interface quoteState {
  quote: null,
  error: null,
  }

  const initialState: quoteState = {
    quote: null,
    error: null,
  };

  export const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    reducers: {
      setQuote(state, action) {
        state.quote = action.payload;
        state.error = null;
      },
      setQuoteError(state, action) {
        state.error = action.payload;
      },
    }
  });

export const { setQuote, setQuoteError } = quoteSlice.actions;

export default quoteSlice.reducer;
