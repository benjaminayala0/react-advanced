import React from 'react';
import './book.css';

const Book = ({ book }) => {
    return (
      <>
      <div className='item'>
        <h2>{book.title}</h2>
        <span>Publick in {book.publick}</span>
      </div>
      </>
    );
};

export default Book;