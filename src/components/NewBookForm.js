import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../redux/books/BookSlice';
import './NewBookForm.css';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Math.random(),
      title,
      author,
      category,
    };
    dispatch(addBookAsync(newBook));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <div className="bookform">
      <hr />
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <select value={category || 'Category'} onChange={(e) => setCategory(e.target.value)} placeholder="Category" defaultValue="Fiction">
          <option value="Fiction">Fiction</option>
          <option value="Nonfiction">Nonfiction</option>
        </select>
        <button className="add" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default NewBookForm;
