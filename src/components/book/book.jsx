import React,{useState} from 'react';
import './book.css';
import styled from 'styled-components';

const Title = styled.h2`
    display: block;
    padding: 0;
    margin: 0;
    flex-basis: 100%;
    `;

const Book = ({ book }) => {

  const [myClass, setMyClass] = useState('default');

    return (
      <>
      <div className={`card col-md-3 ${myClass}`}>
        <Title>{book.title}</Title>
        <span>Publick in {book.publick}</span>
        <button
        className='btn btn-primary'
        onClick={() => setMyClass('highlighted')}
      >
        Highlight
      </button>
      </div>
      </>
    );
};

export default Book;