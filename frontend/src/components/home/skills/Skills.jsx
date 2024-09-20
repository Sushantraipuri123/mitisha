import "./Skills.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Skills() {
    return (
        <>
            <div className="container mt-5 pt-lg-3">
                <ul>
                    <li className="syne">Our Skill</li>
                </ul>
                <div className="row ">
                    <div className="col-lg-6 ">
                        <h2 className='Sectional-heading syne mt-3 mb-3'>Business  <span className="text-orange"> Success  </span> With Technology </h2>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <p className="text-muted">
                            At Mitisha Softech, we specialize in web and app development, digital marketing, UI/UX design, QA & Testing, and the Internet of Things, delivering comprehensive tech solutions for modern businesses.
                        </p>
                    </div>
                </div>

                <div className="row mt-2 px-2">
                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2 mb-3">
                        <h6 className="syne">Web Development</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={90}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={90}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">90%</span>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2">
                        <h6 className="syne">App Development</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={80}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={80}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">80%</span>
                        </div>
                    </div>
                  

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2">
                        <h6 className="syne">Digital Marketing</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={85}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={85}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">85%</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2">
                        <h6 className="syne"> UI/UX Design </h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={85}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={85}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">85%</span>
                        </div>
                    </div>

                </div>


                <div className="row mt-2 px-2">
                    <div className="col-lg-3 col-md-6 col-sm-12  mt-3 mb-3">
                        <h6 className="syne">QA & Testing</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={80}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={80}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">80%</span>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-3">
                        <h6 className="syne">Artificial Intelligence</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={90}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={90}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">90%</span>
                        </div>
                    </div>
                  

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-3">
                        <h6 className="syne">Blockchain</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={90}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={90}
                                    variant="danger"
                                    style={{
                                        height: '5px',
                                        backgroundColor: '#f57c00',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">90%</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center   mt-3">
                    <div className="syne learn-more">
                                 More <Link to='/services'> <span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
                            </div>
                    </div>

                </div>

               
            </div>
        </>
    )
}

export default Skills
