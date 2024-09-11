import React from 'react'
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <form>
    <div div className='input-group'>
        <input 
        type='text' 
        placeholder='search your favourite restaurant...' 
        id='search_field' 
        className='form-control'
        />
        <div className='input-group-append'>
          <button id='Search-btn' className='btn'>
          <FaSearch className='fa fa-search'/>

          </button>
        </div>
    </div>
    </form>
  );
}

