import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DetailResult({quizResult}) {
    const cleanString = (string) => {
        string = string.replace(/&quot;/g, " ")
        string = string.replace(/&#039;/g, " ")
        string = string.replace(/&amp;/g, " ")
        string = string.replace(/&ldquo;/g, " ")
        string = string.replace(/&shy;/g, " ")
    
    
        return string
      }
  return (
    <div>
      <Accordion style={{"borderRadius":"0.5em"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Answer Preview</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {quizResult?.map((item,idx)=>(
            <div key={idx} style={{"padding":"0.3em","margin":"0.3em 0px"}}>
          <Typography style={{"fontSize":"0.9em","color":"#495C83"}}>
            <span style={{"fontWeigth":"bold","marginRight":"0.3em"}}>{idx+1}.</span>{ cleanString(item.question)}
          </Typography>
          <p style={{"fontSize":"0.8em","color":item.givenAns === item.actualAns ? "green":"red" ,"fontWeight":"600"}}>
            Your Ans- {item.givenAns}
          </p>
          <p style={{"fontSize":"0.8em","color":"green","fontWeight":"600"}}>
            Correct Ans- {item.actualAns}
          </p>
          </div>
        ))}
        
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
