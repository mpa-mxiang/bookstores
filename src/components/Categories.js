import React from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div>
      <h1>Welcome to the Categories Page!</h1>
      <p>Categories: {categories}</p>
    </div>
  );
};

export default Categories;
