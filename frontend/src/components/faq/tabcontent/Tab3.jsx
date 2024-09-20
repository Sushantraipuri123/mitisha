import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function Tab3() {
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
              <span className="text-orange">Data & Privacy</span> Ensuring Your Data is Protected and Secure.
            </h2>
            <p className="sora text-muted mt-3">
              Learn how we safeguard your data, adhere to data protection laws, and handle any potential breaches.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do you safeguard our data?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We use industry-standard practices to protect your data including encryption, strict access controls, and confidentiality agreements to ensure your data is secure and private.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do you adhere to data protection laws?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We comply with data protection regulations such as GDPR and CCPA by implementing Data Processing Agreements, conducting regular compliance audits, and respecting your data rights.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What happens if there’s a data breach?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We have a robust response plan that includes immediate notification, impact assessment, containment actions, and a detailed post-incident report.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab3;
