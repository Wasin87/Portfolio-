import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import img from '../assets/logo2.png';
import { IoIosSend, IoLogoWhatsapp } from "react-icons/io";
import { PiPlugsConnectedFill } from "react-icons/pi";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Swal from "sweetalert2";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Create email body with user's data
      const subject = encodeURIComponent("New Message from Portfolio Contact Form");
      const body = encodeURIComponent(`
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}

--- 
This message was sent from your portfolio website contact form.
      `);

      // Use EmailJS or backend API if you want server-side sending
      // For now, we'll use mailto which opens user's email client
      
      // You can replace this with actual email sending service like:
      // 1. EmailJS (recommended - free)
      // 2. Formspree
      // 3. Your own backend API
      
      // Temporary solution: Open email client
      const mailtoLink = `mailto:wasinahmed87@gmail.com?subject=${subject}&body=${body}`;
      
      // Create a temporary link and click it
      const tempLink = document.createElement('a');
      tempLink.href = mailtoLink;
      tempLink.target = '_blank';
      tempLink.rel = 'noopener noreferrer';
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);

      // Show success message
      Swal.fire({
        title: "Message Ready to Send!",
        html: `
          <div style="text-align: left; color: #e6f1ff;">
            <p>✅ Your message has been prepared</p>
            <p>📧 Your email client will open automatically</p>
            <p>✉️ Please click "Send" in your email client</p>
            <hr style="border-color: #57cbff; margin: 10px 0;">
            <p style="font-size: 14px; color: #8892b0;">
              <strong>To:</strong> wasinahmed87@gmail.com<br>
              <strong>From:</strong> ${data.name} (${data.email})
            </p>
          </div>
        `,
        icon: "success",
        draggable: false,
        confirmButtonColor: "#64ffda",
        background: "#0a192f",
        color: "#e6f1ff",
        showConfirmButton: true,
        showCancelButton: false,
        confirmButtonText: "Got it!",
        width: "500px"
      });

      // Reset form
      reset();
      
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again or email directly to wasinahmed87@gmail.com",
        icon: "error",
        confirmButtonColor: "#ff6b6b",
        background: "#0a192f",
        color: "#e6f1ff"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });

  return (
    <section id="contact-section" className="py-20 relative overflow-hidden bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100" ref={ref}>
      {/* Tech background elements */}
      <div className="tech-bg-elements">
        <div className="circuit-line"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div data-aos="zoom-in-down" className="relative text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-name2 font-bold bg-linear-to-r from-[#64ffda] to-[#57cbff] bg-clip-text text-transparent shimmer">
            Contact Me
          </h2>
          <div data-aos="zoom-in" className="w-48 h-1 mx-auto mt-4 bg-linear-to-r from-transparent via-[#57cbff] to-transparent rounded-full"></div>
        </div>

        <div className="relative">
          {/* Tech glow background */}
          <div
            className="
              absolute inset-0 max-w-7xl
              bg-linear-to-br from-[#57cbff] to-[#64ffda]
              rounded-2xl blur-[80px] opacity-15
            "
          />

          {/* ===== CONTACT INFO CARDS ===== */}
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
              gap-6 mb-16 max-w-6xl mx-auto
              relative z-10 "
          >
            {[
              {
                icon: <FaEnvelope className="bounce-custom" />,
                title: "Email",
                text: "wasinahmed87@gmail.com",
                color: "text-[#57cbff]",
                link: "mailto:wasinahmed87@gmail.com?subject=Portfolio%20Inquiry"
              },
              {
                icon: <FaPhoneAlt className="shake" />,
                title: "Phone",
                text: "+880 1774178772",
                color: "text-[#64ffda]",
                link: "tel:+8801774178772"
              },
              {
                icon: <IoLogoWhatsapp className="bounce-custom" />,
                title: "Whatsapp",
                text: "+880 1774178772",
                color: "text-[#57cbff]",
                link: "https://wa.me/8801774178772?text=Hello%20Wasin,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect..."
              },
              {
                icon: <ImLocation2 className="animate-pulse" />,
                title: "Location",
                text: "Dhaka, Bangladesh",
                color: "text-[#64ffda]",
                link: "https://maps.google.com/?q=Dhaka,Bangladesh"
              },
            ].map((item, i) => (
              <div key={i} data-aos="zoom-in-down" data-aos-delay={i * 100}>
                <a 
                  href={item.link} 
                  target={item.link.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="tech-card p-6 text-center  hover:border-[#57cbff] transition-all duration-300 group hover:scale-[1.02] ">
                    <div className={`text-3xl ${item.color} flex justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      {item.icon}
                    </div>
                    <h4 className="text-[#e6f1ff] text-lg font-semibold mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-[#8892b0] mt-1 group-hover:text-[#57cbff] transition-colors">
                      {item.text}
                    </p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Main Contact Container */}
          <div
            data-aos="zoom-in"
            className="
              grid grid-cols-1 lg:grid-cols-2 gap-12
              tech-card
              p-8 md:p-12
              relative"
          >

            {/* LEFT CONTENT */}
            <div>
              <div className="text-2xl md:text-3xl font-bold flex items-center gap-3 mb-6">
                <PiPlugsConnectedFill className="text-[#57cbff] animate-pulse text-3xl" />
                <h2 className="text-[#e6f1ff]">
                  Let's{" "}
                  <span className="tech-wave">
                    {inView && (
                      <Typewriter
                        words={["Connect!"]}
                        loop={1}
                        cursor
                        cursorStyle="_"
                        typeSpeed={80}
                      />
                    )}
                  </span>
                </h2>
              </div>

              <p className="text-[#8892b0] mb-8 text-lg leading-relaxed">
                {inView && (
                  <Typewriter
                    words={["I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."]}
                    loop={1}
                    cursor
                    cursorStyle=""
                    typeSpeed={10}
                  />
                )}
              </p>

              <p className="text-[#8892b0] text-base mb-10">
                Fill out the form and your message will be prepared to send to wasinahmed87@gmail.com
              </p>

              {/* How it works section */}
              <div className="space-y-4">
                <h3 className="font-bold text-xl bg-linear-to-r from-[#57cbff] to-[#64ffda] bg-clip-text text-transparent">
                  How it works:
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="  mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#57cbff]/20 flex items-center justify-center">
                        <span className="text-[#57cbff] text-xs font-bold">1</span>
                      </div>
                    </div>
                    <p className="text-[#8892b0] text-sm">Fill out the form with your details</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="  mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                        <span className="text-[#64ffda] text-xs font-bold">2</span>
                      </div>
                    </div>
                    <p className="text-[#8892b0] text-sm">Click "Send Message" button</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="  mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#57cbff]/20 flex items-center justify-center">
                        <span className="text-[#57cbff] text-xs font-bold">3</span>
                      </div>
                    </div>
                    <p className="text-[#8892b0] text-sm">Your email client will open with pre-filled message</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="  mt-1">
                      <div className="w-6 h-6 rounded-full bg-[#64ffda]/20 flex items-center justify-center">
                        <span className="text-[#64ffda] text-xs font-bold">4</span>
                      </div>
                    </div>
                    <p className="text-[#8892b0] text-sm">Click "Send" in your email client to complete</p>
                  </div>
                </div>
              </div>
              {/* Image with animated border and corner accents */}
<div className="relative group perspective-1000">
  <div className="relative transform-gpu transition-all duration-700 group-hover:rotate-x-5 group-hover:rotate-y-5">
    {/* Holographic Effect */}
    <div className="absolute -inset-1 bg-linear-to-br from-[#00084e] via-[#000000] to-[#01014a] opacity-100 blur-xl   group-hover:opacity-70 transition-opacity duration-500"></div>
    
    <div className="relative overflow-hidden shadow-2xl py-4">
      <motion.img 
        src={img} 
        className="w-[350px] h-[370px] ml-4 object-cover brightness-90 contrast-125 group-hover:brightness-110 group-hover:contrast-110 transition-all duration-500"
        alt=""
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8 }}
      />
      
      {/* Animated Border Grid */}
      <div className="absolute inset-0 border-2 border-transparent">
        {/* Horizontal Lines */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-black to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
        
        {/* Vertical Lines */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-400 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
        <motion.div 
          className="absolute right-0 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-blue-700 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
        />
      </div>
    </div>
  </div>
  
  {/* Floating Particles */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2 + Math.random(),
          repeat: Infinity,
          delay: i * 0.2,
        }}
      />
    ))}
  </div>
</div>
            </div>

            {/* RIGHT FORM - PROFESSIONALLY IMPLEMENTED */}
            <div className="relative">
              {/* Form header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#e6f1ff] mb-2">Send Message Directly</h3>
                <p className="text-[#8892b0] text-sm">
                  Your message will be sent to <span className="text-[#57cbff] font-medium">wasinahmed87@gmail.com</span>
                </p>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                {/* Name Field */}
                <div className="group">
                  <label className="block text-[#8892b0] text-sm font-medium mb-2">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="John Doe"
                      {...register("name", { 
                        required: "Please enter your name",
                        minLength: {
                          value: 2,
                          message: "Name must be at least 2 characters"
                        },
                        maxLength: {
                          value: 50,
                          message: "Name cannot exceed 50 characters"
                        }
                      })}
                      className="w-full px-5 py-4 bg-[#112240]/50 backdrop-blur-sm border border-[#8892b0]/30 rounded-lg 
                               text-[#e6f1ff] placeholder-[#8892b0]/50
                               focus:outline-none focus:border-[#57cbff] focus:ring-2 focus:ring-[#57cbff]/30
                               transition-all duration-300 group-hover:border-[#57cbff]/50
                               disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <div className="mt-2 flex items-center gap-2 text-[#ff6b6b] text-sm animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-ping"></div>
                        <span>{errors.name.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-[#8892b0] text-sm font-medium mb-2">
                    Your Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="john@example.com"
                      {...register("email", { 
                        required: "Please enter your email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Please enter a valid email address"
                        }
                      })}
                      className="w-full px-5 py-4 bg-[#112240]/50 backdrop-blur-sm border border-[#8892b0]/30 rounded-lg 
                               text-[#e6f1ff] placeholder-[#8892b0]/50
                               focus:outline-none focus:border-[#57cbff] focus:ring-2 focus:ring-[#57cbff]/30
                               transition-all duration-300 group-hover:border-[#57cbff]/50
                               disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <div className="mt-2 flex items-center gap-2 text-[#ff6b6b] text-sm animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-ping"></div>
                        <span>{errors.email.message}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-[#8892b0] text-sm font-medium mb-2">
                    Your Message *
                  </label>
                  <div className="relative">
                    <textarea
                      rows="6"
                      placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                      {...register("message", { 
                        required: "Please enter your message",
                        minLength: {
                          value: 20,
                          message: "Message should be at least 20 characters"
                        },
                        maxLength: {
                          value: 1000,
                          message: "Message cannot exceed 1000 characters"
                        }
                      })}
                      className="w-full px-5 py-4 bg-[#112240]/50 backdrop-blur-sm border border-[#8892b0]/30 rounded-lg 
                               text-[#e6f1ff] placeholder-[#8892b0]/50 resize-none
                               focus:outline-none focus:border-[#57cbff] focus:ring-2 focus:ring-[#57cbff]/30
                               transition-all duration-300 group-hover:border-[#57cbff]/50
                               disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <div className="mt-2 flex items-center gap-2 text-[#ff6b6b] text-sm animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b] animate-ping"></div>
                        <span>{errors.message.message}</span>
                      </div>
                    )}
                    <div className="mt-2 text-xs text-[#8892b0] flex justify-between">
                      <span>Minimum 20 characters</span>
                      <span>Maximum 1000 characters</span>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  data-aos="zoom-in"
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    tech-btn w-full py-4 text-lg font-semibold
                    flex items-center justify-center gap-3
                    hover:scale-[1.02] active:scale-[0.98] transition-all duration-300
                    border-[#57cbff] hover:border-[#64ffda]
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                    relative overflow-hidden group/submit
                    mt-6"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#57cbff] border-t-transparent rounded-full animate-spin"></div>
                      <span>Preparing Message...</span>
                    </>
                  ) : (
                    <>
                      <IoIosSend className="text-xl bounce-custom group-hover/submit:translate-x-1 transition-transform" />
                      <span>Send Message to wasinahmed87@gmail.com</span>
                      <div className="absolute inset-0 bg-linear-to-r from-[#57cbff]/0 via-[#64ffda]/10 to-[#57cbff]/0 translate-x-[-95%] group-hover/submit:translate-x-[95%] transition-transform duration-1000"></div>
                    </>
                  )}
                </button>

                {/* Privacy Note */}
                <div className="mt-4 text-center">
                  <p className="text-[#8892b0] text-xs">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </div>

                {/* Alternative Email Option */}
                <div className="mt-6 pt-6 border-t border-[#57cbff]/20">
                  <p className="text-[#8892b0] text-sm mb-3 text-center">
                    Prefer to email directly?
                  </p>
                  <a 
                    href="mailto:wasinahmed87@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Wasin,%0D%0A%0D%0AI%20saw%20your%20portfolio%20and%20I'm%20interested%20in..."
                    className="
                      w-full px-5 py-3 bg-[#112240]/30 border border-[#57cbff]/20 
                      rounded-lg text-[#57cbff] text-sm font-medium
                      flex items-center justify-center gap-2
                      hover:bg-[#112240]/50 hover:border-[#57cbff]/40
                      transition-all duration-300
                      group/alt"
                  >
                    <FaEnvelope className="group-hover/alt:scale-110 transition-transform" />
                    Click here to compose email directly
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/3 left-10 w-3 h-3 rounded-full bg-[#57cbff] opacity-30 animate-floatSlow"></div>
        <div className="absolute bottom-1/4 right-10 w-4 h-4 rounded-full bg-[#64ffda] opacity-20 animate-floatSlow" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </section>
  );
};

export default ContactMe;