import React from "react";
import '../assets/style/style.css';
 
  import { Link } from 'react-router-dom';
import simg1 from '../assets/images/ai.jpg';
import simg2 from '../assets/images/ats.jpg';
import simg3 from '../assets/images/cs.jpg';
import simg4 from '../assets/images/ds.jpg';
import simg5 from '../assets/images/fd.jpg';
import simg6 from '../assets/images/md.jpg';




function Course(){
    return(  
      <><></><nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: '#003366' }}>
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
              <Link to="/courses" className="nav-link text-white">COURSES</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/aboutus" className="nav-link text-white">ABOUT US</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contactus" className="nav-link text-white">CONTACT US</Link>
           </li>
            <li className="nav-item mx-2">
              <Link to="/signin" className="nav-link text-white">SIGN IN</Link>
            </li>
          </ul>
        </div>
      </nav><div className="content mt-4 mb-4">
          <div className="marquee-container">
            <div className="marquee-text">
              <h4>            🚀 Welcome to Techies! | 💡 We build modern web apps | 📞 Contact us for your next project | 🔐 Secure, Scalable, Smart Tech Solutions
</h4>
            </div>
          </div>
        </div><div className="container mt-5 mb-5 justify-content-center align-item-center">
          <h1 style={{ textAlign: 'center' }}>Our COURSES</h1>
          <div className="row ms-3 me-3" style={{ gap: '30px', backgroundColor: 'white', borderRadius: '10px' }}>

            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg1} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />

              <div className="card-body">
                <h3 className="card-title">ARTIFICIAL INTELLIGENCE</h3>
                <p className="card-text">
                 Rs. 25,499<br />
                </p>
                <a href="" className="btn btn-danger">BUY NOW</a>

              </div>
            </div>
            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg2} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">AUTOMATIC TESTING</h3>
                <p className="card-text"> 
                  Rs.36,600<br /></p>
                <a href="" className="btn btn-danger">BUY NOW</a>
              </div>
            </div>


            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg3} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">CYBER SECURITY</h3>
                <p className="card-text"> 
                  Rs.51,990<br /></p>
                <a href="" className="btn btn-danger">BUY NOW</a>
              </div>
            </div>
            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg4} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">DATA SCIENCE</h3>
                <p className="card-text"> 
                 Rs.26,999<br /></p>
                <a href="" className="btn btn-danger">BUY NOW</a>
              </div>
            </div>


            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg5} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">FRONT END DEVELOPMENT</h3>
                <p className="card-text"> 
                 Rs. 25,999<br />
                </p>
                <a href="" className="btn btn-danger">BUY NOW</a>
              </div>
            </div>
            <div className="card mt-4" style={{ width: '20rem' }}>
              <img src={simg6} className="card-img-top img-fluid" style={{ height: '300px', width: '300px' }} />
              <div className="card-body">
                <h3 className="card-title">MOBILE DEVELOPMENT</h3>
                <p className="card-text">
                  Rs.21,199<br /></p>
                <a href="" className="btn btn-danger">BUY NOW</a>
              </div>
            </div>


      
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
          <p>MED PLUS your trusted Healthy Partner!!!!&copy; 2025 All rights reserved. </p>
        </div></>
  );
}
export default Course;