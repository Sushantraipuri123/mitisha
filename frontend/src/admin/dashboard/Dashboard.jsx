import Chart1 from './chart1/Chart1'
import Chart2 from './chart2/Chart2'
import Chart3 from './chart3/Chart3'

function Dashboard() {
  return (
    <>
    <div className="container-fluid ">
      <div className="row justify-content-evenly gap-3 mt-3">
        <div className="col-lg-4 col-md-12 col-sm-12 bg-box p-4 rounded">
          <div className="h2 syne">Profile Visits </div>

          <div className="mt-3 mb-3">
            <Chart1/>
          </div>
        </div>

        <div className="col-lg-4 col-md-12 col-sm-12 bg-box p-4 rounded">
          <div className="h2 syne">Storage Chart</div>

          <div className="mt-5 mb-2">
            <Chart2/>
          </div>
        </div>

    <div className="col-lg-2  bg-box p-3 rounded text-center d-flex justify-content-center">
      <div>
        <h4>Instagram</h4>
       <h5>144K</h5>
       <div className="divider mt-4 mb-4">
        <hr />
       </div>
       <h4>Linkdin</h4>
       <h5>200K</h5>
       <div className="divider mt-4 mb-4">
        <hr />
       </div>
       <h4>Facebook</h4>
       <h5>89K</h5>
       <div className="divider mt-4 mb-4">
        <hr />
       </div>
       <h4>Discord</h4>
       <h5>115K</h5>
      </div>
    </div>
      </div>
    </div>
    
    <div className="container mt-4 mb-4 border rounded p-4 bg-box">
      <h2 className="Sectional-heading syne mt-1 mb-3">Permormance Chart</h2>
      <Chart3/>
    </div>
    </>
  )
}

export default Dashboard