import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Components/Home'
import Quiz from './Components/Quiz'

const Router = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
      </Routes>
    </BrowserRouter>
  </>

  )
}

export default Router