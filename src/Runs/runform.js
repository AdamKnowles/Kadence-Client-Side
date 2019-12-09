import React, { useEffect, useState, useRef } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { KeyboardTimePicker } from "@material-ui/pickers";
import { Button } from 'reactstrap';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import moment from "moment"





const RunForm = props => {

  const [selectedDate, handleDateChange] = useState(new Date());
  const [selectedDuration, handleDurationChange] = useState(new Date());

 
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



    
    const date = useRef()
    const distance = useRef()
    

    const handleCreate = e => {
        e.preventDefault();

        const newRun = {

            time: moment(selectedDate).format('HH:mm'),
            date: date.current.value,
            distance: distance.current.value,
            duration: moment(selectedDuration).format('HH:mm:ss')

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
    <form className={classes.container} noValidate>
      <TextField
        inputRef={distance}
        id="distance"
        label="Distance"
        type="text"
        
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    

<MuiPickersUtilsProvider utils={MomentUtils}>
<KeyboardTimePicker
      label="Duration"
      placeholder="08:00 AM"
      views={["hours", "minutes", "seconds"]}
        format="HH:mm:ss"
      value={selectedDuration}
      onChange={date => handleDurationChange(date)}
    />
      </MuiPickersUtilsProvider>
    </div>
    <div className="createButton">
    <Button  type="button" onClick={handleCreate}>Create</Button>
    </div>
    
        </>
      );







}


export default RunForm