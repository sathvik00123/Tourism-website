import React, { useState } from 'react'
import ImageInfo from "../../utils/ImagesInfo.json"
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HomeSlider = () => {
    const [count, setCount] = useState(2);

    const prev = () => {
        const currIndex = count === 1;
        setCount(currIndex ? 8 : count-1);
    }
    const next = () => {
        const currIndex = count === 8;
        setCount(currIndex ? 1 : count+1);
    }
  return (
    <div className='px-32 py-4 text-center flex-col gap-4'>
        <div className='z-20 flex-col text-center'>
            <div className=''>
                <h1 className='text-orange-500 font-bold text-center text-6xl'>Enjoy the tour's <br/><span className='text-slate-500 font-normal my-4'>
                    By Exploring Your Favourite Locations With Us</span>In India</h1>
            </div>
        </div>
        <div className='flex justify-center items-center'>
            <div className='px-8 py-20 bg-slate-200 hover:cursor-pointer hover:opacity-80 hover:transition duration-300 
                hover:text-black' onClick={prev}><MdOutlineKeyboardDoubleArrowLeft />
            </div>
            <div className='relative w-[800px] h-[500px] p-20 object-cover overflow-hidden'>
                <img className="-z-10 w-[100%] h-[100%]" src={`./Slide${count}.jpg`} alt='img' />
                <h4 className='z-0 absolute right-32 bottom-40 text-center text-rose-100 font-semibold text-4xl'>{ImageInfo[count-1].name}</h4>
            </div>
            <div className='px-8 py-20 right-0 bg-slate-200 hover:cursor-pointer hover:opacity-80 hover:transition duration-300
                 hover:text-black' onClick={next}><MdOutlineKeyboardDoubleArrowRight />
            </div>
        </div>
        <div className='mb-6'>
            <p className='text-2xl'>New Experiences from different parts of india with diverse arts, cultures, wildlife, Heritage, snowfalls, valleys, Hill stations and much more</p>
        </div>
        <div className='border'></div>
    </div>
  )
}

export default HomeSlider