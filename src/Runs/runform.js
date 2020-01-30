import React, { useEffect, useState, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardTimePicker } from "@material-ui/pickers";
import { Button } from 'reactstrap';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from "moment"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';





const RunForm = props => {

  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDuration, handleDurationChange] = useState(new Date(1995, 0, 0, 0, 0));
  const[got_after_it, setGotAfterIt] = useState()

  const handleChange = event => {
    setGotAfterIt(event.target.value);
  };

 
  const useStyles = makeStyles(theme => ({
    // container: {
    //   display: 'flex',
    //   flexWrap: 'wrap',
    // },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();



    
    const date = useRef()
    const distance = useRef()
    

    const handleCreate = e => {
        e.preventDefault();

        const newRun = {

            time: moment(selectedDate).format('HH:mm'),
            date: date.current.value,
            distance: distance.current.value,
            duration: moment(selectedDuration).format('HH:mm:ss'),
            got_after_it: got_after_it

        }

        createNewRun(newRun).then(() => props.history.push("/"))
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
        <div className="runForm">
        
        
<MuiPickersUtilsProvider utils={MomentUtils}>
<KeyboardTimePicker
      label="Time"
      placeholder="08:00"
      views={["hours", "minutes"]}
        format="HH:mm"
      value={selectedDate}
      onChange={date => handleDateChange(date)}
    />
      </MuiPickersUtilsProvider>

    
        
<div>
    <form className={classes.container} noValidate>
      <TextField
        inputRef={date}
        id="date"
        label="Date"
        type="date"
        ampm={false}
        defaultValue={new Date()}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </div>
    <div>
    <form className={classes.container} noValidate>
      <TextField
        inputRef={distance}
        id="distance"
        label="Distance"
        type="text"
        placeholder="ex 4.5, 3.11, 2"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </div>
    

<MuiPickersUtilsProvider utils={MomentUtils}>
<KeyboardTimePicker
      label="Duration"
      placeholder="00:00:00"
      views={["hours", "minutes", "seconds"]}
        format="HH:mm:ss"
      value={selectedDuration}
      onChange={date => handleDurationChange(date)}
    />
      </MuiPickersUtilsProvider>
      <FormControl className={classes.formControl}>
      <InputLabel id="got_after_it">Got after it?</InputLabel>
      <Select
      
          labelId="got_after_it"
          id="got_after_it"
          value={got_after_it}
          onChange={handleChange}
        >
          <MenuItem value={true}>Oh yeah</MenuItem>
          <MenuItem value={false}>No I died</MenuItem>
        </Select>
        </FormControl>

    </div>
    <div className="createButton">
    <Button  type="button" onClick={handleCreate}>Create</Button>
    </div>
    
        </>
      );







}


export default RunForm