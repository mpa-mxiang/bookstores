import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBooks, addBook, removeBook } from '../../API/Api';

const initialState = {
  books: [],
  loading: false,
  error: '',
};

export const fetchBooksAsync = createAsyncThunk('books/fetchBooks', async () => {
  const books = await fetchBooks();
  return books;
});

export const addBookAsync = createAsyncThunk('books/addBook', async (book) => {
  const itemId = Math.random();
  const newBook = await addBook({ ...book, item_id: itemId });
  return newBook;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await removeBook(bookId);
  return bookId;
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBooksAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchBooksAsync.fulfilled, (state, action) => {
      state.loading = false;
      const anotherBook = action.payload;
      const booksId = Object.keys(anotherBook);
      const markBookId = booksId.map((bookId) => ({
        item_id: Number(bookId),
        title: anotherBook[bookId][0].title,
        author: anotherBook[bookId][0].author,
        category: anotherBook[bookId][0].category,
      }));
      state.books = markBookId;
    });
    builder.addCase(fetchBooksAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(addBookAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addBookAsync.fulfilled, (state, action) => {
      state.books.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addBookAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(removeBookAsync.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeBookAsync.fulfilled, (state, action) => {
      state.loading = false;
      const temp = state.books.filter((book) => book.item_id !== action.payload);
      state.books = temp;
    });
    builder.addCase(removeBookAsync.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export const { addBooks, removeBooks } = booksSlice.actions;
export const getBooks = (state) => state.books.books;
export default booksSlice.reducer;
