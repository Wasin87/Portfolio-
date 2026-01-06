import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Extra2 = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

    return (
        <section id="github-section" className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100" ref={ref}>
            {/* Tech background elements */}
            <div className="tech-bg-elements">
                <div className="circuit-line"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative">
                {/* Tech glow background */}
                <div className="absolute inset-0 max-w-4xl mx-auto bg-linear-to-br from-[#57cbff] to-[#64ffda] rounded-2xl blur-[100px] opacity-10 -z-10"></div>

                {/* Main Card Container */}
                <div data-aos="zoom-in-down" className="tech-card p-8 md:p-12 text-center border-[#57cbff]/30 hover:border-[#57cbff] transition-all duration-500">
                    {/* GitHub Icon */}
                    <div className="mb-8">
                        <div className="relative inline-flex items-center justify-center">
                            <div className="absolute inset-0 bg-linear-to-br from-[#57cbff] to-[#64ffda] rounded-full blur-xl opacity-20 animate-pulse"></div>
                            <FaGithub className="text-6xl md:text-7xl text-[#e6f1ff] relative z-10" />
                            <div className="absolute inset-0 border-2 border-[#57cbff]/30 rounded-full animate-spin-slow"></div>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className='mb-8'>
                        <h2 className="text-3xl md:text-5xl font-name2 font-bold text-[#e6f1ff] mb-4">
                            {inView && (
                                <Typewriter
                                    words={["Explore More Projects"]}
                                    loop={1}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={40}
                                />
                            )}
                        </h2>

                        <div className="w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full"></div>

                        <p className="mt-6 text-lg md:text-xl text-[#8892b0] max-w-2xl mx-auto leading-relaxed">
                            Discover my complete portfolio of projects, contributions, and code repositories on GitHub.
                        </p>
                    </div>
                    
                    {/* CTA Button */}
                    <div data-aos="zoom-in-up" data-aos-delay="200">
                        <a
                            href="https://github.com/Wasin87"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tech-btn inline-flex items-center gap-4 px-10 py-5 text-lg md:text-xl font-semibold group"
                        >
                            <FaGithub className='text-2xl group-hover:scale-110 transition-transform duration-300' />
                            <span className='px-2'>Visit GitHub Profile</span>
                            <FaExternalLinkAlt className='bounce-custom group-hover:translate-x-1 transition-transform duration-300' />
                            
                            {/* Button glow effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#57cbff] to-[#64ffda] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-500 blur-sm"></div>
                        </a>
                        
                        {/* Additional info */}
                        <p className="mt-6 text-[#8892b0] text-sm">
                            Open source contributions • Personal projects • Code samples
                        </p>
                    </div>
                    
                    {/* Stats preview */}
                    <div className="mt-12 flex flex-wrap justify-center gap-6">
                        <div className="tech-chip flex items-center gap-2">
                            <span className="text-[#57cbff]">✨</span>
                            <span>Multiple Repositories</span>
                        </div>
                        <div className="tech-chip flex items-center gap-2">
                            <span className="text-[#64ffda]">🚀</span>
                            <span>Live Demos</span>
                        </div>
                        <div className="tech-chip flex items-center gap-2">
                            <span className="text-[#57cbff]">🔧</span>
                            <span>Code Samples</span>
                        </div>
                    </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-[#57cbff] opacity-20 animate-floatSlow"></div>
                <div className="absolute bottom-1/4 right-10 w-3 h-3 rounded-full bg-[#64ffda] opacity-30 animate-floatSlow" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Animated border effect */}
                <style jsx>{`
                    @keyframes spin-slow {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }
                    .animate-spin-slow {
                        animation: spin-slow 20s linear infinite;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default Extra2;