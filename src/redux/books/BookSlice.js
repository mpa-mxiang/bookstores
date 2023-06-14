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
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.splice(0, state.length, ...action.payload);
        state.loading = false;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.splice(0, state.length, ...action.payload);
        } else {
          state.error = action.error.message;
        }
      })
      .addCase(addBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.push(action.payload);
        state.loading = false;
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        const bookIndex = state.findIndex((book) => book.item_id === action.payload);
        if (bookIndex !== -1) {
          state.splice(bookIndex, 1);
        }
        state.loading = false;
      })
      .addCase(removeBookAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;

export default booksSlice.reducer;
