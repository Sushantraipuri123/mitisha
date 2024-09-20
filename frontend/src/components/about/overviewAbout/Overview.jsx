import "./Overview.css"
import aboutImg from '/public/about-img-1.png'
import { SiTicktick } from "react-icons/si";
function Overview() {
    return (
        <>
            <div className="container-fluid  bg-collaborate ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <div className="row">
                            <div className="col-lg-5 ">
                                <div className="parent-about-img">
                                    <div className="bg-circle-img"></div>
                                    <div className="img-firm-container">
                                        <img src={aboutImg} alt="about image" className="about-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 pt-5 ps-2">
                                <ul>
                                    <li className="syne ">Firm Overview</li>
                                </ul>
                                <h2 className='Sectional-heading syne mt-4 me-2 mb-3'>We Specialize in <span className="text-orange"> Transforming Your Idea </span> or Business in The Current Digital Era. </h2>
                                <p className="text-muted mt-3">
                                Our expertise lies in adapting your concepts and enterprise for the digital age, utilizing inventive approaches to stimulate expansion and productivity in the current technologically advanced society.
                                </p>
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 mt-2 col-sm-6">
                                        <ul className="list-unstyled mt-3">
                                            <li><span className="icon-font"><SiTicktick /></span> <span className="ms-2 sora">Innovative Solutions</span></li>
                                            <li className="mt-2"><span className="icon-font"><SiTicktick /></span> <span className="ms-2 sora">Growth and Efficiency</span></li>
                                            <li className="mt-2"><span className="icon-font"><SiTicktick /></span><span className="ms-2 sora">Tailored Strategies</span></li>
                                            <li className="mt-2"><span className="icon-font"><SiTicktick /></span><span className="ms-2 sora">Seamless Integration</span></li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6 col-lg-6 mt-2 col-sm-6 align-items-end"> </div>                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Overview
