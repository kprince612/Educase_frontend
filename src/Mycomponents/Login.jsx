import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Login() {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!loginForm.email.trim() || !loginForm.password.trim()) {
      handleError("Email and password are required");
      return;
    }

    try {
      const response = await axios.post("https://educase-backend-1vnh.onrender.com/api/login", loginForm);

      if (response.data.user) {
        handleSuccess("Login Successfully");

        navigate("/account", { state: { name: response.data.user.name, email: response.data.user.email } });

        setLoginForm({ email: "", password: "" });
      }
    } catch (err) {
      alert("Login error or user may not exist, sign up first");
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Sign in to your <br /> <span className="highlight">PopX account</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address" 
            name="email" 
            id="email" 
            value={loginForm.email} 
            onChange={handleChange} 
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            name="password" 
            id="password" 
            value={loginForm.password} 
            onChange={handleChange} 
          />
        </div>

        <button className="login-button" onClick={handleSubmit}>Login</button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
