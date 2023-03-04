import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({note}) => { 

{/*note paramitar comming from 'NotesListPage directory'
*/}


const getTime = () => {
  return new Date(note.update).toLocaleDateString()
}


// titel sort banano hoice
const getTitle = (note) =>{
  const title = note.body.split('\n')[0]
  if(title.length > 45){
    return title.slice(0, 50)
  }
  return title
}


const getContent = (note) => {
    let title = getTitle(note)
    let content = note.body.replaceAll('\n', ' ')
    content = content.replaceAll(title, '')

    if (content.length > 45) {
        return content.slice(0, 40) + '...'
    } else {
        return content
    }
}





  return (
    <div>
      <Link to={`/note/${note.id}`}>
        <div className='notes-list-item'>
       
        <h3>{getTitle(note)}</h3>
        
        <p><span>{getTime(note)}</span> {getContent(note)}</p>
       
        </div>
      </Link>       
   </div>
  )
}

export default ListItem