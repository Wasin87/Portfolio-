import { useEffect, useState } from "react";
import hero_logo from '../assets/logo2.png'
import AOS from "aos"
import "aos/dist/aos.css";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const roles = ["Web Developer", "MERN Stack Developer", "Frontend Developer"];

const Banner = () => {

    const [showScrollIcon, setShowScrollIcon] = useState(true);

    useEffect(() => {
        AOS.init({
            duration: 500,
            once: true,
        });
    }, []);
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const current = roles[roleIndex];
        if (index < current.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + current[index]);
                setIndex(index + 1);
            }, 90);
            return () => clearTimeout(timeout);
        } else {
            setTimeout(() => {
                setText("");
                setIndex(0);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }, 2000);
        }
    }, [index, roleIndex]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const triggerPoint = window.innerHeight * 0.35;
            if (scrollPosition > triggerPoint) {
                setShowScrollIcon(false);
            } else {
                setShowScrollIcon(true);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <section id="banner-section" className="relative min-h-screen overflow-hidden">
            {/* Animated linear background */}
            <div className="absolute inset-0 bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100"></div>
            
            {/* Floating tech elements */}
            <div className="absolute w-72 h-72 bg-[#010120] rounded-full 
        top-40 md:left-30 blur-3xl animate-floatSlow"></div>

            <div className="absolute w-96 h-96 bg-[#09026a] rounded-full 
        bottom-20 right-50 blur-3xl animate-floatSlow delay-2000"></div>

            <div className="relative max-w-7xl mx-auto  px-6 py-30 md:py-32 grid md:grid-cols-2 gap-16 items-center">

                {/* Left */}
                <div data-aos="fade-right">
                    <p className="uppercase tracking-widest text-[#57cbff] font-semibold text-lg">
                        Hello
                    </p>

                    <h1 className="mt-6 text-5xl md:text-7xl font-name2 font-bold leading-tight text-[#e6f1ff]">
                        I'm{" "}
                        <span className="tech-wave group">
                            
                            <span className="tech-wave-text bg-linear-to-r from-[#57cbff] to-[#64ffda] bg-clip-text text-transparent">
                                Md Wasin Ahmed
                            </span>
                        </span>
                    </h1>

                    <h2 className="mt-6 text-3xl md:text-4xl font-bold text-[#57cbff] animate-glow">
                        {text}
                        <span className="animate-pulse text-[#64ffda]">_</span>
                    </h2>

                    <p className="mt-8 leading-relaxed text-[#8892b0] max-w-lg text-lg">
                        MERN Stack Developer specializing in building full-stack web applications using MongoDB, Express.js, React and
                        Node.js. I've delivered multiple production-ready projects with authentication, role-based access, and CRUD
                        operations. Focused on creating responsive, user-friendly designs with robust problem-solving strategies.
                    </p>

                    <div className="flex flex-wrap gap-6 mt-10">
                        <a
                            href="/Md Wasin Ahmed.pdf"
                            download
                            className="tech-btn flex items-center gap-3 px-8 py-4 text-lg font-semibold"
                        >
                            Download Resume <MdOutlineFileDownload className="bounce-custom" size={24} />
                        </a>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="tech-btn flex items-center gap-3 px-8 py-4 text-lg font-semibold border-[#57cbff] hover:border-[#64ffda]"
                        >
                            Contact Me
                        </button>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex gap-8 pt-12 pl-2 text-3xl">
                        <a 
                            href="https://github.com/Wasin87" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-[#57cbff]/10 rounded-full blur-sm group-hover:bg-[#57cbff]/20 transition-all"></div>
                            <FaGithub className="
                                relative text-[#8892b0]
                                transition-all duration-300
                                hover:scale-125 hover:text-[#57cbff]
                                hover:drop-shadow-[0_0_20px_rgba(87,203,255,0.8)]"
                            />
                        </a>
                        
                        <a 
                            href="https://www.linkedin.com/in/md-wasin-ahmed/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-[#57cbff]/10 rounded-full blur-sm group-hover:bg-[#57cbff]/20 transition-all"></div>
                            <FaLinkedin className="
                                relative text-[#8892b0]
                                transition-all duration-300
                                hover:scale-125 hover:text-[#57cbff]
                                hover:drop-shadow-[0_0_20px_rgba(87,203,255,0.8)]"
                            />
                        </a>
                        
                        <a 
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=wasinahmed87@gmail.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            <div className="absolute -inset-2 bg-[#57cbff]/10 rounded-full blur-sm group-hover:bg-[#57cbff]/20 transition-all"></div>
                            <SiGmail className="
                                relative text-[#8892b0]
                                transition-all duration-300
                                hover:scale-125 hover:text-[#57cbff]
                                hover:drop-shadow-[0_0_20px_rgba(87,203,255,0.8)]"
                            />
                        </a>
                    </div>
                </div>

                {/* Right (Image) */}
                <div data-aos="fade-left" className="relative">
                    <div className="relative z-10">
                        <h2 className="text-5xl md:text-7xl absolute left-8 top-40 font-name2 font-bold text-[#e6f1ff] animate-floatSlow animate-glow">
                            Web <span className="text-[#64ffda]">Developer</span>
                        </h2>
                    </div>
                    
                    {/* Tech glow effect */}
                    <div className="absolute inset-0 
                                    bg-[radial-linear(circle_at_center,rgba(87,203,255,0.25),transparent_65%)]
                                    blur-3xl"></div>

                    {/* Terminal-style container */}
                    <div className="relative z-20 mx-auto max-w-lg border border-[#57cbff]/30 rounded-lg overflow-hidden">
                        <div className="bg-[#112240] p-3 border-b border-[#57cbff]/20 flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <span className="text-[#8892b0] text-sm ml-4">profile.jsx</span>
                        </div>
                        
                        <div className="relative">
                            <img
                                src={hero_logo}
                                alt="profile"
                                className="w-full h-auto"
                                style={{
                                    maskImage: "linear-linear(to bottom, black 80%, transparent 100%)",
                                    WebkitMaskImage: "linear-linear(to bottom, black 85%, transparent 100%)",
                                }}
                            />
                            
                            {/* Code overlay effect */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-[#0a192f]/80 to-transparent">
                                <div className="text-sm font-mono">
                                    <p className="text-[#8892b0]">
                                        <span className="text-[#57cbff]">$</span>
                                        <span className="text-[#57cbff] ml-2">role</span> 
                                        <span className="text-white"> = </span>
                                        <span className="text-[#64ffda]">"Full Stack Developer"</span>
                                    </p>
                                    <p className="text-[#8892b0] mt-2">
                                        <span className="text-[#57cbff]">$</span>
                                        <span className="text-[#57cbff] ml-2">status</span> 
                                        <span className="text-white"> = </span>
                                        <span className="text-[#64ffda]">"Available for opportunities"</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Floating tech chips */}
                    <div className="absolute -bottom-6 left-10 flex gap-3">
                        <span className="bg-[#112240] border border-[#57cbff]/30 text-[#57cbff] text-xs px-3 py-1 rounded-full">React</span>
                        <span className="bg-[#112240] border border-[#57cbff]/30 text-[#64ffda] text-xs px-3 py-1 rounded-full">Node.js</span>
                        <span className="bg-[#112240] border border-[#57cbff]/30 text-[#57cbff] text-xs px-3 py-1 rounded-full">MongoDB</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator - SIMPLE VERSION */}
            <div className="hidden md:block">
                {showScrollIcon ? (
                    <div className="bottom-10 absolute flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 animate-floatSlow">
                        <p className="text-[#8892b0] text-sm mb-2">Scroll Down</p>
                        <div className="w-16 h-16 flex items-center justify-center">
                            <div className="w-6 h-10 border-2 border-[#57cbff] rounded-full flex justify-center pt-2">
                                <div className="w-1 h-3 bg-[#57cbff] rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="bottom-10 absolute flex flex-col justify-center items-center left-1/2 transform -translate-x-1/2 animate-floatSlow">
                        <p className="text-[#8892b0] text-sm mb-2">Scroll Up</p>
                        <div className="w-16 h-16 flex items-center justify-center rotate-180">
                            <div className="w-6 h-10 border-2 border-[#57cbff] rounded-full flex justify-center pt-2">
                                <div className="w-1 h-3 bg-[#57cbff] rounded-full animate-bounce"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Additional floating elements */}
            <div className="absolute top-20 right-20 w-3 h-3 rounded-full bg-[#57cbff] opacity-30 animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-4 h-4 rounded-full bg-[#64ffda] opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        </section>
    );
};

export default Banner;