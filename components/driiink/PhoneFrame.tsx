"use client";

import StatusBar from "./ui/StatusBar";

interface PhoneFrameProps {
  children: React.ReactNode;
}

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-0 md:p-8">
      {/* Desktop: phone frame */}
      <div className="hidden md:block relative">
        <div
          className="relative w-[390px] h-[844px] rounded-[3rem] border-[3px] border-zinc-700/80 bg-[#0A0A0A] overflow-hidden shadow-2xl shadow-black/50"
          style={{ boxShadow: "0 0 80px rgba(34,197,94,0.05), 0 25px 50px rgba(0,0,0,0.5)" }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50" />

          {/* Status Bar */}
          <div className="relative z-50">
            <StatusBar />
          </div>

          {/* Screen content */}
          <div className="h-[calc(100%-40px)] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile: full screen, no frame */}
      <div className="md:hidden w-full min-h-screen bg-[#0A0A0A]">
        {children}
      </div>
    </div>
  );
}
