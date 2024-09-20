import { Link } from "react-router-dom";
import Topbar from "../../utilities/topbar/Topbar";
import './About.css';
import Overview from "./overviewAbout/Overview";
import Experience from "./experience/Experience";
import Mission from "./mission/Mission";
import Workwithus from "./workwithus/Workwithus";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/about" />
      </Helmet>
      <Topbar />
      <div className="hero-bg mb-4 ">
        <div className="hero-map-bg">
          <div className=" container pt-5 ">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
              <span className="sora">Home</span>
              
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">About us</li>
                </ul>
            
              </div>
            </div>
            <h1 className=" Sectional-heading mt-4 pt-3 ms-2 syne">About Us</h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-5 ">
        <div className="row ">
          <div className="col-lg-7 mt-2 col-md-7">
          <h4 className="syne">
          <span className="text-orange">Seamlessly integrating </span>web development, app creation, digital marketing, UI/UX, QA & Testing, and IoT. 
          <span className="text-orange">Contact us to streamline</span> your business
          </h4>
          </div>
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-3 mt-2 col-md-4 text-center">
            <Link to="/" className="btn btn-mitisha text-black sora">Contact us</Link>
          </div>
        </div>
      </div>

      {/* ========Firm Overview================================ */}
      <Overview/>
      {/* ========Experience section================================ */}
      <Experience/>
      {/* ========Mission section================================ */}
      <Mission/>
      {/* ========Work With Us section================================ */}
      <Workwithus/>


    </>
  );
}

export default About;
