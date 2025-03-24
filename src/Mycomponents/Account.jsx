import React, { useState, useEffect } from "react";
import "./Account.css";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function Account() {
  const location = useLocation();
  const profileDetails = location.state || {};

  const [loginForm, setLoginForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (profileDetails.name && profileDetails.email) {
      setLoginForm({
        name: profileDetails.name,
        email: profileDetails.email,
      });
    }
  }, [profileDetails]);

  return (
    <div className="account-container">
      <h2>Account Settings</h2>
      <div className="account-card">
        <div className="profile-section">
          <img
            src="https://i.ibb.co/RkwvjB3k/image126.webp"
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-info">
            <h3>{loginForm.name || "Guest"}</h3>
            <p className="email">{loginForm.email || "guest@example.com"}</p>
          </div>
        </div>
        <p className="description">
          Welcome to your account settings. Here you can update your personal information.
        </p>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Account;
