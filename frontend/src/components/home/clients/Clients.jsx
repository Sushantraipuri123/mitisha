import client1  from '/client1.png'
import client2  from '/client2.png'
import client3  from '/client3.png'


import './Clients.css'
function Clients() {
  return (
    <>
      <div className="container client-container">
      <div className="row mb-5 pt-lg-3 pb-lg-4">
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
    </>
  )
}

export default Clients
