import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../components/BookSlice';
import categoriesReducer from '../components/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
