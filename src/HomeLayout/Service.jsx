import { FaDatabase } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlinePayment, MdSecurity } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";

const services = [
    {
        title: "Database Management",
        desc: "Efficient MongoDB database design, schema optimization, and data handling for fast and scalable web applications.",
        icon: <FaDatabase className="text-[#57cbff] animate-pulse" />,
        color: "from-[#57cbff] to-[#64ffda]",
    },
    {
        title: "Auth Security",
        desc: "Secure authentication and authorization using JWT and role-based access control to protect user data and systems.",
        icon: <MdSecurity className="text-[#64ffda] bounce-custom" />,
        color: "from-[#64ffda] to-[#57cbff]",
    },
    {
        title: "UI Optimization",
        desc: "Improving user interface performance, responsiveness, and visual consistency for a smooth user experience.",
        icon: <GrSettingsOption className="text-[#57cbff] animate-spin-smooth" />,
        color: "from-[#57cbff] to-[#64ffda]",
    },
    {
        title: "Payment Integration",
        desc: "Secure integration of online payment gateways with backend logic to enable smooth and reliable transactions system",
        icon: <MdOutlinePayment className="text-[#64ffda] animate-pulse" />,
        color: "from-[#64ffda] to-[#57cbff]",
    },
];

const Service = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,  
        threshold: 0.4, 
    });
    
    return (
        <section className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100" ref={ref} id="services-section">
            {/* Tech background elements */}
            <div className="tech-bg-elements">
                <div className="circuit-line"></div>
            </div>

            {/* Main Services Section */}
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Tech glow background */}
                <div className="absolute inset-0 max-w-7xl bg-linear-to-br from-[#57cbff] to-[#64ffda] rounded-2xl blur-[80px] opacity-10" />

                {/* Section Header */}
                <div data-aos="zoom-in-down" className="relative text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-name2 font-bold bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer animate-glow">
                        Services
                    </h2>
                    <div data-aos="zoom-in" className="w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full" />
                    
                    <p className="py-6 max-w-2xl mx-auto text-[#8892b0] text-lg leading-relaxed">
                        I provide modern design solutions focused on clarity, performance, and user experience.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map(({ title, desc, icon, color }, i) => (
                        <div key={i} data-aos="zoom-in-down" data-aos-delay={i * 100}>
                            <div className="tech-card p-6 transition-all duration-500 hover:border-[#57cbff] group h-full">
                                {/* Animated border effect */}
                                <div className="absolute inset-0 rounded-xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`absolute inset-0 bg-[conic-linear(from_0deg,transparent,${color},transparent)] animate-[spin_8s_linear_infinite]`} />
                                </div>
                                
                                {/* Service Content */}
                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="p-4 rounded-xl bg-linear-to-br from-[#112240] to-[#0a192f] border border-[#8892b0]/20">
                                            <span className="text-3xl">
                                                {icon}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-xl font-bold text-center mb-4 bg-linear-to-r ${color} bg-clip-text text-transparent`}>
                                        {inView && (
                                            <Typewriter
                                                words={[title]}
                                                loop={1}
                                                cursor
                                                cursorStyle="_"
                                                typeSpeed={80}
                                            />
                                        )}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#8892b0] text-center text-sm leading-relaxed">
                                        {desc}
                                    </p>

                                    {/* Hover indicator */}
                                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-[#57cbff] to-[#64ffda] group-hover:w-16 transition-all duration-500"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider Section */}
            <div className="relative max-w-5xl mx-auto px-6 mt-20">
                <div className="w-full h-0.5 bg-linear-to-r from-transparent via-[#57cbff] to-transparent animate-pulse"></div>
                
                {/* Get In Touch Section */}
                <div data-aos="zoom-in-down" className="text-center py-16">
                    <h2 className="text-4xl md:text-5xl font-name2 font-bold bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer">
                        Get In Touch
                    </h2>
                    <div data-aos="zoom-in" className="w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full" />
                    
                    <p className="mt-6 text-[#8892b0] text-lg max-w-2xl mx-auto">
                        Ready to bring your ideas to life? Let's discuss your project.
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-10">
                        <a 
                            href="#contact-section"
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="tech-btn inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold"
                        >
                            Start a Conversation
                        </a>
                    </div>
                </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-1/3 left-10 w-4 h-4 rounded-full bg-[#57cbff] opacity-20 animate-floatSlow"></div>
            <div className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-[#64ffda] opacity-30 animate-floatSlow" style={{ animationDelay: '1.5s' }}></div>
        </section>
    );
};

export default Service;