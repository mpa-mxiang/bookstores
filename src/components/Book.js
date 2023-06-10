import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = () => {
    dispatch(removeBook(book.id));
  };

  return (
    <div>
      <h4>{book.title}</h4>
      <p>Author: {book.author}</p>
      <button onClick={handleRemoveBook}>Remove</button>
    </div>
  );
};

export default Book;