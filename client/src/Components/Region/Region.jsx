import React from "react";
import States from "../../utils/States.json"
import "./Region.css"

const Region = () => {
    return (
        <div className='px-32 py-8'>
            <h2 className='text-slate-500 font-bold text-6xl m-6'>
                Explore Your Favourites places by Region
            </h2>
            <div className="elements-grid">
                    <div className="top-grid" style={{marginBottom:110}}> 
                        <img src={States[0].image} alt="img" />
                        <a href="" className="name-h2 main-h2">{States[0].state}</a>
                        <p>{States[0].shortdesc}</p>
                    </div>
                <div className="bottom-grid">
                    <div className="img-grid">
                        <img src={States[1].image} alt="img" />
                        <a href="" className="name-h2">{States[1].state}</a>
                    </div>
                    <div className="img-grid">
                        <img src={States[2].image} alt="img" />
                        <a href="" className="name-h2">{States[2].state}</a>
                    </div>
                    <div className="img-grid">
                        <img src={States[3].image} alt="img" />
                        <a href="" className="name-h2">{States[3].state}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Region;