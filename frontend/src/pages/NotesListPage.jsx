import React, { useEffect, useState } from 'react'
import ListItem from '../components/ListItem';
import '../App.css'
import AddButton from './../components/AddButton';

const NotesListPage = () => {

const [notes, setNotes] = useState([]);
const [isLoding, setIsloding] = useState(false);
const [error, setError] = useState(null);


  useEffect(() => {
    
    const fetchData = async () => {
      setIsloding(true);
      try {
        const response = await fetch('/api/notes/');
        const notes = await response.json();
        setNotes(notes);
      } catch (error) {
        setError(error);
      } finally {
        setIsloding(false);
      }
    };

    fetchData();

  }, []);

  if (isLoding) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div className='notes'>
     
     <div className="notes-header">
        <h2 className='notes-title'>&#9782; Notes</h2>
        <p className='notes-count'>{notes.length}</p>
     </div>
     
     <div className="notes-list">
      {notes.map((note, index) => (//'note={note}' going to 'Listitem' derectory.
          <ListItem key={note.id} note={note}/>
        ))
      }   
    </div>

    <div className="add">
      <AddButton className='icon'/>
    </div>

    
    </div>
  )
}

export default NotesListPage