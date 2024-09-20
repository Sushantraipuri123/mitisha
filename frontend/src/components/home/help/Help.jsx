import './Help.css'
import { RiTeamLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import { FaRegFolder } from "react-icons/fa6";  
import { TbLockSquareRounded } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGlobeOutline } from "react-icons/io5";
function Help() {
    return (
        <>
            <div className="container  pb-lg-4 mb-5">
                <div className="small-hr-wrapper">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="help-section">
                    <div className="bg-web-img"></div>
                    <div className="container mt-5 pt-3">
                        <div className="mt-3 pt-3 mb-3">
                            <h2 className='Sectional-heading'>How We Can <span className="text-orange"> Help You </span></h2>
                            <div className="container mt-3 pt-3">
                                <div className="row ">
                                    {/* =============col-1 of hlp===== */}
                                    <div className="col-lg-6 col-md-6 mt-4 ">
                                        <h4 className='syne'>IT Services</h4>

                                        <div className="row mt-5 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <RiTeamLine />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">01</span> Dedicated Team </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our dedicated team combines expertise and passion to deliver exceptional results, ensuring each project exceeds expectations and achieves success.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaRegBell />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">02</span> QA and Testing </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our QA and testing services ensure flawless performance, reliability, and user satisfaction by identifying and resolving issues before launch.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <FaRegFolder />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">03</span>SaaS</h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our SaaS solutions offer scalable, flexible, and cost-effective software services, enabling seamless integration and efficient management for your business.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                       
                                    </div>

                                    {/* =============col-2 of hlp===== */}
                                    <div className="col-lg-6 col-md-6  mt-4 ">
                                        <h4 className='syne ms-3'>IT Solutions</h4>

                                        <div className="row mt-5 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <TbLockSquareRounded />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">04</span> Blockchain </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our blockchain solutions enhance security, transparency, and efficiency, providing innovative decentralized applications and smart contracts for a trusted digital future.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>

                                        
                                        
                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <GiArtificialIntelligence />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">05</span> Artificial Intelligence  </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our AI solutions drive innovation with intelligent automation, data-driven insights, and advanced algorithms, transforming your business processes and decision-making.
                                                   </p>
                                                </div>
                                            </div>
                                        </div>



                                        <div className="row mt-3 " >
                                            <div className="small-hr-wrapper">
                                                <hr className="small-hr" />
                                                <hr className="full-hr" />
                                            </div>
                                            <div className="d-flex mt-3 justify-content-evenly gap-4 flex-wrap">
                                                <div className="help-icon">
                                                <IoGlobeOutline />
                                                </div>
                                                <div className="content">
                                                   <h5 className='syne help-heading'> <span className="text-orange syne me-3">06</span>  Internet of Things </h5>
                                                   <p className='mt-4 syne help-text text-secondary'>
                                                   Our IoT solutions connect devices seamlessly, enabling real-time data exchange, automation, and intelligent insights to enhance operational efficiency and innovation.
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
        </>
    )
}

export default Help
