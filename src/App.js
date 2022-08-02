import './Components/App.css';
import { useState } from 'react';
import Home from "./Components/Home" 
import Router from './Router';

function App() {
  const [ gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <Router>
    <div className="App"> 
    <Home/>
 
 
    </div>
    </Router>
    
  );
}

export default App;
