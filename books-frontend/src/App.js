import React from 'react';
import './App.css';
import ViewBooks from './ViewBooks';
import ViewBook from './ViewBook';

const App = () => {
  return (
    <>
      <ViewBooks />
      <ViewBook id="2" />
    </>
  ) 
}

export default App;
