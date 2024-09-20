import Topbar from "../../utilities/topbar/Topbar";
import "./Team.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { SiInteractiondesignfoundation } from "react-icons/si";
import { RiTeamLine } from "react-icons/ri";
import { GiStarProminences } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Team() {
  const team = [
    {
      id: 1,
      name: "Sushant",
      designation: "Full Stack developer",
      image: "/4.jpeg",
    },
    {
      id: 2,
      name: "Akshay",
      designation: "Frontend Developer",
      image: "/2.jpeg",
    },
    // {
    //     id: 3,
    //     name: 'Nitin',
    //     designation: 'Digital Marketing Executive',
    //     image: '/3.jpeg',
    // },
    // {
    //     id: 4,
    //     name: 'Komal Sharma',
    //     designation: 'Web Developer',
    //     image: '/1.jpeg',
    // },
    {
      id: 5,
      name: "Shruti Gupta",
      designation: "Software Developer - Backend",
      image: "/5.jpg",
    },
    {
      id: 6,
      name: "Aman Deep Tiwari",
      designation: "Software Engineer",
      image: "/6.JPG",
    },
  ];

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/team" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4 ">
        <div className="hero-map-bg">
          <div className="container pt-5 ">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Team</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              LEADERSHIP TEAM
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-5 ">
        <div className="mt-2 text-center">
          <h3 className="ps-5 pe-5">
            Our team{" "}
            <span className="text-orange">combines diverse skills</span> and
            expertise, delivering innovative solutions with dedication and{" "}
            <span className="text-orange">collaboration</span>
          </h3>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {team.map((member) => (
            <div key={member.id} className="col-md-4 text-center mb-4">
              <Link to={`/team/${member.id}`} className="text-decoration-none">
                <div className="image-container">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="img-fluid rounded-circle team-img mb-2"
                  />
                  <div className="hover-circle"></div>
                </div>
                <h4 className="mb-2 text-black syne">{member.name}</h4>
                <p className="text-muted sora">{member.designation}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="small-hr-wrapper mt-4 mb-4">
          <hr className="small-hr" />
          <hr className="full-hr" />
          <hr className="small-hr" />
        </div>

        <div className="mt-4 d-flex flex-wrap justify-content-between">
          <h2 className="Sectional-heading syne mt-4 me-2 mb-3">
            Values that <span className="text-orange">Lead Us</span>
          </h2>

          <div className="text-muted w-50 mt-4 me-2 mb-3">
            Our core values drive our success, fostering integrity, innovation,
            collaboration, and excellence. They guide our actions and inspire
            growth.
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col-lg-3   col-md-6  mt-3">
            <div className="d-flex justify-content-center mt-2">
              <div className="help-icon d-flex justify-content-center align-items-center">
                <VscWorkspaceTrusted />
              </div>
            </div>
            <h4 className="syne mt-4 mb-3 text-center">Trustworthiness</h4>
            <p className="text-muted text-center sora">
              We build strong, reliable relationships through honesty and
              openness, ensuring that our clients and partners can depend on us.
            </p>
          </div>
          <div className="col-lg-3 col-md-6  mt-3">
            <div className="d-flex justify-content-center mt-2">
              <div className="help-icon d-flex justify-content-center align-items-center">
                <SiInteractiondesignfoundation />
              </div>
            </div>
            <h4 className="syne mt-4 mb-3 text-center">Creativity</h4>
            <p className="text-muted text-center sora">
              To spur innovation and preserve a competitive edge, we support
              creative problem-solving and novel ideas.
            </p>
          </div>
          <div className="col-lg-3 col-md-6  mt-3">
            <div className="d-flex justify-content-center mt-2">
              <div className="help-icon d-flex justify-content-center align-items-center">
                <RiTeamLine />
              </div>
            </div>
            <h4 className="syne mt-4 mb-3 text-center">Teamwork</h4>
            <p className="text-muted text-center sora">
              By cultivating a cooperative atmosphere, we take advantage of
              different abilities and viewpoints to work together to accomplish
              exceptional outcomes.
            </p>
          </div>
          <div className="col-lg-3 col-md-6  mt-3">
            <div className="d-flex justify-content-center mt-2">
              <div className="help-icon d-flex justify-content-center align-items-center">
                <GiStarProminences />
              </div>
            </div>
            <h4 className="syne mt-4 mb-3 text-center">
              Commitment to Quality
            </h4>
            <p className="text-muted text-center sora">
              By establishing high standards and aiming for constant development
              in whatever we do, we place a premium on excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
