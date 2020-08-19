import React from 'react';
import './BookItem.css';

export default function BookItem(props) {
    return (
        <a className='book-card' href={props.website} target='blank'>
            <div className='bookItem__container'>
                <h3>{props.title}</h3>
                <img src={props.src} alt=''/>
                <div id='book__description'>
                    <p>By: {props.author}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        </a>

    )
}