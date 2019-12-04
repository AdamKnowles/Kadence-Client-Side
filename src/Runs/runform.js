import React, { useEffect, useState, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DurationPicker from 'react-duration-picker'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';




const RunForm = props => {

 
  const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();



    const time = useRef()
    const date = useRef()
    const distance = useRef()
    const duration = useRef()

    const handleCreate = e => {
        e.preventDefault();

        const newRun = {

            time: time.current.value,
            date: date.current.value,
            distance: distance.current.value,
            duration: duration.current.value

        }

        createNewRun(newRun)
    }

    const createNewRun = newRun => {
        return fetch("http://localhost:8000/runs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            
            
          },
          body: JSON.stringify(newRun)
        }).then(res => res.json());
      };



      return (
        <>
        
        <form className={classes.container} noValidate>
      <TextField
          inputRef={time}
        id="time"
        label="time"
        type="text"
        
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
        

    <form className={classes.container} noValidate>
      <TextField
        inputRef={date}
        id="date"
        label="Date"
        type="date"
        defaultValue="1987-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <form className={classes.container} noValidate>
      <TextField
        inputRef={distance}
        id="distance"
        label="distance"
        type="text"
        
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <form className={classes.container} noValidate>
      <TextField
        id="duration"
        label="duration"
        type="text"
        inputRef={duration}
        
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    <Button  color="info" type="button" onClick={handleCreate}>Create</Button>
    
    
    
        </>
      );







}


export default RunForm