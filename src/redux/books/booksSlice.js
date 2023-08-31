import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const initialState = {
  bookItems,
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      state.bookItems.push(book);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== bookId);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
