import './SaasApplication.css'
import { IoIosStats } from "react-icons/io";
import { LuFlag } from "react-icons/lu";
import { BsFileEarmarkEasel } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { BiSolidUserAccount } from "react-icons/bi";
import { AiOutlineSolution } from "react-icons/ai";
import { CiCloud } from "react-icons/ci";
import { MdTipsAndUpdates } from "react-icons/md";
import { Link } from 'react-router-dom';

function SaasApplication() {
    return (
        <>
            <div className="container-fluid bg-footer-saas">
                <div className="semicircle"></div> {/* Add the semicircle element */}
                <div className="container mt-4">
                    <div className="bg-web-saas-img "></div>
                    <div className="d-flex justify-content-center">
                        <ul className="d-inline mb-2 mt-5 pt-lg-3">
                            <li className="sora text-white">Always The Best</li>
                        </ul>
                    </div>
                </div>
                <h2 className="sectonal-heading mt-4 mb-4 text-white text-center">
                    Types Of <span className="text-orange">SaaS Applications</span> We Deliver
                </h2>
                <div className="container text-soft w-50 text-center">
                    We offer tailored SaaS solutions, including CRM, ERP, and project management tools, to boost productivity.
                </div>

                <div className="container mt-4 pb-4">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><IoIosStats /></span>  CRMs Platforms </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><LuFlag /></span>  ERPs Platforms </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><BsFileEarmarkEasel /></span>  Marketing Software </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><BsLaptop /></span>  Project Management Systems </h5>
                        </div>

                    </div>

                    <div className="row mt-3">
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><BiSolidUserAccount /></span>    Accounting Systems </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><AiOutlineSolution /></span>  Document Auto. Solutions </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><CiCloud /></span>  Cybersecurity Platforms </h5>
                        </div>
                        <div className="col-lg-3 col-md-6 mt-3 ">
                            <h5 className='syne help-heading text-white'> <span className="text-orange syne me-3"><MdTipsAndUpdates /></span>  HR/HRM Software </h5>
                        </div>

                    </div>
                    <div className="mt-5 pt-lg-2 d-flex justify-content-center"> <Link to="/contact" className="btn btn-mitisha text-white btn-orange">Tell Us Abut Work</Link></div>
                </div>
            </div>
        </>
    )
}

export default SaasApplication
