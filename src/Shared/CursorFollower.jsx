import { useEffect, useRef, useState } from "react";

const CursorFollower = () => {
  const cursorRef = useRef(null);
  const requestRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Detect hover over interactive elements
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const isInteractive = element && (
        element.tagName === 'BUTTON' || 
        element.tagName === 'A' || 
        element.closest('button') || 
        element.closest('a') ||
        element.closest('.tech-btn') ||
        element.closest('.tech-card')
      );
      
      setHovered(isInteractive);
    };
    
    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };
    
    const handleMouseDown = () => {
      setClicked(true);
    };
    
    const handleMouseUp = () => {
      setTimeout(() => setClicked(false), 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const animate = () => {
    setCursorPos((prev) => {
      const dx = mousePos.x - prev.x;
      const dy = mousePos.y - prev.y;
      const speed = hovered ? 0.25 : 0.15;
      return {
        x: prev.x + dx * speed,
        y: prev.y + dy * speed,
      };
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [mousePos, hovered]);

  // Determine cursor size based on state
  const cursorSize = hovered ? 'w-10 h-10' : (clicked ? 'w-5 h-5' : 'w-7 h-7');
  
  return (
    <>
      {/* Outer ring */}
      <div
        ref={cursorRef}
        className={`
          pointer-events-none fixed top-0 left-0 z-50
          rounded-full transition-all duration-300
          border border-[#57cbff]/50
          ${cursorSize}
        `}
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
          boxShadow: clicked
            ? "0 0 20px 8px rgba(87, 203, 255, 0.6)"  
            : hovered
            ? "0 0 25px 5px rgba(100, 255, 218, 0.5)"
            : "0 0 15px 3px rgba(87, 203, 255, 0.3)",
          background: hovered 
            ? 'radial-linear(circle, rgba(87,203,255,0.1) 0%, transparent 70%)'
            : clicked
            ? 'radial-linear(circle, rgba(100,255,218,0.15) 0%, transparent 70%)'
            : 'transparent',
        }}
      />
      
      {/* Inner dot */}
      <div
        className={`
          pointer-events-none fixed top-0 left-0 z-50
          rounded-full transition-all duration-150
          w-2 h-2 bg-[#64ffda]
        `}
        style={{
          transform: `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0) translate(-50%, -50%)`,
          boxShadow: "0 0 10px 2px rgba(100, 255, 218, 0.8)",
        }}
      />
      
      {/* Trailing effect */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="pointer-events-none fixed top-0 left-0 z-40 rounded-full"
          style={{
            width: `${7 - i * 2}px`,
            height: `${7 - i * 2}px`,
            background: `radial-linear(circle, rgba(87,203,255,${0.3 - i * 0.1}) 0%, transparent 70%)`,
            transform: `translate3d(${cursorPos.x - (i * 5)}px, ${cursorPos.y - (i * 5)}px, 0) translate(-50%, -50%)`,
            transition: 'transform 0.1s linear',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </>
  );
};

export default CursorFollower;