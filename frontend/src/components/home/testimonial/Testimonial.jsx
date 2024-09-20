import "./Testimonial.css"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const sliderRef = React.useRef(null);

    const next = () => {
        sliderRef.current.slickNext();
    };

    const previous = () => {
        sliderRef.current.slickPrev();
    };

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/quotes?limit=7&skip=10")
            .then((res) => res.json())
            .then((data) => setReviews(data.quotes))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div className="container-fluid bg-collaborate mt-5 ">
                <div className="container mt-lg-4">
                    <div className="pt-2 pb-5">
                        <div className="help-section">
                            <div className="bg-web-project-img"></div>
                            <div className="container mt-5 pt-lg-3">
                                <div className="mt-3 pt-2 ">
                                    <ul>
                                        <li className="syne">Testimonial</li>
                                    </ul>
                                    <div className="slider-header flex-wrap">
                                        <h2 className='Sectional-heading'>What Our <span className="text-orange">Clients </span> Say</h2>
                                        <div className="d-flex gap-5 justify-content-center">
                                            <button className="slider-prev syne" onClick={previous}> <span className="slider-arrow me-2"> &#8592;</span> Previous</button>
                                            <button className="slider-next syne" onClick={next}> Next <span className="slider-arrow ms-2"> &#8594;</span> </button>
                                        </div>
                                    </div>
                                    <div className="container mt-3 pt-3">
                                        <div className="car_brand">
                                            <Slider {...settings} ref={sliderRef}>
                                                {reviews.map((review) => (
                                                    <div key={review.id}>
                                                        <span className="quote-icon">
                                                            <RiDoubleQuotesL />
                                                        </span>
                                                        <span className="ms-3">
                                                            <FaStar className="me-1 text-orange" />
                                                            <FaStar className="me-1 text-orange" />
                                                            <FaStar className="me-1 text-orange" />
                                                            <FaStar className="me-1 text-orange" />
                                                            <FaStar className="text-orange" />
                                                        </span>

                                                        <div className="testimonial">
                                                            <p className="text-muted">{review.quote}</p>
                                                            <h5>{review.author}</h5>
                                                        </div>
                                                    </div>
                                                ))}
                                            </Slider>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-web-bottom-img"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonial;
