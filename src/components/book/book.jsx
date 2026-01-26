import React from 'react';
import './book.css';
import styled from 'styled-components';


const Title = styled.h2`
    display: block;
    padding: 0;
    margin: 0;
    flex-basis: 100%;
    `;

const Book = ({ book }) => {
    return (
      <>
      <div className='item'>
        <Title>{book.title}</Title>
        <span>Publick in {book.publick}</span>
      </div>
      </>
    );
};

export default Book;