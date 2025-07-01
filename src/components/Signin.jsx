import React from "react";
import '../assets/style/style.css';
import { Link } from 'react-router-dom';

function Signin() {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form submitted");
  };

  return (
    <>
      
      <nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: '#003366' }}>
        <Link className="navbar-brand text-white" to="/">FORGIVE TECHIES</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
          <ul className="navbar-nav">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link text-white">HOME</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/course" className="nav-link text-white">COURSE</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contactus" className="nav-link text-white">CONTACT US</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/aboutus" className="nav-link text-white">ABOUT US</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/signin" className="nav-link text-white">SIGN IN</Link>
            </li>
          </ul>
        </div>
      </nav>

      
      <div className="signin-wrapper d-flex justify-content-center align-items-center mt-5"  style={{backgroundColor:'khaki'}} >
        <div className="signin-container">
          <form className="signin-form" onSubmit={handleSubmit}>
            <h2 className="text-center mt-4 mb-4">FORGIVE TECHIE PORTAL</h2>

            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your First Name" required />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your Last Name" required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter your email" required />

           

            <label htmlFor="selectExample">Choose an option</label>
            <select className="form-select" id="selectExample" name="option" required>
              <option value="" disabled selected>Open this select menu</option>
              <option value="1">FULL STACK DEVELOPMENT</option>
              <option value="2">PYTHON</option>
              <option value="3">MOBILE DEVELOPER</option>
              <option value="4">CYBER SECURITY</option>
              <option value="5">ARTIFICIAL INTELLIGENCE</option>
              <option value="6">MACHINE LEARNING</option>
              <option value="7">ETHICAL HACKING</option>
              <option value="8">AUTOMATIC TESTING (SELENIUM)</option>
              <option value="9">DATA SCIENCE</option>
            </select>

            <button type="submit" className="btn btn-primary mt-3">Sign In</button>

            <p className="register-link mt-3">
              Don't have an account? <Link to="/register">Register here</Link>
            </p>
          </form>
        </div>
      </div>

      
      <div className="footer-bottom">
        <span className="icons">
          <i className="bi bi-facebook"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-pinterest"></i>
          <i className="bi bi-whatsapp"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
        </span>
        <p >FORGIVETECHIES your trusted Knowledge Partner!!!! &copy; 2025 All rights reserved.</p>
      </div>
    </>
  );
}

export default Signin;
