import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { addJournal } from "../reducers/journalReducer"
import { useDispatch } from "react-redux"

export default function MultilineTextFields(props) {
  const dispatch = useDispatch()
  const [title, setTitle] = React.useState('');
  const [value, setValue] = React.useState('');
 
  const handleTextChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };

  const handleTitleChange = (event) => {
    event.preventDefault();
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const journal = ({title: title, data:value})
    setValue('')
    setTitle('')
    dispatch(addJournal(journal))
  };

  return (
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 5, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
     
      <div>
      <TextField
          id="standard-multiline-flexible"
          label={props.title}
          multiline
          maxRows={10}
          value={title}
          onChange={handleTitleChange}
          variant="standard"
        />
        <br></br>
        <br></br>
       

        <TextField
          id="standard-multiline-flexible"
          label={props.label}
          multiline
          maxRows={10}
          value={value}
          onChange={handleTextChange}
          variant="standard"
        />

        


      </div>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </Box>

    
  );
}


