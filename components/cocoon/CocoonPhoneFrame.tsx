"use client";

interface CocoonPhoneFrameProps {
  children: React.ReactNode;
}

export default function CocoonPhoneFrame({ children }: CocoonPhoneFrameProps) {
  return (
    <>
      {/* Desktop: iPhone frame */}
      <div className="hidden md:flex min-h-screen bg-zinc-100 items-center justify-center p-8">
        <div
          className="relative w-[390px] h-[844px] rounded-[3rem] border-[3px] border-zinc-300/80 bg-[#f8f9fa] overflow-hidden shadow-2xl"
          style={{ boxShadow: "0 0 80px rgba(255,107,107,0.08), 0 25px 50px rgba(0,0,0,0.15)" }}
        >
          {/* Dynamic Island */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50" />

          {/* Status Bar */}
          <div className="relative z-40 flex items-center justify-between px-8 pt-4 pb-1 h-[52px]">
            <span className="text-[14px] font-semibold text-zinc-900">9:41</span>
            <div className="flex items-center gap-1.5">
              {/* Signal bars */}
              <span className="flex gap-[2px] items-end">
                <span className="w-[3px] h-[4px] bg-zinc-900 rounded-sm" />
                <span className="w-[3px] h-[6px] bg-zinc-900 rounded-sm" />
                <span className="w-[3px] h-[8px] bg-zinc-900 rounded-sm" />
                <span className="w-[3px] h-[10px] bg-zinc-900 rounded-sm" />
              </span>
              {/* WiFi */}
              <svg width="14" height="10" viewBox="0 0 14 10" className="text-zinc-900 ml-0.5">
                <path d="M7 9.5a1 1 0 110-2 1 1 0 010 2z" fill="currentColor" />
                <path d="M4.05 7.05a4.2 4.2 0 015.9 0" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                <path d="M1.5 4.5a7.5 7.5 0 0111 0" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <span className="flex items-center ml-0.5">
                <span className="w-[22px] h-[11px] border border-zinc-900 rounded-[3px] relative flex items-center px-[2px]">
                  <span className="w-[16px] h-[7px] bg-zinc-900 rounded-[1.5px]" />
                </span>
                <span className="w-[2px] h-[5px] bg-zinc-900 rounded-r-sm ml-[1px]" />
              </span>
            </div>
          </div>

          {/* Screen content */}
          <div className="h-[calc(100%-52px)] w-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile: full screen, no frame */}
      <div className="md:hidden w-full h-screen bg-[#f8f9fa] overflow-hidden">
        {children}
      </div>
    </>
  );
}
