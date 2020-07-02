import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewBooks = () => {
  const [booksState, setBooksState] = useState(null);

  const getBooks = async () => {
    let response = await axios.get(`http://localhost:3000/books`);
    console.log(response.data);
    setBooksState(response.data);
  }

  useEffect(() => {
    getBooks();
  }, [])


  return (
    <div>
      {booksState && booksState.map((book, index) => (
        <li key={index}><Link to={`/books/${book.id}`}>{book.title}</Link> by {book.author}</li>
      ))}
    </div>
  )
}

export default ViewBooks;