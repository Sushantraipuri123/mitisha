import { useParams } from 'react-router-dom';
import Topbar from '../../../utilities/topbar/Topbar';
import './SingleService.css';
import { Helmet } from "react-helmet";

function SingleService() {
    const serviceItems = [
        {
            serviceid: 1,
            servicename: "UI/UX Design",
            servicedesc: "Elevate your digital presence with our cutting-edge UI/UX services",
            image:"https://images.ctfassets.net/wp1lcwdav1p1/1GQxkrry1IsKEzY9P1eqMP/956c3ec5fc01e3ceb308226c01dbad93/UX_vs_UI.png?w=1500&q=60",
            heading1: "Crafting Intuitive Experiences",
            text1: "UI/UX services have a major impact on user engagement and happiness, which makes them indispensable to the success of digital products. An aesthetically pleasing experience is created by combining elements such as colors, layouts, and icons into a well-crafted User Interface (UI), which guarantees a visually appealing and consistent design. In addition, User Experience (UX) design uses persona development, intuitive interface design, and user research to optimize overall usability and satisfaction. In order to provide a seamless, user-centric experience that not only meets but exceeds user expectations, the synergy of UI and UX services is essential. Prioritizing UI/UX is a strategic requirement in today's competitive digital landscape since it directly affects how consumers perceive and interact with digital interfaces, which in turn determines a product or application's success.",
            text2: "UI/UX services have a major impact on user engagement and happiness, which makes them indispensable to the success of digital products. An aesthetically pleasing experience is created by combining elements such as colors, layouts, and icons into a well-crafted User Interface (UI), which guarantees a visually appealing and consistent design. In addition, User Experience (UX) design uses persona development, intuitive interface design, and user research to optimize overall usability and satisfaction. In order to provide a seamless, user-centric experience that not only meets but exceeds user expectations, the synergy of UI and UX services is essential. Prioritizing UI/UX is a strategic requirement in today's competitive digital landscape since it directly affects how consumers perceive and interact with digital interfaces, which in turn determines a product or application's success.",
            process: [
                {
                    step: 1,
                    text: "Research and Planning",
                    detail: "Understand the target audience, their needs, behaviors, and preferences through surveys, interviews, and analytics. Analyze competitors' interfaces to identify best practices and potential areas for differentiation."
                },
                {
                    step: 2,
                    text: "Wireframing and Prototyping",
                    detail: "Create low-fidelity wireframes to outline the basic structure and layout of the interface without detailed design elements. Develop interactive prototypes to visualize the user flow and navigation. This helps identify potential issues early in the design process."
                },
                {
                    step: 3,
                    text: "Design Iteration",
                    detail: "Apply the brand's visual elements to create a visually appealing interface. Focus on color schemes, typography, and imagery. Develop interactive elements and microinteractions to enhance user engagement and provide a seamless experience."
                },
                {
                    step: 4,
                    text: "Implementation and Handoff",
                    detail: "Work closely with developers to ensure the design is implemented correctly. Provide design specifications and assets."
                }
            ]
        },
        {
            serviceid:2,
            servicename:"Web Development",
            servicedesc:"Transforming Ideas into Dynamic Web Solutions",
            image:"https://cdn6.f-cdn.com/files/download/82615852/web-dev-ty.jpg?image-optimizer=force&format=webply&width=967",
            heading1: "Crafting Web Excellence",
            text1: "We recognize that the digital landscape is ever-changing, and we are here to provide your company with innovative website development solutions. Whether you are a startup trying to build your online presence or an established company wanting to redesign your website, our skilled team is prepared to turn your concepts into a visually appealing and useful product.",
            text2: "The creation of websites is essential in today's digital environment. It gives people and companies an internet presence and makes them accessible and convenient. A well-designed website makes marketing activities easier, increases trust, and allows for direct client connection. It increases worldwide reach, facilitates e-commerce, and effectively distributes knowledge. Having a website is customary in competitive industries and provides a competitive advantage. Additionally flexible and simple to update, websites guarantee that content is up to date in a hectic internet setting.",
            process: [
                {
                    step: 1,
                    text: "Define Objectives and Goals",
                    detail: "Clearly state the website's objectives and purpose. Recognize the intended features, target market, and overall functionality.."
                },
                {
                    step: 2,
                    text: "Planning",
                    detail: "Make a site map and specify the website's organizational structure. Arrange the content, navigation, and layout. Decide which platforms and technologies will be employed."
                },
                {
                    step: 3,
                    text: "Design",
                    detail: "Create the website's visual aesthetics, taking into account its overall design, color scheme, and layout. Goals for the user experience and brand should be in line with design."
                },
                {
                    step: 4,
                    text: "Development",
                    detail: "Write the website's code in accordance with the functional and design guidelines. For the user interface, front-end (client-side) development is used, while for functionality and data administration, back-end (server-side) development is involved."
                },
                {
                    step: 5,
                    text: "Content Creation",
                    detail: "website. This includes text, images, videos, and other multimedia elements."
                },
                {
                    step: 6,
                    text: "Testing",
                    detail: "Conduct thorough testing to identify and fix any bugs, errors, or issues. Ensure compatibility across various browsers and devices. Test functionality, performance, and security."
                },
                {
                    step: 7,
                    text: "Deployment",
                    detail: "Uploading the website to a web server will cause it to launch. Make sure to register your domain and configure your hosting. Open the webpage to the whole public."
                },
                {
                    step: 8,
                    text: "Optimization",
                    detail: "Use on-page SEO techniques to raise your website's ranking in search results. For quicker loading times, optimize your assets, including photos. Make sure the design is adaptable to many devices."
                },
                {
                    step: 9,
                    text: "Maintenance and Updates",
                    detail: "Update content frequently, correct bugs, and take care of security concerns. Keep an eye on user comments and website performance. Apply updates to maintain the site safe and up to date."
                }
            ]
        },
        {
            serviceid:3,
            servicename:"Graphic Designing",
            servicedesc:"Your Trusted Partner for Innovative Graphic Design Solutions.",
            heading1: "Creative Brilliance Unleashed",
            image:"https://www.georgeanimatrix.com/blog/wp-content/uploads/2023/08/jpeg-optimizer_14-1.jpg",
            text1: "The creation of visual content for efficient message communication is a component of graphic design services. For print or digital media, graphic designers create layouts, graphics, and other visual components using a variety of tools and methods. These services cover a broad spectrum of goods, such as social media visuals, website graphics, branding materials, marketing collateral, and logos. The objective is to create a recognizable and visually appealing brand for people, companies, or organizations while also evoking feelings and transmitting information. Graphic designers create visually stunning and powerful items by fusing their artistic abilities with a knowledge of design principles and customer goals.",
            text2: "Services for graphic design are essential in today's world of visually-driven communication. Graphic designers produce visually striking pieces that successfully communicate ideas and leave an impression by fusing creative flare with analytical reasoning. Graphic design is essential for a variety of platforms, including as websites, social media, marketing brochures, branding materials, and logos. In addition to adding to the visual appeal, a well-designed design is an effective instrument for brand awareness and communication. It assists companies and people in creating a distinctive brand, persuading audiences with information, and involving them in visually stimulating ways. Graphic design services are essential for drawing in customers, building brand loyalty, and guaranteeing that ideas and messages are effectively communicated in a visually cluttered and competitive market.",
            process: [
                {
                    step: 1,
                    text: "Brief and Researchs",
                    detail: "Recognize the target audience, goals, and requirements of the customer. Talk about the goals, the project's scope, and any particular preferences."
                },
                {
                    step: 2,
                    text: "Conceptualization and Design Planning    ",
                    detail: "Produce original ideas and concepts based on the study findings and the client's brief. To see the design's structure and layout, make basic sketches or wireframes."
                },
                {
                    step: 3,
                    text: "Design Execution",
                    detail: "Produce original ideas and concepts based on the study findings and the client's brief. To see the design's structure and layout, make basic sketches or wireframes."
                },
                {
                    step: 4,
                    text: "Review and Delivery",
                    detail: "Provide the client with the design drafts so they can offer comments and changes. After considering the client's input, make the required changes and get final approval.."
                }
            ]
        },
        {
            serviceid:4,
            servicename:"Digital Marketing",
            servicedesc:"Trust for a seamless journey to digital excellence!",
            heading1: "Accelerate Your Online Presence",
            image:"https://designsvalley.com/wp-content/uploads/2024/02/core-components-digital-marketing-1024x585.webp",
            text1: "Digital marketing services include using internet platforms and technologies to promote goods, services, or brands. Search engine optimization (SEO), social media marketing, email marketing, content marketing, and paid advertising are some examples of these tactics. Reaching and interacting with a target audience, increasing website traffic, and eventually producing leads or sales are the objectives. Digital marketing services make use of digital platforms and the internet to improve client engagement, raise brand awareness, and accomplish marketing goals in the online sphere.",
            text2: "In today's corporate environment, digital marketing is essential since it provides a powerful and dynamic means of establishing connections with people online. Its significance stems from its capacity to connect with a worldwide audience, improve brand awareness, and involve clients via diverse digital platforms. Digital marketing gives organizations a powerful online presence by utilizing tactics like social media marketing, search engine optimization, and customized advertising. It makes data-driven decision-making possible, enables individualized interactions, and yields quantifiable outcomes, enabling organizations to adjust and optimize their campaigns in real-time. The importance of digital marketing services in today's increasingly digital environment cannot be emphasized, as they are essential for customer acquisition, business expansion, and competitive advantage.",
            process: [
                {
                    step: 1,
                    text: "Strategic Planning and Targeting",
                    detail: "Your digital marketing campaign's aims and objectives should be clearly stated. Having specific goals is essential, whether the goal is sales, lead creation, or brand exposure."
                },
                {
                    step: 2,
                    text: "Execution of Campaigns",
                    detail: "Create interesting and pertinent information that appeals to the people who will read it. To increase visibility, optimize material for search engines (SEO)."
                },
                {
                    step: 3,
                    text: "Monitoring and Analysis",
                    detail: "To keep an eye on the effectiveness of your digital marketing activities, use analytics tools. Engagement, ROI, conversion rates, and website traffic are a few examples of key indicators."
                },
                {
                    step: 4,
                    text: "Optimization and Continuous Improvement",
                    detail: "Make constant improvements to your digital marketing tactics by utilizing performance data. Modify ad spending, optimize content, and react to shifts in the market or audience behavior."
                }
            ]
        },
        {
            serviceid:5,
            servicename:"App Development",
            servicedesc:"Unparalleled app development tailored to your unique needs.",
            heading1: "App Innovation",
            image:"https://d2ms8rpfqc4h24.cloudfront.net/mobile_application_development_ad3f711b7d.jpg",
            text1: "The construction of mobile applications for several platforms, including iOS, Android, and cross-platform solutions, is the focus of app development services. Setting goals, conducting market research, organizing, designing, developing, testing, and implementing are all steps in this process. To ensure a user-friendly interface and functioning, app developers utilize programming languages and frameworks to build the front-end and back-end of the app. Prototyping, performance and bug testing, as well as continuing maintenance, are additional possible services. The goal of app development is to deliver solutions that satisfy user requirements, improve user experience, and accomplish particular professional or personal goals.",
            text2: "App development services are of paramount importance in today's digital landscape. These services play a critical role in enhancing accessibility and convenience by providing users with seamless access to information and services through their smartphones. With the potential for global reach, businesses and individuals can transcend geographical boundaries and engage a broader audience. The development of well-designed apps not only contributes to increased brand visibility and recognition but also provides a competitive advantage in industries where user convenience is a key differentiator. Additionally, apps offer avenues for revenue generation through various strategies and enable businesses to gather valuable data insights for informed decision-making. The overall impact is an enriched user experience, fostering customer engagement and satisfaction. In essence, app development services are instrumental in shaping the digital presence of businesses and individuals, offering a dynamic platform for innovation, connectivity, and growth.",
            process: [
                {
                    step: 1,
                    text: "Conceptualization and Planning",
                    detail: "Specify the app's objectives, target user base, and purpose. To comprehend customer wants and the competition, conduct market research. Arrange the features, functions, and general architecture of the program."
                },
                {
                    step: 2,
                    text: "Wireframing and Design",
                    detail: "To describe the user flow and layout of the app, create wireframes. Create the visual design, taking into account the branding, colors, and user interface (UI) components. Create prototypes to see how the app will seem and feel."
                },
                {
                    step: 3,
                    text: "Prototyping",
                    detail: "Create the website's visual aesthetics, taking into account its overall design, color scheme, and layout. Goals for the user experience and brand should be in line with design."
                },
                {
                    step: 4,
                    text: "Testing",
                    detail: "Thorough testing is necessary to find and address issues, guarantee peak performance, and verify compatibility with different hardware and operating systems. Functional, usability, security, and performance testing are all included in this."
                },
                {
                    step: 5,
                    text: "Analytics and Feedback",
                    detail: "Use analytics software to collect information about user activity, app performance, and preferences. Make informed judgments about upcoming upgrades and improvements by analyzing this data."
                },
                {
                    step: 6,
                    text: "Deployment",
                    detail: "Launch the application using the selected app shops (Google Play Store, Apple App Store, etc.). For a successful launch, adhere to each platform's rules and specifications."
                },
                {
                    step: 7,
                    text: "Post-Launch Optimization",
                    detail: "After launch, keep an eye on user comments and app performance. Apply upgrades, fixes, and enhancements in response to user feedback and analytics information. To improve the user experience generally, take care of any problems or improvements."
                },
                {
                    step: 8,
                    text: "Marketing and Promotion",
                    detail: "Create a marketing plan to advertise the app and draw users. To boost visibility and downloads, make use of a variety of channels, such as social media, app store optimization (ASO), and digital advertising."
                },
                {
                    step: 9,
                    text: "Maintenance and Support",
                    detail: "To fix any problems, upgrade features, and guarantee compatibility with new hardware or operating system versions, provide continuous maintenance and support. Maintain a close eye on and improve the app's performance."
                }
            ]
        },
        {
            serviceid:6,
            servicename:"SEO Optimization",
            servicedesc:"Elevate your digital presence with our top-notch IT services.",
            heading1: "Boost Your Online Presence with Expert SEO Optimization Services",
            image:"https://qph.cf2.quoracdn.net/main-qimg-b6bafd99f13c98241c90e8cc168de2ac-lq",
            text1: "The main goal of SEO optimization services is to make a website more visible in search engine results, especially on Google. This calls for deliberate efforts akin to keyword research to identify relevant terms, on-runner optimization to match material to these terms, and the production of excellent and captivating content. The website's search engine rankings are improved using unique SEO techniques, optimized for point speed and mobile friendliness, and link structure from respectable websites. Additionally, frequent reporting and continuous tracking with analytics tools aid in updating and adjusting the SEO approach for best outcomes.",
            text2: "Because SEO optimization services have a major impact on a business's availability and visibility online, they are essential to its success. The improved visibility attained by employing successful SEO tactics results into enhanced organic business, broadening the audience to include implicit guests and a larger following. Beyond just business, SEO helps build credibility and trust since people tend to view websites that rank higher in search results as being more trustworthy. Additionally, the emphasis on honing specialized features and improving the stoner experience benefits callers by improving their overall experience and matching hunt machine algorithms. Crucially, SEO offers firms seeking to sustain a powerful and influential online presence an affordable alternative to paid advertising with long-term, long-lasting benefits.",
            process: [
                {
                    step: 1,
                    text: "Keyword Research and On-Page Optimization",
                    detail: "Choose pertinent terms that are associated with your company, goods, or services. Make use of resources such as Google Keyword Planner to gain insight into search volume and competition. Use deliberate use of targeted keywords in headers, meta descriptions, titles, and body copy. Make sure the content is readable, valuable, and well-organized."
                },
                {
                    step: 2,
                    text: "Technical SEO and Site Structure ",
                    detail: "Take care of technical issues such as crawlability, mobile friendliness, and website speed. Use clean URL structures, optimize your images, and put appropriate redirects in place. Logically arrange the content on your website. Make your pages easy to read and index for search engines by organizing them in a clear, hierarchical manner."
                },
                {
                    step: 3,
                    text: "Link Building and Off-Page Optimization",
                    detail: "Obtain backlinks of the highest caliber from reliable websites. To raise the authority of your website, concentrate on link-building tactics that are relevant and natural. Optimize your website for local searches, if applicable. Make sure that your NAP (Name, Address, Phone) information is consistent, take control of and update your Google My Business listing, and promote customer reviews."
                },
                {
                    step: 4,
                    text: "Review and Delivery",
                    detail: "Provide the client with the design drafts so they can offer comments and changes. After considering the client's input, make the required changes and get final approval.."
                }
            ]
        }
    ];

    const { id } = useParams();
    const serviceid = parseInt(id, 10);
    const service = serviceItems.find(item => item.serviceid === serviceid);

    if (!service) {
        return <p>Service not found</p>;
    }

    return (
        <>
       <Helmet>
        <link rel="canonical" href={`https://mitishasoftech.in/services/${id}`} />
      </Helmet>
            <Topbar />

            <div className="hero-bg mb-4 ">
                <div className="hero-map-bg">
                    <div className="container pt-5">
                        <div className="hero-content text-black pt-5">
                            <div className="d-flex gap-2 pt-5 mt-5 align-items-center">
                                <ul className="d-inline mb-2">
                                    <li className="sora text-muted">Our Services</li>
                                </ul>
                            </div>
                        </div>
                        <h2 className="Sectional-heading mt-4 pt-3 ms-2 syne">{service.servicename}</h2>
                    </div>
                </div>
                <div className="bg-web-hero-img"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-5  mt-3">
                    <div className="solution-img-container why-choose-us-img">
                        <img src={service.image} alt={service.servicename} className="solution-img" />
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6 d-flex align-items-center mt-3">
                       <div>
                       <h1 className="syne">{service.heading1}</h1>
                        <div className="text-muted sora lh-base mt-3">
                            {service.text1}
                        </div>
                       </div>
                    </div>
                </div>

                <div className="mt-5 mb-4">
                    <div className="small-hr-wrapper mt-2">
                        <hr className="small-hr" />
                        <hr className="full-hr" />
                        <hr className="small-hr" />
                    </div>
                </div>
            </div>

            <div className="container">
                <h3 className="text-center syne">Why <span className="text-orange">{service.servicename}</span> is Important?</h3>
                <p className="text-muted sora font-14 mt-3">
                    {service.text2}
                </p>
                <div className="small-hr-wrapper mt-4 mb-4">
                    <hr className="small-hr" />
                    <hr className="full-hr" />
                    <hr className="small-hr" />
                </div>
            </div>

            <div className="container mb-4">
                <h3 className="text-center syne">Process <span className="text-orange">Behind</span></h3>
                <div className="row gap-3 mt-3 justify-content-around">
                {service.process.map((step, index) => (
    <div className="col-lg-4 mt-3  border-pricing  p-3" key={index}>
        <div className="service-container ">
            <div className="id-container">
                <div className="help-icon ms-2 sora">
                    <span className='service-id'> 0{step.step}</span>
                </div>
            </div>
            <h4 className="mt-4 syne">{step.text}</h4>
            <p className="mt-3 text-muted sora font-14">{step.detail}</p>
        </div>
    </div>
))}
                </div>
            </div>
        </>
    );
}

export default SingleService;
