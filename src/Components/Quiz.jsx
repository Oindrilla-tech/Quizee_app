import React from 'react'
import "../Components/css/quiz.css"

const Quiz = () => {
  return (
    <div className="quizOuter">
      <div className="quizbox">
        <div className="quizboxhead">
          <p>
            4/10
          </p>
          <p>
            4500
          </p>
          </div>
          <div className="qstn">
          <p style={{"font-size":"0.8em","font-weight":"600","color":"gray","padding":"0.5em"}}>Technology</p>
          <p>What is the first product launched by apple?</p>
          <div className='options'>
            <input className="option" type="button" value="iPhone" />
            <input className="option" type="button" value="iPad" />
            <input className="option" type="button" value="Apple" />
            <input className="option" type="button" value="iPod" />
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Quiz