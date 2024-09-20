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

function Frontend() {

  const steps = [
    {
      label: 'Introduction to Frontend Development',
      description: `Get an overview of frontend development, including the importance of creating engaging and responsive user interfaces. Learn about the tools and technologies used in modern frontend development.`,
    },
    {
      label: 'HTML & CSS Fundamentals',
      description: `Master the basics of HTML and CSS to build the structure and style of your web pages. Learn about semantic HTML, CSS layouts, and responsive design principles to create beautiful and functional websites.`,
    },
    {
      label: 'JavaScript Essentials',
      description: `Dive into JavaScript to add interactivity to your web applications. Understand core concepts such as variables, functions, and events, and learn how to manipulate the DOM to enhance user experiences.`,
    },
    {
      label: 'Advanced JavaScript & Frameworks',
      description: `Explore advanced JavaScript concepts and modern frameworks like React or Vue.js. Learn about component-based architecture, state management, and how to build dynamic web applications efficiently.`,
    },
    {
      label: 'Frontend Development Tools',
      description: `Get familiar with essential tools and workflows used in frontend development. Learn about version control with Git, build tools like Webpack, and package managers like npm or Yarn for managing dependencies.`,
    },
    {
      label: 'Testing and Deployment',
      description: `Understand the importance of testing and deploying frontend applications. Learn about different testing strategies and how to deploy your projects to web hosting platforms or content delivery networks (CDNs).`,
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
        <link rel="canonical" href="https://mitishasoftech.in/frontend" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Frontend Development</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              Frontend Development Training
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Master <span className="text-orange">Frontend Development</span>
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            Welcome to our Frontend Development training program! Learn how to build engaging and responsive user interfaces for web applications. Our course covers essential technologies and practices for modern frontend development.
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
                    <strong>HTML & CSS:</strong> Build the foundation of your web pages with semantic HTML and responsive CSS design. Learn about layout techniques, styling, and cross-browser compatibility.
                  </li>
                  <li>
                    <strong>JavaScript:</strong> Enhance your web pages with JavaScript to create interactive and dynamic experiences. Understand core programming concepts and DOM manipulation.
                  </li>
                  <li>
                    <strong>Frontend Frameworks:</strong> Explore modern frontend frameworks like React or Vue.js. Learn about component-based architecture and state management to streamline development.
                  </li>
                  <li>
                    <strong>Development Tools:</strong> Get familiar with essential tools such as Git for version control, Webpack for build processes, and npm for managing dependencies.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://www.zdnet.com/a/img/resize/13c95f2c394a10915b702a65b9c31108ec498bb3/2020/11/11/f9e2069f-1c25-484b-9989-49cb52de3eef/istock-1197640540.jpg?auto=webp&fit=crop&height=675&width=1200"
                alt="Frontend Development"
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
          Our Frontend Development training is designed to equip you with practical skills to create stunning and functional web interfaces. With expert instructors and flexible learning options, you'll gain the expertise needed to excel in frontend development.
        </p>

        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="mt-4 pt-lg-3 mb-4">
              <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
                Frontend Development <span className="text-orange">Roadmap</span>
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
                Kickstart your career in frontend development with Mitisha Softech. Enroll today to gain practical skills and knowledge needed to build modern web interfaces. For more information or to register, contact us at <span className="text-orange">info@mitishasoftech.in</span> or <span className="text-orange">+91 77079-34521</span>.
              </p>

              <Link to='/contact' className="btn-mitisha mt-4 text-black bg-none">Enroll Today</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Frontend;
