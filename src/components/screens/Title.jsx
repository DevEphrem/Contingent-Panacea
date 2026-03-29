import React from "react";

const Title = ({ title, desc, quote, center = false }) => {
  return (
    <div
      className={`${center ? "text-center mx-auto" : "text-left"} mb-12 max-w-3xl font-sans`}
    >
      {/* Pre-Title Tag */}
      <div
        className={`flex items-center ${center ? "justify-center" : "justify-start"} gap-3 mb-6`}
      >
        <div className="h-[1px] w-8 bg-[#E5A100]/40"></div>
        <span className="text-[#3C7D3C] text-[10px] font-black uppercase tracking-[0.4em]">
          Our Excellence
        </span>
        {!center && <div className="h-[1px] w-8 bg-[#E5A100]/40"></div>}
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-6xl font-black text-[#1a1a1a] mb-8 tracking-tighter uppercase leading-[0.9]">
        {title}
      </h2>

      {/* Decorative Divider */}
      <div
        className={`relative w-20 h-1.5 ${center ? "mx-auto" : "ml-0"} mb-10 overflow-hidden rounded-full bg-black/5`}
      >
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[#3C7D3C]"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-[#E5A100]"></div>
      </div>

      {/* Optional Highlight Quote */}
      {quote && (
        <p className="text-gray-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-[#E5A100]/30 pl-6 mb-8">
          {quote}
        </p>
      )}

      {/* Main Description */}
      {desc && (
        <p className="text-gray-500/80 text-base md:text-lg leading-relaxed max-w-2xl">
          {desc}
        </p>
      )}
    </div>
  );
};

export default Title;
