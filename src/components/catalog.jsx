import React from 'react';
import Book from './book/book.jsx';

const Catalog = ({ }) => {
    const books = [
        { id: 1, title: 'Book A', publick: 1986 },
        { id: 2, title: 'Book B', publick: 1990 },
        { id: 3, title: 'Book C', publick: 2005 },
        { id: 4, title: 'Book D', publick: 2010 },
    ];
    return (
        <>
            <h2>Books Catalog</h2>

            {books.length === 0 ? (
                <p>No books available.</p>
            ) : (
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    backgroundColor:'#958787',
                }}>
                    {books.map((book) => (
                        <Book key={book.id} book={book} />  
                    ))}
                </div>
            )}
        </>
    );
};

export default Catalog;