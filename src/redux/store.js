import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './redux/booksSlice';
import categoriesReducer from './redux/categoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;