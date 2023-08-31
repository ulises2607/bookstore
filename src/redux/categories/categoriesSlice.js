import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    fetchCategories: (state) => state,
  },
});

export const { fetchCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
