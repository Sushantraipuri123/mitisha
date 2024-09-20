import { useForm } from 'react-hook-form';
import Topbar from "../../utilities/topbar/Topbar";
import './Contact.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRegQuestionCircle } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Helmet } from "react-helmet";

function Contact() {


  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const phoneNumber = '+917707934521';
  // Handle form submission

  const sendEmail = (data) => {
    return emailjs.send('service_vusgmld', 'template_gxgenv9', {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      company: data.company,
      role: data.role,
      productDesign: data.productDesign,
      projectDescription: data.projectDescription
    }, 'pFJwAxD66KyV8YHE-');
  };

  const onSubmit = (data) => {
    sendEmail(data)
      .then(() => {
        console.log('SUCCESS!');
        toast.success('Query sent...!');
        reset(); 
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        alert('There was an error sending your query. Please try again.');
      });
  };

  return (
    <>
     <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/contact" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">contact</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">LET’S DISCUSS YOUR OPPORTUNITY</h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>


      <div className="container mt-5 pt-lg-5 pb-lg-5 mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-8 col-md-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <h2 className='syne font-22'>
                  <span className="text-orange syne me-2">01.</span> Tell Us About Yourself
                </h2>
              </div>
              <div className="row justify-content-around mt-4">
                <div className="col-lg-5 col-md-5 border-bottom mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">First Name</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="First Name"
                    {...register('firstName', { required: 'First name is required' })}
                  />
                  {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
                </div>
                <div className="col-lg-5 border-bottom col-md-5 mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Last Name</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="Last Name"
                    {...register('lastName', { required: 'Last name is required' })}
                  />
                  {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="row justify-content-around">
                <div className="col-lg-5 col-md-5 border-bottom mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Email Address</div>
                  <input
                    type="email"
                    className="form-control mt-3 pb-4"
                    placeholder="example@gmail.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && <p className="text-danger">{errors.email.message}</p>}
                </div>
                <div className="col-lg-5 border-bottom col-md-5 mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Phone</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="Enter Your phone number"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && <p className="text-danger">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="row justify-content-around">
                <div className="col-lg-5 col-md-5 border-bottom mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Company</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="Your company name"
                    {...register('company', { required: 'Company name is required' })}
                  />
                  {errors.company && <p className="text-danger">{errors.company.message}</p>}
                </div>
                <div className="col-lg-5 border-bottom col-md-5 mt-2">
                  <div className="f-18 ms-2 mt-4 mb-4">Role</div>
                  <input
                    type="text"
                    className="form-control mt-3 pb-4"
                    placeholder="Your Role"
                    {...register('role', { required: 'Role is required' })}
                  />
                  {errors.role && <p className="text-danger">{errors.role.message}</p>}
                </div>
              </div>

              <div className="mt-5 pt-lg-4">
                <h2 className='syne font-22'>
                  <span className="text-orange syne mt-5 me-2">02.</span> What Can We Help You With?
                </h2>
                <div className="row">
                  <div className="col-lg-5 col-md-5 border-bottom mt-2">
                    <div className="f-18 ms-2 mt-4 mb-4">Product Design</div>
                    <input
                      type="text"
                      className="form-control mt-3 pb-4"
                      placeholder="web design"
                      {...register('productDesign')}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-lg-4">
                <h2 className='syne font-22'>
                  <span className="text-orange syne mt-5 me-2">03.</span> Tell Us About Your Project
                </h2>
                <div className="row">
                  <div className="col-lg-5 col-md-5 border-bottom mt-2">
                    <div className="f-18 ms-2 mt-4 mb-4">Project Description</div>
                    <textarea
                      cols={37}
                      name="projectDescription"
                      id="project"
                      className="border-none"
                      {...register('projectDescription', { required: 'Project description is required' })}
                    />
                    {errors.projectDescription && <p className="text-danger">{errors.projectDescription.message}</p>}
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-mitisha w-100 text-black bg-white mt-5">Send Query</button>
            </form>
          </div>

          <div className="col-lg-4 px-4 mt-3 col-md-4">
            <div className='text-start'>
              <ul>
                <li>Support Request</li>
              </ul>
              <p className="text-muted w-75 mt-4 mb-4">
                Our experts are ready to answer your questions.
              </p>
              <div className="syne sont-14 text-muted  learn-more mt-2" >
                Support Now     <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer">
      <span className="arrow-icon ms-3"><FaArrowRightLong /></span>
    </a>
              </div>
              <div className="divider mt-3 pt-lg-3 mb-4">
                <div className="small-hr-wrapper">
                  <hr className="small-hr" />
                  <hr className="full-hr" />
                  <hr className="small-hr" />
                </div>
              </div>
            </div>

            <div className=' mt-4 text-start'>
              <div className="icon-container mt-3 mb-3 ">
                <div className="help-icon ms-2 sora">
                  <span className='service-id'><FaRegQuestionCircle /></span>
                </div>
              </div>
              <ul>
                <li>Need Help?</li>
              </ul>
              <p className="text-muted w-75 mt-4 mb-4">
                For technical questions or billing questions, feel free to contact us.
              </p>

              <div className="icon-container mt-5 mb-3 ">
                <div className="help-icon ms-2 sora">
                  <span className='service-id'><IoMdInformationCircleOutline /></span>
                </div>
              </div>
              <ul>
                <li>Needs More Info?</li>
              </ul>
              <p className="text-muted w-75 mt-4 mb-4">
                For any other information feel free to contact us.
              </p>

              <div className="divider mt-3 pt-lg-3 mb-4">
                <div className="small-hr-wrapper">
                  <hr className="small-hr" />
                  <hr className="full-hr" />
                  <hr className="small-hr" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="container-fluid map-container mb-5 mt-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.577815035737!2d76.68041787610305!3d30.702152587109055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1722661620604!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>


      <div className="container mt-5 mb-5">
        <div className="row justify-content-between">
          <div className="col-lg-5 mt-3 p-4">
            <h3 className='syne'>India</h3>
            <ul className='mt-4'>
              <li>
                Mohali
              </li>
            </ul>
            <p className="text-muted sora lh-lg ">
              First Floor, F426, Phase 8B, Industrial Area, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
            <div className="divider mt-3 pt-lg-3 mb-4">
              <div className="small-hr-wrapper">
                <hr className="small-hr" />
                <hr className="full-hr" />
              </div>
              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><FaPhoneAlt /></span>
                <span className='service-info'>+91 77079-34521</span>
              </div>

              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><IoMdMail /></span>
                <span className='service-info'>info@mitishasoftech.in</span>
              </div>

            </div>
          </div>
          
          <div className="col-lg-5 mt-3 p-4">
            <h3 className='syne'>India</h3>
            <ul className='mt-4'>
              <li>
                Mohali
              </li>
            </ul>
            <p className="text-muted sora lh-lg ">
              First Floor, F426, Phase 8B, Industrial Area, Sector 91, Sahibzada Ajit Singh Nagar, Punjab 160055
            </p>
            <div className="divider mt-3 pt-lg-3 mb-4">
              <div className="small-hr-wrapper">
                <hr className="small-hr" />
                <hr className="full-hr" />
              </div>
              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><FaPhoneAlt /></span>
                <span className='service-info'>+91 9465-654521</span>
              </div>

              <div className="d-flex align-items-center mt-4">
                <span className='contact-logo me-3'><IoMdMail /></span>
                <span className='service-info'>info@mitishasoftech.com</span>
              </div>

            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Contact;
