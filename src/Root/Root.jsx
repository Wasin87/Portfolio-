import { Outlet } from "react-router";
import CursorFollower from "../Shared/CursorFollower";

const Root = () => {
  return (
    <div className="relative min-h-screen bg-[#0a192f] isolate overflow-x-hidden">

      {/* Main linear background */}
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-linear(65%_55%_at_15%_20%,rgba(87,203,255,0.25)_0%,rgba(87,203,255,0.12)_25%,rgba(10,25,47,0.6)_55%,rgba(10,25,47,1)_75%)]">
      </div>

      {/* Secondary linear background */}
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-linear(45%_40%_at_85%_70%,rgba(100,255,218,0.2)_0%,rgba(100,255,218,0.1)_30%,transparent_60%)]">
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 
        bg-[radial-linear(circle,transparent_50%,rgba(10,25,47,0.95)_100%)]">
      </div>

      {/* Content */}
      <div className="relative z-10">
        <span className="hidden md:block"><CursorFollower /></span>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;