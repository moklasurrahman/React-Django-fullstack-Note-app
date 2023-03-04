import React from 'react'
import { Link } from 'react-router-dom'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import '../App.css'
const AddButton = () => {
  
  
    return (
    <div className='btn'>
      <Link to='/note/new'>
      <button>
        <AddCircleOutlineIcon className='icon'/>
        </button>
      </Link>
    </div>
  )
}

export default AddButton