import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewBook = (props) => {
  const [bookState, setBookState] = useState(null);

  const getBook = async () => {
    console.log(props)
    let response = await axios.get(`http://localhost:3000/books/${props.match.params.id}`);
    console.log(response.data);
    setBookState(response.data);
  }

  useEffect(() => {
    getBook();
  }, [])


  return (
    <div>
      {bookState && <li>{bookState.title} by {bookState.author}</li>}
    </div>
  )
}

export default ViewBook;
