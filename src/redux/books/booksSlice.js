import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'blo2c7dGSCASUaEsRn44';

const initialState = {
  bookItems: [],
  loading: true,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`);
  return response.data;
});

const deleteBook = async (bookId) => {
  try {
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books/${bookId}`);
    return response.status;
  } catch (error) {
    return null;
  }
};

const postBook = async (book) => {
  try {
    const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/blo2c7dGSCASUaEsRn44/books', book);
    return response.status;
  } catch (error) {
    return null;
  }
};

const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload;
      postBook(book);
      state.bookItems.push(book);
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      deleteBook(bookId);
      state.bookItems = state.bookItems.filter((item) => item.itemId !== bookId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const dataFromAPI = action.payload;
        const updatedBookItems = Object.keys(dataFromAPI).map((itemId) => ({
          itemId,
          ...dataFromAPI[itemId][0],
        }));
        state.bookItems = updatedBookItems;
        state.loading = false;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
