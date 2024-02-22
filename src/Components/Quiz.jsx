import React, { useEffect, useState } from 'react'
import "../Components/css/quiz.css"
import { getQuestions } from './api/qstnapi'
import arrayShuffle from "array-shuffle"
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import AlertDialog from './Dialog';
import AlertDialog2 from './Dialog2';
const Quiz = () => {
  const navigate = useNavigate()

  const [question, setQuestion] = useState([])
  const [qNo, setQno] = useState(0)
  const [options, setOptions] = useState([])
  const [val, setvalue] = useState("")
  const [timer, setTimer] = useState(10)
  const [res, setRes] = useState([])
  const [ready, setReady] = useState(false)
  const [dataTrue,setDataTrue]=useState(true)

  const resultCalc = () => {
    let current = [{}]
    current[0]["question"] = question[qNo].question
    current[0]["givenAns"] = val
    current[0]["actualAns"] = question[qNo].correct_answer
    setRes([...res, ...current])
  }
  console.log(res)
  const update = () => {
    setvalue("")
    setOptions(arrayShuffle([...question[qNo + 1]?.incorrect_answers, question[qNo + 1]?.correct_answer]))
    setQno(qNo + 1)

  }

  useEffect(() => {
    let interval = setInterval(() => {
      if (timer === 0) {
        if (qNo >= question?.length - 1) {
          clearInterval(interval)
          resultCalc()
          setReady(true)
          // navigate("/result")

        } else {
          resultCalc()
          update()
          setTimer(10)
        }

      } else {
        setTimer(timer - 1)
      }
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [timer])


  useEffect(() => {
    if (typeof window != "undefined") {
      const data = JSON.parse(localStorage.getItem("questions"))
      if (data.length > 0) {
        setQuestion(data)
        setOptions(arrayShuffle([...data[0]?.incorrect_answers, data[0]?.correct_answer]))
        setDataTrue(true)
      }else{
        setDataTrue(false)
      }
    }


  }, [])

  console.log(question)
  const cleanString = (string) => {
    string = string.replace(/&quot;/g, " ")
    string = string.replace(/&#039;/g, " ")
    string = string.replace(/&amp;/g, " ")
    string = string.replace(/&ldquo;/g, " ")
    string = string.replace(/&shy;/g, " ")


    return string
  }
  const percent = (timer / 10) * 100

  return (<>{dataTrue?
    <div className="quizOuter">
      <div className="quizbox">
        <div className="quizboxhead">
          <p>
            {qNo + 1}/{question?.length}
          </p>
          <p>
            4500
          </p>
        </div>
        {ready ? <AlertDialog result={res} /> : null}
        <div className="qstn">
          <div className='circle'>
            <CircularProgress variant="determinate" style={{ 'color': timer >= 5 ? "green" : "red" }} value={percent} />
            <p className='timer'>{timer}</p>
          </div>

          <p style={{ "font-size": "0.8em", "font-weight": "600", "color": "gray", "padding": "0.5em" }}>{question[qNo]?.category && cleanString(question[qNo]?.category)}</p>
          <p style={{ "font-weight": "600" }}>{question[qNo]?.question && cleanString(question[qNo]?.question)}</p>
          <div className='options'>
            {options && options.map((item, idx) => (
              <input key={idx} className={val === cleanString(item) ? "option active" : "option"} type="button" value={cleanString(item)} onClick={(e) => { setvalue(e.target.value) }} />
            ))}
          </div>
        </div>
      </div>
    </div>:null}
    </>
  )
}

export default Quiz