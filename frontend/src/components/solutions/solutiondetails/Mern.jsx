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

// Custom StepIcon style
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

function Mern() {

  const steps =  [
    {
      label: 'Introduction to Full-Stack Development',
      description: `Understand the role and benefits of full-stack development and the MERN stack. Learn how MongoDB, Express.js, React, and Node.js work together to build robust applications.`,
    },
    {
      label: 'Setting Up the Development Environment',
      description: `Install essential tools such as Node.js, npm, and an IDE. Get started with version control using Git and GitHub for code management and collaboration.`,
    },
    {
      label: 'Master MongoDB',
      description: `Learn MongoDB fundamentals, including CRUD operations and schema design with Mongoose. Explore database management techniques to optimize performance and data handling.`,
    },
    {
      label: 'Develop with Express.js',
      description: `Build server-side applications using Express.js. Learn routing, middleware management, and API development. Implement error handling and data validation for robust application functionality.`,
    },
    {
      label: 'Create Frontend with React',
      description: `Develop interactive user interfaces using React. Focus on components, state management, and React Router for seamless navigation. Implement form handling and validation for dynamic user experiences.`,
    },
    {
      label: 'Integrate and Deploy',
      description: `Connect the frontend and backend, implement authentication, and deploy your application using platforms like Heroku or AWS. Learn to manage application scalability and security.`,
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
        <link rel="canonical" href="https://mitishasoftech.in/mern" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">MERN Stack</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              MERN Stack Traning
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Learn <span className="text-orange">MERN Stack </span> Development
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            Welcome to our MERN Stack Development training program! The MERN
            stack combines MongoDB, Express.js, React, and Node.js to create
            dynamic and scalable full-stack applications. Our comprehensive
            course is designed to equip you with the skills needed to develop
            robust, high-performance web applications.
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
                    <strong>MongoDB:</strong> Master the fundamentals of
                    MongoDB, a NoSQL database that provides high performance,
                    flexibility, and scalability. Learn how to design schemas,
                    manage data, and interact with the database efficiently.
                  </li>
                  <li>
                    <strong>Express.js:</strong> Gain expertise in Express.js, a
                    web application framework for Node.js. Discover how to build
                    APIs, handle routing, manage middleware, and streamline
                    server-side development to create scalable applications.
                  </li>
                  <li>
                    <strong>React:</strong> Explore React, a powerful library
                    for building interactive user interfaces. Learn about
                    components, state management, hooks, and React Router to
                    create seamless, dynamic front-end experiences.
                  </li>
                  <li>
                    <strong>Node.js:</strong> Dive into Node.js, a runtime
                    environment that allows JavaScript to be used for
                    server-side development. Understand asynchronous
                    programming, server management, and how to integrate Node.js
                    with other technologies in the stack.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://markovate.com/wp-content/uploads/2022/08/top-MERN-Stack.webp"
                alt="home automation solution"
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

        <h3 className="syne">Why Choose US ?</h3>

        <p className="mt-3 mb-3 text-muted-sora">
          Our MERN Stack Development course is meticulously crafted to equip you
          with the skills and knowledge needed to excel in today’s competitive
          tech landscape. We offer flexible learning options, including live
          sessions and on-demand materials, to fit your schedule and learning
          preferences. Enroll today to start your journey toward mastering
          full-stack development with the MERN stack.
        </p>

      <div className="row justify-content-between">
        <div className="col-lg-6 col-md-6">
        <div className="mt-4 pt-lg-3 mb-4">
          <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
            MERN Stack  <span className="text-orange">Roadmap</span>
          </h2>
        </div>

        {/* =====stepper=========== */}

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
                        borderColor: '#e64a19', // Darker orange on hover
                        color: '#e64a19', // Darker orange text on hover
                        backgroundColor: 'transparent', // No background color on hover
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
                backgroundColor: '#e64a19', // Darker orange on hover
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
        Start your journey to becoming a proficient MERN stack developer with Mitisha Softech. Enroll now and take the first step towards mastering the technologies that drive modern web applications. For more information or to register, contact us at <span className="text-orange">info@mitishasoftech.in</span> or <span className="text-orange">+91 77079-34521</span>.
        </p>

        <Link  to='/contact' className="btn-mitisha mt-4 text-black bg-none">Enroll Today</Link>
        </div>
        </div>
      </div>


      </div>
    </>
  );
}

export default Mern;
