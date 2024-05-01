import React from "react";
import "./InterestsPage.css";
import { Link, useLocation } from "react-router-dom";
import InterestCard from "../utils/InterestCard.json";
import { useEffect } from "react";

const Interests = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const pathName = path[path.length - 1];
  // console.log(pathName)
  const interest = InterestCard.find((card) => pathName == card.nameurl);
  // console.log(interest)
  const restInterests = InterestCard.filter((card) => pathName != card.nameurl);
  // console.log(restInterests)
  const pathString = path[path.length - 2] + "/" + path[path.length - 1];
  // console.log(pathString)

  useEffect(() => {
    //  Scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [interest]);

  return (
    <div className="main-interest">
      <div className="interest">
        <div className="interest-img relative">
          <img src={`.${interest.url}`} alt="image" />
          <h2 className="interest-title">{`${interest.name}`}</h2>
        </div>
        <div className="interest-path">
          <h1 className="text-orange-600">{pathString}</h1>
        </div>
        <div className="interest-desc">
          <div className="interest-left">
            <h2>Click on below map to view {`${interest.name}`} spots</h2>
            <a
              href={`https://www.google.co.in/maps/search/indian+${interest.name}/@10.9072607,75.0848976,7z/data=!3m1!4b1?entry=ttu`}
              target="_blank"
            >
              <div className="india-map">
                <img src="../India_map.jpg" alt="" />
              </div>
            </a>
          </div>
          <div className="interest-right">
            <h2>About</h2>
            <p>{interest.description}</p>
          </div>
        </div>
      </div>
      <div className="explore">
        <h1>Explore more Interests</h1>
        <div className="restInterests">
          {restInterests.map((item) => (
            <div key={item.id} className="explore-img">
              <h2>{item.name}</h2>
              <Link to={`/interests/${item.nameurl}`}>
                <img src={`.${item.url}`} alt="image" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
