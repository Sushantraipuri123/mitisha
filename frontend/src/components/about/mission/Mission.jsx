import './Mission.css'
import aboutImg2 from '/public/about-img-2.png'

function Mission() {
  return (
    <>
       <div className="container-fluid mt-4  bg-collaborate ">
                <div className="container">
                    <div className="pt-5 pb-5">
                        <div className="bg-web-collaborate-img"></div>
                        <div className="row">
                            <div className="col-lg-5 ">
                                <div className="parent-about-img">
                                    <div className="bg-circle-img"></div>
                                    <div className="img-firm-container">
                                        <img src={aboutImg2} alt="about image" className="about-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1"></div>
                            <div className="col-lg-6 pt-5 ps-2">
                                <ul>
                                    <li className="syne ">IT Enterprise</li>
                                </ul>
                                <h2 className='Sectional-heading syne mt-4 me-2 mb-3'>Our Mission </h2>
                                <p className="text-muted mt-3">
                                Our goal is to enable companies by turning their concepts into cutting-edge digital solutions. Our goal is to provide state-of-the-art technology, first-rate customer service, and customized plans that promote productivity and expansion. Our mission is to provide smooth and effective solutions that enable clients to prosper in the rapidly changing digital market.

                                </p>
                                <div className="row">
                                    <div className="col-md-6 col-lg-6 mt-2 col-sm-6">
                                        <ul className=" mt-3">
                                            <li className="mt-2"> <span className=" sora">Accelerate innovation.</span></li>
                                            <li className="mt-2"><span className=" sora">With world class tech teams.</span></li>
                                            <li className="mt-2"><span className=" sora">Our service offerings to enhance.</span></li>
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

export default Mission
