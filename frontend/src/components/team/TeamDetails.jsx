import { useParams } from "react-router-dom";
import Topbar from "../../utilities/topbar/Topbar";
import ProgressBar from 'react-bootstrap/ProgressBar';

function TeamDetails() {
    const team = [
        {
            id: 1,
            name: 'Sushant',
            designation: 'Full Stack Developer',
            image: '/4.jpeg',
            biography: "Sushant is a full stack developer with knowledge of WordPress, AWS, JavaScript, and the MERN stack. His wide range of abilities guarantees the delivery of solid, creative solutions and flawless platform functionality.",
             skills: [
                { name: 'MERN stack', percentage: 90 },
                { name: 'WordPress', percentage: 85 },
                { name: 'AWS', percentage: 85 }
            ],
            empid: "MS010102"
        },
        {
            id: 2,
            name: 'Akshay',
            designation: 'Frontend Developer',
            image: '/2.jpeg',
            biography: "Akshay is a talented Frontend Developer specializing in creating dynamic and user-friendly interfaces. His expertise in HTML, CSS, JavaScript, React.js and bootstrap ensures engaging, high-performance web experiences for our clients.",
            skills: [
                { name: 'React', percentage: 88 },
                { name: 'JavaScript', percentage: 75 },
                { name: 'Angular', percentage: 85 }
            ],
            empid: "MS010102"
        },
        {
            id: 3,
            name: 'Nitin',
            designation: 'Digital Marketing Executive',
            image: '/3.jpeg',
            biography: "Nitin is a strategic Digital Marketing Executive adept at crafting impactful campaigns. His expertise in SEO, PPC, Wordpress, SMO and social media drives brand visibility and engages target audiences effectively..",
             skills: [
                { name: 'SCO', percentage: 85 },
                { name: 'Wordpress', percentage: 80 },
                { name: 'SMO', percentage: 88 }
            ],
            empid: "MS010704"
        },
        {
            id: 4,
            name: 'Komal Sharma',
            designation: 'Web Developer',
            image: '/1.jpeg',
            biography: "Komal brings expertise in WordPress, React, JavaScript, and more. With a strong focus on creating dynamic, user-friendly websites, they ensure high-quality, innovative solutions tailored to client needs.",
             skills: [
                { name: 'Wordpress', percentage: 80 },
                { name: 'JavaScript', percentage: 85 },
                { name: 'React', percentage: 80 }
            ],
            empid: "MS010102"
        },
        {
            id: 5,
            name: 'Shruti Gupta',
            designation: 'Software Developer - Backend',
            image: '/5.jpg',
            biography: "Backend developer skilled in JavaScript, AWS, and Linux. Crafts scalable, secure solutions while leveraging cloud infrastructure. Passionate about innovation and staying ahead of tech trends.",
             skills: [
                 { name: 'JavaScript', percentage: 90 },
                 { name: 'Linux', percentage: 85 },
                 { name: 'AWS', percentage: 90 },
            ],
            empid: "MS010102"
        },
        {
            id: 6,
            name: 'Aman Deep Tiwari',
            designation: 'MERN Stack Developer',
            image: '/6.JPG',
            biography: "Innovative MERN stack developer blending MongoDB, Express.js, React, and Node.js to craft seamless and scalable web applications. Passionate about turning complex problems into elegant solutions.",
             skills: [
                { name: 'React', percentage: 80 },
                { name: 'Express.js', percentage: 80 },
                { name: 'MongoDB', percentage: 90 }
            ],
            empid: "MS010102"
        },
    ];

    const { id } = useParams();
    const memberId = parseInt(id, 10); // Convert URL parameter to integer
    const member = team.find(t => t.id === memberId);

    // Handle case when member is not found
    if (!member) {
        return <div>Member not found</div>;
    }

    return (
        <>
            <Topbar />

            <div 
            className="hero-bg mb-4"
            style={{
                position: "relative",
                width: "100%",
                minHeight: "40vh",
                height: "auto",
               
            }}
            >
            <div
    className="hero-map-bg"
    style={{
        position: "relative",
        width: "100%",
        minHeight: "40vh",
        height: "auto",
        maxHeight: "500px",
    }}
>
                    <div className="container pt-5">
                        <div className="row mt-3">
                            <div className="col-lg-6 col-md-6 ">
                                <h2 className="Sectional-heading mt-5  ms-2 syne">{member.name}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-web-hero-img"></div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-5">
                        <div
                            style={{
                                width: '100%',
                                height: '500px',
                                overflow: 'hidden',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                }}
                            />
                        </div>
                        {member.designation && (
                            <div className="text-center mt-3">
                                <h2 className="syne mt-4">Designation</h2>
                                <p className="sora text-orange">{member.designation}</p>
                            </div>
                        )}
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-6">
                        <h2 className="syne mt-2 mb-3 ">Biography</h2>
                        <p className="sora text-muted">{member.biography}</p>

                        {member.skills && (
                            <>
                                <h2 className="syne mt-4 ">Skills</h2>
                                {member.skills.map((skill, index) => (
                                    <div key={index}>
                                        <h6 className="syne mt-4">{skill.name}</h6>
                                        <div className="mt-3 d-flex align-items-center position-relative">
                                            <ProgressBar
                                                now={skill.percentage}
                                                style={{
                                                    flex: 1,
                                                    height: '5px',
                                                    backgroundColor: '#f1f1f1',
                                                    borderRadius: '5px',
                                                }}
                                            >
                                                <ProgressBar
                                                    now={skill.percentage}
                                                    variant="danger"
                                                    style={{
                                                        height: '5px',
                                                        backgroundColor: '#f57c00',
                                                        borderRadius: '5px',
                                                    }}
                                                />
                                            </ProgressBar>
                                            <span className="text-muted ms-2 ">{skill.percentage}%</span>
                                        </div>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default TeamDetails;
