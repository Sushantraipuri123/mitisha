import { Link } from "react-router-dom";
import Topbar from "../../utilities/topbar/Topbar";
import "./Solutions.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Helmet } from "react-helmet";

function Solutions() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/solutions" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Training</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              Industrial Training{" "}
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Best <span className="text-orange"> Industrial Training</span> in
          Mohali
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            With Mitisha Softech, take a step into the future of digital
            innovation and IT. Discover our cutting-edge digital marketing, IoT,
            app development, web development, and digital marketing solutions,
            all created to provide you access to the newest knowledge and
            abilities in the field.
          </div>
          <div className="divider mt-5 pt-lg-3 mb-4">
            <div className="small-hr-wrapper">
              <hr className="small-hr" />
              <hr className="full-hr" />
              <hr className="small-hr" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <h3 className="text-center mt-5 mb-4">
          <span className="text-orange">Advantages </span> of training with us
        </h3>

        <div className="row justify-content-between">
          <div className="col-lg-4 mt-3 text-center  p-3">
            <div className="border-pricing p-4">
              <div className="d-flex justify-content-center">
                <div className="icon-container mt-4 mb-4 ">
                  <div className="help-icon ms-2 sora">
                    <span className="service-id">01</span>
                  </div>
                </div>
              </div>

              <h5 className="syne text-center mt-3 mb-3">
                Industry-Relevant Skills
              </h5>
              <p className="text-muted">
                Learn transferable skills that are in line with the latest
                technological advancements and business trends to make sure
                you're ready for challenges and career opportunities in the real
                world.
              </p>
            </div>
          </div>

          <div className="col-lg-4 mt-3 text-center  p-3">
            <div className="border-pricing p-4">
              <div className="d-flex justify-content-center">
                <div className="icon-container mt-4 mb-4 ">
                  <div className="help-icon ms-2 sora">
                    <span className="service-id">02</span>
                  </div>
                </div>
              </div>

              <h5 className="syne text-center mt-3 mb-3">
                Expert Instructors{" "}
              </h5>
              <p className="text-muted">
                Learn from seasoned experts with in-depth knowledge of the field
                who can offer insightful advice and mentorship to advance your
                comprehension and professional development.
              </p>
            </div>
          </div>
          <div className="col-lg-4 mt-3 text-center  p-3">
            <div className="border-pricing p-4">
              <div className="d-flex justify-content-center">
                <div className="icon-container mt-4 mb-4 ">
                  <div className="help-icon ms-2 sora">
                    <span className="service-id">03</span>
                  </div>
                </div>
              </div>

              <h5 className="syne text-center mt-3 mb-3">
                Hands-On Experience
              </h5>
              <p className="text-muted">
                Through real-world projects and exercises, you can gain
                practical, hands-on experience that will enable you to apply
                academic knowledge and develop a solid portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center mt-5 mb-3">
        What we <span className="text-orange"> Provide</span>{" "}
      </h3>

      <div className="container mt-5 mb-5 pb-lg-5 pt-lg-3">
        {/* ===================contetn - image -================= */}

        <div className="row mt-3 justify-content-bwtween">
          <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="solution-content">
                  <h4 className="syne"><span className="text-orange">MERN</span> Stack Development</h4>
                  <p className="text-muted mt-4 me-lg-5">
                    Master the MERN stack—MongoDB, Express.js, React, and
                    Node.js—to create powerful, scalable full-stack
                    applications. Learn to integrate these technologies for
                    seamless, high-performance web solutions.
                  </p>
                  <div className="syne learn-more mt-4">
                    Learn More{" "}
                    <Link to='/solution/mern'>
                    <span className="arrow-icon ms-3">
                      <FaArrowRightLong />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp"
                alt="home automation solution"
                className="solution-img"
              />
            </div>
          </div>
        </div>

        {/* =================== image-contetn  -================= */}

        <div className="row mt-5 justify-content-bwtween">
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img-right">
              <img
                src="https://www.boerberg.com/wp-content/uploads/2023/12/Digital-Marketing-2.jpg"
                alt="home automation solution"
                className="solution-img"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="solution-content">
                  <h4 className="syne"><span className="text-orange">Digital</span> Marketing</h4>
                  <p className="text-muted mt-4 me-lg-5">
                    Explore effective digital marketing techniques including
                    SEO, content marketing, and social media strategies. Learn
                    to drive business growth, enhance online presence, and
                    engage target audiences effectively.
                  </p>
                  <div className="syne learn-more mt-4">
                    Learn More{" "}
                    <Link to='/solution/digital'>
                    <span className="arrow-icon ms-3">
                      <FaArrowRightLong />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================contetn - image -================= */}

        <div className="row mt-5 justify-content-bwtween">
          <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="solution-content">
                  <h4 className="syne"><span className="text-orange">SEO</span> (Search Engine Optimization)</h4>
                  <p className="text-muted mt-4 me-lg-5">
                    Develop expertise in SEO techniques to enhance website
                    visibility and search engine rankings. Learn strategies for
                    optimizing content, improving site structure, and increasing
                    organic traffic effectively.
                  </p>
                  <div className="syne learn-more mt-4">
                    Learn More{" "}
                    <Link to='/solution/seo'>
                    <span className="arrow-icon ms-3">
                      <FaArrowRightLong />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://seagulladvertising.com/hubfs/search%20engine%20optimization.jpg"
                alt="home automation solution"
                className="solution-img"
              />
            </div>
          </div>
        </div>
        {/* =================== image-contetn  -================= */}

        <div className="row mt-5 justify-content-bwtween">
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img-right">
              <img
                src="https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?format=pjeg&auto=webp&crop=16:9"
                alt="home automation solution"
                className="solution-img"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="solution-content">
                  <h4 className="syne"><span className="text-orange">App</span> Development</h4>
                  <p className="text-muted mt-4 ">
                    Gain skills in developing and deploying mobile and web
                    applications using modern technologies. Focus on creating
                    innovative solutions that are user-friendly, functional, and
                    efficient in meeting user needs.
                  </p>
                  <div className="syne learn-more mt-4">
                    Learn More{" "}
                    <Link to='/solution/app'>
                    <span className="arrow-icon ms-3">
                      <FaArrowRightLong />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================contetn - image -================= */}

        <div className="row mt-5 justify-content-bwtween">
          <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="solution-content">
                  <h4 className="syne"><span className="text-orange">Frontend</span> Development</h4>
                  <p className="text-muted mt-4 me-lg-5">
                    Learn to design and build intuitive, responsive user
                    interfaces with the latest frameworks and tools. Focus on
                    delivering seamless, engaging user experiences across
                    various devices and platforms.
                  </p>
                  <div className="syne learn-more mt-4">
                    Learn More{" "}
                    <Link to='/solution/frontend'>
                    <span className="arrow-icon ms-3">
                      <FaArrowRightLong />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://www.zdnet.com/a/img/resize/13c95f2c394a10915b702a65b9c31108ec498bb3/2020/11/11/f9e2069f-1c25-484b-9989-49cb52de3eef/istock-1197640540.jpg?auto=webp&fit=crop&height=675&width=1200"
                alt="home automation solution"
                className="solution-img"
              />
            </div>
          </div>
        </div>

        {/* =================== image-contetn  -================= */}

        <div className="row mt-5 justify-content-bwtween">
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img-right">
              <img
                src="https://www.freecodecamp.org/news/content/images/2022/02/shutterstock_1610721214-min.jpg"
                alt="home automation solution"
                className="solution-img"
              />
            </div>
          </div>
          <div className="col-lg-6 mt-3 col-md-6 d-flex justify-content-center align-items-center">
            <div className="row">
              <div className="col-md-10 mx-auto">
                <div className="solution-content">
                  <h4 className="syne"><span className="text-orange">Backend</span> Development</h4>
                  <p className="text-muted mt-4 ">
                    Develop expertise in building scalable, efficient
                    server-side applications. Master industry-standard
                    technologies and methodologies to create robust backend
                    systems that support complex web and mobile applications
                    effectively.
                  </p>
                  <div className="syne learn-more mt-4">
                    Learn More{" "}
                    <Link to='/solution/backend'>
                    <span className="arrow-icon ms-3">
                      <FaArrowRightLong />
                    </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Solutions;
