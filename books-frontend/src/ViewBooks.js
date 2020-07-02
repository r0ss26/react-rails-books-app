import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import DeleteBook from './DeleteBook';

const ViewBooks = () => {

  const [booksState, setBooksState] = useState(null);

  const getBooks = async (id) => {
    let response = await axios.get(`http://localhost:3000/books`);
    console.log(response.data);
    setBooksState(response.data);
  };

  const deleteBook = async (id) => {
    console.log(id)
    await axios.delete(`http://localhost:3000/books/${id}`)
    console.log('deleted')
    setBooksState(booksState.filter((book) => book.id !== id))
  }

  useEffect(() => {
    getBooks();
  }, [])


  return (
    <div>
      {booksState && booksState.map((book, index) => (
        <li key={index}>
          <Link to={`/books/${book.id}`}>
            {book.title}
          </Link> 
          by {book.author}
          <DeleteBook handleClick={() => deleteBook(book.id)} />
        </li>
      ))}
    </div>
  )
}

export default ViewBooks;