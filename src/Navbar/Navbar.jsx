import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setShow(false);
            } else {
                setShow(true);
            }

            setLastScrollY(currentScrollY);

            // Update active section based on scroll position
            const sections = ['banner-section', 'about-section', 'project-section', 'certificates-section', 'contact-section'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        {
            id: 'banner-section',
            label: 'Home',
            icon: '🏠'
        },
        {
            id: 'about-section',
            label: 'About',
            icon: '👨‍💻'
        },
        {
            id: 'project-section',
            label: 'Projects',
            icon: '🚀'
        },
        {
            id: 'certificates-section',
            label: 'Certificates',
            icon: '🎓'
        },
        {
            id: 'contact-section',
            label: 'Contact',
            icon: '📱'
        }
    ];

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
    };

    return (
        <nav
            className={`tech-nav fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${show ? " " : " "}`}
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between py-3">
                    {/* Logo/Brand */}
                    <div className="navbar-start flex items-center gap-3">
                        <img src={logo} className='w-16 h-16 rounded-full object-cover  ' alt="Logo" />
                        <h1 
                            data-aos="fade-right"
                            className="text-xl md:text-3xl cursor-pointer flex group select-none font-name2"
                        >
                            <span className="tech-wave group">
                                <span className="wave">M</span>
                                <span className="wave">d</span>
                                <span className="mx-1"></span>
                                <span className="wave">W</span>
                                <span className="wave">a</span>
                                <span className="wave">s</span>
                                <span className="wave">i</span>
                                <span className="wave">n</span>
                                <span className="mx-1"></span>
                                <span className="wave">A</span>
                                <span className="wave">h</span>
                                <span className="wave">m</span>
                                <span className="wave">e</span>
                                <span className="wave">d</span>
                            </span>
                        </h1>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="navbar-end lg:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className=" border-[#57cbff] rounded-2xl p-2 hover:bg-[#57cbff]/10 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#57cbff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                            </svg>
                        </button>
                        
                        {/* Mobile Menu Dropdown */}
                        {mobileMenuOpen && (
                            <div className="absolute top-full right-4 mt-2 w-56 rounded-xl bg-[#01060f] border border-[#27ddfd] backdrop-blur-xl shadow-2xl z-50">
                                <ul className="py-2">
                                    {navLinks.map((link) => (
                                        <li key={link.id}>
                                            <button
                                                onClick={(e) => handleNavClick(e, link.id)}
                                                className={`w-full flex items-center gap-3 px-4 py-3 transition-all duration-300 ${
                                                    activeSection === link.id
                                                        ? 'bg-[#57cbff]/10 text-[#57cbff]'
                                                        : 'text-[#8892b0] hover:text-[#e6f1ff] hover:bg-[#57cbff]/5'
                                                }`}
                                            >
                                                <span className="text-lg">{link.icon}</span>
                                                <span className="font-medium text-left">{link.label}</span>
                                                {activeSection === link.id && (
                                                    <div className="ml-auto w-2 h-2 rounded-full bg-[#57cbff] animate-pulse"></div>
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>

                    {/* Desktop Navigation */}
                    <div data-aos="fade-left" className="navbar-end hidden lg:flex">
                        <div className="flex items-center gap-1 bg-[#112240]/50 backdrop-blur-sm border border-[#57cbff] rounded-full px-2 py-2">
                            {navLinks.map((link, index) => (
                                <div key={link.id} className="relative">
                                    <button
                                        onClick={(e) => handleNavClick(e, link.id)}
                                        className={`relative px-4 py-2 font-medium text-base transition-all duration-300 group rounded-full mx-1 ${
                                            activeSection === link.id
                                                ? 'text-[#e6f1ff] bg-[#57cbff]/10'
                                                : 'text-[#8892b0] hover:text-[#e6f1ff] hover:bg-[#57cbff]/5'
                                        }`}
                                    >
                                        <span className="relative z-10 flex items-center gap-2">
                                            <span className={`text-sm transition-all duration-300 ${
                                                activeSection === link.id ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'
                                            }`}>
                                                {link.icon}
                                            </span>
                                            {link.label}
                                        </span>
                                        {activeSection === link.id && (
                                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-linear-to-r from-[#57cbff] to-[#64ffda] rounded-full"></div>
                                        )}
                                    </button>
                                    
                                    {/* Add small separator between items (except last) */}
                                    {index < navLinks.length - 1 && (
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-4 bg-linear-to-b from-transparent via-[#57cbff]/30 to-transparent"></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Active section indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#57cbff]/20 to-transparent"></div>
            </div>
        </nav>
    );
};

export default Navbar;