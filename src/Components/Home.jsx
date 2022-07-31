import React from 'react';
import "../Components/css/Home.css"
import {Button} from "./Button";
import { useNavigate } from "react-router-dom"
const Home = () => {
  const Router=useNavigate()
  return (
    <div className='container'>
        <div className='innercontainer'>
            
            <div className='imgdiv'><img src="/image/Q.png" alt="" className='imgclass' /></div>
            <Button clickEvent={()=>{Router("/quiz")}}/>

        </div>

        </div>
  )
}

export default Home