import { FaLightbulb, FaProjectDiagram } from 'react-icons/fa';
import { GiClockwork } from 'react-icons/gi';
import { PiRadioactiveBold } from 'react-icons/pi';

const Extra1 = () => {
    const stats = [
        {
            icon: <FaProjectDiagram className="text-5xl text-[#57cbff]" />,
            animation: "shake",
            value: "10+",
            label: "Projects Completed",
            description: "Real-world applications delivered"
        },
        {
            icon: <PiRadioactiveBold className="text-5xl text-[#64ffda]" />,
            animation: "animate-spin-smooth",
            value: "100%",
            label: "Coding Enthusiasm",
            description: "Passion for development"
        },
        {
            icon: <GiClockwork className="text-5xl text-[#57cbff]" />,
            animation: "bounce-custom",
            value: "1.5+",
            label: "Years Experience",
            description: "Professional development"
        },
        {
            icon: <FaLightbulb className="text-5xl text-[#64ffda]" />,
            animation: "animate-pulse",
            value: "∞",
            label: "Continuous Learning",
            description: "Always evolving skills"
        }
    ];

    return (
        <section id="stats-section" data-aos="zoom-in-down" className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100">
            {/* Tech background elements */}
            <div className="tech-bg-elements">
                <div className="circuit-line"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Tech glow background */}
                <div className="absolute inset-0 -z-10 rounded-2xl bg-linear-to-r from-[#57cbff] to-[#64ffda] blur-[150px] opacity-15 animate-pulse" />
                
                {/* Stats Cards Container */}
                <div className="relative tech-card p-2 border-[#57cbff]/20 hover:border-[#57cbff]/40 transition-all duration-500">
                    {/* Grid of Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="relative">
                                <div data-aos="zoom-in" data-aos-delay={index * 100} className="p-8 text-center group">
                                    {/* Icon Container */}
                                    <div className="relative inline-flex items-center justify-center mb-6">
                                        <div className="absolute inset-0 bg-linear-to-br from-[#57cbff]/20 to-[#64ffda]/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                                        <div className={`relative ${stat.animation}`}>
                                            {stat.icon}
                                        </div>
                                    </div>
                                    
                                    {/* Value */}
                                    <h3 className="text-5xl font-bold bg-linear-to-r from-[#57cbff] to-[#64ffda] bg-clip-text text-transparent mt-2">
                                        {stat.value}
                                    </h3>
                                    
                                    {/* Label */}
                                    <p className="mt-3 text-xl font-semibold text-[#e6f1ff]">
                                        {stat.label}
                                    </p>
                                    
                                    {/* Description */}
                                    <p className="mt-2 text-sm text-[#8892b0]">
                                        {stat.description}
                                    </p>
                                    
                                    {/* Hover effect line */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#57cbff] to-[#64ffda] group-hover:w-16 transition-all duration-500"></div>
                                </div>
                                
                                {/* Vertical dividers for desktop */}
                                {index < stats.length - 1 && (
                                    <>
                                        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-linear-to-b from-transparent via-[#57cbff]/30 to-transparent" />
                                        <div className="hidden md:block lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-linear-to-b from-transparent via-[#57cbff]/30 to-transparent" />
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    {/* Horizontal dividers for mobile/tablet */}
                    <div className="md:hidden">
                        {[0, 1].map((i) => (
                            <div key={i} className="absolute left-1/2 transform -translate-x-1/2 w-48 h-px bg-linear-to-r from-transparent via-[#57cbff]/30 to-transparent" 
                                 style={{ top: `${(i + 1) * 50}%` }} />
                        ))}
                    </div>
                    
                    {/* Grid lines overlay */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 border border-[#57cbff]/10 rounded-xl"></div>
                        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-[#57cbff]/10 to-transparent hidden md:block"></div>
                        <div className="absolute top-1/2 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#57cbff]/10 to-transparent md:hidden"></div>
                    </div>
                </div>
                
                {/* Section description */}
                <div className="mt-12 text-center max-w-3xl mx-auto">
                    <p className="text-[#8892b0] text-lg leading-relaxed">
                        These numbers represent my commitment to quality, continuous improvement, 
                        and passion for creating impactful digital solutions.
                    </p>
                </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/3 left-10 w-3 h-3 rounded-full bg-[#57cbff] opacity-20 animate-floatSlow"></div>
            <div className="absolute bottom-1/3 right-10 w-4 h-4 rounded-full bg-[#64ffda] opacity-15 animate-floatSlow" style={{ animationDelay: '2s' }}></div>
        </section>
    );
};

export default Extra1;