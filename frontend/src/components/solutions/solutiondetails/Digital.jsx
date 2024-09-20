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

function Digital() {

  const steps =  [
    {
      label: 'Introduction to Digital Marketing',
      description: `Understand the fundamentals of digital marketing, including SEO, SEM, content marketing, and social media strategies. Learn how to leverage digital channels to drive growth.`,
    },
    {
      label: 'Setting Up Your Digital Marketing Campaign',
      description: `Learn to create effective digital marketing campaigns. Understand audience targeting, budget management, and campaign objectives to optimize your marketing efforts.`,
    },
    {
      label: 'Master SEO (Search Engine Optimization)',
      description: `Dive into SEO techniques to improve your website’s visibility. Learn about keyword research, on-page and off-page optimization, and analytics to drive organic traffic.`,
    },
    {
      label: 'Develop Effective Content Marketing Strategies',
      description: `Create compelling content to attract and engage your audience. Learn about content planning, creation, and distribution to enhance brand awareness and drive conversions.`,
    },
    {
      label: 'Utilize Social Media Marketing',
      description: `Explore social media platforms and tools. Learn to develop strategies, create engaging content, and analyze metrics to boost your presence and interaction on social media.`,
    },
    {
      label: 'Analyze and Optimize Campaign Performance',
      description: `Understand how to measure and analyze your campaign performance. Learn to use analytics tools to track metrics, evaluate results, and make data-driven decisions to enhance effectiveness.`,
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
        <link rel="canonical" href="https://mitishasoftech.in/digital" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">Digital Marketing</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              Digital Marketing Training
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Learn <span className="text-orange">Digital Marketing</span> Strategies
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            Welcome to our Digital Marketing training program! This course covers essential strategies and tools to help you drive online growth. Gain expertise in SEO, SEM, content marketing, and social media.
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
                    <strong>SEO:</strong> Master the techniques of search engine optimization to improve your website’s ranking and visibility on search engines.
                  </li>
                  <li>
                    <strong>Content Marketing:</strong> Learn to create and distribute valuable content that attracts and engages your target audience.
                  </li>
                  <li>
                    <strong>Social Media Marketing:</strong> Explore strategies for leveraging social media platforms to enhance brand awareness and customer engagement.
                  </li>
                  <li>
                    <strong>Analytics:</strong> Gain skills in analyzing campaign performance and using data to make informed marketing decisions and optimize results.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://www.boerberg.com/wp-content/uploads/2023/12/Digital-Marketing-2.jpg"
                alt="digital marketing training"
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
          Our Digital Marketing course is expertly designed to provide you with the latest strategies and tools. Enjoy flexible learning options and expert guidance to achieve your marketing goals.
        </p>

        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="mt-4 pt-lg-3 mb-4">
              <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
                Digital Marketing <span className="text-orange">Roadmap</span>
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
                Start your journey to mastering digital marketing with Mitisha Softech. Enroll now to learn the latest techniques and strategies for driving online success. For more information or to register, contact us at <span className="text-orange">info@mitishasoftech.in</span> or <span className="text-orange">+91 77079-34521</span>.
              </p>

              <Link to='/contact' className="btn-mitisha mt-4 text-black bg-none">Enroll Today</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Digital;
