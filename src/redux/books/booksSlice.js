import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'blo2c7dGSCASUaEsRn44';

const initialState = {
  bookItems: [],
  loading: true,
  error: undefined,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books`);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const deleteBook = async (bookId) => {
  try {
    
    const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_KEY}/books/${bookId}`);
    console.log(response.status);
    if (response.status === 201) {
      console.log('Libro eliminado con éxito');
    } else {
      console.log('Error al eliminar el libro');
    }
  } catch (error) {
    console.log('Error al eliminar el libro - API:', error);
  }
};

const postBook = async (book) => {
  try {
    const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/blo2c7dGSCASUaEsRn44/books`, book);
    if (response.status === 201) {
      
      
    } else {
      console.log('pasa algo');
    }
  } catch (error) {
    console.error('Error al agregar el libro en la API', error);

  }
}


const booksSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const book = action.payload
      postBook(book)
      state.bookItems.push(book)
    },
    removeBook: (state, action) => {
      const bookId = action.payload;
      deleteBook(bookId); 
      state.bookItems = state.bookItems.filter((item) => item.item_id !== bookId);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        // state.loading = false;
        // const item_id = [Object.keys(action.payload)][0]
        // const final = []
        // console.log('El item_id es: ',item_id);
        // item_id.forEach((element) => {
          
        //   action.payload[element][0].item_id = element
        //   state.bookItems.push(action.payload[element][0])
        //   // console.log(action.payload[element][0]);
        // })
        // console.log('Array modificado', final);
        // console.log('Lo que trae la api: ', action.payload[1]);
        
        // console.log('Lo que traduce el inital state: ', state.bookItems);

        // Actualizar bookItems con los datos de la API
        const dataFromAPI = action.payload;
        const updatedBookItems = Object.keys(dataFromAPI).map((item_id) => ({
          item_id,
          ...dataFromAPI[item_id][0],
        }));
        state.bookItems = updatedBookItems;
        console.log('UpdatedBookItems: ',updatedBookItems);
        console.log('state: ',state.bookItems);
        state.loading = false;


      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBook, (state, action) => {
        const book = action.payload;
        state.bookItems = [...state.bookItems, book];
      })
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
