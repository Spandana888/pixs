import React from 'react';
import { useState } from 'react';
import "./SearchBar.css"

function SearchBar({ onSubmit }) {
  const[term, setTerm] = useState('');

  const handleFormSubmit = (event) =>{
    event.preventDefault();
    onSubmit(term)
  }

  const handleChange = (event) =>{
    setTerm(event.target.value);
  }

  return (
    <div className='search-bar'>
      <form onSubmit={handleFormSubmit}>
        <lable>Enter search</lable>
        <input type="text" onChange={handleChange} value={term} />
      </form>
    </div>
  );
}

export default SearchBar