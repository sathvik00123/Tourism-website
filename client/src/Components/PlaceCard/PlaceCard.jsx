import React from 'react'
import './PlaceCard.css';
import { useLocation, useNavigate } from 'react-router-dom';

const PlaceCard = (props) => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        const placename = props.details.nameurl;
        // console.log(placename)
        navigate("/destination/"+`${props.state}/${placename}`);
    }
  return (
    <div className='card p-4 text-center w-[40%] bg-white' onClick={handleClick}>
        <div className='p-2 detail-img'>
            <img src={`.${props.details.url}`} alt="img" />
        </div>
        <div className='p-4'>
            <h1 className='bg-slate-900 text-white my-4 text-lg'>{props.details.name}</h1>
            <p className='text-sm text-black'>{props.details.description.substring(0,200)}...</p>
        </div>
    </div>
  )
}
export default PlaceCard