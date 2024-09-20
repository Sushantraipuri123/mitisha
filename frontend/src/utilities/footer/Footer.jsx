import './Footer.css'
import { FaHeart } from "react-icons/fa";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <div className="container-fluid bg-footer pt-5 ">
      <div className="container bg-map pt-4 mb-5 mt-5 pb-4 ">
    <div className="bg-web-footer-img "></div>
    <div className="d-flex align-items-center pt-3">
        <div className="row">
          <div className="col-lg-4 text-white  mt-2 ">
            <div className="logo"><img src="/ms-logo.png" alt="mitisha logo" className='img-fluid' /></div>
            <p className="mt-4 text-footer">
            Our team comprises highly qualified and experienced individuals who are committed to ongoing research, evaluation, and development of cutting-edge digital solutions utilizing innovative methods and technology.
            </p>
          </div>
          <div className="col-lg-4 text-white   mt-2 mt-lg-5 ps-3 pe-3 pt-3">
          {/* <h2 className='Sectional-heading '>Join  <span className="text-orange">Mitisha Softech </span> Experience</h2> */}
          </div>
          <div className="col-lg-4 text-white mt-2 pt-3 p-4">
  <div className="d-flex flex-column rounded-pill">
    <p className='ms-2 me-2'>
    To check the authentication of your certificate, Please
    </p>
    <Button as={Link} to='/verify' className="w-100 rounded-pill btn-footer">Click Here</Button>
  </div>
</div>
        </div>
        </div>
        <div className="small-hr-wrapper mt-5 pt-lg-3">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
                <div className="d-flex justify-content-between flex-wrap">
  <div className="social-media">
    <ul className="d-flex flex-wrap list-unstyled p-0 m-0 gap-4 mt-2">
      {/* <li><a href="/" target='_blank' className="footer-link">Facebook</a></li> */}
      <li><a href="https://www.instagram.com/mitishasoftech_?igsh=MXFmcDVyNjQ0MDJmMA==" target='_blank' className="footer-link">Instagram</a></li>
      <li><a href="https://www.linkedin.com/company/mitisha-softech-pvt-ltd/" target='_blank' className="footer-link">LinkedIn</a></li>
      <li><a href="/" target='_blank' className="footer-link">Twitter</a></li>
    </ul>
  </div>
  <div className="quick-links">
    <ul className="d-flex flex-wrap list-unstyled p-0 m-0 gap-4 mt-2">
      <li><Link to="/terms&conditions" className="footer-link">Terms & Conditions</Link></li>
      <li><Link to="/privacypolicy" className="footer-link">Privacy Policy</Link></li>
      <li><Link to="/sitemap" className="footer-link">Sitemap</Link></li>
    </ul>
  </div>
</div>

      </div>
      <div className="copy-right bg-bottom-footer pt-3 pb-3">
        <p className="text-secondary text-center">Copyright © 2018 <span className='text-danger ms-2 me-2'><FaHeart /></span> Mitisha Softech  All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer
