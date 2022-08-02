import React from 'react'
import "../Components/css/EndScreen.css"

function EndScreen() {
  return (
    <div className='endOuter'>
      <div style={{ "width": "100%", "alignSelf": "center","flexDirection":"column", "margin": "auto 0px", "height": "calc(100vh - 5em)", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
        <div className='endInner'>
          <div className='score'>

            <p className='cngo'>Congratulations, Prem! </p>
            <p>You Won $150!!</p>
            <div >
              <input className='Lead' type="Button" value="View Leaderboard"></input>
            </div>
          </div>

        </div>
        <div className='continue1'>
          <input className="continue2" type="Button" value="Continue Playing" />
        </div>
      </div>
    </div>
  )
}

export default EndScreen