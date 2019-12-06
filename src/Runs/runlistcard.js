import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';


const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });



const RunListCard = props => {
    
    const classes = useStyles();

      
    
    
    
    
    
    return (
        



<Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Duration</TableCell>
            <TableCell align="right">Distance</TableCell>
            <TableCell align="right">Pace</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.runs.map(run => (

            <TableRow >
              <TableCell component="th" scope="row">
                {run.date}
              </TableCell>
              <TableCell align="right">{run.time}</TableCell>
              <TableCell align="right">{run.duration}</TableCell>
              <TableCell align="right">{run.distance}</TableCell>
              <TableCell align="right">{run.pace}</TableCell>
            </TableRow>


    ))}
          
        </TableBody>
      </Table>
    </Paper>
    )
}

export default RunListCard