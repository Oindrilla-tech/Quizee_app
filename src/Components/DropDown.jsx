import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall({quiz,setQuiz}) {

    const handleChange = (event: SelectChangeEvent) => {
        setQuiz(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, width:"100%"}} size="small">
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={quiz}
                onChange={handleChange}
                style={{"borderRadius":"5em","color":"rgba(21, 5, 59, 0.753)"}}
                className="drop"
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={15}>15</MenuItem>

                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={25}>25</MenuItem>

                <MenuItem value={30}>30</MenuItem>
            </Select>
        </FormControl>
    );
}
