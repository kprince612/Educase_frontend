import React, { useState } from "react";
import axios from "axios"
import "./Signup.css"
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Signup() {
  const [signUpData, setSignUpData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "yes",
  });

    const navigate = useNavigate();

  const handleChange = (e) => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault ();

    if (!signUpData.name.trim () || !signUpData.email.trim () || !signUpData.password.trim ()) {
      handleError ("all fields are required");
      return;
    }
    
    try {
      const response = await axios.post ("https://educase-backend-1vnh.onrender.com/api/signup", signUpData);
      console.log ("signup data saved:", response.data);

      setSignUpData ({
        name: "",
        phone: "",
        email: "",
        password: "",
        company: "",
        agency: "",
      })

      handleSuccess ("signup successfully");
      navigate ("/login");
    }

    catch (err) {
      handleError ("error in sign up:", err);
    }
  }
  return (
    <div>
      <div className="form-container">
      <h2 className="form-title">Create your PopX account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name">
          Full Name<span className="required">*</span>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            onChange={handleChange}
            placeholder="enter name"
          />
        </label>

        <label className="form-label" htmlFor="phone">
          Phone number<span className="required">*</span>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-input"
            onChange={handleChange}
            placeholder="enter mobile number"
          />
        </label>

        <label className="form-label" htmlFor="email">
          Email address<span className="required">*</span>
          <input
            type="email"
            name="email"
            id="email"
            className="form-input"
            onChange={handleChange}
            placeholder="enter email"
          />
        </label>

        <label className="form-label" htmlFor="password">
          Password<span className="required">*</span>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
            onChange={handleChange}
            placeholder="enter password"
          />
        </label>

        <label className="form-label" htmlFor="company">
          Company name
          <input
            type="text"
            name="company"
            id="company"
            className="form-input"
            onChange={handleChange}
            placeholder="enter company"
          />
        </label>

        <label className="form-label">Are you an Agency?<span className="required">*</span></label>
        <div className="radio-group">
          <label className="radio-label" htmlFor="agency">
            <input
              type="radio"
              name="agency"
              id="agency"
              value="yes"
              onChange={handleChange}
            />
            <span className="radio-custom"></span> Yes
          </label>
          <label className="radio-label" htmlFor="agency">
            <input
              type="radio"
              name="agency"
              id="agency"
              value="no"
              onChange={handleChange}
            />
            <span className="radio-custom"></span> No
          </label>
        </div>

        <button type="submit" className="submit-button">
          Create Account
        </button>
      </form>
    </div>

    <ToastContainer />
    </div>
  )
}

export default Signup
