import "./Collaborate.css"
import { GiThink } from "react-icons/gi";
import { SiStartrek } from "react-icons/si";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiLogoGraphql } from "react-icons/bi";
import { Link } from "react-router-dom";

function Collaborate() {
    return (
        <>
            <div className="container-fluid bg-collaborate ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <ul>
                            <li className="syne">Discover Our Company</li>
                        </ul>
                        <h3 className='Sectional-heading syne mt-3 mb-3'><span className="text-orange"> About </span> Us  </h3>
                        <div className="row mt-5">
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                    <GiThink />
                                    </div>
                                    <h5 className='syne help-heading'>  Thinking Big </h5>
                                </div>
                                <p className="text-muted mt-4">
                                We commence by exploring the vast possibilities of your ideas. Our team dives into your vision and developing a creative, forward-thinking strategy that translates your ambitious goals into a compelling, actionable path.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                    <SiStartrek />
                                    </div>
                                    <h5 className='syne help-heading'>Starting Small </h5>
                                </div>
                                <p className="text-muted mt-4">
                                We begin with a targeted, high-impact prototype, or MVP. This enables us to test fundamental capabilities and validate assumptions with minimal risk, ensuring that we establish a solid foundation before expanding to fulfill the full breadth of your vision.
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                        <BsGraphUpArrow />
                                    </div>
                                    <h5 className='syne help-heading'>  Creating Fast </h5>
                                </div>
                                <p className="text-muted mt-4">
                                To expedite development, we employ agile approaches. We swiftly develop and deliver functioning components owing to our iterative approach, which also enables you to evaluate work, test features, and offer remarks in real-time. 
                                </p>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 ">
                                <div className="d-flex gap-3 align-items-center">
                                    <div className="collaborate-icon">
                                        <BiLogoGraphql />
                                    </div>
                                    <h5 className='syne help-heading'> Innovating Scale </h5>
                                </div>
                                <p className="text-muted mt-4">
                                We set forth by verifying the essential features before scaling your solution to accommodate increasing demand. We promote constant innovation, performance optimization, and feature additions to make sure your software adapts to your needs over time.
                                </p>
                            </div>

                        </div>
                        <div className="mt-4 d-flex justify-content-between flex-wrap">
                            <div className="syne learn-more mt-2" >
                                {/* Learn More <span className="arrow-icon ms-3"><FaArrowRightLong /></span> */}
                            </div>
                            <div className="mt-2"> <Link to="/about" className="btn btn-mitisha text-black btn-orange">How We Work</Link></div>
                        </div>
                        <div className="bg-web-bottom-img"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collaborate
