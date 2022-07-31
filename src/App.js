import './Components/App.css';
import { useState } from 'react';
import Home from "./Components/Home" 


function App() {
  const [ gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <div className="App"> 
    < Home/>
 
 
    </div>
  );
}

export default App;
