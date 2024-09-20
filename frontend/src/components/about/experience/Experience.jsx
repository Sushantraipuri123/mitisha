import "./Experience.css"
import client1  from '/client1.png'
import client2  from '/client2.png'
import client3  from '/client3.png'
function Experience() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
      <div className="bg-web-experience-img"></div>
            <div className="col-lg-6 col-md-12 mt-4 col-sm-12">
              <div className="experience-section">
                <h2 className="syne exp-no-heading">5<span className="text-orange">+</span></h2>
                <span className="syne">Years Experience</span>
                <h2 className='Sectional-heading syne mt-4 me-2 mb-3'>
                We Run All Kinds of IT Services That Vow Your Success
                </h2>
               
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-4 col-sm-12">
            <h3 className=' syne mt-4 me-2 mb-3'>
            Improve <span className="text-orange">Innovation</span> with Top-Notch Tech Teams You will be paired with a complete <span className="text-orange">Remote Technology</span>
                </h3>

                <div className="row mt-3">
                    <div className="col-md-6 mt-3 ">
                        <div className="row mt-4">
                           <div className="syne experiences-text">
                           <span className="text-orange ms-2 me-2"> 5+</span> Software Development
                           </div>
                            <div className="small-hr-wrapper mt-2">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                </div>
                        </div>

                        <div className="row mt-4">
                           <div className="syne experiences-text">
                           <span className="text-orange ms-2 me-2"> 50+</span> App Development
                           </div>
                            <div className="small-hr-wrapper mt-2">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                </div>
                        </div>

                    </div>
                    <div className="col-md-6 mt-3 ">
                    <div className="row mt-4">
                           <div className="syne experiences-text">
                           <span className="text-orange ms-2 me-2"> 5+</span> Years Client Engagement
                           </div>
                            <div className="small-hr-wrapper mt-2">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                </div>
                        </div>

                        <div className="row mt-4">
                           <div className="syne experiences-text">
                           <span className="text-orange ms-2 me-2"> 299+</span> Web Development
                           </div>
                            <div className="small-hr-wrapper mt-2">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                </div>
                        </div>
                    </div>

                </div>
              </div>
        </div>
     
     <div className="mt-5">
     <div className="container pt-3">

     <div className="small-hr-wrapper mt-5">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />

                </div>

                <div className="container">
      <div className="row mt-5 mb-5 pt-lg-3 pb-lg-4">
    <div className="col-lg-2 col-md-2 col-sm-6 client-img-container">
        <img src={client1} alt="client 1" className=" client-img px-3 my-3" />
    </div>
    <div className="col-lg-2 col-md-2 col-sm-6 client-img-container">
        <img src="https://gomechanic.in/assets/img/customerpage/logos/final_amp_logo.png" alt="client 2" className=" client-img px-3 my-3" />
    </div>
    <div className="col-lg-2 col-md-2 col-sm-6 client-img-container">
        <img src={client2} alt="client 3" className=" client-img px-3 my-3" />
    </div>
    <div className="col-lg-2 col-md-2 col-sm-6 client-img-container">
        <img src={client3} alt="client 4" className="client-img px-3 my-3" />
    </div>
    <div className="col-lg-2 col-md-2 col-sm-6 client-img-container">
        <img src="https://dsgraphics.in/assets/images/DS%20LOGO%202.png" alt="client 5" className="client-img px-3 my-3" />
    </div>
    <div className="col-lg-2 col-md-2 col-sm-6 client-img-container">
        <img src={client1} alt="client 6" className=" client-img px-3 my-3" />
    </div>
</div>

      </div>

      </div>
     </div>
      </div>
    </>
  )
}

export default Experience
