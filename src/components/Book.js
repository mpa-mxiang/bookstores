import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => {
  const { title, author } = book;

  const handleRemove = () => {
    // Handle remove logic here
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Author:
        {' '}
        {author}
      </p>
      <button type="button" onClick={handleRemove}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
