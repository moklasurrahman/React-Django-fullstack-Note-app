import React from 'react'
import { Routes,   HashRouter, Route } from 'react-router-dom';
import Error from './Error';
import Header from './../components/Header';
import NotesListPage from './../pages/NotesListPage';
import NotePage from './../pages/NotePage';


const Index = () => {
 

  return (
    <HashRouter>

    <Header/>

    <Routes>
    
      <Route exact path='/' element={<NotesListPage/>}/>
      <Route path='/note/:id' element={<NotePage/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
      
    </HashRouter>
  )
}

export default Index;