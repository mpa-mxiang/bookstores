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
  const newBook = await addBook(book);
  return newBook;
});

export const removeBookAsync = createAsyncThunk('books/removeBook', async (bookId) => {
  await removeBook(bookId);
  return bookId;


const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    /*
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      const bookIndex = state.filter((book) => book.id !== action.payload);
      if (bookIndex !== -1) {
        state.splice(bookIndex, 1);
      }
    },
    */
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
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
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
        state.loading = false;
      })
      .addCase(addBookAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(removeBookAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.loading = false;
        const temp = state.books.filter((book) => book.item_id !== action.payload);
        state.books = temp;
      })
      .addCase(removeBookAsync.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
