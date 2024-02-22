import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress, {
    CircularProgressProps,
} from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { getQuestions } from './api/qstnapi';
export default function AlertDialog2({ quiz,
    level,
    category }) {
    const [open, setOpen] = React.useState(true);
    const navigate = useNavigate()
    const [timer,setTimer]=React.useState(5)
    // localStorage.setItem("result",JSON.stringify(result))

    React.useEffect(() => {
        let interval = setInterval(() => {
          if (timer === 0) {
              clearInterval(interval)
          } else {
            setTimer(timer - 1)
          }
        }, 1000)
        return () => {
          clearInterval(interval)
        }
      }, [timer])

    React.useEffect(() => {
        getQuestions(quiz,level,category).then((data) => {
            console.log(data)
            localStorage.setItem("questions",JSON.stringify(data))
            setTimeout(()=>{
                setOpen(false)
            navigate("/quiz")
            },5000)
        })
    }, [])

    return (
        <div>
            <Dialog
                open={open}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" }}>
                        {/* <CircularProgress color="secondary" size={24}/> */}
                        <div>
                            <img src="image/duck.gif" style={{ "width": "4em", "height": "4em" }} alt="loading" />
                        </div>
                        <p style={{ "fontWeight": "600" }}>Get Readty! Starting Quiz in <span style={{"color":"green"}}>{timer}s</span></p>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
