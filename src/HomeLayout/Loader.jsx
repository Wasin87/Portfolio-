import { motion } from "framer-motion";
import { FaCog, FaMicrochip, FaBolt, FaStar, FaCircle } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-950 text-white overflow-hidden relative">
      {/* Enhanced Circuit Board Background */}
      <div className="absolute inset-0">
        {/* Deep Space Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="circuit-grid"
                x="0"
                y="0"
                width="50"
                height="50"
                patternUnits="userSpaceOnUse"
              >
                <rect width="50" height="50" fill="none" stroke="#0ea5e9" strokeWidth="0.3" />
                <circle cx="25" cy="25" r="0.5" fill="#38bdf8" />
                <line x1="25" y1="0" x2="25" y2="50" stroke="#22d3ee" strokeWidth="0.2" />
                <line x1="0" y1="25" x2="50" y2="25" stroke="#22d3ee" strokeWidth="0.2" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>

        {/* Animated Circuit Lines - More Dynamic */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {/* Diagonal Circuit Paths */}
          <motion.path
            d="M0,0 L100,100"
            stroke="url(#diagonal-grad)"
            strokeWidth="1"
            strokeDasharray="8 4"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            d="M100,0 L0,100"
            stroke="url(#diagonal-grad2)"
            strokeWidth="1"
            strokeDasharray="8 4"
            initial={{ strokeDashoffset: 200 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
          />
          
          {/* Circuit Rings */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="30%"
            fill="none"
            stroke="url(#ring-grad)"
            strokeWidth="0.5"
            strokeDasharray="10 10"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke="url(#ring-grad2)"
            strokeWidth="0.5"
            strokeDasharray="8 12"
            initial={{ rotate: 360 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />

          {/* Active Circuit Nodes */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const radius = 35;
            return (
              <motion.circle
                key={i}
                cx={`${50 + radius * Math.cos(angle)}%`}
                cy={`${50 + radius * Math.sin(angle)}%`}
                r="3"
                fill="#0ea5e9"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  opacity: [0, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            );
          })}

          <defs>
            <linearGradient id="diagonal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="diagonal-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <radialGradient id="ring-grad">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="ring-grad2">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* Star Field Effect */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating Tech Elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-sky-400/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            {i % 4 === 0 && <FaMicrochip className="text-xl" />}
            {i % 4 === 1 && <FaBolt className="text-xl" />}
            {i % 4 === 2 && <FaCog className="text-xl" />}
            {i % 4 === 3 && <FaStar className="text-xl" />}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Central Processor */}
        <div className="relative mb-10">
          {/* Outer Orbital Ring */}
          <motion.div
            className="w-36 h-36 rounded-full border border-sky-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            {/* Orbiting Particles */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i * 15 * Math.PI) / 180;
              const radius = 68;
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-sky-400 rounded-full"
                  style={{
                    left: `${50 + radius * Math.cos(angle)}%`,
                    top: `${50 + radius * Math.sin(angle)}%`,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </motion.div>

          {/* Middle Ring */}
          <motion.div
            className="absolute inset-6 rounded-full border border-sky-400/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner Core with Glow */}
          <div className="absolute inset-12 flex items-center justify-center">
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-sky-500/10 to-cyan-500/10 flex items-center justify-center relative"
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 15, repeat: Infinity, ease: "linear" }
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-sky-500/10 blur-xl" />
              <FaCog className="text-4xl text-sky-400 relative z-10" />
            </motion.div>
          </div>

          {/* Connection Points */}
          {[0, 90, 180, 270].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            return (
              <motion.div
                key={angle}
                className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center"
                style={{
                  left: `${50 + 45 * Math.cos(rad)}%`,
                  top: `${50 + 45 * Math.sin(rad)}%`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    '0 0 0px rgba(14, 165, 233, 0.5)',
                    '0 0 15px rgba(14, 165, 233, 0.8)',
                    '0 0 0px rgba(14, 165, 233, 0.5)',
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: angle / 360,
                }}
              >
                <div className="w-1 h-1 rounded-full bg-white" />
              </motion.div>
            );
          })}
        </div>

        {/* Animated Loading Text */}
        <div className="text-center space-y-8">
          <div className="h-16 relative">
            {/* Main "LOADING" Text with Elegant Animation */}
            <motion.div
              className="text-4xl md:text-5xl font-bold font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative inline-block">
                {"LOADING".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="inline-block bg-gradient-to-b from-sky-400 via-cyan-300 to-sky-500 bg-clip-text text-transparent"
                    initial={{ 
                      opacity: 0,
                      y: 20,
                      scale: 0.8 
                    }}
                    animate={{ 
                      opacity: 1,
                      y: 0,
                      scale: 1 
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                
                {/* Animated Dots with Trail Effect */}
                <span className="ml-2">
                  {[".", ".", "."].map((dot, index) => (
                    <motion.span
                      key={index}
                      className="inline-block text-cyan-300"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ 
                        opacity: [0, 1, 0],
                        x: [0, 5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {dot}
                    </motion.span>
                  ))}
                </span>
              </div>
            </motion.div>

            {/* Subtle Subtitle */}
            <motion.p
              className="text-sm text-sky-300/60 font-mono mt-3 tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ◉ ACTIVE ◉
            </motion.p>
          </div>

          {/* Progress Indicator */}
          <div className="space-y-6">
            {/* Sleek Progress Bar */}
            <div className="relative w-72 h-1.5 bg-gray-900/40 rounded-full overflow-hidden">
              {/* Glowing Trail */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-sky-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ 
                  duration: 2, 
                  ease: "easeInOut", 
                  repeat: Infinity,
                  repeatDelay: 0.5 
                }}
              />
              
              {/* Progress Highlights */}
              {[0, 25, 50, 75, 100].map((pos) => (
                <motion.div
                  key={pos}
                  className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-500"
                  style={{ left: `${pos}%` }}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: pos * 0.02,
                  }}
                />
              ))}
            </div>

            {/* Status Indicators */}
            <div className="flex items-center justify-center space-x-8">
              {[
                { color: "bg-sky-500", text: "SIGNAL" },
                { color: "bg-cyan-500", text: "DATA" },
                { color: "bg-blue-500", text: "SYNC" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex flex-col items-center space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className={`w-2 h-2 rounded-full ${item.color}`}
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="text-xs font-mono text-sky-300/80 tracking-wider">
                      {item.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Minimal Footer */}
        <motion.div
          className="absolute bottom-10 text-center"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <p className="text-xs text-sky-400/20 font-mono tracking-widest">
            CIRCUIT SYSTEM
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Loader;