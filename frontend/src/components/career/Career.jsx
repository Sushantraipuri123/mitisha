import { Link } from "react-router-dom";
import Topbar from "../../utilities/topbar/Topbar";
import './Career.css'
import ChooseUs from "./chooseus/ChooseUs";
import Sliders from "../slider/Slider";
import { Helmet } from "react-helmet";

function Career() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/career" />
      </Helmet>
        <Topbar />
      
        <div className="hero-bg mb-4 ">
        <div className="hero-map-bg">
          <div className=" container pt-5 ">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
              <span className="sora">Home</span>
              
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Careers</li>
                </ul>
            
              </div>
            </div>
            <h1 className=" Sectional-heading mt-4 pt-3 ms-2 syne">CAREERS</h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-5 ">
        <div className="row ">
          <div className="col-lg-4 mt-2 col-md-7">
          <h2 className="syne">
          Inspire and Get Inspired by <span className="text-orange">Professional</span> Experts
          </h2>
          </div>
          <div className="col-lg-4 col-md-2"></div>
          <div className="col-lg-4 mt-2 col-md-4 text-center">
            <p className="sora text-muted text-start">
            Look for opportunities to learn from and be inspired by professionals in the field. Make connections with industry leaders who inspire growth and innovation, and use their perspectives to advance your career.
            </p>
          </div>
        </div>
      </div>

     <div className="container mb-5">
     <div className="divider mt-5 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type">Full Time</span>
                            <h4 className="syne mt-3">UI and Web Developer</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Design intuitive interfaces and build dynamic websites. Collaborate on projects, enhance user experiences, and shape the digital landscape.
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>

                    <div className="divider mt-3 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type">Full Time</span>
                            <h4 className="syne mt-3">App Developer</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Create innovative mobile applications, design engaging user experiences, and implement robust functionality. Drive technological advancement and enhance user engagement.
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>

                    
                    <div className="divider mt-3 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type">Full Time</span>
                            <h4 className="syne mt-3">UI/UX Designer</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Make designs that are aesthetically pleasing and intuitive. To create captivating digital goods, concentrate on improving user experience through wireframes, prototypes, and user research.
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>
                    
                    <div className="divider mt-3 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                   
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type-remote">Remote</span>
                            <h4 className="syne mt-3">Bidder</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Identify project opportunities, craft competitive proposals, and secure contracts. Leverage negotiation skills to achieve successful business deals and drive company growth.
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>


                    
                    <div className="divider mt-3 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type">Full Time</span>
                            <h4 className="syne mt-3">Digital Marketing Executive</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Drive brand awareness and growth through strategic online campaigns. Utilize SEO, PPC, social media, and analytics to optimize marketing efforts and achieve business goals.
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>

          
                    <div className="divider mt-3 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type">Full Time</span>
                            <h4 className="syne mt-3">Blockchain Developer</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Create secure, decentralized solutions with blockchain technology. Develop smart contracts and blockchain-based applications, ensuring transparency, security, and efficiency in digital transactions and record-keeping.
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>

          
                    <div className="divider mt-3 pt-lg-3 mb-4">
                        <div className="small-hr-wrapper">
                            <hr className="small-hr" />
                            <hr className="full-hr" />
                            <hr className="small-hr" />
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6 mt-3 ">
                            <span className="work-type">Full Time</span>
                            <h4 className="syne mt-3">Full Stack Developer</h4>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-3 sora text-muted">
                        Construct and oversee entire web apps from start to finish. proficiency with dynamic solutions using client-side and server-side technologies.  
                        </div>
                        <div className="col-lg-4 col-md-12 text-center  mt-3">
                            
                           
                            <Link  to='/contact' className="btn-mitisha text-black bg-none">Apply now</Link>
                            
                        </div>
                       
                    </div>



     </div>


{/* =================why choose us================================================================ */}
<ChooseUs/>
 {/* =============================================== */}
 <Sliders/>
    </>
  )
}

export default Career
