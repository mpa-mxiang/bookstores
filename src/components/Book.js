import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onRemove }) => {
  const handleRemoveBook = () => {
    onRemove(book.id);
  };

  return (
    <div>
      <h4>{book.title}</h4>
      <p>
        Author:
        {book.author}
      </p>
      <button type="button" onClick={handleRemoveBook}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Book;
