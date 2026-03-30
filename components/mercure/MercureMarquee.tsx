"use client";

export default function MercureMarquee() {
  const text = "FEEL LOCAL EVERYWHERE";
  const repeated = Array(8).fill(text);

  return (
    <div className="bg-[#A790C4] py-5 overflow-hidden">
      <div className="animate-mercure-marquee flex whitespace-nowrap">
        {repeated.map((t, i) => (
          <span
            key={i}
            className="text-white text-sm sm:text-base font-bold uppercase tracking-[0.3em] mx-8 font-montserrat"
          >
            {t} —
          </span>
        ))}
        {repeated.map((t, i) => (
          <span
            key={`dup-${i}`}
            className="text-white text-sm sm:text-base font-bold uppercase tracking-[0.3em] mx-8 font-montserrat"
          >
            {t} —
          </span>
        ))}
      </div>
    </div>
  );
}
