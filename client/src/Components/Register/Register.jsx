import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const navigate = useNavigate();

  const handleClick = async (e) => {
    if (
      password !== "" &&
      name !== "" &&
      email !== "" &&
      phone !== "" &&
      password === repassword
    ) {
      e.preventDefault();
      try {
        const obj = await axios.post("http://localhost:5001/register", {
          name,
          email,
          phone,
          password,
        });
        // console.log(obj)
        if (obj.data.email == email) {
          toast.error(
            "Email already exist, Please register with other email.",
            {
              position: "bottom-right",
              theme: "light",
            }
          );
        } else {
          navigate("/login");
        }
      } catch (error) {
        toast.error("Something went wrong.", {
          position: "bottom-right",
          theme: "light",
        });
      }
    } else {
      toast.error("Invalid details or re-confirm password.", {
        position: "bottom-right",
        theme: "light",
      });
    }
  };

  return (
    <div className="signup">
      <form action="">
        <h2 className="signup-heading">Sign Up</h2>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            placeholder="Phone"
            required
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Enter password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="re-Enter password"
            required
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>

        <button className="button" type="submit" onClick={handleClick}>
          Sign Up
        </button>
          <div className="register-link">
            <p>
              <Link to="/login">
                Login
              </Link>
            </p>
          </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Register;
