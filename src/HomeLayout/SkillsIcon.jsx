import React, { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaJsSquare, FaFigma, FaGitAlt } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io5";
import { PiPlugFill } from "react-icons/pi";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiTypescript } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";

const orbitIconSize = 40; // Reduced icon size

const icons = [
    { icon: <FaReact size={orbitIconSize} className="text-[#57cbff]" />, name: "React", duration: 12, radius: 180, glowColor: "#57cbff" },
    
    { icon: <TbBrandNextjs size={orbitIconSize} className="text-white" />, name: "Next.js", duration: 14, radius: 220, glowColor: "#ffffff" },
    
    { icon: <SiTailwindcss size={orbitIconSize} className="text-[#38bdf8]" />, name: "Tailwind", duration: 18, radius: 160, glowColor: "#38bdf8" },
    { icon: <FaJsSquare size={orbitIconSize} className="text-yellow-400" />, name: "JavaScript", duration: 13, radius: 130, glowColor: "#f7df1e" },
    { icon: <SiTypescript size={orbitIconSize} className="text-[#3178c6]" />, name: "TypeScript", duration: 15, radius: 120, glowColor: "#3178c6" },
    { icon: <IoLogoHtml5 size={orbitIconSize} className="text-orange-500" />, name: "HTML5", duration: 19, radius: 150, glowColor: "#e34f26" },
    { icon: <PiPlugFill size={orbitIconSize} className="text-[#8892b0]" />, name: "REST API", duration: 21, radius: 180, glowColor: "#8892b0" },
    { icon: <SiExpress size={orbitIconSize} className="text-gray-300" />, name: "Express", duration: 23, radius: 120, glowColor: "#ffffff" },
    { icon: <SiMongodb size={orbitIconSize} className="text-[#47a248]" />, name: "MongoDB", duration: 11, radius: 210, glowColor: "#47a248" },
    { icon: <VscVscodeInsiders size={orbitIconSize} className="text-[#007acc]" />, name: "VS Code", duration: 25, radius: 160, glowColor: "#007acc" },
    { icon: <SiPostman size={orbitIconSize} className="text-orange-500" />, name: "Postman", duration: 18, radius: 170, glowColor: "#ff6c37" },
    { icon: <FaFigma size={orbitIconSize} className="text-purple-500" />, name: "Figma", duration: 16, radius: 190, glowColor: "#f24e1e" },
    { icon: <FaGitAlt size={orbitIconSize} className="text-[#f1502f]" />, name: "Git", duration: 20, radius: 230, glowColor: "#f1502f" },
    { icon: <FaNodeJs size={orbitIconSize} className="text-[#64ffda]" />, name: "Node.js", duration: 16, radius: 100, glowColor: "#64ffda" },
];

const SkillsIcon = () => {
    const [stars, setStars] = useState([]);
    const [comets, setComets] = useState([]);

    // Generate random stars for background
    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 80; i++) {
                newStars.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.7 + 0.3,
                delay: Math.random() * 5,
                duration: Math.random() * 3 + 2,
                });
            }
            setStars(newStars);
        };

        // Generate occasional comets
        const generateComets = () => {
            const newComets = [];
            for (let i = 0; i < 2; i++) {
                newComets.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    delay: Math.random() * 10,
                });
            }
            setComets(newComets);
        };

        generateStars();
        generateComets();

        // Regenerate comets periodically
        const cometInterval = setInterval(generateComets, 20000);
        return () => clearInterval(cometInterval);
    }, []);

    return (
        <section id="technologies-section" className="relative min-h-screen py-16 overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100">
            {/* Animated Starfield Background */}
            <div className="absolute inset-0">
                {stars.map(star => (
                    <div
                        key={star.id}
                        className="absolute rounded-full bg-white"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: star.opacity,
                            animation: `twinkle ${star.duration}s infinite ${star.delay}s`,
                        }}
                    />
                ))}
                
                {/* Shooting Comets */}
                {comets.map(comet => (
                    <div
                        key={comet.id}
                        className="absolute w-32 h-px bg-linear-to-r from-transparent via-[#57cbff] to-transparent"
                        style={{
                            left: `${comet.x}%`,
                            top: `${comet.y}%`,
                            animation: `shootingStar 1.5s linear ${comet.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Nebula effects - smaller */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 min-h-[700px] flex flex-col items-center justify-center">
                {/* Section Header */}
                <div className="relative z-10 text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="bg-linear-to-r from-[#57cbff] via-[#64ffda] to-[#57cbff] bg-clip-text text-transparent bg-[length:200%_auto] animate-linear">
                            Tech Galaxy
                        </span>
                    </h2>
                    <div className="w-48 h-1 mx-auto mt-3 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full shadow-lg shadow-[#57cbff]/30"></div>
                    <p className="text-[#8892b0] text-base md:text-lg mt-6 max-w-2xl mx-auto px-4">
                        Explore my universe of technologies. Each star represents a skill I've mastered 
                        through building amazing digital experiences.
                    </p>
                </div>

                {/* Main Solar System Container - smaller */}
                <div className="relative w-full max-w-4xl h-[400px] md:h-[500px] flex items-center justify-center">
                    {/* Orbital Rings (faint glow) - smaller */}
                    {[200, 250, 300, 350].map((radius, i) => (
                        <div
                            key={`ring-${i}`}
                            className="absolute border border-white/3 rounded-full"
                            style={{
                                width: radius,
                                height: radius,
                            }}
                        />
                    ))}

                    {/* Central Earth/Moon Planet - smaller */}
                    <div className="absolute z-20 w-24 h-24 md:w-36 md:h-36">
                        <div className="relative w-full h-full">
                            {/* Planet Glow */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#57ebff] to-[#64a2ff] rounded-full blur-xl opacity-20 animate-pulse"></div>
                            
                            {/* Planet Body with Clouds */}
                            <div className="relative w-full h-full rounded-full overflow-hidden">
                                {/* Earth texture */}
                        <img
                            src="https://i.ibb.co.com/3y1WLHTJ/Lo-removebg-preview.png"
                            alt="Tech Core"
                            className="w-full h-full object-contain spin-smooth"
                        />
                                
                                {/* Cloud animation layer */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="cloud-layer"></div>
                                </div>
                                
                                {/* Spinning effect container */}
                                <div className="absolute inset-0">
                                    {/* Small moon orbiting around earth - smaller */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 md:w-10 md:h-10">
                                        <div className="w-full h-full bg-linear-to-br from-gray-300 to-gray-400 rounded-full shadow-md"></div>
                                        <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/20 to-transparent rounded-full"></div>
                                    </div>
                                </div>
                                
                                {/* Glossy effect */}
                                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent rounded-full"></div>
                            </div>
                            
                            {/* Orbital ring around planet */}
                            <div className="absolute -inset-3 border border-[#57cbff]/15 rounded-full animate-ping opacity-15"></div>
                        </div>
                    </div>

                    {/* Orbiting Technology Stars */}
                    {icons.map((tech, index) => {
                        const angle = (index * 360) / icons.length;
                        const animationDuration = tech.duration;
                        const orbitRadius = tech.radius;

                        return (
                            <div
                                key={index}
                                className="absolute z-10 group"
                                style={{
                                    animation: `orbit ${animationDuration}s linear infinite`,
                                    animationDelay: `${index * 0.5}s`,
                                    width: orbitRadius * 2,
                                    height: orbitRadius * 2,
                                    left: '50%',
                                    top: '50%',
                                    marginLeft: -orbitRadius,
                                    marginTop: -orbitRadius,
                                }}
                            >
                                {/* Orbit path (visible on hover) */}
                                <div className="absolute inset-0 border border-white/3 rounded-full group-hover:border-[#57cbff]/20 transition-all duration-500"></div>
                                
                                {/* Technology Star */}
                                <div
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                                               transition-all duration-300 group-hover:scale-110 group-hover:z-30"
                                    style={{
                                        transform: `translateX(${orbitRadius}px) rotate(${angle}deg) translateY(${orbitRadius}px) rotate(-${angle}deg)`,
                                    }}
                                >
                                    {/* Star glow effect */}
                                    <div 
                                        className="absolute inset-0 rounded-full blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                                        style={{ backgroundColor: tech.glowColor }}
                                    ></div>
                                    
                                    {/* Star body */}
                                    <div className="relative bg-linear-to-br from-gray-900 to-black p-2 rounded-xl 
                                                    border border-gray-800 shadow-lg 
                                                    group-hover:border-[#57cbff] group-hover:shadow-[0_0_20px] transition-all duration-300"
                                        style={{ 
                                            boxShadow: `0 0 15px ${tech.glowColor}30`,
                                            borderColor: `${tech.glowColor}30`,
                                        }}
                                    >
                                        {tech.icon}
                                        
                                        {/* Twinkling effect */}
                                        <div className="absolute inset-0 rounded-xl bg-linear-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>
                                    
                                    {/* Tooltip/Label */}
                                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                                                    opacity-0 group-hover:opacity-100 transition-all duration-300
                                                    whitespace-nowrap bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-md
                                                    border border-gray-700 shadow-lg text-xs"
                                        style={{
                                            boxShadow: `0 0 15px ${tech.glowColor}`,
                                        }}>
                                        <span className="text-white font-medium">{tech.name}</span>
                                        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 
                                                        bg-[#57cbff] rotate-45"></div>
                                    </div>
                                    
                                    {/* Connection line to orbit */}
                                    <div className="absolute -top-2 left-1/2 w-px h-2 bg-linear-to-b from-transparent to-[#57cbff]/30 
                                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Floating asteroids/debris - smaller */}
                    {[1, 2, 3].map(i => (
                        <div
                            key={`asteroid-${i}`}
                            className="absolute w-3 h-3 bg-linear-to-br from-gray-700 to-gray-900 rounded-full opacity-20"
                            style={{
                                left: `${15 + i * 20}%`,
                                top: `${10 + i * 15}%`,
                                animation: `float ${8 + i * 2}s infinite ${i * 0.5}s`,
                            }}
                        />
                    ))}
                </div>

                {/* Technology Stats - smaller */}
                <div className="relative z-10 mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto px-4">
                    {[
                        { label: "Frontend", value: "8+", techs: "React, Next.js, Tailwind" },
                        { label: "Backend", value: "6+", techs: "Node.js, Express, MongoDB" },
                        { label: "Tools", value: "10+", techs: "Git, VS Code, Figma" },
                        { label: "Languages", value: "5+", techs: "JavaScript, TypeScript" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="bg-linear-to-br from-gray-900/40 to-black/40 backdrop-blur-sm 
                                       border border-gray-800 rounded-xl p-4 text-center
                                       hover:border-[#57cbff]/20 hover:transform hover:-translate-y-0.5 
                                       transition-all duration-300 group"
                        >
                            <div className="text-2xl font-bold bg-linear-to-r from-[#57cbff] to-[#64ffda] bg-clip-text text-transparent">
                                {stat.value}
                            </div>
                            <div className="text-white font-semibold mt-1 text-sm md:text-base">{stat.label}</div>
                            <div className="text-[#8892b0] text-xs md:text-sm mt-1">{stat.techs}</div>
                            <div className="h-px w-8 bg-linear-to-r from-[#57cbff] to-[#64ffda] mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Add custom animations to global CSS */}
            <style jsx>{`
                @keyframes orbit {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes spin-slow {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }

                @keyframes twinkle {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1.1);
                    }
                }

                @keyframes shootingStar {
                    0% {
                        transform: translateX(0) translateY(0) rotate(45deg);
                        opacity: 1;
                        width: 0;
                    }
                    70% {
                        opacity: 1;
                        width: 120px;
                    }
                    100% {
                        transform: translateX(200px) translateY(-200px) rotate(45deg);
                        opacity: 0;
                        width: 0;
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                    }
                    50% {
                        transform: translateY(-15px) rotate(180deg);
                    }
                }

                @keyframes linear {
                    0%, 100% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                }

                .cloud-layer {
                    background: linear-linear(90deg, 
                        transparent 0%, 
                        rgba(255,255,255,0.05) 25%, 
                        rgba(255,255,255,0.1) 50%, 
                        rgba(255,255,255,0.05) 75%, 
                        transparent 100%);
                    height: 100%;
                    width: 200%;
                    animation: cloudMove 25s linear infinite;
                }

                @keyframes cloudMove {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }

                .animate-linear {
                    animation: linear 3s ease infinite;
                    background-size: 200% auto;
                }

                /* Responsive adjustments */
                @media (max-width: 768px) {
                    .orbit-star {
                        transform: scale(0.6);
                    }
                    
                    #technologies-section {
                        padding-top: 3rem;
                        padding-bottom: 3rem;
                    }
                }

                @media (max-width: 480px) {
                    .orbit-star {
                        transform: scale(0.5);
                    }
                }
            `}</style>
        </section>
    );
};

export default SkillsIcon;