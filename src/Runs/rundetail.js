import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import moment from "moment";





const RunDetail = props => {
    const [run, setRun] = useState([]);
    
    const getRun = runDetailId => {
      fetch(`http://localhost:8000/runs/${runDetailId}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          
        }
      })
        .then(response => response.json())
        .then(run => {
          setRun(run);
          
          
        });
    };

    if(run.got_after_it === false){
         var word = "Nope"
    }

    else{
        word = "Oh yeah"
    }
    
    useEffect(() => {
      getRun(props.runDetailId);
      
    }, []);


      return(
          
    <><div className="runDetail">
    <h3>{run.title}</h3>
    <h3>Date: {run.date}</h3>
    <h3>Time: {run.time}</h3>
    <h3>Distance: {run.distance} miles</h3>
    <h3>Duration: {run.new_duration}</h3>
    <h3>Pace: {run.pace} /mi</h3>
    <h3>Got after it? <strong>{word}</strong></h3>
    </div>
    </>
      )
}

export default RunDetail


  
  
  
  
  


  
