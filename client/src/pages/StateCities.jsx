import React, { useEffect, useState } from "react";
import "./StateCities.css";
import States from "../utils/States.json";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { PiUserCircleFill } from "react-icons/pi";

const StateCities = () => {
  const [comments, setComments] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const array = path.split("/");
  const statename = array[array.length - 2];
  const placename = array[array.length - 1];
  // console.log(state+" " +place)
  const stateDetails = States.find((state) => statename == state.stateurl);
  // console.log(stateDetails)
  const placedetails = stateDetails.places.find(
    (place) => place.nameurl == placename
  );
  // console.log(placedetails)
  const otherPlaces = stateDetails.places.filter(
    (place) => place.nameurl != placename
  );

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [placedetails]);

  const handleClick = () => {
    placedetails.comments.push(comments);
    // console.log(placedetails);
    document.getElementById("inputfield").value = "";
    navigate("/destination/"+statename+"/" + placename);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setComments(e.target.value);
  };

  return (
    <div className="px-32 py-8">
      <h1 className="text-orange-500">{path}</h1>
      <div className="h-96 my-10">
        <img src={`../.${placedetails.url}`} alt="img" />
      </div>
      
      <h2 className="placename text-center">{placedetails.name}</h2>

      <div className="flex justify-between p-16">
        <div className="w-[45%]">
          <h2 className="text-2xl pb-10 text-slate-500">About</h2>
          <p className="text-sm">{placedetails.description}</p>
        </div>
        <div className="w-[45%] h-60 text-center mapimg">
          <a
            href={`https://www.google.co.in/maps/search/indian+${placedetails.name}`}
            target="_blank"
          >
            <img src="../../India_map.jpg" alt="india" />
          </a>
          <h2>Click on the map to view the location.</h2>
        </div>
      </div>

      <div className="my-10">
        <h2 className="text-4xl pb-10 text-slate-500">Explore more places</h2>
        <div className="flex gap-8">
          {otherPlaces.map((item) => (
            <div key={item.name} className="text-center">
            {/* {console.log(item)} */}
              <div className="w-[100%] h-56 otherplaceimg">
                <Link to={`/destination/${statename}/${item.nameurl}`}>
                  <img src={`../.${item.url}`} alt="" />
                </Link>
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[50%] mx-auto">
        <h2 className="text-4xl pb-10 text-slate-500 text-center my-4">
          Comments about the spot
        </h2>
        <div className="usercomments px-10 py-5 bg-slate-200">
          {placedetails.comments.map((item) => (
            <div
              className="text-slate-500 flex items-center gap-4 rounded-lg bg-white my-4"
              key={item}
            >
              <PiUserCircleFill className="w-12 h-12" />
              {item}
            </div>
          ))}
        </div>
        <h2 className="text-2xl pb-10 text-slate-500">Add your experiences.</h2>
        <div>
          <input
            className="bg-slate-200"
            id="inputfield"
            type="text"
            onChange={handleChange}
            placeholder="Add your comments here..."
          />
          <button
            type="submit"
            className="w-[30%] bg-slate-300"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StateCities;
