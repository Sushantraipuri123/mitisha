import Topbar from '../../utilities/topbar/Topbar'
import './Service.css'
import { Link } from 'react-router-dom'
import ServiceItems from './serviteitems/ServiceItems'
import { FaArrowRightLong } from "react-icons/fa6";
import { GiStack } from "react-icons/gi";
import { BiSolidSelectMultiple } from "react-icons/bi";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { SiSpringsecurity } from "react-icons/si";
import { FaGlobe } from "react-icons/fa6";
import SaasApplication from './saasappliction/SaasApplication';
import { Helmet } from "react-helmet";

function Service() {
  return (
    <>
     <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/services" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4 ">
        <div className="hero-map-bg">
          <div className=" container pt-5 ">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>

                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Service
                  </li>
                </ul>

              </div>
            </div>
            <h1 className="  mt-4 pt-3 ms-2 syne">SAAS DEVELOPMENT SERVICES</h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-3 ">
        <div className="row ">
          <div className="col-lg-7 mt-2 col-md-7">
            <h4 className="syne">

              At Mitisha Softech, we craft secure, scalable, and user-friendly SaaS solutions tailored to <span className="text-orange">enhance your company’s</span> operations and growth.
            </h4>
          </div>
          <div className="col-lg-2 col-md-2"></div>
          <div className="col-lg-3 mt-2 col-md-4 text-center">
            <Link to="/contact" className="btn btn-mitisha text-black sora">Get in Touch</Link>
          </div>
        </div>
        <div className="mt-5 mb-4">
          <div className="small-hr-wrapper mt-2">
            <hr className="small-hr" />
            <hr className="full-hr" />
          </div>
        </div>
      </div>

      <div className="container mb-3">
        <ul>
          <li>Services and Solutions</li>
        </ul>
        <h2 className=' sectional-heading syne mt-4 '>Our <span className="text-orange">SaaS Development</span> Services Let You Win Big</h2>
        <p className='w-100  mt-4'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna.
        </p>
        <div className="mt-5">
          <ServiceItems />

          <div className="mt-4 d-flex justify-content-between flex-wrap">
            <div className="syne learn-more mt-3" >
              See More <span className="arrow-icon ms-3"><FaArrowRightLong /></span>
            </div>
            <div className="mt-3"> <Link to="/contact" className="btn btn-mitisha text-black btn-orange">Tell Us Abut Work</Link></div>
          </div>
          <div className="bg-web-service-img"></div>
          <div className="small-hr-wrapper mt-5">
            <hr className="small-hr" />
            <hr className="full-hr" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="d-flex justify-content-center">
        <ul className="d-inline mb-2">
                  <li className="sora text-muted">Safeguard Modern
                  </li>
                </ul>
        </div>

        <h2 className="sectonal-heading mt-3 text-center">
                Ready To Take The <span className="text-orange">Next Step?</span>
                </h2>

                <div className="mt-4 mb-4">
                  <div className="row">
                    <div className="col-lg-6 mt-3 p-3 ">
                     <div className="border-pricing p-5">
                     <h4 className='syne'>Get a Live Demo</h4>
                      <p className="mt-3 mb-3 text-muted me-3 font-14">
                      Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.
                      </p>
                      <div className="syne learn-more mt-3 mb-4" >
                      Request a Free Demo <Link to='/contact'> <span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
            </div>
                     </div>
                    </div>
                    <div className="col-lg-6 mt-3 p-3 ">
              <div className="border-pricing p-5">
              <h4 className='syne'>Start Now</h4>
                      <p className="mt-3 mb-3 text-muted me-3 font-14">
                      Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on.
                      </p>
                      <div className="syne learn-more mt-3 mb-4" >
                      Get In Touch <Link to='/contact'> <span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
            </div>
              </div>
                    </div>
                  </div>
                </div>
              
      </div>

      <div className="container  pb-lg-4 mb-5">
                <div className="small-hr-wrapper">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="help-section">
                    <div className="bg-web-img"></div>
                    <div className="container mt-5 pt-3">
                    <ul className="d-inline mb-2">
                  <li className="syne text-muted">High Quality and Performance
                  </li>
                </ul>
                        <div className="mt-3 pt-3 mb-3">
                            <h2 className='Sectional-heading'>Our Approach To <span className="text-orange"> SaaS Software </span></h2>
                            <div className="container mt-3 pt-3">
                                <div className="row ">
                                    {/* =============col-1 of hlp===== */}
                                    <div className="col-lg-6 col-md-6 mt-4 ">
                                       

                                        <div className="row mt-5 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <GiStack />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">01</span>  Tech Stack Choice </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   In order to guarantee that your SaaS solution is scalable, safe, and performance-optimized, we begin by choosing the finest tech stack.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <BiSolidSelectMultiple />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">02</span> Multi Tenant Architecture </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our multi-tenant architecture and scalable SaaS solutions enable several clients to share resources in a safe and efficient manner, improving both performance and cost-effectiveness.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaExternalLinkSquareAlt />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">03</span> External Services Integration</h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   To improve the functionality of your SaaS application, we can effortlessly integrate third-party services and APIs, allowing for seamless data exchange and capability extensions while maintaining system compatibility.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                       
                                    </div>

                                    {/* =============col-2 of hlp===== */}
                                    <div className="col-lg-6 col-md-6  mt-4 ">
                                        

                                        <div className="row mt-5 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <IoSettingsSharp />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">04</span> Scalability On Demand </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We provide SaaS solutions with flexible scalability so you can easily modify performance and resources in response to changing demands and growth, assuring maximum effectiveness and cost control.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        
                                        <div className="row mt-3 " >
                                          
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <SiSpringsecurity />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">05</span> Security Audit </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   We carry out comprehensive security audits to find and fix vulnerabilities, making sure your SaaS application is safe from attacks and conforms with data security regulations set by the industry.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row mt-3 " >
                                           
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaGlobe />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">06</span>  Smooth Deployment </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   With effective setup and configuration, we guarantee a flawless deployment process for your SaaS product, minimizing disruptions and facilitating a seamless transfer from development to live operation.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>



                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SaasApplication/>
    </>
  )
}

export default Service
