"use client";

import { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  onClick?: () => void;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

const BentoCard = ({ name, className, background, Icon, description, cta, onClick }: BentoCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className={cn(
      "group relative col-span-3 flex flex-col overflow-hidden rounded-xl cursor-pointer",
      "border border-zinc-200 bg-white shadow-sm",
      "hover:shadow-lg transition-shadow duration-300",
      className,
    )}
  >
    {/* Background — behind everything */}
    {background && <div className="absolute inset-0 overflow-hidden pointer-events-none">{background}</div>}

    {/* Content — always on top */}
    <div className="relative z-10 flex flex-col justify-between h-full p-4 md:p-5">
      <div>
        <Icon className="h-5 w-5 md:h-6 md:w-6 text-zinc-500 transition-colors group-hover:text-[#5B7FD6] mb-2" />
        <h3 className="text-sm md:text-base font-semibold font-bricolage leading-tight">{name}</h3>
        <p className="text-[11px] md:text-xs text-zinc-500 mt-1 line-clamp-2">{description}</p>
      </div>
      {cta && (
        <div className="mt-auto pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="inline-flex items-center gap-1 text-xs font-medium text-[#5B7FD6]">
            {cta} <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      )}
    </div>
  </motion.div>
);

export { BentoGrid, BentoCard };
