import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../Books';
import categoriesReducer from '../components/Categories';

const store = configureStore({
  reducer: {
    booksSlice: booksReducer,
    categoriesSlice: categoriesReducer,
  },
});

export default store;
