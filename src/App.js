import React, { useState } from "react";
import Header from "./components/Header/Header";
import Photos from "./components/Photos/Photos";
import ModalContext from "./context/ModalContext/ModalContext";
import useSearchImage from "./customHooks/useSearchImage/useSearchImage";
import DetailView from './components/DetailView/DetailView'

import fakeData from './data.json';
import Error from "./components/Error/Error";
import Loading from "./components/Loading/Loading";

function App() {

  const [searchTerm, setSearchTerm] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const [modal, setModal] = useState({showModal: false , photo: {}})

  const searchHandler = (e) =>  {
    setSearchTerm(e.target.value);
  } 

  const { photos, loading, hasMore, hasError, errorMsg } = useSearchImage(searchTerm, pageNo);

  return (
    <ModalContext.Provider value={[modal, setModal]}>
      { modal.showModal && <DetailView />}
      <Header />
      <div style={{width: '70vw', display: 'block', margin: 'auto'}}>
      <input 
        className='form-control text-center m-4' 
        type='text' 
        value={searchTerm} 
        placeholder='🔍 Search an image' 
        onChange={e => searchHandler(e)}/>
      </div>
      { hasError ? <Error errorMsg={errorMsg} /> :  <Photos photos={photos}
        loading={loading}
        more={hasMore}
        setPageNo={setPageNo} /> }
       
      { loading && <Loading />}

    </ModalContext.Provider>
  );
}

export default App;
