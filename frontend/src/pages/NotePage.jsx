import React, { useEffect, useState } from 'react'
import {Link, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../App.css'



const NotePage = () => {

  // 'Id' comming from routes folder by useParams
  const {id} = useParams(); 
  // console.log(id)


  const [note, setNote] = useState(null)

  useEffect(() => {
  
    getNote();
 
  }, [id])

  
  const getNote = async () => {
    if (id === 'new') return

    const response = await fetch(`/api/notes/${id}`)
    const data = await response.json()
    setNote(data)
}




  const createNote = async () => {
    fetch(`/api/notes/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(note)
    })
}



  const updateNote = async () =>{
    fetch(`/api/notes/${id}`,{
        method: 'PUT', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(note)
 })
}

const deleteNote = async () => {
  fetch(`/api/notes/${id}`, {
      method: 'DELETE',
      'headers': {
          'Content-Type': 'application/json'
      }
  })
  // history.push('/')
}



const handleSubmit = () =>{
  if (id !== 'new' && !note.body){
    deleteNote()
  }
  else if (id !== 'new'){
    updateNote()
  }
  else if(id === 'new' && note !== null){
    createNote()
  }
}


  
  return (
    <div className='note'>
      <div className="note-header">
        <Link to={'/'}>
        <h3>
          <ArrowBackIosIcon onClick={handleSubmit} className='icon'/>
        </h3>
        </Link>
        <Link to={'/'}>
          {id !== 'new' ? ( <button onClick={deleteNote}>Delete</button>) : (
            <button onClick={handleSubmit}>Done</button>
          )}
         
          
          
          </Link>
        
      </div>
      <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} value={note?.body}></textarea>

    </div>
  )
}

export default NotePage