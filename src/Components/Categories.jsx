import React from 'react'
import "../Components/css/Categories.css";
import IconButton from '@mui/material/IconButton'
import SportsHandballIcon from '@mui/icons-material/SportsHandball';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import ComputerIcon from '@mui/icons-material/Computer';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SelectSmall from './DropDown';
import AlertDialog2 from './Dialog2';
export const Categories = () => {
  const [quiz, setQuiz] = React.useState(10);
  const [level, setLevel] = React.useState("easy")
  const [category, setCategory] = React.useState("")
  const [ready1, setReady1] = React.useState(false)


  console.log(level)
  console.log(category)

  return (

    <div className='outer'>
      <div style={{ "width": "100%", "alignSelf": "center", "flexDirection": "column", "margin": "auto 0px", "height": "calc(100vh - 5em)", "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
        <div className='inner'>
          <div className="choice">
            <p>No of questions </p>
          </div>
          <div className='inner1'>
            <SelectSmall quiz={quiz} setQuiz={setQuiz} />
            {/* <IconButton aria-label="delete" className="ibtn" style={{ "flex": "4" }}>General Knowledge
            </IconButton> */}
          </div>
        </div>
        <div className='inner'>
          <div className="choice">
            <p> Quiz level</p>
          </div>
          {ready1 ? <AlertDialog2
            quiz={quiz}
            level={level}
            category={category}

          /> : null}

          <div className='inner1'>

            <IconButton aria-label="delete" className={level === "easy" ? "ibtn active" : "ibtn"} value="easy" style={{ "flex": "1" }} onClick={(e) => { setLevel(e.currentTarget.value) }}>Easy

            </IconButton>
            <IconButton aria-label="delete" className={level === "medium" ? "ibtn active" : "ibtn"} value="medium" style={{ "flex": "1" }} onClick={(e) => { setLevel(e.currentTarget.value) }}>Medium

            </IconButton>
            <IconButton aria-label="delete" className={level === "hard" ? "ibtn active" : "ibtn"} value="hard" style={{ "flex": "1" }} onClick={(e) => { setLevel(e.currentTarget.value) }}>Hard
            </IconButton>
          </div>

        </div>
        <div className='inner'>
          <div className="choice">
            <p> Category</p>
          </div>
          <div className='inner1'>
            <IconButton className={category == 9 ? "ibtn active" : "ibtn"} value={9} style={{ "flex": "4" }} onClick={(e) => { setCategory(e.currentTarget.value) }}><AutoStoriesIcon style={{ "fontSize": "1.2em", "marginRight": "0.3em" }} />General Knowledge
            </IconButton>
            <IconButton className={category == 11 ? "ibtn active" : "ibtn"} value={11} style={{ "flex": "2" }} onClick={(e) => { setCategory(e.currentTarget.value) }}> <TheaterComedyIcon style={{ "fontSize": "1.2em", "marginRight": "0.3em" }} />Film

            </IconButton>
          </div>
          <div className='inner1'>

            <IconButton className={category == 21 ? "ibtn active" : "ibtn"} value={21} style={{ "flex": "1" }} onClick={(e) => { setCategory(e.currentTarget.value) }}><SportsHandballIcon style={{ "fontSize": "1.2em", "marginRight": "0.3em" }} />Sports

            </IconButton>
            <IconButton className={category == 18 ? "ibtn active" : "ibtn"} value={18} style={{ "flex": "2" }} onClick={(e) => { setCategory(e.currentTarget.value) }}><ComputerIcon style={{ "fontSize": "1.2em", "marginRight": "0.3em" }} />Computer

            </IconButton>
          </div>
          <div className='inner1'>
            <IconButton className={category == 20 ? "ibtn active" : "ibtn"} value={20} style={{ "flex": "1" }} onClick={(e) => { setCategory(e.currentTarget.value) }}><PsychologyIcon style={{ "fontSize": "1.2em", "marginRight": "0.3em" }} />Mythology
            </IconButton>
          </div>
        </div>


      </div>
      <IconButton className="ibtn" style={{ "width": "100%", "marginTop": "5em !important" }} onClick={() => { setReady1(true) }}>Start Quiz
      </IconButton>
    </div>
  )
}
