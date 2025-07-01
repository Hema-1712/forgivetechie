import React from "react";
import '../assets/style/abo.css';
  import aimage1 from '../assets/images/ab.jpg';
  import aimage2 from '../assets/images/bbb.jpg';
  import { Link } from 'react-router-dom';


function Aboutus() {
    return(
       <><nav className="navbar navbar-expand-lg px-4 justify-content-end" style={{ backgroundColor: '#003366' }}>
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
    <div className="container-fluid mt-4 ps-5" style={{backgroundColor:'khaki'}}>
                <div className="row" style={{ borderRadius: '10px' }}>
                    <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>

                        <img src={aimage1} className="img-fluid" style={{ height: '500px', width: '500px' , borderRadius: '10px' }} />
                    </div>
                    <div className="col-md-6 mt-3" style={{ borderRadius: '10px' }}>
                        <h2>About Us</h2>
                        About Us
Welcome to FORGIVE TECHIES – Empowering Futures Through Technology

At FORGIVE TECHIES, we are committed to shaping tomorrow’s tech leaders. Established in 2015, our institute has become a trusted name in computer education, offering industry-relevant training that bridges the gap between academic knowledge and real-world skills.

Our Vision
To create a community of skilled professionals who are equipped to meet the challenges of the digital world and contribute to the evolving landscape of technology.

Our Mission
To provide high-quality, affordable computer education for students, professionals, and entrepreneurs.

To offer hands-on training through practical assignments and live projects.

To stay updated with the latest technologies and continually upgrade our curriculum.
                    </div>
                </div>
            </div>
            <div className="container-fluid mt-4 ps-5"  style={{backgroundColor:'khaki'}}>
                <div className="row" style={{ borderRadius: '10px' }}>
                    <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>
                        <h2>WHY CHOOSE US</h2>
                       Why Choose Us?
✅ Experienced Faculty – Learn from certified professionals with years of industry experience.<br />
✅ Industry-Aligned Curriculum – Stay ahead with courses designed for today’s tech demands.<br />
✅ Modern Infrastructure – Well-equipped labs, high-speed internet, and smart classrooms.<br />
✅ Placement Support – Get guidance and opportunities for internships and job placements.<br />
✅ Flexible Learning – Choose from classroom, weekend, or online learning modes.<br />

Courses We Offer<br />
Programming Languages (C, C++, Java, Python)<br />

Web Development (HTML, CSS, JavaScript, React)<br />

Data Science and AI<br />

Graphic & Web Design<br />

Tally & Office Automation<br />

Hardware & Networking<br />

Cybersecurity Essentials<br />

Join Us Today<br />
Whether you're a student, job seeker, or professional looking to upskill, [Your Institute Name] is your gateway to a successful career in technology. Let us help you build a future where knowledge meets opportunity.
                                
   </div>

                    <div className="col-md-6 mt-3 mb-3" style={{ borderRadius: '10px' }}>
                        <img
                            src={aimage2}
                            alt="Why Choose Us"
                            className="img-fluid"
                            style={{ height: '500px', width: '500px', borderRadius: '10px' }} />
                    </div>
                </div>
            </div><div className="footer-bottom">
                <span className="icons">
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-linkedin"></i>
                    <i className="bi bi-pinterest"></i>
                    <i className="bi bi-whatsapp"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                </span>
                <p>FORGIVE TECHIES your trusted Knowledge Partner!!!!&copy; 2025 All rights reserved. </p>
            </div></>
    );
}
 export default Aboutus;

                        
