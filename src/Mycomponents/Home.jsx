import React from 'react'
import "./Home.css"
import { ToastContainer } from 'react-toastify'

function Home() {
  return (
    <div>
      <div className="welcome-container">
      <div className="welcome-box">
        <h1 className="title">Welcome to PopX</h1>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="mt-6">
          <button className="button login"><a href="/signup">Create Account</a></button>
          <button className="button login"><a href="/login">Already Registered? Login</a></button>
        </div>
      </div>
    </div>
    <ToastContainer />
    </div>
  )
}

export default Home
