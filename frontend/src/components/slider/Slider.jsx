import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log("after change", currentSlide);
        }
    };

    return (
      <>
      <div className="container-fluid">
      <div className="container-fluid bg-footer-saas">
                <div className="semicircle"></div> {/* Add the semicircle element */}
                <div className="container mt-4">
                    <div className="bg-web-saas-img "></div>
                    <div className="d-flex justify-content-center">
                        <ul className="d-inline mb-2 mt-5 pt-lg-3">
                            <li className="sora text-white">We Offer You</li>
                        </ul>
                    </div>
                </div>
                <h2 className="sectonal-heading mt-4 mb-4 text-white text-center">
                Great Benefits for <span className="text-orange">Working</span> With Us
                </h2>
                <div className="container text-soft w-50 text-center">
                Experience top-tier service, innovative solutions, and exceptional support with our dedicated team and expertise
                </div>

                 <div className="container mt-5 mb-5">
<div className="car_brand">
    <Slider {...settings}>
        <div className="slider-container">
            <div className="row  p-3  ">
                <div className="col-lg-6  col-md-6">
                    <img src="https://d1ndsj6b8hkqu9.cloudfront.net/pictures/images/000/809/016/large_v2/f7df0549.jpg" alt="car logo" className="slider-img" />
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center my-auto text-white">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div>
                        <h3>Expertise and Experience</h3>
                        <div className="small-hr-wrapper mt-3 mb-3">
                        <hr className="small-hr" />
                        <hr className="full-hr" />
                    </div>
                   <p className="text-secondary">
                   Benefit from our team's extensive industry knowledge and experience, ensuring high-quality solutions tailored to meet your specific needs efficiently.
                   </p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider-container">
        <div className="row  p-3  ">
                <div className="col-lg-6  col-md-6">
                    <img src="https://aedindia.com/assets/images/b2.jpg" alt="car logo" className="slider-img" />
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center my-auto text-white">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div>
                        <h3>Innovative Solutions</h3>
                        <div className="small-hr-wrapper mt-3 mb-3">
                        <hr className="small-hr" />
                        <hr className="full-hr" />
                    </div>
                   <p className="text-secondary">
                   We provide cutting-edge solutions that leverage the latest technologies, helping you stay ahead in a competitive market with unique and effective strategies.
                   </p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider-container">
        <div className="row  p-3  ">
                <div className="col-lg-6  col-md-6">
                    <img src="https://reform-support.ec.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2022-05/AdobeStock_90678751.jpeg?itok=FG-1nkMz" alt="car logo" className="slider-img" />
                </div>
                <div className="col-lg-6 col-md-6 d-flex align-items-center my-auto text-white">
                    <div className="row">
                        <div className="col-md-10 mx-auto">
                        <div>
                        <h3>Exceptional Support</h3>
                        <div className="small-hr-wrapper mt-3 mb-3">
                        <hr className="small-hr" />
                        <hr className="full-hr" />
                    </div>
                   <p className="text-secondary">
                   Enjoy personalized support with prompt responses and dedicated assistance, ensuring your satisfaction and resolving any issues swiftly for a seamless experience.
                   </p>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Slider>
</div>
</div> 
            </div>
      </div>
      </>
    );
};

export default Sliders;


