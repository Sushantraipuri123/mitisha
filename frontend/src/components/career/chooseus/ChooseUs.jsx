import "./ChooseUs.css"
import chooseus from '/why-choose-us.jpg'
import { Link } from "react-router-dom"
import { SiStartrek } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiLogoGraphql } from "react-icons/bi";
function ChooseUs() {
    return (
        <>
            <div className="container-fluid bg-collaborate mb-5 pb-4 ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <div className="row">
                            <div className="col-lg-6 mt-3 ">
                                <ul className="mt-4">
                                    <li className="syne">Work With Us</li>
                                </ul>
                                <h2 className='Sectional-heading syne mt-3 pt-lg-3 pb-lg-3 mb-3'>Why  <span className="text-orange"> Choose  </span> Us? </h2>
                                <p className="sora text-muted mt-3">
                                    With customized solutions, a group of professionals, and a dedication to innovation, Mitisha Softech stands apart. We guarantee your success by providing premium web and app development, digital marketing, and other services.
                                </p>
                                <p className="sora text-muted mt-2">
                                    Choose Mitisha Softech for expert solutions, innovative strategies, and exceptional service in web and app development, ensuring your business thrives.
                                </p>
                                <div className="mt-4">
                                    <Link to='/about' className="btn-mitisha text-black bg-none">Read More</Link>
                                </div>
                            </div>
                            <div className="col-lg-6 mt-3 ">
                                <div className="why-choose-us-img">
                                    <img src={chooseus} alt="our team" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container mt-4 mb-4 ">
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <h2 className="syne Sectional-heading ms-2">5+</h2>
                            <div className="small-hr-wrapper">
                                <hr className="small-hr" />
                                <hr className="full-hr" />
                            </div>
                            <p className="sora text-muted mt-2">Years of Experience In The IT Industry</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <h2 className="syne Sectional-heading ms-2">199+</h2>
                            <div className="small-hr-wrapper">
                                <hr className="small-hr" />
                                <hr className="full-hr" />
                            </div>
                            <p className="sora text-muted mt-2">Satisfied Clients We Have Served Globally</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <h2 className="syne Sectional-heading ms-2">199+</h2>
                            <div className="small-hr-wrapper">
                                <hr className="small-hr" />
                                <hr className="full-hr" />
                            </div>
                            <p className="sora text-muted mt-2">Projects Delivered</p>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 ">
                        <h2 className="syne Sectional-heading ms-2">19+</h2>
                            <div className="small-hr-wrapper">
                                <hr className="small-hr" />
                                <hr className="full-hr" />
                            </div>
                            <p className="sora text-muted mt-2">Awards & Certifications Of Our Work</p>
                        </div>

                    </div>
                <div className="bg-web-bottom-img"></div>
                </div>

            </div>
        </>
    )
}

export default ChooseUs
