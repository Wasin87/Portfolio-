import { motion } from "framer-motion";
import { FaCog, FaMicrochip, FaBolt, FaServer, FaCode } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black text-white overflow-hidden relative">
      {/* Animated Circuit Board Background */}
      <div className="absolute inset-0">
        {/* Circuit Grid */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="circuit-grid"
                x="0"
                y="0"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <rect width="80" height="80" fill="none" stroke="rgba(100, 255, 218, 0.1)" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="2" fill="rgba(87, 203, 255, 0.2)" />
                <path d="M40,0 L40,80 M0,40 L80,40" stroke="rgba(100, 255, 218, 0.15)" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit-grid)" />
          </svg>
        </div>

        {/* Animated Circuit Lines */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Horizontal lines */}
          <motion.line
            x1="0"
            y1="20%"
            x2="100%"
            y2="20%"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
          />
          <motion.line
            x1="0"
            y1="80%"
            x2="100%"
            y2="80%"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
          />

          {/* Vertical lines */}
          <motion.line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke="url(#gradient4)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="url(#gradient5)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.7 }}
          />
          <motion.line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke="url(#gradient6)"
            strokeWidth="2"
            strokeDasharray="10 5"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.4 }}
          />

          {/* Circuit Nodes */}
          {[20, 50, 80].map((y) => 
            [20, 50, 80].map((x) => (
              <motion.circle
                key={`${x}-${y}`}
                cx={`${x}%`}
                cy={`${y}%`}
                r="4"
                fill="rgba(100, 255, 218, 0.8)"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: (x + y) * 0.01 
                }}
              />
            ))
          )}

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#64ffda" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#57cbff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#64ffda" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#57cbff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="gradient6" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#00d9ff" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

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

      {/* Main Loader Container */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        {/* Central Processing Unit */}
        <div className="relative mb-12">
          {/* Outer Hexagon */}
          <div className="w-48 h-48 relative">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <path
                  d="M100,20 L180,60 L180,140 L100,180 L20,140 L20,60 Z"
                  fill="none"
                  stroke="url(#hex-gradient)"
                  strokeWidth="3"
                  strokeDasharray="10 5"
                />
              </svg>
            </motion.div>

            {/* Middle Hexagon */}
            <motion.div
              className="absolute inset-8"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-full h-full" viewBox="0 0 200 200">
                <path
                  d="M100,40 L160,70 L160,130 L100,160 L40,130 L40,70 Z"
                  fill="none"
                  stroke="rgba(87, 203, 255, 0.6)"
                  strokeWidth="2"
                  strokeDasharray="8 4"
                />
              </svg>
            </motion.div>

            {/* Inner Hexagon with Icon */}
            <div className="absolute inset-16 flex items-center justify-center">
              <motion.div
                className="w-full h-full flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <FaCog className="text-5xl text-cyan-400" />
              </motion.div>
            </div>

            {/* Connection Points */}
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.div
                key={angle}
                className="absolute w-6 h-6 rounded-full bg-linear-to-br from-cyan-500 to-emerald-500 flex items-center justify-center"
                style={{
                  left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                  top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    '0 0 10px rgba(100, 255, 218, 0.5)',
                    '0 0 20px rgba(100, 255, 218, 0.8)',
                    '0 0 10px rgba(100, 255, 218, 0.5)',
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: angle / 180,
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>
            ))}

            <defs>
              <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64ffda" />
                <stop offset="50%" stopColor="#57cbff" />
                <stop offset="100%" stopColor="#00d9ff" />
              </linearGradient>
            </defs>
          </div>

          {/* Binary Data Stream */}
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-64">
            <motion.div
              className="flex space-x-2 overflow-hidden"
              animate={{ x: [0, -100] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            >
              {[...Array(20)].map((_, i) => (
                <span
                  key={i}
                  className="font-mono text-sm"
                  style={{
                    color: i % 2 === 0 ? '#64ffda' : '#57cbff',
                    opacity: Math.random() * 0.5 + 0.5,
                  }}
                >
                  {Math.round(Math.random())}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Loading Text with Circuit Connection */}
        <div className="text-center space-y-6">
          <div className="relative">
            <motion.h2
              className="text-3xl md:text-4xl font-bold font-mono bg-linear-to-r from-cyan-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SYSTEM BOOTING
            </motion.h2>
            
            {/* Underline with animation */}
            <motion.div
              className="h-1 w-48 mx-auto mt-2 bg-linear-to-r from-cyan-500 to-emerald-500 rounded-full"
              animate={{ scaleX: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Progress Indicator */}
          <div className="space-y-4">
            {/* Circuit Progress Bar */}
            <div className="relative w-80 h-4 bg-gray-900 rounded-full overflow-hidden border border-cyan-900/50">
              <motion.div
                className="absolute top-0 left-0 h-full bg-linear-to-r from-cyan-500 via-emerald-500 to-blue-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
              >
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
              </motion.div>
              
              {/* Progress Nodes */}
              {[0, 25, 50, 75, 100].map((percent) => (
                <div
                  key={percent}
                  className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-black"
                  style={{ left: `${percent}%` }}
                />
              ))}
            </div>

            {/* Loading Status */}
            <motion.div
              className="flex items-center justify-center space-x-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-mono text-cyan-300">CPU: 87%</span>
              </div>
              <div className="w-px h-4 bg-cyan-500/30" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-sm font-mono text-cyan-300">RAM: 64%</span>
              </div>
              <div className="w-px h-4 bg-cyan-500/30" />
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-sm font-mono text-cyan-300">GPU: 42%</span>
              </div>
            </motion.div>
          </div>

          {/* Loading Modules */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { name: "MONGO", color: "text-green-400" },
              { name: "EXPRESS JS", color: "text-blue-400" },
              { name: "REACT", color: "text-cyan-400" },
              { name: "NODE", color: "text-emerald-400" },
            ].map((module, index) => (
              <motion.div
                key={module.name}
                className={`px-4 py-2 rounded-lg bg-black/30 border border-cyan-900/30 backdrop-blur-sm ${module.color} text-center font-mono text-sm`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.05, borderColor: "#64ffda" }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse" />
                  <span>{module.name}</span>
                </div>
                <motion.div
                  className="h-1 w-full bg-current/20 rounded-full mt-2 overflow-hidden"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                >
                  <div className="h-full bg-current rounded-full" style={{ width: `${75 + index * 5}%` }} />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Circuit Flow Visualization */}
          <div className="mt-8 w-full max-w-2xl mx-auto">
            <div className="bg-black/20 border border-cyan-900/30 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden">
              {/* Circuit Path Glow */}
              <div className="absolute inset-0">
                <svg width="100%" height="100%" className="opacity-30">
                  <motion.path
                    d="M0,50 Q100,20 200,50 T400,50 T600,50"
                    fill="none"
                    stroke="url(#flow-gradient)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    strokeDashoffset="100"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M0,100 Q100,130 200,100 T400,100 T600,100"
                    fill="none"
                    stroke="url(#flow-gradient2)"
                    strokeWidth="3"
                    strokeDasharray="10 5"
                    strokeDashoffset="100"
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                  />
                  <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#64ffda" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                  <linearGradient id="flow-gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#57cbff" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </svg>
              </div>

              {/* Data Flow Indicators */}
              <div className="flex justify-between mb-4 relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs text-cyan-300 mt-1">DATA IN</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-300 mt-1">PROCESSING</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs text-blue-300 mt-1">DATA OUT</span>
                </div>
              </div>

              {/* Data Transfer Animation */}
              <div className="mt-6 flex justify-center">
                <div className="relative w-full h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-cyan-500 to-emerald-500"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      ease: "linear" 
                    }}
                  />
                </div>
              </div>

 
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          className="absolute bottom-23 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-xs text-cyan-300/50 font-mono">
            TECH CIRCUIT v2.1 • SYSTEM PROCESSING • READY
          </p>
        </motion.div>
      </div>

      {/* Add shimmer animation */}
      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;