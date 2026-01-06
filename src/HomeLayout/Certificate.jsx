import React, { useState } from 'react';
import { FaCertificate, FaExternalLinkAlt, FaTimes, FaDownload, FaCalendarAlt, FaUniversity } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Certificate = () => {
    const [selectedCertificate, setSelectedCertificate] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const certificates = [
        {
            id: 1,
            title: "Algorithm Programming Contest",
            issuer: "Daffodil International University",
            date: "December 2023",
            description: "Algorithm Programming Contest certification covering C, C++, Java, Python and modern development tools. Completed multiple real-world projects with Programming implementation.",
            image: "https://i.ibb.co.com/HDFCP7yC/Certificate.jpg",
            skills: ["C, C++, Java, Python "],
            certificateId: "APC-2023-001",
            validity: "Lifetime",
            category: "Programming Contest"
        },
        {
            id: 2,
            title: "Responsive Web Design Mastery",
            issuer: "Web Development Institute",
            date: "November 2023",
            description: "Advanced certification in responsive web design, modern CSS techniques, and cross-browser compatibility. Focused on creating pixel-perfect, mobile-first responsive layouts.",
            image: "https://i.ibb.co.com/fdHzxSmk/Screenshot-2025-12-03-200605.png",
            skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid", "Media Queries"],
            certificateId: "RWD-2023-002",
            validity: "Lifetime",
            category: "Frontend Development"
        }
    ];

    const openModal = (certificate) => {
        setSelectedCertificate(certificate);
        setModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCertificate(null);
        document.body.style.overflow = 'auto';
    };

    const handleDownload = (imageUrl, title) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = `${title.replace(/\s+/g, '_')}_Certificate.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <section id="certificates-section" className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100" ref={ref}>
                {/* Tech background elements */}
                <div className="tech-bg-elements">
                    <div className="circuit-line"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    {/* Tech glow background */}
                    <div className="absolute top-20 inset-0 -z-10 rounded-2xl bg-linear-to-br from-[#57cbff]/20 to-[#64ffda]/20 blur-[80px]" />

                    {/* Section Header */}
                    <div data-aos="zoom-in-down" className="mb-16 text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-name2 font-bold text-[#e6f1ff]">
                            My{" "}
                            <span className="bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer animate-glow">
                                Certifications
                            </span>
                        </h2>
                        <div data-aos="zoom-in" className="w-32 sm:w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full" />
                        <p className="mt-6 text-[#8892b0] text-base sm:text-lg max-w-2xl mx-auto px-4">
                            {inView && (
                                <Typewriter
                                    words={["Professional certifications validating my technical expertise and commitment to continuous learning."]}
                                    loop={1}
                                    cursor
                                    cursorStyle=""
                                    typeSpeed={30}
                                />
                            )}
                        </p>
                    </div>

                    {/* Certificates Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {certificates.map((cert, index) => (
                            <div key={cert.id} data-aos="zoom-in-down" data-aos-delay={index * 100}>
                                <div className="tech-card overflow-hidden transition-all duration-500 hover:border-[#57cbff] group h-full">
                                    {/* Certificate Header */}
                                    <div className="p-4 sm:p-6 border-b border-[#57cbff]/20 bg-linear-to-r from-[#57cbff]/5 to-transparent">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="relative shrink-0">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-linear-to-br from-[#57cbff] to-[#64ffda] flex items-center justify-center">
                                                    <FaCertificate className="text-xl sm:text-3xl text-[#0a192f]" />
                                                </div>
                                                <div className="absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#64ffda] flex items-center justify-center">
                                                    <span className="text-[#0a192f] text-xs font-bold">✓</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-1 sm:gap-2 mb-1 flex-wrap">
                                                    <span className="bg-[#112240] text-[#57cbff] text-xs px-2 py-1 rounded-full whitespace-nowrap">
                                                        {cert.category}
                                                    </span>
                                                    <span className="text-[#64ffda] text-xs">Verified</span>
                                                </div>
                                                <h3 className="text-lg sm:text-xl font-bold text-[#e6f1ff] group-hover:text-[#57cbff] transition-colors truncate">
                                                    {cert.title}
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Certificate Preview */}
                                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 bg-linear-to-br from-[#112240] to-[#0a192f]"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-[#0a192f] via-transparent to-transparent"></div>
                                        
                                        {/* Certificate ID Badge */}
                                        <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#0a192f]/90 backdrop-blur-sm border border-[#57cbff]/30 rounded px-2 py-1 sm:px-3 sm:py-2">
                                            <p className="text-[#57cbff] text-xs font-mono truncate max-w-[80px] sm:max-w-none">{cert.certificateId}</p>
                                        </div>
                                    </div>

                                    {/* Certificate Details */}
                                    <div className="p-4 sm:p-6">
                                        <div className="space-y-3 sm:space-y-4">
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                                <div className="flex items-center gap-2 text-[#8892b0]">
                                                    <FaUniversity className="text-[#57cbff] text-sm sm:text-base" />
                                                    <span className="text-xs sm:text-sm truncate">{cert.issuer}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-[#8892b0]">
                                                    <FaCalendarAlt className="text-[#64ffda] text-sm sm:text-base" />
                                                    <span className="text-xs sm:text-sm">{cert.date}</span>
                                                </div>
                                            </div>

                                            <p className="text-[#8892b0] text-xs sm:text-sm leading-relaxed line-clamp-3">
                                                {cert.description}
                                            </p>

                                            {/* Skills Tags */}
                                            <div className="flex flex-wrap gap-1 sm:gap-2">
                                                {cert.skills.map((skill, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="bg-[#112240] border border-[#57cbff]/20 text-[#57cbff] text-xs px-2 py-1 rounded-full truncate max-w-[120px]"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4">
                                                <button
                                                    onClick={() => openModal(cert)}
                                                    className="tech-btn flex-1 flex items-center justify-center gap-2 py-2 sm:py-3 text-xs sm:text-sm"
                                                >
                                                    <FaExternalLinkAlt className="text-sm sm:text-lg" />
                                                    View Certificate
                                                </button>
                                                <button
                                                    onClick={() => handleDownload(cert.image, cert.title)}
                                                    className="tech-btn flex-1 flex items-center justify-center gap-2 py-2 sm:py-3 text-xs sm:text-sm border-[#57cbff] hover:border-[#64ffda]"
                                                >
                                                    <FaDownload className="text-sm sm:text-lg" />
                                                    Download
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Hover effect line */}
                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#57cbff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 sm:mt-16 text-center max-w-3xl mx-auto px-4">
                        <div className="tech-card p-6 sm:p-8 border-[#57cbff]/30">
                            <h3 className="text-xl sm:text-2xl font-bold text-[#e6f1ff] mb-3 sm:mb-4">Continuous Learning Journey</h3>
                            <p className="text-[#8892b0] text-sm sm:text-base mb-4 sm:mb-6">
                                These certifications represent my commitment to staying updated with the latest web technologies 
                                and best practices in software development.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#57cbff]">2+</div>
                                    <div className="text-[#8892b0] text-xs sm:text-sm">Professional Certifications</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#64ffda]">100%</div>
                                    <div className="text-[#8892b0] text-xs sm:text-sm">Verified Credentials</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold text-[#57cbff]">Lifetime</div>
                                    <div className="text-[#8892b0] text-xs sm:text-sm">Access & Validity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Modal - Compact and Responsive */}
            {modalOpen && selectedCertificate && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    {/* Backdrop */}
                    <div 
                        className="fixed inset-0 bg-black/90 backdrop-blur-sm transition-opacity"
                        onClick={closeModal}
                    />
                    
                    {/* Modal Container */}
                    <div className="relative min-h-screen flex items-center justify-center p-3 sm:p-4">
                        <div 
                            className="relative bg-[#0a192f] rounded-xl sm:rounded-2xl border border-[#57cbff]/30 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header - Compact */}
                            <div className="sticky top-0 z-10 bg-[#0a192f]/95 backdrop-blur-sm border-b border-[#57cbff]/20 px-4 sm:px-6 py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 sm:gap-3 max-w-[70%]">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-linear-to-br from-[#57cbff] to-[#64ffda] flex items-center justify-center shrink-0">
                                            <FaCertificate className="text-sm sm:text-lg text-[#0a192f]" />
                                        </div>
                                        <div className="min-w-0">
                                            <h3 className="text-lg sm:text-xl font-bold text-[#e6f1ff] truncate">
                                                {selectedCertificate.title}
                                            </h3>
                                            <p className="text-[#8892b0] text-xs sm:text-sm truncate">{selectedCertificate.issuer}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => handleDownload(selectedCertificate.image, selectedCertificate.title)}
                                            className="tech-btn flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
                                        >
                                            <FaDownload className="text-sm" />
                                            <span className="hidden sm:inline">Download</span>
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#112240] border border-[#57cbff]/30 flex items-center justify-center hover:bg-[#57cbff]/10 transition-colors"
                                        >
                                            <FaTimes className="text-[#57cbff] text-sm sm:text-base" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content - Responsive */}
                            <div className="overflow-y-auto max-h-[calc(90vh-56px)]">
                                {/* Certificate Image - Smaller */}
                                <div className="p-4 sm:p-6">
                                    <div className="relative bg-linear-to-br from-[#112240] to-[#0a192f] rounded-lg sm:rounded-xl overflow-hidden">
                                        <img
                                            src={selectedCertificate.image}
                                            alt={selectedCertificate.title}
                                            className="w-full max-h-[40vh] sm:max-h-[50vh] object-contain"
                                        />
                                        <div className="absolute inset-0 border border-[#57cbff]/20 pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Certificate Details - Compact */}
                                <div className="p-4 sm:p-6 border-t border-[#57cbff]/20">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                                        {/* Left Column - Details */}
                                        <div className="space-y-4 sm:space-y-6">
                                            <div>
                                                <h4 className="text-lg sm:text-xl font-bold text-[#e6f1ff] mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-5 sm:h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                                                    Certificate Details
                                                </h4>
                                                <div className="space-y-3">
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        <div className="bg-[#112240]/50 p-3 rounded-lg">
                                                            <p className="text-[#8892b0] text-xs mb-1">Certificate ID</p>
                                                            <p className="text-[#57cbff] font-mono text-sm font-medium truncate">{selectedCertificate.certificateId}</p>
                                                        </div>
                                                        <div className="bg-[#112240]/50 p-3 rounded-lg">
                                                            <p className="text-[#8892b0] text-xs mb-1">Issue Date</p>
                                                            <p className="text-[#e6f1ff] text-sm font-medium">{selectedCertificate.date}</p>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                        <div className="bg-[#112240]/50 p-3 rounded-lg">
                                                            <p className="text-[#8892b0] text-xs mb-1">Validity</p>
                                                            <p className="text-[#64ffda] text-sm font-medium">{selectedCertificate.validity}</p>
                                                        </div>
                                                        <div className="bg-[#112240]/50 p-3 rounded-lg">
                                                            <p className="text-[#8892b0] text-xs mb-1">Category</p>
                                                            <p className="text-[#e6f1ff] text-sm font-medium">{selectedCertificate.category}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="text-lg sm:text-xl font-bold text-[#e6f1ff] mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-5 sm:h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                                                    Description
                                                </h4>
                                                <p className="text-[#8892b0] text-sm leading-relaxed">
                                                    {selectedCertificate.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Right Column - Skills & Actions */}
                                        <div className="space-y-4 sm:space-y-6">
                                            <div>
                                                <h4 className="text-lg sm:text-xl font-bold text-[#e6f1ff] mb-3 flex items-center gap-2">
                                                    <span className="w-1.5 h-5 sm:h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                                                    Skills Acquired
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {selectedCertificate.skills.map((skill, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-center gap-1.5 bg-[#112240] border border-[#57cbff]/20 text-[#57cbff] px-3 py-1.5 rounded-lg text-sm"
                                                        >
                                                            <div className="w-1.5 h-1.5 rounded-full bg-[#57cbff]"></div>
                                                            <span className="truncate max-w-[100px] sm:max-w-[150px]">{skill}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="bg-linear-to-br from-[#112240]/50 to-[#0a192f]/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-[#57cbff]/20">
                                                <h4 className="text-lg sm:text-xl font-bold text-[#e6f1ff] mb-3">Certificate Verification</h4>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 sm:gap-3">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                                                            <span className="text-[#64ffda] text-sm sm:text-lg">✓</span>
                                                        </div>
                                                        <div className="min-w-0">
                                                            <p className="text-[#e6f1ff] text-sm sm:text-base font-medium">Digitally Verified</p>
                                                            <p className="text-[#8892b0] text-xs truncate">Certificate ID: {selectedCertificate.certificateId}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-2 sm:gap-3">
                                                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#57cbff]/20 flex items-center justify-center">
                                                            <FaCalendarAlt className="text-[#57cbff] text-sm" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[#e6f1ff] text-sm sm:text-base font-medium">Issued On</p>
                                                            <p className="text-[#8892b0] text-xs">{selectedCertificate.date}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons - Stacked on mobile */}
                                    <div className="mt-8 pt-6 border-t border-[#57cbff]/20">
                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <button
                                                onClick={() => handleDownload(selectedCertificate.image, selectedCertificate.title)}
                                                className="tech-btn flex-1 flex items-center justify-center gap-2 py-3 text-sm sm:text-base"
                                            >
                                                <FaDownload className="text-base sm:text-lg" />
                                                Download Certificate
                                            </button>
                                            <button
                                                onClick={closeModal}
                                                className="tech-btn flex-1 flex items-center justify-center gap-2 py-3 text-sm sm:text-base border-[#57cbff] hover:border-[#64ffda]"
                                            >
                                                Close Preview
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Certificate;