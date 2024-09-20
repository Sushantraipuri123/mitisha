import Topbar from "../../utilities/topbar/Topbar";
import VerifyEmploye from './VerifyEmploye'
import VerifyCandidate from './VerifyCandidate'


function Verify() {
  

    return (
        <>
            <Topbar />

            <div className="hero-bg mb-4">
                <div className="hero-map-bg">
                    <div className="container pt-5">
                        <div className="hero-content text-black pt-5">
                            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                                <span className="sora">Home</span>
                                <ul className="d-inline mb-2">
                                    <li className="sora text-muted">Verify candidate</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">Verify candidate</h2>
                    </div>
                </div>
                <div className="bg-web-hero-img"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 p-5">
                    <h4 className="syne mb-3">
                   
          <span className="text-orange">AUTHENTICATE </span>  OUR <span className="text-orange">EMPLOYEE</span>
          </h4>

          <p className="text-muted">Enter your employee ID  to verify your identity </p>
                       <VerifyEmploye/>
                    </div>

                    <div className="col-lg-6 p-5">
                    <h4 className="syne mb-3">
                   
          <span className="text-orange">AUTHENTICATE </span>  OUR <span className="text-orange">INTERNS</span>
          </h4>

          <p className="text-muted">Enter your  registration no.  to verify your identity</p>
                       <VerifyCandidate/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Verify;
