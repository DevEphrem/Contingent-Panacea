import React, { useState, useEffect } from "react";
import { heroImages } from "../../assets/assets";

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden font-sans bg-[#f4f7f6]">
      {/* 1. THE "BREATHING" IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        {/* Adjusted to w-full to ensure it starts from the absolute left edge */}
        <div className="relative w-full h-full ml-auto overflow-hidden">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            >
              <img
                src={img}
                alt="Ethiopian Coffee"
                className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-linear
                  ${i === index ? "scale-110" : "scale-100"}
                `}
                style={{
                  /* THE "EDGE-LESS" MASK:
                    By starting the black at 40% and using a very deep transparent start,
                    the image "emerges" from the background color without a visible starting line.
                  */
                  maskImage:
                    "linear-gradient(to right, transparent 5%, rgba(0,0,0,0.1) 15%, black 45%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 5%, rgba(0,0,0,0.1) 15%, black 45%)",
                }}
              />
            </div>
          ))}

          {/* Enhanced Bottom Blend */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f4f7f6] via-[#f4f7f6]/80 to-transparent z-20"></div>
        </div>
      </div>

      {/* 2. CONTENT LAYER */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full pt-10">
        <div className="max-w-4xl">
          <div className="flex flex-col space-y-8 md:space-y-12">
            {/* Tagline */}
            <div className="flex items-center gap-4">
              <span className="text-[#3C7D3C] font-black text-[10px] md:text-xs uppercase tracking-[0.6em]">
                Direct Export
              </span>
              <div className="h-[1.5px] w-12 bg-[#E5A100]/60"></div>
            </div>

            {/* Title */}
            <h1 className="text-[14vw] md:text-[10rem] lg:text-[12rem] font-black text-[#1a1a1a] leading-[0.8] tracking-tighter">
              BEYOND <br />
              <span className="text-[#3C7D3C] italic font-serif font-light lowercase">
                Coffee.
              </span>
            </h1>

            {/* Description & Button Section */}
            <div className="max-w-md space-y-10">
              <p className="text-gray-500 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                From the birthplace of coffee to your hands,
                <span className="text-[#1a1a1a] font-bold block md:inline md:ml-2">
                  raw, refined, and extraordinary.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-10">
                <button className="group relative px-12 py-5 bg-[#1a1a1a] text-white rounded-full font-bold text-[11px] uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-[#3C7D3C] hover:pr-16 active:scale-95 shadow-2xl shadow-black/10">
                  <span className="relative z-10">View Products</span>
                  <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    →
                  </span>
                </button>

                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-1000 ${
                          i === index ? "w-12 bg-[#E5A100]" : "w-3 bg-black/10"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-black text-black/30 tracking-widest">
                    0{index + 1} / 0{heroImages.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
