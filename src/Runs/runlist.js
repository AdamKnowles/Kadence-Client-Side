import React, { useState, useEffect } from "react"
import RunListCard from "./runlistcard"



const RunList = props => {

    const [runs, setRuns] = useState([])

    const getRuns = () => {
        fetch(`http://localhost:8000/runs`, {
          method: "GET",
          headers: {
            
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        })
          .then(response => response.json())
          .then(setRuns)  
      }

      useEffect(getRuns, [])

      return(
          
        runs.map(run => (
        <RunListCard key={run.id} run={run} {...props} />
        ))
        )
}

export default RunList

