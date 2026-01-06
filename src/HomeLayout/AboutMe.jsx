import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoArrowRedoSharp, IoCodeSlash, IoRocket, IoSparkles } from "react-icons/io5";
import { FiCpu, FiDatabase, FiLayers, FiTarget } from "react-icons/fi";
import { GiCircuitry, GiCogLock, GiMoebiusStar, GiProcessor } from "react-icons/gi";
import { FaBolt, FaCode, FaMicrochip, FaServer } from "react-icons/fa";
import { LuBrain, LuCircuitBoard } from "react-icons/lu";
import { TbStack2Filled, TbTopologyStarRing3 } from "react-icons/tb";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic'
        });
        setTimeout(() => {
            AOS.refreshHard();
        }, 600);
    }, []);
    
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <section id="about-section" className="relative py-28 overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100" ref={ref}>
            {/* Animated Circuit Background */}
            <div className="absolute inset-0 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="circuit-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <path d="M0,0 L20,0 M0,0 L0,20" stroke="rgba(100, 255, 218, 0.1)" strokeWidth="0.5" fill="none"/>
                            <circle cx="10" cy="10" r="1" fill="rgba(87, 203, 255, 0.1)"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#circuit-grid)"/>
                </svg>
                
                {/* Animated Circuit Lines */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#64ffda] to-transparent animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#57cbff] to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                
                {/* Floating Tech Elements */}
                        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          >
            <div className="text-2xl text-cyan-400 opacity-30">
              {i % 4 === 0 && <FaMicrochip />}
              {i % 4 === 1 && <FaBolt />}
              {i % 4 === 2 && <FaServer />}
              {i % 4 === 3 && <FaCode />}
            </div>
          </motion.div>
        ))}


            </div>

            {/* Section Header with Tech Effects */}
            <div className="relative max-w-7xl mx-auto px-6 mb-20">
                <div className="text-center relative">
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-32">
                        <div className="absolute inset-0 border-2 border-[#64ffda]/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                        <div className="absolute inset-4 border-2 border-[#57cbff]/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '0.5s'}}></div>
                        <TbTopologyStarRing3 className="absolute inset-0 w-full h-full text-[#64ffda]/10 animate-spin-slow"/>
                    </div>
                    
                    <h2 className="relative text-5xl md:text-6xl font-bold mb-6 z-10">
                        <span className="text-4xl md:text-5xl font-name2 font-bold bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer animate-glow">
                            About Me
                        </span>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-linear-to-r from-transparent via-[#64ffda] to-transparent rounded-full"></div>
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full"></div>
                    </h2>
                    
                    <p className="text-[#8892b0] max-w-2xl mx-auto text-lg">
                        Crafting digital experiences with cutting-edge technology and innovative solutions
                    </p>
                </div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
                {/* Card 1 - Who I Am */}
                <div data-aos="fade-right" data-aos-delay="200">
                    <div className="relative group">
                        {/* Card Glow Effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-[#64ffda] via-[#57cbff] to-[#00d9ff] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                        
                        <div className="relative tech-card p-8 border border-[#1e2a3a] bg-linear-to-br from-[#0a0a0a] to-[#111827] rounded-2xl backdrop-blur-sm overflow-hidden">
                            {/* Animated Corner Borders */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#64ffda] rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#57cbff] rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#00d9ff] rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#64ffda] rounded-br-lg"></div>
                            
                            {/* Animated Background Pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <svg width="100%" height="100%">
                                    <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                                        <path d="M0,50 L100,50 M50,0 L50,100" stroke="currentColor" strokeWidth="1"/>
                                        <circle cx="50" cy="50" r="3" fill="currentColor"/>
                                        <circle cx="25" cy="25" r="2" fill="currentColor"/>
                                        <circle cx="75" cy="75" r="2" fill="currentColor"/>
                                    </pattern>
                                    <rect width="100%" height="100%" fill="url(#circuit-pattern)" className="text-[#64ffda]"/>
                                </svg>
                            </div>

                            <div className="relative z-10">
                                {/* Title with Animated Icon */}
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="relative">
                                        <GiCogLock className="text-4xl text-[#64ffda] animate-spin-slow"/>
                                        <div className="absolute -inset-2 bg-[#64ffda]/10 rounded-full blur-sm"></div>
                                    </div>
                                    <h3 className="text-3xl font-bold bg-linear-to-r from-[#57cbff] via-[#64ffda] to-[#00d9ff] bg-clip-text text-transparent">
                                        {inView && (
                                            <Typewriter
                                                words={["Core Identity"]}
                                                loop={1}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={100}
                                                deleteSpeed={50}
                                            />
                                        )}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="mb-10">
                                    <p className="text-[#8892b0] leading-relaxed text-base md:text-lg mb-6">
                                        I am <span className="text-[#64ffda] font-semibold">Wasin Ahmed</span>, a dedicated Software Engineering student at Daffodil International University with a relentless passion for creating impactful digital solutions. My approach combines technical expertise with strategic thinking.
                                    </p>
                                    
                                    <div className="relative p-4 border border-[#1e2a3a] rounded-lg bg-black/20 backdrop-blur-sm">
                                        <div className="flex items-start gap-3">
                                            <IoSparkles className="text-[#57cbff] text-xl mt-1 "/>
                                            <p className="text-[#8892b0] italic">
                                                "I believe in writing code that not only works but tells a story of innovation and efficiency."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="relative h-px w-full my-10 overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#57cbff] to-transparent"></div>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#64ffda] to-transparent animate-pulse" style={{animationDuration: '2s'}}></div>
                                </div>

                                {/* Key Strengths */}
                                <div data-aos="fade-up" data-aos-delay="400">
                                    <h4 className="text-xl font-bold bg-linear-to-r from-[#57cbff] to-[#64ffda] bg-clip-text text-transparent mb-6 flex items-center gap-3">
                                        <FiTarget className="text-[#57cbff]"/>
                                        Core Competencies
                                    </h4>
                                    
                                    <div className="space-y-5">
                                        {[
                                            { 
                                                title: "Technical Excellence", 
                                                desc: "Mastering modern web technologies with precision",
                                                icon: <FiCpu className="text-[#64ffda]"/>
                                            },
                                            { 
                                                title: "Strategic Mindset", 
                                                desc: "Balancing innovation with practical implementation",
                                                icon: <LuBrain className="text-[#57cbff]"/>
                                            },
                                            { 
                                                title: "Communication & Collaboration", 
                                                desc: "Effective teamwork and clear technical articulation",
                                                icon: <IoArrowRedoSharp className="text-[#00d9ff]"/>
                                            },
                                            { 
                                                title: "Performance-Driven", 
                                                desc: "Optimized solutions with measurable results",
                                                icon: <IoRocket className="text-[#64ffda]"/>
                                            },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className="group/item p-4 rounded-xl border border-[#1e2a3a] hover:border-[#57cbff]/50 transition-all duration-300 hover:bg-black/20 backdrop-blur-sm"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="relative">
                                                        <div className="p-2 rounded-lg bg-linear-to-br from-[#64ffda]/10 to-[#57cbff]/10">
                                                            {item.icon}
                                                        </div>
                                                        <div className="absolute -inset-1 bg-linear-to-r from-[#64ffda] to-[#57cbff] rounded-lg blur opacity-0 group-hover/item:opacity-20 transition duration-500"></div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h5 className="font-semibold text-white mb-1 group-hover/item:text-[#57cbff] transition-colors">
                                                            {item.title}
                                                        </h5>
                                                        <p className="text-sm text-[#8892b0]">
                                                            {item.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2 - My Specialty */}
                <div data-aos="fade-left" data-aos-delay="400">
                    <div className="relative group">
                        {/* Card Glow Effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-[#00d9ff] via-[#57cbff] to-[#64ffda] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000" style={{animationDelay: '1s'}}></div>

                        <div className="relative tech-card p-8 border border-[#1e2a3a] bg-linear-to-br from-[#0a0a0a] to-[#111827] rounded-2xl backdrop-blur-sm overflow-hidden">
                            {/* Animated Corner Borders */}
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#57cbff] rounded-tl-lg"></div>
                            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#00d9ff] rounded-tr-lg"></div>
                            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#64ffda] rounded-bl-lg"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#57cbff] rounded-br-lg"></div>

                            <div className="relative z-10">
                                {/* Title with Animated Icon */}
                                <div className="flex items-center justify-center gap-4 mb-8">
                                    <div className="relative">
                                        <GiCircuitry className="text-4xl text-[#57cbff] animate-spin-slow" style={{animationDirection: 'reverse'}}/>
                                        <div className="absolute -inset-2 bg-[#57cbff]/10 rounded-full blur-sm"></div>
                                    </div>
                                    <h3 className="text-3xl font-bold bg-linear-to-r from-[#00d9ff] via-[#57cbff] to-[#64ffda] bg-clip-text text-transparent">
                                        {inView && (
                                            <Typewriter
                                                words={["Technical Mastery"]}
                                                loop={1}
                                                cursor
                                                cursorStyle="|"
                                                typeSpeed={100}
                                                deleteSpeed={50}
                                            />
                                        )}
                                    </h3>
                                </div>

                                {/* Description */}
                                <div className="mb-10">
                                    <p className="text-[#8892b0] leading-relaxed text-base md:text-lg mb-6">
                                        Specializing in building scalable, high-performance applications with focus on clean architecture, optimal performance, and exceptional user experiences using cutting-edge technologies.
                                    </p>
                                    
                                    <div className="relative p-4 border border-[#1e2a3a] rounded-lg bg-black/20 backdrop-blur-sm">
                                        <div className="flex items-start gap-3">
                                            <IoCodeSlash className="text-[#64ffda] text-xl mt-1 "/>
                                            <p className="text-[#8892b0] italic">
                                                "Transforming complex problems into elegant solutions through code craftsmanship."
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="relative h-px w-full my-10 overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#64ffda] to-transparent"></div>
                                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#57cbff] to-transparent animate-pulse" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
                                </div>

                                {/* Tech Specialties Grid */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        {
                                            title: "Frontend Architecture",
                                            icon: <FaCode className="text-[#64ffda] text-xl"/>,
                                            desc: "React ecosystems, state management, and responsive design systems",
                                            gradient: "from-[#64ffda] to-[#57cbff]"
                                        },
                                        {
                                            title: "Full-Stack Development",
                                            icon: <TbStack2Filled className="text-[#57cbff] text-xl"/>,
                                            desc: "MERN stack applications with robust backend architecture",
                                            gradient: "from-[#57cbff] to-[#00d9ff]"
                                        },
                                        {
                                            title: "Performance Optimization",
                                            icon: <FiLayers className="text-[#00d9ff] text-xl"/>,
                                            desc: "Code splitting, lazy loading, and performance monitoring",
                                            gradient: "from-[#00d9ff] to-[#64ffda]"
                                        },
                                        {
                                            title: "System Architecture",
                                            icon: <FiDatabase className="text-[#64ffda] text-xl"/>,
                                            desc: "Scalable solutions with clean, maintainable codebases",
                                            gradient: "from-[#64ffda] to-[#57cbff]"
                                        },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            data-aos="zoom-in"
                                            data-aos-delay={index * 100 + 600}
                                            className="group/card relative"
                                        >
                                            {/* Card Glow */}
                                            <div className={`absolute -inset-0.5 bg-linear-to-r ${item.gradient} rounded-xl blur opacity-0 group-hover/card:opacity-20 transition duration-500`}></div>

                                            <div className="relative tech-card p-6 border border-[#1e2a3a] bg-linear-to-b from-[#0a0a0a] to-black rounded-xl backdrop-blur-sm h-full">
                                                {/* Icon Container */}
                                                <div className="mb-4 relative">
                                                    <div className="inline-flex p-3 rounded-lg bg-linear-to-br from-[#0a0a0a] to-[#1e2a3a] border border-[#1e2a3a]">
                                                        {item.icon}
                                                    </div>
                                                    <div className="absolute -inset-2 bg-linear-to-r from-transparent via-current to-transparent opacity-0 group-hover/card:opacity-5 transition duration-500"></div>
                                                </div>
                                                
                                                {/* Content */}
                                                <h4 className="text-lg font-semibold text-white mb-3 group-hover/card:text-transparent group-hover/card:bg-linear-to-r group-hover/card:from-[#64ffda] group-hover/card:to-[#57cbff] group-hover/card:bg-clip-text transition-all duration-300">
                                                    {inView && (
                                                        <Typewriter
                                                            words={[item.title]}
                                                            loop={1}
                                                            cursor
                                                            cursorStyle=""
                                                            typeSpeed={120}
                                                            delay={index * 200}
                                                        />
                                                    )}
                                                </h4>
                                                
                                                <p className="text-sm text-[#8892b0] leading-relaxed">
                                                    {item.desc}
                                                </p>
                                                
                                                {/* Animated Underline */}
                                                <div className="mt-4 w-0 h-0.5 bg-linear-to-r from-transparent via-current to-transparent group-hover/card:w-full transition-all duration-500 ease-out"></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute top-20 left-5 w-3 h-3 rounded-full bg-[#64ffda] opacity-20 animate-ping" style={{animationDuration: '3s'}}></div>
            <div className="absolute top-40 right-10 w-4 h-4 rounded-full bg-[#57cbff] opacity-15 animate-ping" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
            <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-[#00d9ff] opacity-10 animate-ping" style={{animationDuration: '4s', animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-1/3 w-3 h-3 rounded-full bg-[#64ffda] opacity-15 animate-ping" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}></div>
        </section>
    );
};

export default AboutMe;