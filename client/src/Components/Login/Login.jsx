import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const obj = await axios.post("http://localhost:5001/login", {
        email,
        password
      });
      // console.log(obj)
      if (obj.data !== "") {
        window.localStorage.setItem("isLoggedIn",true);
        window.localStorage.setItem("isLoggedIn1",true);
        alert("Do you want to successfully login ...");
        navigate("/home");
      } else {
        toast.error("Username or password went wrong, Please re-Check.", {
          position: "bottom-right",
          theme: "light",
        });
      }  
    } catch (error) {
      toast.error("Invalid details or re-confirm password.", {
        position: "bottom-right",
        theme: "light",
      });
    }
  };
  return (
    <div className="login">
      <form action="">
        <h2 className="login-heading">Login</h2>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="icon">
            <FaUserAlt />
          </div>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="icon">
            <FaLock />
          </div>
        </div>
        {/* 
        <div className="forgot">
          <a href="#">Forgot password?</a>
        </div> */}

        <button type="sumbit" onClick={handleClick}>
          Login
        </button>

        <div className="register-link">
          <p>
            Don't have an account?{" "}
            <Link to="/register" href="#">
              Sign Up
            </Link>
          </p>
        </div>
      </form> 
      <ToastContainer />
    </div>
  );
};

export default Login;
