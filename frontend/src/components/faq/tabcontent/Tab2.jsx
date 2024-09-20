
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function Tab2() {
  const [activeKey, setActiveKey] = useState(null);
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  return (
    <>
      <div className="container mt-5 pt-lg-3">
        <div className="row mt-4 justify-content-between">
          <div className="col-lg-4 mt-2">
            <h2 className='syne'>
              <span className="text-orange">Pricing Plans</span> Flexible and Transparent Pricing Models.
            </h2>
            <p className="sora text-muted mt-3">
              Get detailed information about our pricing models, policies, and handling of project scope changes here.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What pricing models do you offer?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We provide flexible pricing models including fixed-price for defined projects, time and materials for evolving scopes, retainer for ongoing needs, and custom plans for unique requirements. Reach out for a personalized quote.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Are there any unexpected costs?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We pride ourselves on transparency. All costs are outlined upfront, with no hidden fees. Any potential additional costs will be communicated and approved before proceeding.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do you manage project scope changes?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Scope changes are handled through a structured change request process. For fixed-price projects, changes may impact cost and timeline. Time and materials projects can adapt to changes more fluidly, with costs adjusted accordingly.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab2;
