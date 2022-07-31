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
            <form>
            <input type="button" value="iPhone" >iPhone</input>
            <input type="button" value="iPad" >iPad </input>
            <input type="button" value="Apple" >Apple </input>
            <input type="button" value="iPod" >iPod </input>
            </form>
            
          </div> 
        </div>
      </div>
    </div>
  )
}

export default Quiz