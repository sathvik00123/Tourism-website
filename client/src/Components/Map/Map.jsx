import React from "react";
import "./Map.css";

const Map = () => {
    return (
        <div className="main">
            <h2 className='heading'>
                Spot your Tour Location in the Map
            </h2>
            <div className='map'>
                <a href="https://www.google.co.in/maps/@22.7231275,76.2608159,4.78z?entry=ttu" target="_blank">
                    <img src="./map.jpg" alt="img" />
                </a>
                <h3 className="map-head">Click on the image to view the full map.</h3>
            </div>
        </div>
    )
}

export default Map;