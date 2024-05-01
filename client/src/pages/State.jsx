import React from 'react'
import "./State.css"
import { useLocation } from 'react-router-dom'
import States from '../utils/States.json'
import PlaceCard from '../Components/PlaceCard/PlaceCard'

const State = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const pathName = path[path.length-1]
  const pathDisplay = path[path.length-2]+"/"+path[path.length-1];
  // console.log(pathName)
  const stateInfo = States.find((item) => item.stateurl==pathName);
  // console.log(stateInfo)

  return (
    <div className='px-32 py-8 text-slate-500'>
      <h1 className='path text-orange-500 pb-4'>{pathDisplay}</h1>
      <div className="main-state flex justify-between my-4">
        <div className="main-state-left w-[45%]">
          <h1 className='text-4xl pb-4'>{stateInfo.state}</h1>
          <p className='pb-4 text-black'>{stateInfo.shortdesc.substring(0,300)}...</p>
          <p className='text-base text-black'>{stateInfo.about}</p>
        </div>
        <div className="main-state-right w-[45%]">
          <div className='state-img'>
            <img src={`.${stateInfo.image}`} alt="image" />
          </div>
        </div>
      </div>
      <div>
        <h1 className='text-4xl mb-4'>About tours in the state</h1>
        <p className='text-black text-base'>{stateInfo.about}</p>
      </div>
      <h1 className='text-4xl my-10'>Place to explore in the state.</h1>
      <div> 
        <div className='places p-16 gap-16'>
          {stateInfo.places.map((item) => 
            <PlaceCard key={item.nameurl} details={item} state={pathName}/>
          )}
        </div>
      </div>
    </div>
  )
}

export default State