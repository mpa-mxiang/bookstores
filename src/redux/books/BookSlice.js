import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from '../../API/Api';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const books = await fetchBooks();
  return books;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const newBook = await addBook(book);
  return newBook;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await removeBook(bookId);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookIndex = state.filter((book) => book.id !== action.payload);
      if (bookIndex !== -1) {
        state.splice(bookIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = action.payload;
    });
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
