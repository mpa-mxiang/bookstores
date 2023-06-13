import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewBookForm from './components/NewBookForm';
import { fetchBooksAsync, addBookAsync, removeBookAsync } from './redux/books/BookSlice';
import Book from './components/Book';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
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
      <h3>Book List</h3>
      {books.map((book) => (
        <Book key={book.id} book={book} onRemove={handleRemoveBook} />
      ))}
      <NewBookForm onAdd={handleAddBook} />
    </div>
  );
};

export default Books;
