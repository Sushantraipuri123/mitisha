import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Topbar.css';
import logo from '/public/ms-logo.png'; // Ensure correct path
import { Link } from 'react-router-dom';

function Topbar() {
    const [isOpen, setIsOpen] = useState({ enterprises: false, services: false, solutions: false });
    const [expanded, setExpanded] = useState(false);

    const handleMouseEnter = (dropdown) => {
        if (window.innerWidth >= 992) { // lg breakpoint
            setIsOpen(prevState => ({ ...prevState, [dropdown]: true }));
        }
    };

    const handleMouseLeave = (dropdown) => {
        if (window.innerWidth >= 992) { // lg breakpoint
            setIsOpen(prevState => ({ ...prevState, [dropdown]: false }));
        }
    };

    const handleLinkClick = () => {
        setExpanded(false);
        setIsOpen({ enterprises: false, services: false, solutions: false });
    };

    const handleToggleClick = () => {
        setExpanded(expanded ? false : "expanded");
    };

    const handleDropdownClick = (dropdown) => {
        if (window.innerWidth < 992) { // lg breakpoint
            setIsOpen(prevState => ({ ...prevState, [dropdown]: !prevState[dropdown] }));
        }
    };

    return (
        <Navbar expand="lg" className="bg-topbar " expanded={expanded}>
            <Container>
                <Navbar.Brand as={Link} to='/' onClick={handleLinkClick}>
                    <img src={logo} alt="mitisha logo" className='logo-nav' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggleClick} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <div className={`dropdown nav-item-wrapper ${isOpen.enterprises ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('enterprises')} onMouseLeave={() => handleMouseLeave('enterprises')} onClick={() => handleDropdownClick('enterprises')}>
                            <Link to="/" className='drop-btn'>
                                <button className={`btn drop-topbar-btn me-3 text-black nav-topbar-text ${window.location.pathname === '/enterprises' ? 'active' : ''}`} type="button" id="dropdownMenuButton" aria-expanded={isOpen.enterprises ? "true" : "false"} onClick={handleLinkClick}>
                                    Enterprises
                                    <span className="orange-circle"></span>
                                </button>
                            </Link>
                            <ul className={`dropdown-menu ${isOpen.enterprises ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                                <li><Link className="dropdown-item" to="/team" onClick={handleLinkClick}>Team</Link></li>
                                <li><Link className="dropdown-item" to="/career" onClick={handleLinkClick}>Careers</Link></li>
                                <li><Link className="dropdown-item" to="/pricing" onClick={handleLinkClick}>Prices</Link></li>
                                <li><Link className="dropdown-item" to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
                            </ul>
                        </div>


                        <Nav.Link as={Link} to="/about" className={`me-3 nav-topbar-text ${window.location.pathname === '/case-studies' ? 'active' : ''}`} onClick={handleLinkClick}>About us</Nav.Link>

                        <div className={`dropdown nav-item-wrapper ${isOpen.services ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={() => handleMouseLeave('services')} onClick={() => handleDropdownClick('services')}>
                            <Link to="/services" className='drop-btn'>
                                <button className={`btn drop-topbar-btn me-4 nav-topbar-text ${window.location.pathname === '/services' ? 'active' : ''}`} type="button" id="dropdownMenuButton" aria-expanded={isOpen.services ? "true" : "false"} onClick={handleLinkClick}>
                                    Services
                                    <span className="orange-circle"></span>
                                </button>
                            </Link>
                            <ul className={`dropdown-menu ${isOpen.services ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/services/1" onClick={handleLinkClick}>UI/UX Design</Link></li>
                            <li><Link className="dropdown-item" to="/services/2" onClick={handleLinkClick}>Web Development</Link></li>
                            <li><Link className="dropdown-item" to="/services/3" onClick={handleLinkClick}>Graphic designing</Link></li>
                            <li><Link className="dropdown-item" to="/services/4" onClick={handleLinkClick}>Digital Markiting</Link></li>
                            <li><Link className="dropdown-item" to="/services/5" onClick={handleLinkClick}>App Development</Link></li>
                            <li><Link className="dropdown-item" to="/services/6" onClick={handleLinkClick}>SEO Optiisation</Link></li>

                                
                            </ul>
                        </div>

                       <div className={`dropdown nav-item-wrapper ${isOpen.solutions ? 'show' : ''}`} onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={() => handleMouseLeave('solutions')} onClick={() => handleDropdownClick('solutions')}>
                            <Link to="/solutions" className='drop-btn'>
                                <button className={`btn drop-topbar-btn me-3 nav-topbar-text ${window.location.pathname === '/solutions' ? 'active' : ''}`} type="button" id="dropdownMenuButton" aria-expanded={isOpen.solutions ? "true" : "false"} onClick={handleLinkClick}>
                                    Internship
                                    <span className="orange-circle"></span>
                                </button>
                            </Link>
                            <ul className={`dropdown-menu ${isOpen.solutions ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                            <li><Link className="dropdown-item" to="/solution/mern" onClick={handleLinkClick}>MERN Stack</Link></li>
                            <li><Link className="dropdown-item" to="/solution/digital" onClick={handleLinkClick}>Digital Marketing</Link></li>
                            <li><Link className="dropdown-item" to="/solution/app" onClick={handleLinkClick}>App Development</Link></li>
                            <li><Link className="dropdown-item" to="/solution/seo" onClick={handleLinkClick}>SEO</Link></li>
                            <li><Link className="dropdown-item" to="/solution/frontend" onClick={handleLinkClick}>Frontend Development</Link></li>
                            <li><Link className="dropdown-item" to="/solution/backend" onClick={handleLinkClick}>Backend Development</Link></li>
                            </ul>
                        </div> 

                        <Nav.Link as={Link} to="/contact" className={`me-3 nav-topbar-text ${window.location.pathname === '/contact' ? 'active' : ''}`} onClick={handleLinkClick}>Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topbar;
