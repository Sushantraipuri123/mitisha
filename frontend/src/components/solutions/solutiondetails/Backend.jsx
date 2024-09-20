import * as React from 'react';
import Topbar from "../../../utilities/topbar/Topbar";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import StepConnector from '@mui/material/StepConnector';
import StepIcon from '@mui/material/StepIcon';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const CustomConnector = (props) => (
  <StepConnector
    {...props}
    sx={{
      '& .MuiStepConnector-line': {
        borderColor: '#f57c00',
      },
    }}
  />
);

const CustomStepIcon = (props) => (
  <StepIcon
    {...props}
    sx={{
      color: '#f57c00',
      '&.Mui-active': {
        color: '#f57c00',
      },
      '&.Mui-completed': {
        color: '#f57c00',
      },
    }}
  />
);

function Backend() {

  const steps = [
    {
      label: 'Introduction to Backend Development',
      description: `Understand the role and importance of backend development in creating server-side applications. Learn about server architecture, APIs, and the integration of frontend and backend systems.`,
    },
    {
      label: 'Setting Up the Backend Environment',
      description: `Install and configure essential tools for backend development, such as Node.js, a database system (like MongoDB or SQL), and a code editor. Learn about server management and deployment tools.`,
    },
    {
      label: 'Server-Side Programming with Node.js',
      description: `Explore server-side programming using Node.js. Learn about creating servers, handling requests, and managing responses. Understand the event-driven architecture and asynchronous programming with Node.js.`,
    },
    {
      label: 'Database Management',
      description: `Dive into database management, focusing on database design, CRUD operations, and data modeling. Learn about interacting with databases using ORMs or query builders, and understand data storage and retrieval.`,
    },
    {
      label: 'Building RESTful APIs',
      description: `Learn how to build RESTful APIs for communication between frontend and backend. Understand API design principles, authentication, and how to implement secure and scalable APIs.`,
    },
    {
      label: 'Deployment and Scaling',
      description: `Understand the deployment process and how to manage server infrastructure. Learn about deploying applications to cloud platforms, monitoring performance, and scaling applications to handle increased load.`,
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
     <Helmet>
        <link rel="canonical" href="https://mitishasoftech.in/backend" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Backend Development</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              Backend Development Training
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Master <span className="text-orange">Backend Development</span>
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            Welcome to our Backend Development training program! Learn how to build and manage the server-side of web applications. Our course covers essential backend technologies, database management, and server deployment.
          </div>
          <div className="divider mt-5 pt-lg-3 mb-4">
            <div className="small-hr-wrapper">
              <hr className="small-hr" />
              <hr className="full-hr" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div>
              <h5 className="mt-5 mb-3">What You Will Learn</h5>
              <p>
                <ul>
                  <li>
                    <strong>Server-Side Programming:</strong> Learn server-side programming with Node.js, including creating servers, handling requests, and managing responses.
                  </li>
                  <li>
                    <strong>Database Management:</strong> Gain expertise in database management, including database design, CRUD operations, and data modeling.
                  </li>
                  <li>
                    <strong>Building APIs:</strong> Master the creation of RESTful APIs for seamless communication between frontend and backend. Learn about API design, authentication, and security.
                  </li>
                  <li>
                    <strong>Deployment:</strong> Understand the deployment process and how to manage server infrastructure. Learn to deploy applications to cloud platforms and handle scaling.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://www.freecodecamp.org/news/content/images/2022/02/shutterstock_1610721214-min.jpg"
                alt="Backend Development"
                className="solution-img"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-4">
        <div className="divider mt-5 pt-lg-3 mb-4">
          <div className="small-hr-wrapper">
            <hr className="small-hr" />
            <hr className="full-hr" />
            <hr className="small-hr" />
          </div>
        </div>

        <h3 className="syne">Why Choose Us?</h3>

        <p className="mt-3 mb-3 text-muted-sora">
          Our Backend Development training program is designed to provide you with a deep understanding of server-side technologies and database management. With our expert-led instruction and flexible learning options, you'll be well-equipped to build robust and scalable backend systems.
        </p>

        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="mt-4 pt-lg-3 mb-4">
              <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
                Backend Development <span className="text-orange">Roadmap</span>
              </h2>
            </div>

            <Box sx={{ maxWidth: 400 }}>
              <Stepper
                activeStep={activeStep}
                orientation="vertical"
                connector={<CustomConnector />}
              >
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      StepIconComponent={CustomStepIcon}
                      optional={
                        index === 5 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          {activeStep < steps.length - 1 && (
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{
                                mt: 1,
                                mr: 1,
                                backgroundColor: '#f57c00',
                                '&:hover': {
                                  backgroundColor: '#f57c00',
                                },
                              }}
                            >
                              Continue
                            </Button>
                          )}
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{
                              mt: 1,
                              mr: 1,
                              color: '#f57c00',
                              borderColor: '#f57c00',
                              '&:hover': {
                                borderColor: '#e64a19',
                                color: '#e64a19',
                                backgroundColor: 'transparent',
                              },
                            }}
                            variant="outlined"
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>All steps completed - you&apos;re finished</Typography>
                  <Button
                    onClick={handleReset}
                    sx={{
                      mt: 1,
                      mr: 1,
                      backgroundColor: '#f57c00',
                      '&:hover': {
                        backgroundColor: '#e64a19',
                      },
                    }}
                  >
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
          </div>

          <div className="col-lg-6 col-md-6 d-flex align-items-center">
            <div>
              <div className="mt-4 pt-lg-3 mb-4">
                <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
                  <span className="text-orange">Enroll</span> Today
                </h2>
              </div>

              <p className="text-muted">
                Begin your journey in backend development with Mitisha Softech. Enroll now to learn essential backend skills and build powerful server-side applications. For more information or to register, contact us at <span className="text-orange">info@mitishasoftech.in</span> or <span className="text-orange">+91 77079-34521</span>.
              </p>

              <Link to='/contact' className="btn-mitisha mt-4 text-black bg-none">Enroll Today</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Backend;
