import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  id, title, author, category, onRemove,
}) => {
  const handleRemoveBook = () => {
    onRemove(id);
  };

  return (
    <div>
      <h4>{title}</h4>
      <p>
        Author:
        {author}
      </p>
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={handleRemoveBook}>Remove</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  onRemove: PropTypes.func,
};
Book.defaultProps = {
  id: null,
  title: '',
  author: '',
  category: '',
  onRemove: null,
};

export default Book;
