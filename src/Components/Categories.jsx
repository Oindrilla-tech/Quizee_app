import React from 'react'
import "../Components/css/Categories.css";
import IconButton from '@mui/material/IconButton'

export const Categories = () => {
  return (
    <div className='outer'>
    <div className='inner'>
     <div className="choice">
        <p> Choose category to play</p>
    </div>   
    <div className='inner1'>
    <IconButton aria-label="delete" className="ibtn" style={{"flex":"4" , "fontSize":"1.2em"}}>General Knowledge
    </IconButton>
    <IconButton aria-label="delete" className="ibtn" style={{"flex":"1", "fontSize":"1.2em"}}> Film
    </IconButton>
   </div>
   <div className='inner1'>

   <IconButton aria-label="delete" className="ibtn" style={{"flex":"1" , "fontSize":"1.2em"}}>Sports

   </IconButton>
   <IconButton aria-label="delete" className="ibtn" style={{"flex":"2", "fontSize":"1.2em"}}>Computers
   </IconButton>
   </div>
   <IconButton aria-label="delete" className="ibtn" style={{"flex":"1", "fontSize":"1.2em"}}>Mythology
   </IconButton>
        {/* <div className='card1'>
        <p>General Knowledge</p>
        </div>
        <div className='card2'>
        <p>General Knowledge</p>
        </div>
        <div className='card3'>
        <p>General Knowledge</p>
        </div>
        <div className='card4'>
        <p>General Knowledge</p>
        </div>
        <div className='card5'>
        <p>General Knowledge</p>
        </div> */}
    </div>

    </div>
  )
}
