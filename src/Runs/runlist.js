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


      const deleteRuns = (id) => {
        fetch(`http://localhost:8000/runs/${id}`, {
            "method": "DELETE",
            "headers": {
              "Accept": "application/json",
              "Content-Type": "application/json",
              
              
              
                
            }
        })
            .then(getRuns)
    }

      useEffect(getRuns, [])

      return(
          
        
        <RunListCard  runs={runs}  deleteRuns={deleteRuns} getRuns={getRuns} {...props} />
        
        )
}

export default RunList

