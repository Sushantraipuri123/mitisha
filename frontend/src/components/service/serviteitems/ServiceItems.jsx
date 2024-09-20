import { Link } from 'react-router-dom'
import './ServiceItems.css'
function ServiceItems() {
    const serviceItems=[
        {
            serviceid:1,
            servicename:"UI/UX Design",
            servicedesc:"Elevate your digital presence with our cutting-edge UI/UX services"
        },
        {
            serviceid:2,
            servicename:"Web Development",
            servicedesc:"Transforming Ideas into Dynamic Web Solutions"
        },
        {
            serviceid:3,
            servicename:"Graphic Designing",
            servicedesc:"Your Trusted Partner for Innovative Graphic Design Solutions."
        },
        {
            serviceid:4,
            servicename:"Digital Marketing",
            servicedesc:"Trust for a seamless journey to digital excellence!"
        },
        {
            serviceid:5,
            servicename:"App Development",
            servicedesc:"Unparalleled app development tailored to your unique needs.."
        },
        {
            serviceid:6,
            servicename:"SEO Optimization",
            servicedesc:"Elevate your digital presence with our top-notch IT services."
        }
    ]
  return (
    <>
       <div className='d-flex flex-wrap '>
            <div className="row  ">
            {serviceItems.map(item => (
                <div className="col-lg-4  mt-3 p-3" key={item.serviceid}>
                    <Link to={`/services/${item.serviceid}`} className='text-decoration-none text-black'>
    <div className="service-container  ">
        <div className="id-container">
            <div className="help-icon ms-2 sora">
                <span className='service-id'>{item.serviceid < 10 ? `0${item.serviceid}` : item.serviceid}</span>
            </div>
        </div>
        <h4 className="mt-4 syne">{item.servicename}</h4>
        <p className="mt-3 text-muted sora font-14">{item.servicedesc}</p>
    </div>
</Link>

                </div>
            ))}
            </div>
        </div>
    </>
  )
}

export default ServiceItems
