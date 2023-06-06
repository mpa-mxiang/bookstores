import React from 'react';

const Book = ({ book }) => {
  const { title, author } = book;

  const handleRemove = () => {
    // Handle remove logic here
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {author}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Book;
