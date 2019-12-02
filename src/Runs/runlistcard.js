import React from "react";



const RunListCard = props => {

    return (
        <div>
            <p>{props.run.time}</p>
            <p>{props.run.date}</p>
            <p>{props.run.distance}</p>
            <p>{props.run.duration}</p>
        </div>
    )
}

export default RunListCard