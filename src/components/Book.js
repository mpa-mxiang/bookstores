import React from 'react';
import PropTypes from 'prop-types';
import './Book.css';
import loadingBar from './donut-with-outline.png';

const Book = ({
  id, title, author, category, onRemove,
}) => {
  const handleRemoveBook = () => {
    onRemove(id);
  };

  return (
    <div className="Lesson-Panel">
      <div className="book-char">
        <span className="School-of">
          {category}
        </span>
        <h4 className="Title Text-Style-5">{title}</h4>
        <p className="Suzanne-Collins Text-Style-8">
          {author}
        </p>
        <button className="Suzanne-Collins btn Text-Style-8" type="button" onClick={handleRemoveBook}>Remove</button>
      </div>
      <div className="progress">
        <img src={loadingBar} alt="loading bar" />
        <div className="progress-text">
          <span className="-Percent-Complete">
            64%
          </span>
          <span className="Completed Text-Style-2">
            Completed
          </span>
        </div>
      </div>
      <div className="chapter-update">
        <span className="Current-Chapter Text-Style-7">
          Current Chapter
        </span>
        <span className="Current-Lesson Text-Style-4">
          Chapter 17
        </span>
        <button className="Suzanne-Collins btn2 Text-Style-8" type="button" onClick={handleRemoveBook}>UPDATE PROGRESS</button>
      </div>
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
