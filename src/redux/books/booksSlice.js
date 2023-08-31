import { createSlice } from '@reduxjs/toolkit';
import bookItems from '../../bookItems';

const initialState = {
  bookItems,
};

const booksSlice = createSlice({
  name: 'book', // Corregido aquí
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload; // Corregido aquí
      state.bookItems.push(book); // Corregido aquí
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookItems = state.bookItems.filter((item) => item.id !== bookId);
      console.log('Eliminado con slice');
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions; // Corregido aquí

export default booksSlice.reducer;
