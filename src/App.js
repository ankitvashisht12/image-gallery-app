import React, { useState } from "react";
import Header from "./components/Header/Header";

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = (e) =>  {
    setSearchTerm(e.target.value);
  } 

  return (
    <>
      <Header />
      <div className='form-group'>
      <input 
        className='form-control text-center m-4' 
        type='text' 
        value={searchTerm} 
        placeholder='🔍 Search an image' 
        onChange={e => searchHandler(e)}/>
      </div>
    </>
  );
}

export default App;
