import { useState } from "react";
import { FaAppStore, FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaServer, FaDatabase, FaMobileAlt, FaDesktop, FaBookOpen, FaCalculator } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
 
import { TbLivePhotoFilled } from "react-icons/tb";
import { SiFirebase, SiStripe, SiMongodb, SiNodedotjs, SiExpress } from "react-icons/si";
import { AiOutlineWarning } from "react-icons/ai";
import { GiElectric } from "react-icons/gi";
import { MdCreditCard, MdOutlineAppSettingsAlt } from "react-icons/md";

const projects = [
  {
    id: 1,
    title: "Bill Pie Website",
    liveLink: 'https://smart-deals-c7f0b.web.app',
    repoLink: 'https://github.com/Wasin87/Bill-Pie-Website.git',
    icon: <GiElectric className="text-amber-500" />,
    shortDescription: "Comprehensive bill management app with real-time tracking",
    description: "Bill Pie is a full-featured bill management application designed to streamline monthly bill payments and financial tracking. The application provides users with an intuitive dashboard to view, pay, and manage all their bills in one place.",
    image: "https://i.ibb.co.com/yHn73ZC/Screenshot-2026-01-05-091238.png",
    tech: ["React", "Tailwind", "DaisyUI", "Firebase", "Stripe", "MongoDB"],
    features: [
      "Real-time bill tracking and notifications",
      "Secure payment processing with Stripe integration",
      "PDF report generation and download",
      "Responsive design for all devices",
      "User authentication and profile management",
      "Dashboard with financial analytics"
    ],
    challenges: "Implementing secure payment gateway while maintaining user-friendly interface",
    solutions: "Integrated Stripe with custom checkout flow and implemented server-side validation",
    role: "Full Stack Developer",
    tools: ["React", "Firebase", "Stripe API", "MongoDB", "Express.js"],
    duration: "3 months",
    category: "Full Stack Web Application"
  },
  {
    id: 2,
    title: "Urban Insight Website",
    liveLink: 'https://zap-shift-44e49.web.app',
    repoLink: 'https://github.com/Wasin87/Urban-insight.git',
    icon: <AiOutlineWarning className="text-[#fc1a1a]" />,
    shortDescription: "Public infrastructure reporting platform for citizens",
    description: "Urban Insight is a civic engagement platform that enables citizens to report public infrastructure issues in their communities. The platform facilitates communication between citizens and local authorities for faster problem resolution.",
    image: "https://i.ibb.co.com/NMXNCb1/Screenshot-2026-01-05-091813.png",
    tech: ["React", "API", "UI", "Node.js", "Cors", "JavaScript", "CSS"],
    features: [
      "Interactive map for issue reporting",
      "Photo upload with GPS location tagging",
      "Real-time status tracking for reported issues",
      "Admin dashboard for issue management",
      "Notification system for updates",
      "Category-based issue classification"
    ],
    challenges: "Handling real-time updates and location-based data efficiently",
    solutions: "Implemented WebSocket for real-time notifications and optimized geolocation queries",
    role: "Frontend Developer & API Integration",
    tools: ["React", "Mapbox API", "Node.js", "WebSocket", "Geolocation API"],
    duration: "2.5 months",
    category: "Civic Tech Platform"
  },
  {
    id: 3,
    title: "Payon App",
    liveLink: 'https://wasin87.github.io/Payon-App/',
    repoLink: 'https://github.com/Wasin87/Payon-App.git',
    icon: <MdCreditCard className="text-[#ceff64]" />,
    shortDescription: "Mobile banking application for digital transactions",
    description: "Payon App is a modern mobile banking solution designed to simplify digital financial transactions. The app provides a secure and intuitive interface for managing finances, making payments, and tracking expenses.",
    image: "https://i.ibb.co.com/0y5Tz58Q/Screenshot-2026-01-05-092231.png",
    tech: ["JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    features: [
      "Secure user authentication and authorization",
      "Money transfer between accounts",
      "Bill payment and scheduling",
      "Transaction history with filters",
      "Budget tracking and expense analytics",
      "Mobile-responsive design"
    ],
    challenges: "Creating a seamless mobile experience with complex financial operations",
    solutions: "Implemented Progressive Web App (PWA) features and optimized for mobile performance",
    role: "Frontend Developer",
    tools: ["JavaScript", "PWA", "Local Storage", "Service Workers", "Responsive Design"],
    duration: "2 months",
    category: "FinTech Mobile Application"
  },
  {
  id: 4,
  title: "App Installer Website",
  liveLink: "https://earnest-taiyaki-e9b21a.netlify.app/",
  repoLink: "https://github.com/Wasin87/App-installer.git",
  icon: <MdOutlineAppSettingsAlt className="text-[#64ffda]" />,
  shortDescription: "Web-based platform for browsing and installing software",
  description: "App Installer Website is a web application that allows users to browse different software applications, view installation details, and check ratings before installation. The platform uses JSON-based data management and offers a clean, responsive, and user-friendly interface.",
  image: "https://i.ibb.co.com/GfxV9Zzt/Screenshot-2026-01-05-170612.png",
  tech: ["JavaScript", "HTML5", "CSS3", "JSON"],
  features: [
    "Browse available applications easily",
    "View detailed installation information",
    "Application ratings and descriptions",
    "JSON-based dynamic data rendering",
    "Clean and responsive user interface"
  ],
  challenges: "Managing dynamic app data efficiently using JSON",
  solutions: "Structured JSON data properly and optimized UI for smooth user experience",
  role: "Frontend Developer",
  tools: ["JavaScript", "JSON", "Responsive Design"],
  duration: "1 month",
  category: "Web Application"
},
{
  id: 5,
  title: "Calculator Web App",
  liveLink: "https://wasin87.github.io/Calculator-project/",
  repoLink: "https://github.com/Wasin87/Calculator-project.git",
  icon: <FaCalculator className="text-[#ceff64]" />,
  shortDescription: "Interactive web-based calculator for basic arithmetic",
  description: "Calculator Web App is a simple and interactive web-based calculator that performs basic arithmetic operations. It features a clean user interface, responsive layout, and real-time calculation results for an enhanced user experience.",
  image: "https://i.ibb.co.com/9C8Zyrv/Screenshot-2026-01-05-171230.png",
  tech: ["JavaScript", "HTML5", "CSS3"],
  features: [
    "Addition, subtraction, multiplication, and division",
    "Real-time calculation results",
    "Responsive and clean UI",
    "User-friendly button layout",
    "Error handling for invalid inputs"
  ],
  challenges: "Handling user input validation and calculation logic",
  solutions: "Implemented proper event handling and input validation",
  role: "Frontend Developer",
  tools: ["JavaScript", "DOM Manipulation", "CSS"],
  duration: "2 weeks",
  category: "Utility Web Application"
},
{
  id: 6,
  title: "Book Vibes Website",
  liveLink: "https://amazing-douhua-bcdf51.netlify.app/",
  repoLink: "https://github.com/Wasin87/Book-Vibes.git",
  icon: <FaBookOpen className="text-[#57cbff]" />,
  shortDescription: "Online platform to explore and read books",
  description: "Book Vibes is a web-based book exploration platform where users can browse books, view book details, and read books online. The application provides a smooth reading experience with a clean design and well-organized book listings.",
  image: "https://i.ibb.co.com/QF4HmGsy/Screenshot-2026-01-05-171433.png",
  tech: ["JavaScript", "Tailwind CSS", "HTML5"],
  features: [
    "Browse books by category",
    "View detailed book information",
    "Read books online",
    "Responsive and modern UI",
    "Smooth navigation experience"
  ],
  challenges: "Managing book data and improving reading experience",
  solutions: "Optimized UI layout and structured book data efficiently",
  role: "Frontend Developer",
  tools: ["JavaScript", "Tailwind CSS", "Responsive Design"],
  duration: "1.5 months",
  category: "Book Reading Web Application"
}

];

const TechIcon = ({ tech }) => {
  const iconMap = {
    "React": <FaCode className="text-[#57cbff]" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "Express.js": <SiExpress className="text-gray-400" />,
    "MongoDB": <SiMongodb className="text-green-600" />,
    "Firebase": <SiFirebase className="text-yellow-500" />,
    "Stripe": <SiStripe className="text-purple-500" />,
    "JavaScript": <FaCode className="text-yellow-400" />,
    "Tailwind": <FaDesktop className="text-[#57cbff]" />,
    "CSS": <FaDesktop className="text-blue-500" />,
    "HTML5": <FaCode className="text-orange-500" />,
    "DaisyUI": <FaDesktop className="text-purple-400" />,
    "API": <FaServer className="text-green-400" />,
    "UI": <FaDesktop className="text-pink-500" />,
    "Cors": <FaServer className="text-gray-300" />,
    "Tailwind CSS": <FaDesktop className="text-[#57cbff]" />,
    "CSS3": <FaDesktop className="text-blue-600" />,
  };

  return iconMap[tech] || <FaCode className="text-[#57cbff]" />;
};

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleLive = (link) => {
    window.open(link, "_blank")
  }

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section id="project-section" className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100">
        {/* Tech background elements */}
        <div className="tech-bg-elements">
          <div className="circuit-line"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Tech glow background */}
          <div className="absolute top-20 inset-0 -z-10 rounded-2xl bg-linear-to-br from-[#57cbff]/20 to-[#64ffda]/20 blur-[80px]"/>

          <div className="relative">
            {/* Section Header */}
            <div data-aos="zoom-in-down" className="mb-16 text-center">
              <h2 className="text-4xl md:text-5xl font-name2 font-bold text-[#e6f1ff]">
                My{" "}
                <span className="bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer animate-glow">
                  Projects
                </span>
              </h2>
              <div data-aos="zoom-in" className="w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full" />
              <p className="mt-6 text-[#8892b0] text-lg max-w-2xl mx-auto">
                Explore my recent work showcasing full-stack development expertise
              </p>
            </div>

            {/* Project Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} data-aos="zoom-in-down" data-aos-delay={project.id * 100}>
                  <div className="tech-card overflow-hidden transition-all duration-500 hover:border-[#57cbff] group h-full flex flex-col">
                    {/* Project Image */}
                    <figure className="relative overflow-hidden h-56  ">
                      <div className="absolute inset-0 bg-linear-to-t from-[#0a192f] to-transparent z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="bg-linear-to-r from-[#87f4e9] to-[#7aa2f3] text-[#0c1317] text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </figure>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl animate-pulse">
                          {project.icon}
                        </div>
                        <h3 className="text-xl font-bold text-[#e6f1ff] group-hover:text-[#57cbff] transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-[#8892b0] text-sm mb-4 leading-relaxed flex-1">
                        {project.shortDescription}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.slice(0, 4).map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 bg-[#112240] border border-[#57cbff]/20 text-[#57cbff] text-xs px-2 py-1 rounded"
                          >
                            <TechIcon tech={item} className="text-xs" />
                            <span>{item}</span>
                          </div>
                        ))}
                        {project.tech.length > 4 && (
                          <span className="bg-[#112240] border border-[#57cbff]/20 text-[#8892b0] text-xs px-2 py-1 rounded">
                            +{project.tech.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <button
                          onClick={() => handleLive(project.liveLink)}
                          className="tech-btn flex-1 flex items-center justify-center gap-2 py-3 text-sm"
                        >
                          <TbLivePhotoFilled className="text-lg" />
                          Live Demo
                        </button>

                        <button
                          onClick={() => openModal(project)}
                          className="tech-btn flex-1 flex items-center justify-center gap-2 py-3 text-sm border-[#57cbff] hover:border-[#64ffda]"
                        >
                          <FaExternalLinkAlt className="text-lg" />
                          Details
                        </button>
                      </div>
                    </div>
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-[#57cbff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* More Projects Note */}
            <div className="mt-16 text-center">
              <p className="text-[#8892b0] text-lg">
                Explore more projects on my{" "}
                <a 
                  href="https://github.com/Wasin87" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#57cbff] hover:text-[#64ffda] underline underline-offset-4 transition-colors duration-300"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-40 right-10 w-4 h-4 rounded-full bg-[#57cbff] opacity-20 animate-floatSlow"></div>
          <div className="absolute bottom-40 left-10 w-3 h-3 rounded-full bg-[#64ffda] opacity-30 animate-floatSlow" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>

      {/* Project Details Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeModal}
          />
          
          {/* Modal Container */}
          <div className="relative min-h-screen flex items-center justify-center p-4">
            <div 
              className="relative bg-[#0a192f] rounded-2xl border border-[#57cbff]/30 max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 z-10 bg-[#0a192f]/95 backdrop-blur-sm border-b border-[#57cbff]/20 px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-[#57cbff]">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#e6f1ff]">{selectedProject.title}</h3>
                      <p className="text-[#8892b0] text-sm">{selectedProject.category}</p>
                    </div>
                  </div>
                  <button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-[#112240] border border-[#57cbff]/30 flex items-center justify-center hover:bg-[#57cbff]/10 transition-colors"
                  >
                    <FaTimes className="text-[#57cbff]" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(90vh-80px)]">
                {/* Project Image */}
                <div className="relative h-64 md:h-80">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0a192f] via-transparent to-transparent"></div>
                </div>

                <div className="p-6 md:p-8">
                  {/* Project Overview */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-2">
                      <span className="w-2 h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                      Project Overview
                    </h4>
                    <p className="text-[#8892b0] leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Key Features */}
                      <div>
                        <h4 className="text-xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-2">
                          <span className="w-2 h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                          Key Features
                        </h4>
                        <ul className="space-y-3">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-[#57cbff] mt-2  "></div>
                              <span className="text-[#8892b0]">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Details */}
                      <div>
                        <h4 className="text-xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-2">
                          <span className="w-2 h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                          Project Details
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-[#112240]/50 p-4 rounded-lg">
                            <p className="text-[#8892b0] text-sm mb-1">Role</p>
                            <p className="text-[#e6f1ff] font-medium">{selectedProject.role}</p>
                          </div>
                          <div className="bg-[#112240]/50 p-4 rounded-lg">
                            <p className="text-[#8892b0] text-sm mb-1">Duration</p>
                            <p className="text-[#e6f1ff] font-medium">{selectedProject.duration}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-2">
                          <span className="w-2 h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                          Technology Stack
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map((tech, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-2 bg-[#112240] border border-[#57cbff]/20 text-[#57cbff] px-4 py-2 rounded-lg"
                            >
                              <TechIcon tech={tech} />
                              <span>{tech}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Solutions */}
                      <div>
                        <h4 className="text-xl font-bold text-[#e6f1ff] mb-4 flex items-center gap-2">
                          <span className="w-2 h-6 bg-linear-to-b from-[#57cbff] to-[#64ffda] rounded-full"></span>
                          Development Insights
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <p className="text-[#57cbff] text-sm font-medium mb-2">Challenges</p>
                            <p className="text-[#8892b0] text-sm">{selectedProject.challenges}</p>
                          </div>
                          <div>
                            <p className="text-[#64ffda] text-sm font-medium mb-2">Solutions</p>
                            <p className="text-[#8892b0] text-sm">{selectedProject.solutions}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-12 pt-8 border-t border-[#57cbff]/20">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={() => handleLive(selectedProject.liveLink)}
                        className="tech-btn flex-1 flex items-center justify-center gap-3 py-4 text-lg"
                      >
                        <TbLivePhotoFilled className="text-xl" />
                        View Live Demo
                        <FaExternalLinkAlt className="text-sm" />
                      </button>
                      <button
                        onClick={() => handleLive(selectedProject.repoLink)}
                        className="tech-btn flex-1 flex items-center justify-center gap-3 py-4 text-lg border-[#57cbff] hover:border-[#64ffda]"
                      >
                        <FaGithub className="text-xl" />
                        View Source Code
                        <FaExternalLinkAlt className="text-sm" />
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

export default MyProjects;