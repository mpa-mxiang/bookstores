import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchBooksAsync, addBookAsync, removeBookAsync } from './books/BookSlice';
import categoriesReducer from './categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

store.dispatch(fetchBooksAsync());

export default {
  store,
  fetchBooksAsync,
  addBookAsync,
  removeBookAsync,
};
