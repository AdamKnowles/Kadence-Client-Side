import React from "react";



const RunListCard = props => {

    return (
        <div>
            <p>Time: {props.run.time}</p>
            <p>Date: {props.run.date}</p>
            <p>Distance: {props.run.distance}</p>
            <p>Run Duration: {props.run.duration}</p>
        </div>
    )
}

export default RunListCard