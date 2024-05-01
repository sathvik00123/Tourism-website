import React from "react";
// import InterestCard from './InterestCard'
import InterestCard from "../../utils/InterestCard.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Interests = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "gray" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="px-32 py-8 z-10">
      <h2 className="text-slate-500 font-bold text-6xl m-6">
        Explore tours based on your Interests
      </h2>

      <Slider {...settings} className="p-10">
        {InterestCard.map((image) => (
          <div
            key={image.id}
            className="bg-stone-400 h-[400px] p-1 rounded-md flex justify-between items-center hover:shadow-2xl"
          >
            <div className="bg-orange-200 p-2 m-2 w-[200] h-[180px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={image.url}
                alt={image.name}
              />
            </div>
            <div className="text-white text-center p-2 m-2 w-[500]">
              <h2 className="text-3xl text-lime-200 font-bold">{image.name}</h2>
              <p>{image.description.substring(0, 110)}...</p>
              <Link to={`/interests/${image.nameurl}`}>
                <button className="bg-blue-500 rounded-lg p-1 mt-1 hover:border-blue-500 hover:border-2 hover:transition hover:bg-white hover:text-blue-500">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Interests;
