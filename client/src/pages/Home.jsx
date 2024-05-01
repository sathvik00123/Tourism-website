import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import HomeSlider from '../Components/HomeSlider/HomeSlider'
import Interests from '../Components/Interests/Interests'
import Region from '../Components/Region/Region'
import Map from '../Components/Map/Map'
import AboutIndia from '../Components/AboutIndia/AboutIndia'
import StatesCapitals from '../Components/StatesCapitals/StatesCapitals'

const Home = () => {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div className='text-slate-500 text-xl m-0 font-sans'>
      {/* <Header /> */}
      <HomeSlider />
      <Interests />
      <Region />
      <Map />
      <AboutIndia />
      <StatesCapitals />
      {/* <Footer/> */}
    </div>
  )
}

export default Home