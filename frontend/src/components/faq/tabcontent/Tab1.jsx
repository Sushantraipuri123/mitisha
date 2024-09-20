import './Tab1.css';
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
function Tab1() {
  const [activeKey, setActiveKey] = useState(null);
  const handleSelect = (eventKey) => {
    setActiveKey(eventKey === activeKey ? null : eventKey);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="container mt-5 pt-lg-3">
        <div className="row mt-4 justify-content-between">
          <div className="col-lg-4 mt-2" data-aos="fade-up" >
            <h2 className='syne'>
              <span className="text-orange">Mitisha Softech</span> The Entire End To End Organization.
            </h2>
            <p className="sora text-muted mt-3">
              Find essential details about our services, company policies, and frequently asked questions here.
            </p>
          </div>
          <div className="col-lg-7 mt-2">
            <Accordion activeKey={activeKey} onSelect={handleSelect}>
              <Accordion.Item eventKey="0">
                <Accordion.Header className={`accordion-header ${activeKey === "0" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What core services does Mitisha Softech provide?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Mitisha Softech offers a comprehensive suite of services including custom software development, mobile app development, web development, UI/UX design, and ongoing software maintenance and support. Our solutions are crafted to address the specific needs of your business and drive innovation.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className={`accordion-header ${activeKey === "1" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>Since when has Mitisha Softech been operating, and what is your experience?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  Mitisha Softech has been a leader in software development since 2019. With 5+ years of industry experience, we’ve successfully delivered numerous projects across various domains, showcasing our expertise in building robust and scalable solutions.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header className={`accordion-header ${activeKey === "2" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>What industries does Mitisha Softech specialize in?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                In addition to web development and app development, Mitisha Softech also has expertise in digital marketing, UI/UX design, QA & testing, and the Internet of Things (IoT). Our knowledge enables us to provide customized solutions that satisfy the particular requirements of every sector, guaranteeing creativity and quality in each and every project.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header className={`accordion-header ${activeKey === "3" ? "accordion-active" : ""}`}>
                  <h5 className='syne'>How can I contact Mitisha Softech to discuss a project or request more information?</h5>
                </Accordion.Header>
                <Accordion.Body className='sora text-muted'>
                  You can reach us through our website’s contact form, email us directly at info@mitishasoftech.in, or call us at +91 77079-34521. Our team is ready to provide detailed information, discuss your project requirements, and explore how we can help achieve your goals.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tab1;
