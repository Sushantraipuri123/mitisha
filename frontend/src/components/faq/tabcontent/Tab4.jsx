import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';

function Tab4() {
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
              <span className="text-orange">Benefits</span> Advantages of Partnering with Us.
            </h2>
            <p className="sora text-muted mt-3">
              Discover the key benefits of working with our organization and how we ensure project success and client satisfaction.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What advantages come with partnering with your organization?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  You should anticipate timely delivery, specialized support, and superior, customized software solutions. The knowledge of our team ensures effective project management and creative solutions that fit your company's requirements.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How do you ensure a successful project outcome?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  We use a collaborative approach, lucid communication, and detailed project planning. Regular updates and feedback loops help align the project with your goals and expectations.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What distinguishes your business from others?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  What makes us distinct is our dedication to providing individualized solutions, proactive problem-solving, and client satisfaction. Our primary goal is establishing enduring relationships and adding value by applying our competence and commitment.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab4;
