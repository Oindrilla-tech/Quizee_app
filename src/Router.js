import React from 'react'
import {Routes,Route,BrowserRouter} from "react-router-dom"
import Home from './Components/Home'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'
import { Categories } from './Components/Categories'

const Router = () => {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<EndScreen/>}/>
        <Route path='/category' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  </>

  )
}

export default Router