import React from "react";
import "./Destination.css";
import { Link, useNavigate } from "react-router-dom";
// import States from "../utils/States.json"
const Destination = () => {

  // const navigate = useNavigate()
  // const handleClick = () => {
  //   const stateName = document.getElementById(currState.stateurl).innerHTML;
  //   const currState = States.find((item) => item.state == stateName);
  //   // console.log(currState)
  //   navigate(`/destination/${currState.stateurl}`);
  // } 
  return (
    <div className="destin-main text-red-500 text-xl flex">
      <div className="state-div">
        {/* States */}
        <h2 className="state-name">States</h2>
        <div className="state-list">
          <ul className="states">
            {/* <h2 className="state-li Andhra_pradesh" onClick={handleClick}>Andhra pradesh</h2> */}
            <Link to="/destination/Andhra_pradesh" className="state-li">Andhra Pradesh</Link>
            <Link to="/destination/Arunachal_Pradesh" className="state-li">Arunachal Pradesh</Link>
            <Link to="/destination/Assam" className="state-li">Assam</Link>
            <Link to="/destination/Bihar" className="state-li">Bihar</Link>
            <Link to="/destination/Chattisgarh" className="state-li">Chattisgarh</Link>
            <Link to="/destination/Goa" className="state-li">Goa</Link>
            <Link to="/destination/Gujarat" className="state-li">Gujarat</Link>
            <Link to="/destination/Harayana" className="state-li">Harayana</Link>
            <Link to="/destination/Himachal_Pradesh" className="state-li">Himachal Pradesh</Link>
            <Link to="/destination/Jharkhand" className="state-li">Jharkhand</Link>
          </ul>
          <ul className="states">
            <Link to="/destination/Karnataka" className="state-li">Karnataka</Link>
            <Link to="/destination/Kerala" className="state-li">Kerala</Link>
            <Link to="/destination/Madhya_Pradesh" className="state-li">Madhya Pradesh</Link>
            <Link to="/destination/Maharashtra" className="state-li">Maharashtra</Link>
            <Link to="/destination/Manipur" className="state-li">Manipur</Link>
            <Link to="/destination/Meghalaya" className="state-li">Meghalaya</Link>
            <Link to="/destination/Mizoram" className="state-li">Mizoram</Link>
            <Link to="/destination/Nagaland" className="state-li">Nagaland</Link>
            <Link to="/destination/Odisha" className="state-li">Odisha</Link>
            <Link to="/destination/Punjab" className="state-li">Punjab</Link>
            <Link to="/destination/Rajasthan" className="state-li">Rajasthan</Link>
          </ul>
          <ul className="states">
            <Link to="/destination/Sikkim" className="state-li">Sikkim</Link>
            <Link to="/destination/Tamil_Nadu" className="state-li">Tamil Nadu</Link>
            <Link to="/destination/Telangana" className="state-li">Telangana</Link>
            <Link to="/destination/Tripura" className="state-li">Tripura</Link>
            <Link to="/destination/Uttatakhand" className="state-li">Uttatakhand</Link>
            <Link to="/destination/Uttar_Pradesh" className="state-li">Uttar Pradesh</Link>
            <Link to="/destination/West_Bengal" className="state-li">West Bengal</Link>
          </ul>
        </div>
      </div>
      <div className="territory-div">
        {/* Territories */}
        <h2 className="territory-name">Union Territories</h2>
        <div className="territory-list">
          <ul className="territories">
            <Link to="/destination/Andaman_Nicobar" className="territory-li">Andaman Nicobar</Link>
            <Link to="/destination/Daman_Diu" className="territory-li">Daman Diu</Link>
            <Link to="/destination/Jammu_Kashmir" className="territory-li">Jammu Kashmir</Link>
            <Link to="/destination/Lakshadweep" className="territory-li">Lakshadweep</Link>
            <Link to="/destination/Chandigarh" className="territory-li">Chandigarh</Link>
            <Link to="/destination/Delhi" className="territory-li">Delhi</Link>
            <Link to="/destination/Ladakh" className="territory-li">Ladakh</Link>
            <Link to="/destination/Puducherry" className="territory-li">Puducherry</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Destination;
