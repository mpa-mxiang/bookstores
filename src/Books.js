import React from 'react';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';

const Books = () => (
  <div>
    <h2>Books</h2>
    <BookList />
    <NewBookForm />
  </div>
);

export default Books;
