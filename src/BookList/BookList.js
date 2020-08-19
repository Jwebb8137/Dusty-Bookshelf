import React from 'react';
import BookItem from './BookItem';
import './BookList.css';

export default function BookList(props) {
    console.log(props.state)
    const bookList = props.state;
    const filteredBooks = bookList.filter(book => book.saleInfo.isEbook)
    console.log(filteredBooks)
    return (
        <div className='booklist__container'>  
            {props.state.map((book, index) => (
                <BookItem 
                    src={(book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail: ""}
                    key={index} 
                    title={book.volumeInfo.title} 
                    description={book.volumeInfo.description}
                    website={book.volumeInfo.infoLink}
                    author={(book.volumeInfo.authors) ? book.volumeInfo.authors[0]: "Anonymous"}
                />
            ))}
        </div>
    );
  }