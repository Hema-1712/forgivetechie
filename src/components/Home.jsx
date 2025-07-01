import React from 'react';
import '../assets/style/style.css';
  import { Link } from 'react-router-dom';
  import banner from'../assets/images/bann.jpg';

 
function Home() {
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
            <Link to="/aboutus" className="nav-link text-white">ABOUTUS</Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signin" className="nav-link text-white">SIGN IN</Link>
          </li>
        </ul>
      </div>
    </nav><div className="content mt-4">
        <div className="marquee-container">
          <div className="marquee-text">
            🚀 Welcome to Techies! | 💡 We build modern web apps | 📞 Contact us for your next project | 🔐 Secure, Scalable, Smart Tech Solutions
          </div>
        </div>
      </div><header className="banner">
        <img src={banner} alt="Institute Banner" className="img-fluid w-100" />
        <div className="banner-text">
          <h1>Welcome to MyInstitute</h1>
          <p>Your Future Begins Here</p>
        </div>
      </header><section className="about-section py-5 text-center">
        <div className="container">
          <h2>About Us</h2>
          <p className="lead">We are a premier institute offering quality education with experienced faculty, modern facilities, and a strong commitment to student success.</p>
        </div>
      </section><section className="courses-section bg-khaki py-5">
        <div className="container">
          <h2 className="text-center mb-4">Our Courses</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>ARTIFICIAL INTELLIGENCE</h4>
                <p>Learn programming, AI, data science, and more.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>DATA SCIENCE</h4>
                <p>With Python Data</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>FULL STACK DEVELOPMENT</h4>
                <p>Frontend, Backend, Database</p>
              </div>
            </div>
             <div className="col-md-4">
              <div className="card p-3 shadow-sm">
                <h4>MOBILE DEVELOPER</h4>
                <p>With All Devices</p>
              </div>
            </div>
          </div>
        </div>
      </section><section className="testimonial-section py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Students Say</h2>
          <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active">
                <div className="testimonial text-center">
                  <p className="testimonial-text">"The faculty here is so supportive and knowledgeable. I gained not just education but confidence too!"</p>
                  <h5>- Priya Sharma</h5>
                  <small>Artificial Intelligence</small>
                </div>
              </div>

              <div className="carousel-item">
                <div className="testimonial text-center">
                  <p className="testimonial-text">"Amazing infrastructure and resources. The learning experience has been top-notch."</p>
                  <h5>- Arjun Mehta</h5>
                  <small>Python Developer</small>
                </div>
              </div>

              <div className="carousel-item">
                <div className="testimonial text-center">
                  <p className="testimonial-text">"I loved the extracurriculars and student engagement. Best years of my life!"</p>
                  <h5>- Ananya Verma</h5>
                  <small>Cyber Security</small>
                </div>
              </div>

            </div>


            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section><footer>
        <div className="footer-content">
          <div className="footer-links">
            <h3>MY ACCOUNT</h3>
            <ul>
              <li><a href="#">Saved Addresses</a></li>
              <li><a href="#">Payment History</a></li>
              <li><a href="#">Account Settings</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>TECHIES</h3>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">COURSE</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">CONTACT US</a></li>
              <li><a href="#">SIGN IN</a></li>

            </ul>
          </div>

          <div className="footer-links">
            <h3>SUPPORT</h3>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
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
          <p>FORGIVE TECHIES your trusted Knowledge Partner!!!! &copy; 2025 All rights reserved.</p>
        </div>
      </footer></>
    
  );
}

    

export default Home;
