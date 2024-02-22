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
export default function AlertDialog({result}) {
  const [open, setOpen] = React.useState(true);
const navigate=useNavigate()
localStorage.setItem("result",JSON.stringify(result))

setTimeout(()=>{
    setOpen(false)
navigate("/result")
},5000)

  return (
    <div>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{"display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"}}>
          {/* <CircularProgress color="secondary" size={24}/> */}
          <div>
          <img src="image/duck.gif" style={{"width":"4em","height":"4em"}} alt="loading"/>
          </div>
            <p style={{"fontWeight":"600"}}>Calculating Score</p>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
