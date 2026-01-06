import { useEffect, useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaCode, FaHtml5, FaTools} from "react-icons/fa";
import { PiFigmaLogoDuotone, PiPlugFill } from "react-icons/pi";
import { SiJavascript, SiTailwindcss, SiMongodb, SiPostman, SiBackendless, SiExpress,} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
    {
        title: "Frontend", 
        icon1: <FaCode className="text-[#57cbff]" />,
        color: "from-[#57cbff] to-[#64ffda]",
        shadow: "shadow-[0_20px_60px_rgba(87,203,255,0.15)]",
        border: "border-[#57cbff]/30",
        items: [
            { name: "React", level: 90, icon: <FaReact className="text-[#57cbff] animate-spin-smooth" /> },
            { name: "JavaScript", level: 90, icon: <SiJavascript className="text-yellow-400 bounce-custom" /> },
            { name: "Tailwind", level: 95, icon: <SiTailwindcss className="text-[#57cbff] bounce-custom" /> },
            { name: "HTML/CSS", level: 88, icon: <FaHtml5 className="text-orange-400 animate-pulse" /> },
        ],
    },
    {
        title: "Backend", 
        icon1: <SiBackendless className="text-[#64ffda]" />,
        color: "from-[#64ffda] to-[#57cbff]",
        shadow: "shadow-[0_20px_60px_rgba(100,255,218,0.15)]",
        border: "border-[#64ffda]/30",
        items: [
            { name: "Node.js", level: 88, icon: <FaNodeJs className="text-[#64ffda] animate-spin-smooth" /> },
            { name: "MongoDB", level: 90, icon: <SiMongodb className="text-[#64ffda] bounce-custom" /> },
            { name: "Express.js", level: 88, icon: <SiExpress className="text-[#8892b0] animate-pulse" /> },
            { name: "Rest Api", level: 90, icon: <PiPlugFill className="text-[#57cbff] bounce-custom" /> },
        ],
    },
    {
        title: "Tools", 
        icon1: <FaTools className="text-[#57cbff]" />,
        color: "from-[#57cbff] to-[#64ffda]",
        shadow: "shadow-[0_20px_60px_rgba(87,203,255,0.15)]",
        border: "border-[#57cbff]/30",
        items: [
            { name: "Git", level: 90, icon: <FaGitAlt className="text-[#8892b0] bounce-custom" /> },
            { name: "VS Code", level: 93, icon: <VscVscode className="text-[#57cbff] bounce-custom" /> },
            { name: "Figma", level: 95, icon: <PiFigmaLogoDuotone className="text-purple-400 animate-pulse" /> },
            { name: "Postman", level: 90, icon: <SiPostman className="text-[#57cbff] animate-spin-smooth" /> },
        ],
    },
];

const Counter = ({ target, active }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let start = 20;
        const step = () => {
            start += 1;
            if (start <= target) {
                setCount(start);
                requestAnimationFrame(step);
            }
        };
        step();
    }, [active, target]);

    return <span className="text-[#64ffda] font-semibold">{count}%</span>;
};

const MySkills = () => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => entry.isIntersecting && setVisible(true),
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={ref}
            id="skills-section"
            className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100"
        >
            {/* Tech background elements */}
            <div className="tech-bg-elements">
                <div className="circuit-line"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Section Header */}
                <div data-aos="zoom-in-down" className="relative text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-name2 font-bold bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer animate-glow">
                        Skills & Expertise
                    </h2>
                    <div data-aos="zoom-in" className="w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full"></div>
                </div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-3">
                    {skills.map((group, i) => (
                        <div key={i} data-aos="zoom-in-down" data-aos-delay={i * 100}>
                            <div className="tech-card p-6 transition-all duration-500 hover:border-[#57cbff] group">
                                {/* Skill Category Header */}
                                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#8892b0]/20">
                                    <div className="text-3xl">
                                        {group.icon1}
                                    </div>
                                    <h3 className={`text-2xl font-bold bg-linear-to-r ${group.color} bg-clip-text text-transparent`}>
                                        {group.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <div className="space-y-7">
                                    {group.items.map((skill, idx) => (
                                        <div key={idx} className="group/skill">
                                            <div className="flex justify-between items-center mb-3">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                                                        {skill.icon}
                                                    </span>
                                                    <span className="text-[#e6f1ff] font-medium">
                                                        {skill.name}
                                                    </span>
                                                </div>
                                                <Counter target={skill.level} active={visible} />
                                            </div>

                                            {/* Progress Bar */}
                                            <div className="relative tech-progress h-2 rounded-full overflow-hidden">
                                                <div
                                                    className="tech-progress-bar transition-all duration-2000 ease-out group-hover/skill:opacity-100"
                                                    style={{
                                                        width: visible ? `${skill.level}%` : "0%",
                                                        background: `linear-linear(90deg, #57cbff, #64ffda)`,
                                                    }}
                                                />
                                                {/* Animated shine effect */}
                                                <div 
                                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                                                    style={{
                                                        animation: visible ? 'shimmer 2s infinite' : 'none',
                                                        width: visible ? `${skill.level}%` : "0%",
                                                    }}
                                                />
                                            </div>
                                            
                                            {/* Skill level indicator */}
                                            <div 
                                                className="text-xs text-[#8892b0] mt-1 text-right transition-all duration-300"
                                                style={{
                                                    opacity: visible ? 1 : 0,
                                                    transform: visible ? 'translateX(0)' : 'translateX(-10px)'
                                                }}
                                            >
                                                {skill.level >= 85 ? 'Expert' : skill.level >= 70 ? 'Advanced' : 'Intermediate'}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Hover effect indicator */}
                                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-transparent via-[#57cbff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Note */}
                <div className="mt-16 text-center">
                    <p className="text-[#8892b0] text-lg">
                        Continuously learning and expanding my skill set with new technologies
                    </p>
                </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-1/4 left-20 w-3 h-3 rounded-full bg-[#57cbff] opacity-30 animate-floatSlow"></div>
            <div className="absolute bottom-1/3 right-20 w-4 h-4 rounded-full bg-[#64ffda] opacity-20 animate-floatSlow" style={{ animationDelay: '1.5s' }}></div>
        </section>
    );
};

export default MySkills;