import './Pricing.css'
import Topbar from "../../utilities/topbar/Topbar";
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

function Pricing() {
  return (
    <>
    <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/pricing" />
      </Helmet>
        <Topbar />
      
      <div className="hero-bg mb-4 ">
      <div className="hero-map-bg">
        <div className=" container pt-5 ">
          <div className="hero-content text-black pt-5">
            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
            <span className="sora">Home</span>
            
              <ul className="d-inline mb-2">
                <li className="sora text-muted">Pricing
                </li>
              </ul>
          
            </div>
          </div>
          <h1 className=" Sectional-heading mt-4 pt-3 ms-2 syne">PRICING AND PLANS</h1>
        </div>
      </div>
      <div className="bg-web-hero-img"></div>
    </div>

    <div className="container mt-5 pt-lg-5 pb-lg-5 mb-5 ">
    <h3 className="syne text-center">
    Website Design  <span className="text-orange">& </span> Development
        </h3>
    </div>

    <div className="container mt-4 mb-5">
        <div className="row  mt-3">
            <div className="col-lg-4 mt-2">
                <div className="border-pricing p-5">
                   <p className="sora text-muted font-14">Small Business</p>
                   <h2 className='Sectional-heading'>PLUS</h2>
                   <div className="d-flex align-items-center">
                    <h3 className="text-orange mt-4 mb-3">$199</h3>
                   </div>

                   <div className="text-muted font-14 mt-3">EXCLUSIVE OF ALL TAXES</div>

                   <div className="mt-5 pt-lg-3 mb-3">
                   <Link  to='/contact' className="btn-pricing w-100 text-black bg-none">Get Started</Link>
                   </div>
                   <div className='mt-4'>
                    <ul className='list-unstyled check-list-item'>
                        <li className='mt-2'> Upto 5 pages</li>
                        <li className='mt-2'>Dynamic Website</li>
                        <li className='mt-2'>Hosting/ Domain Free For 1st Year</li>
                        <li className='mt-2'> Renewal $50+ Domain Price Plus GST</li>
                        <li className='mt-2 empty-list'>Search Optimization</li>
                        <li className='mt-2 empty-list'>Advanced Settings</li>
                        <li className='mt-2 empty-list'>All the necessary space, Unlimited</li>
                    </ul>
                   </div>
                </div>
            </div>
            <div className="col-lg-4 mt-2">
            <div className="border-pricing p-5">
                   <p className="sora text-muted font-14">Advance Business</p>
                   <h2 className='Sectional-heading'>PRO</h2>
                   <div className="d-flex align-items-center">
                    <h3 className="text-orange mt-4 mb-3">$359</h3>
                   </div>

                   <div className="text-muted font-14 mt-3">EXCLUSIVE OF ALL TAXES</div>

                   <div className="mt-5 pt-lg-3 mb-3">
                   <Link  to='/contact' className="btn-pricing w-100 text-black bg-none">Get Started</Link>
                   </div>
                   <div className='mt-4'>
                    <ul className='list-unstyled check-list-item'>
                    <li className='mt-2'> Upto 10 pages</li>
                    <li className='mt-2'>Dynamic Website</li>
                        <li className='mt-2'>Hosting/ Domain Free For 1st Year</li>
                        <li className='mt-2'> Renewal $50+ Domain Price Plus GST</li>
                        <li className='mt-2 '>Search Optimization</li>
                        <li className='mt-2 empty-list'>Advanced Settings</li>
                        <li className='mt-2 empty-list'>All the necessary space, Unlimited</li>
                    </ul>
                   </div>
                </div>
            </div>
            <div className="col-lg-4 mt-2">
            <div className="border-pricing p-5">
                   <p className="sora text-muted font-14">Ultimate Business</p>
                   <h2 className='Sectional-heading'>GOLD</h2>
                   <div className="d-flex align-items-center">
                    <h3 className="text-orange mt-4 mb-3">$599</h3>
                   </div>

                   <div className="text-muted font-14 mt-3">EXCLUSIVE OF ALL TAXES</div>

                   <div className="mt-5 pt-lg-3 mb-3">
                   <Link  to='/contact' className="btn-pricing w-100 text-black bg-none">Get Started</Link>
                   </div>
                   <div className='mt-4'>
                    <ul className='list-unstyled check-list-item'>
                    <li className='mt-2'> Upto 20 pages</li>
                    <li className='mt-2'>Dynamic Website</li>
                        <li className='mt-2'>Hosting/ Domain Free For 1st Year</li>
                        <li className='mt-2'> Renewal $50+ Domain Price Plus GST</li>
                        <li className='mt-2 '>Search Optimization</li>
                        <li className='mt-2 '>Advanced Settings</li>
                        <li className='mt-2'>All the necessary space, Unlimited</li>
                    </ul>
                   </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Pricing
