import React, { useState, useEffect } from "react"
import ReactMapGl, {Marker, Popup} from "react-map-gl"
import TOKEN from "../token"



const MapBox = () => {

    const [viewport, setViewPort] = useState({
        latitude: 36.1627,
        longitude: -86.7816,
        width: "100vw",
        height: "100vh",
        zoom: 10
    });

    
    const [nashville, setNashville] = useState([])
    const [selectedPark, setSelectedPark] = useState(null)
    
        const getParks = () => {
            fetch(`https://data.nashville.gov/resource/74d7-b74t.json`, {
              method: "GET",
              headers: {
                
                "Accept": "application/json",
                "Content-Type": "application/json",
              }
            })
              .then(response => response.json())
              .then(setNashville)  
          }

          useEffect(getParks, [])

         
      return(
          
    <div>
        <ReactMapGl {...viewport} mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => {setViewPort(viewport)}}
        mapStyle={"mapbox://styles/acknowles524/ck6a367id1hda1iow088us9ka"}>
            
        {nashville.filter(item => item.walk_jog_paths === "Yes" || item.hiking_trails === "Yes" ).map(item => (
            
          <Marker  
          latitude={parseFloat(item.mapped_location.latitude)}
          longitude={parseFloat(item.mapped_location.longitude)}>
              
        
            <button className="marker-btn" onClick={e => {
                e.preventDefault()
                setSelectedPark(item)
            }}>
                 <img src="runner.jpeg"></img>
            </button>
          </Marker>
      ))}
      {selectedPark ? (
          <Popup
            latitude={parseFloat(selectedPark.mapped_location.latitude)}
            longitude={parseFloat(selectedPark.mapped_location.longitude)}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h5>{selectedPark.park_name}</h5>
              
            </div>
          </Popup>
        ) : null}
      

        </ReactMapGl>

       
        </div>
        
      )
}

export default MapBox
