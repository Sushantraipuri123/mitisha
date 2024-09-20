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

function Seo() {

  const steps =  [
    {
      label: 'Introduction to SEO',
      description: `Understand the basics of Search Engine Optimization, including key terms, SEO importance, and how search engines work to rank web pages.`,
    },
    {
      label: 'Keyword Research and Analysis',
      description: `Learn how to identify relevant keywords for your business. Explore tools and techniques to find keywords that will drive traffic and improve rankings.`,
    },
    {
      label: 'On-Page SEO Techniques',
      description: `Master on-page SEO factors such as meta tags, headings, content optimization, and internal linking to enhance your website’s search engine visibility.`,
    },
    {
      label: 'Off-Page SEO Strategies',
      description: `Discover off-page SEO strategies including link building, social media influence, and reputation management to boost your website’s authority and ranking.`,
    },
    {
      label: 'Technical SEO Fundamentals',
      description: `Dive into technical SEO aspects such as site speed, mobile-friendliness, crawlability, and structured data to ensure your site is optimized for search engines.`,
    },
    {
      label: 'SEO Analytics and Reporting',
      description: `Learn to use tools like Google Analytics and Google Search Console to monitor SEO performance, analyze data, and create reports for ongoing optimization.`,
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
        <link rel="canonical" href="https://mitishasoftech.in/seo" />
      </Helmet>
      <Topbar />

      <div className="hero-bg mb-4">
        <div className="hero-map-bg">
          <div className="container pt-5">
            <div className="hero-content text-black pt-5">
              <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                <span className="sora">Home</span>
                <ul className="d-inline mb-2">
                  <li className="sora text-muted">SEO Training</li>
                </ul>
              </div>
            </div>
            <h1 className="Sectional-heading mt-4 pt-3 ms-2 syne">
              SEO Training
            </h1>
          </div>
        </div>
        <div className="bg-web-hero-img"></div>
      </div>

      <div className="container mt-5 pt-lg-4 mb-4">
        <h3 className="text-center mb-4">
          Master <span className="text-orange">SEO</span> Techniques
        </h3>
        <div className="row justify-content-center">
          <div className="col-lg-10 text-muted font-14 mx-auto">
            Welcome to our SEO training program! Our course is designed to provide you with comprehensive knowledge and practical skills to improve your website’s search engine ranking and drive more organic traffic.
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
                    <strong>Keyword Research:</strong> Discover how to find and target the right keywords to attract your ideal audience and increase search visibility.
                  </li>
                  <li>
                    <strong>On-Page Optimization:</strong> Learn techniques to optimize your website's content, meta tags, and structure to improve search engine rankings.
                  </li>
                  <li>
                    <strong>Off-Page Strategies:</strong> Explore methods for building quality backlinks and leveraging social media to enhance your website’s authority.
                  </li>
                  <li>
                    <strong>Technical SEO:</strong> Understand essential technical aspects like site speed, mobile optimization, and structured data to ensure your site is SEO-friendly.
                  </li>
                  <li>
                    <strong>SEO Analytics:</strong> Learn to track and analyze SEO performance using tools like Google Analytics and Search Console to measure success and make data-driven decisions.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mt-3 d-flex justify-content-center align-items-center">
            <div className="solution-img-container why-choose-us-img">
              <img
                src="https://seagulladvertising.com/hubfs/search%20engine%20optimization.jpg"
                alt="SEO training"
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
          Our SEO training program is meticulously designed to provide you with the latest SEO strategies and best practices. Benefit from expert instructors, flexible learning options, and hands-on experience to achieve higher search rankings and online success.
        </p>

        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-6">
            <div className="mt-4 pt-lg-3 mb-4">
              <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">
                SEO <span className="text-orange">Roadmap</span>
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
                Start your journey to mastering SEO with Mitisha Softech. Enroll now to gain in-depth knowledge and practical skills in SEO. For more information or to register, contact us at <span className="text-orange">info@mitishasoftech.in</span> or <span className="text-orange">+91 77079-34521</span>.
              </p>

              <Link to='/contact' className="btn-mitisha mt-4 text-black bg-none">Enroll Today</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Seo;
