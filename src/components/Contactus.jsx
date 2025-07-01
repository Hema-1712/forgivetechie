import React from "react";
import '../assets/style/cont.css';
  
import { Link } from 'react-router-dom';

function Contactus() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out!");
  };

  return (
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
      <div className="contact-container container mt-5 mb-5" style={{backgroundColor:'khaki'}} >
        <h2 className="text-center mb-4">📞 Contact Us</h2>

        <div className="row g-4">
          {/* Contact Info */}
          <div className="col-md-6">
            <h4>Our Techies</h4>
            <p>
              <strong>FORGIVE TECHIES</strong><br />
           Near Iyyapan Kovil,<br />
           JPR Nagar,Koramangala<br />
Bangalore<br />
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View on Map</a>
            </p>

            <h4>Phone</h4>
            <p>📱 +91-9990767890<br />☎️ Customer Care: 24/7</p>

            <h4>Email</h4>
            <p>📧 support@forgivetechies.com<br />📦 orders@forgivetechies.com</p>

            <h4>Working Hours</h4>
            <p>Mon–Sat: 9:00 AM – 9:00 PM<br />Sun: 10:00 AM – 5:00 PM</p>
          </div>

          {/* Contact Form */}
          <div className="col-md-6">
            <h4>Send Us a Message</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">First Name</label>
                <input type="text" id="name" className="form-control" placeholder="Enter Your Name" required />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" className="form-control" placeholder="Enter Your Email id" required />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea id="message" className="form-control" placeholder="Convey Your Queries" rows="5" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
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
            <p>FORGIVETECHIES your trusted Knowledge Partner!!!! &copy; 2025 All rights reserved.</p>
          
        
        
      </div>
    </>
  );
}

export default Contactus;
