import React, { useState } from "react";
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";
import useSearchImage from "./customHooks/useSearchImage/useSearchImage";

import fakeData from './data.json';

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [pageNo, setPageNo] = useState(1);

  const searchHandler = (e) =>  {
    setSearchTerm(e.target.value);
  } 

  const { photos, loading, hasMore, hasError, errorMsg } = useSearchImage(searchTerm, pageNo);

  return (
    <>
      <Header />
      <div style={{width: '70vw', display: 'block', margin: 'auto'}}>
      <input 
        className='form-control text-center m-4' 
        type='text' 
        value={searchTerm} 
        placeholder='🔍 Search an image' 
        onChange={e => searchHandler(e)}/>
      </div>
      <Photos photos={fakeData}
        loading={loading}
        more={hasMore}
        setPageNo={setPageNo} />

    </>
  );
}

export default App;
