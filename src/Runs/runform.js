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
  const[got_after_it, setGotAfterIt] = useState(false)
  const[popUp, setPopUp] = useState(1)
  const[hiddenPace, setHiddenPace] = useState()

  const handleChange = event => {
    setGotAfterIt(event.target.value);
    
  };

 
  const useStyles = makeStyles(theme => ({
    
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
    const title = useRef()
    

    const handleCreate = e => {
        e.preventDefault();

        const newRun = {

            time: moment(selectedDate).format('HH:mm'),
            date: date.current.value,
            title: title.current.value,
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
      
      // getting total number of seconds in the duration(hours, minutes, seconds)
      const duration = moment(selectedDuration).format('HH:mm:ss')
      const stringDuration = duration.toString();
      const splitString = stringDuration.split(":")
      const hoursToSeconds = splitString[0] * 60 * 60
      const minutesToSeconds = splitString[1] * 60
      const seconds = splitString[2]
      const totalDuration = parseInt(hoursToSeconds) + parseInt(minutesToSeconds) + parseInt(seconds)
      
      
      //setting state to a variable
      const totalDistance = popUp
      
      //converting original pace to a string
      const pace = ((totalDuration/totalDistance)/60).toString()
      
      //piecing together final pace
      
      const decimalPace = pace.split(".")
      const beforeDecimal = decimalPace[0]
      const secondsFinal = (((pace % 1) * 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}).substring(0, 2))
      
      
      const totalPace = `${beforeDecimal}:${secondsFinal}`

    //   const pacing = () => {

      
    //     setHiddenPace(!hiddenPace)
      
    // }


      
      return (
        <>
        
      <div className= "pace" hidden={hiddenPace}>{totalPace} /mi</div>
    
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
        inputRef={title}
        id="title"
        label="title"
        type="text"
        placeholder="Enter a Title"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
    </div>
    <div className="d-flex flex ml-4">
    <form className={classes.container} noValidate>
      <TextField
        inputRef={distance}
        id="distance"
        label="Distance"
        type="text"
        value={popUp}
        placeholder="ex 4.5, 3.11, 2"
        className={classes.textField}
        onChange={e => setPopUp(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form> 
    <p className="mt-4">mi</p>
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
        {/* <Button size="sm"  type="button" onClick={pacing}> Show Pace</Button> */}
        

    </div>
     
    
    <div className="createButton">
    <Button  type="button" onClick={handleCreate}>Create</Button>
    
    </div>
    
        </>
      );







}


export default RunForm