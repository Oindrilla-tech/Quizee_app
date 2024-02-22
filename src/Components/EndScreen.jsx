import React, { useState } from 'react'
import "../Components/css/EndScreen.css"
import ResultGrapgh from './ResultGraph'
import Brightness1Icon from '@mui/icons-material/Brightness1';
import DetailResult from './DetailResult';
import { useNavigate } from 'react-router-dom';
function EndScreen() {
  const [incorrect, setIncorrect] = useState(0)
  const [correct, setCorrect] = useState(0)
  const [notAnswered, setNotanswered] = useState(0)
  const [totalQstn, setTotalqstn] = useState(0)
  const [quizResult,setQuizresult]=useState([])
  const navigate=useNavigate()

  React.useEffect(() => {
    if (typeof window != undefined) {
      const result = JSON.parse(localStorage.getItem("result"))
      if (result) {
        setQuizresult(result)
        setTotalqstn(result.length)

        let crr = 0
        let incrr = 0
        let notAns = 0
        for (let ele of result) {
          if (ele.givenAns && ele.givenAns != null) {
            if (ele.givenAns === ele.actualAns) {
              crr = crr + 1
              setCorrect(crr)
            } else {
              incrr = incrr + 1
              setIncorrect(incrr)
            }
          } else {
            notAns = notAns + 1
            setNotanswered(notAns)
          }

        }
      }
    }
  }, [])
  return (
    <div className='endOuter'>
      <div style={{ "width": "100%", "flexDirection": "column", "margin": "auto 0px", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
        <div className='endInner'>
          <p style={{ "fontSize": "1.2em", "paddingTop": "1em", "fontWeight": "600" }}>Result Analysis</p>
          <ResultGrapgh />
        </div>
        <div className='endInner'>
          <p className='yourScore' style={{ "fontSize": "1.2em", "background": "#ffffff", "padding": "0.6em", "color": "black", "fontWeight": "bold", "textAlign": "center" }}>Your Score is{" "}<br /> <span style={{ "fontSize": "1.5em", "color": (correct * 5) - (incorrect * 1) > 0 ? "green":"red", "fontWeight": "bold" }}>{(correct * 5) - (incorrect * 1)}</span></p>
          <div className='innerResult'>
            <div className='box'>
              <div className='firstline'>

                <Brightness1Icon style={{ "color": "#A149FA", "fontSize": "1em", "marginRight": "0.5em" }} /><span style={{ "color": "#A149FA", "fontSize": "1.5em", "fontWeight": "600" }}>{totalQstn}</span>

              </div>
              <p style={{"paddingLeft":"2em","fontSize":"0.8em","margin":"0.3em 0px","color":"gray","fontWeight":"600"}}>Total Questions</p>
            </div>
            <div className='box'>
              <div className='firstline'>
                <Brightness1Icon style={{ "color": "#495C83", "fontSize": "1em", "marginRight": "0.5em" }} /><span style={{ "color": "#495C83", "fontSize": "1.5em", "fontWeight": "600" }}>{((correct + incorrect) / totalQstn) * 100}%</span>
              </div>
              <p style={{"paddingLeft":"2em","fontSize":"0.8em","margin":"0.3em 0px","color":"gray","fontWeight":"600"}}>Completion</p>
            </div>
          </div>
          <div className='innerResult'>
            <div className='box'>
              <div className='firstline'>

                <Brightness1Icon style={{ "color": "#3EC70B", "fontSize": "1em", "marginRight": "0.5em" }} /><span style={{ "color": "#3EC70B", "fontSize": "1.5em", "fontWeight": "600" }}>{correct}</span>

              </div>
              <p style={{"paddingLeft":"2em","fontSize":"0.8em","margin":"0.3em 0px","color":"gray","fontWeight":"600"}}>Correct</p>

            </div>
            <div className='box' >
              <div className='firstline'>

                <Brightness1Icon style={{ "color": "red", "fontSize": "1em", "marginRight": "0.5em" }} /><span style={{ "color": "red", "fontSize": "1.5em", "fontWeight": "600" }}>{incorrect}</span>
              </div>
              <p style={{"paddingLeft":"2em","fontSize":"0.8em","margin":"0.3em 0px","color":"gray","fontWeight":"600"}}>Wrong</p>

            </div>
          </div>
        </div>
        <div>
          <DetailResult quizResult={quizResult}/>
        </div>
        <div className='continue1'>
          <input className="continue2" type="Button" value="Continue Playing" onClick={()=>{navigate("/category")}}/>
        </div>
      </div>
    </div>
  )
}

export default EndScreen