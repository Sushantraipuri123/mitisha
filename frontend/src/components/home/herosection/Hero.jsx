import { useState, useRef } from 'react';
import { Overlay, Popover } from 'react-bootstrap';
import './Hero.css';
import {Link} from 'react-router-dom'

function Hero() {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const [popoverContent, setPopoverContent] = useState("");
    const ref = useRef(null);

    const handleHover = (event, content) => {
        setShow(true);
        setTarget(event.target);
        setPopoverContent(content);
    };

    const handleLeave = () => {
        setShow(false);
        setTarget(null);
        setPopoverContent("");
    };

    return (
        <div ref={ref}>
            <div className="container-fluid">
                <div className="hero-section">
                    <div className="slides">
                        <img className="img-fluid hero-img" src="https://thumbnails.production.thenounproject.com/pWrMjWlaRAsM5o7A9UrHTkWlI1U=/fit-in/1000x1000/photos.production.thenounproject.com/photos/A0A14528-398D-4A47-9494-5038CD72B0B6.jpg" alt="Image 1" />
                        <img className="img-fluid hero-img" src="https://images.ctfassets.net/pdf29us7flmy/4C1SDkpwtqI2xy9GWabT42/af92a6a302d118c09f2686c22af3d9a8/shutterstock_796329814-red__1_.jpg?w=720&q=100&fm=jpg" alt="Image 2" />
                        <img className="img-fluid hero-img" src="https://images.unsplash.com/photo-1560264357-8d9202250f21?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwc2VydmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="Image 3" />
                    </div>
                    <div className="hero-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-12 col-sm-12 right-col">
                                    <h6 className="text-start mb-5 hero-min-head syne"><span className="text-orange"> IT </span> Solutions</h6>
                                    <h1 className="text-start hero-heading mb-4">
                                        <span className="syne">Delivering services and solutions </span>
                                        <span className="text-orange satisfy"> To Enterprise</span>
                                    </h1>
                                    <div className="d-flex flex-wrap justify-content-start gap-4 align-items-center">
                                        <Link to='/contact'>
                                        <button   type="button" className="btn btn-mitisha text-white sora">Let's Talk</button>
                                        </Link>
                                        <div className="hero-text text-start sora">
                                        Let’s discuss your ideas and transform them into outstanding, tangible solutions together.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 medium-display-none">
                                    <div className="left-col-item d-flex gap-3 cursor-pointer">
                                        <div
                                            className="icon"
                                            onMouseEnter={(e) => handleHover(e,
                                                <>
                                                    <div className="p-2">
                                                        <h6>Dedicated Team</h6>
                                                        <div className="small-hr-wrapper">
                                                            <hr className="small-hr" />
                                                            <hr className="full-hr" />
                                                        </div>
                                                        <p className='text-muted'>Dedicated team delivering innovative solutions with passion and precision.</p>
                                                    </div>
                                                </>
                                            )}
                                            onMouseLeave={handleLeave}
                                        >+</div>
                                        <div className="left-col-heading">Dedicated Team</div>
                                    </div>
                                    <div className="left-col-item d-flex gap-3 second-item cursor-pointer">
                                        <div
                                            className="icon"
                                            onMouseEnter={(e) => handleHover(e,
                                                <>
                                                    <div className="p-2">
                                                        <h6>Developers </h6>
                                                        <div className="small-hr-wrapper">
                                                            <hr className="small-hr" />
                                                            <hr className="full-hr" />
                                                        </div>
                                                        <p className='text-muted'>Skilled developers turning complex challenges into seamless solutions.</p>
                                                    </div>
                                                </>
                                            )}
                                            onMouseLeave={handleLeave}
                                        >+</div>
                                        <div className="left-col-heading">Developers </div>
                                    </div>
                                    <div className="left-col-item d-flex gap-3 mt-5 pt-3 ms-5 ps-3 cursor-pointer">
                                        <div
                                            className="icon"
                                            onMouseEnter={(e) => handleHover(e,
                                                <>
                                                    <div className="p-2">
                                                        <h6>Designers</h6>
                                                        <div className="small-hr-wrapper">
                                                            <hr className="small-hr" />
                                                            <hr className="full-hr" />
                                                        </div>
                                                        <p className='text-muted popover-text'>Creative designers crafting visually stunning, intuitive experiences for every user.</p>
                                                    </div>
                                                </>
                                            )}
                                            onMouseLeave={handleLeave}
                                        >+</div>
                                        <div className="left-col-heading">Designers</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Overlay
                show={show}
                target={target}
                placement="top"
                container={ref.current}
                containerPadding={20}
            >
                <Popover id="popover-basic">
                    <Popover.Body>
                        {popoverContent}
                    </Popover.Body>
                </Popover>
            </Overlay>
        </div>
    );
}

export default Hero;
