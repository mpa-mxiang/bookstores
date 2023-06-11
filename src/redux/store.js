import { configureStore } from '@reduxjs/toolkit';
import booksReducer, { fetchBooksAsync, addBookAsync, removeBookAsync } from '../components/BookSlice';
import categoriesReducer from '../components/CategoriesSlice';

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
