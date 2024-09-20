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

function App() {

  const steps = [
    {
      label: 'Introduction to App Development',
      description: `Understand the fundamentals of app development, including mobile and web applications. Learn about the lifecycle of app development and key concepts for creating successful apps.`,
    },
    {
      label: 'Setting Up the Development Environment',
      description: `Install and configure essential tools and platforms for app development. Get started with IDEs, SDKs, and version control using Git and GitHub.`,
    },
    {
      label: 'Designing User Interfaces',
      description: `Learn how to design intuitive and responsive user interfaces for your app. Explore UI/UX best practices and tools for creating engaging and user-friendly experiences.`,
    },
    {
      label: 'Developing Frontend Features',
      description: `Focus on building the frontend of your app with modern frameworks and libraries. Learn to implement interactive features, form handling, and state management.`,
    },
    {
      label: 'Implementing Backend Services',
      description: `Develop the backend of your app, including server-side logic, databases, and APIs. Explore techniques for handling data, user authentication, and app security.`,
    },
    {
      label: 'Testing and Deployment',
      description: `Test your app thoroughly to ensure quality and performance. Learn about different testing strategies and deploy your app to app stores or web platforms for public access.`,
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
        <link rel="canonical" href="https://mitishasoftech.in/app" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">App Development</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              App Development Training
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Learn <span className="text-orange">App Development</span>
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            Welcome to our App Development training program! Whether you’re interested in mobile or web apps, our course covers all essential aspects to create successful applications.
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
                    <strong>UI/UX Design:</strong> Learn to create visually appealing and user-friendly interfaces. Understand design principles and tools to enhance user experience.
                  </li>
                  <li>
                    <strong>Frontend Development:</strong> Master frontend technologies to build interactive and responsive user interfaces. Explore modern frameworks and libraries.
                  </li>
                  <li>
                    <strong>Backend Development:</strong> Develop the server-side logic, handle databases, and create APIs. Learn about security, authentication, and data management.
                  </li>
                  <li>
                    <strong>Testing and Deployment:</strong> Understand different testing strategies to ensure app quality. Learn to deploy your app to app stores or web platforms.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://assets.entrepreneur.com/content/3x2/2000/20190612193425-GettyImages-1066987316-crop.jpeg?format=pjeg&auto=webp&crop=16:9"
                alt="App Development"
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
          Our App Development training is designed to give you practical skills and industry knowledge. With flexible learning options and expert instructors, you’ll be equipped to create high-quality apps.
        </p>

        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="mt-4 pt-lg-3 mb-4">
              <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
                App Development <span className="text-orange">Roadmap</span>
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
                Kickstart your career in app development with Mitisha Softech. Enroll today to gain practical skills and knowledge needed to build innovative applications. For more information or to register, contact us at <span className="text-orange">info@mitishasoftech.in</span> or <span className="text-orange">+91 77079-34521</span>.
              </p>

              <Link to='/contact' className="btn-mitisha mt-4 text-black bg-none">Enroll Today</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
