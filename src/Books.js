import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewBookForm from './components/NewBookForm';
import {
  fetchBooksAsync, addBookAsync, removeBookAsync, getBooks,
} from './redux/books/BookSlice';
import Book from './components/Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const status = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);
  useEffect(() => {
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  const handleAddBook = (book) => {
    dispatch(addBookAsync(book));
  };

  const handleRemoveBook = (bookId) => {
    dispatch(removeBookAsync(bookId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {books.map((book) => (
        <Book
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
          onRemove={handleRemoveBook}
        />
      ))}
      <NewBookForm onAdd={handleAddBook} />
    </div>
  );
};

export default Books;
