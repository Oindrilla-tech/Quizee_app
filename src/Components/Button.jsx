import React from 'react';
import "../Components/css/button.css"

export const  Button = ({clickEvent}) => {
  return (
    <button className='btn' onClick={clickEvent}> Start Quiz </button>
  )
}
