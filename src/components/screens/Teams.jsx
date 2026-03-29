import React from "react";
import { members } from "../../assets/assets";
import Title from "./Title";

const Teams = () => {
  return (
    /* id="aboutus" added for navigation support */
    <div className="flex flex-col items-center py-24 px-6 md:px-12 bg-transparent font-sans">
      {/* Using the modified Title component:
          center={true} ensures the tag and divider are middle-aligned 
      */}
      <Title
        title="Meet the Team"
        desc="From the high-altitude farms of regional growers to our export facility in Addis Ababa, meet the dedicated team ensuring every bag of coffee meets our rigorous standards."
        center={true}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-16 max-w-6xl w-full">
        {members.map((item, index) => (
          <div
            key={index}
            className="group flex flex-col sm:flex-row items-center sm:items-start gap-8 p-10
                       rounded-[2.5rem] border border-gray-100/50 bg-white
                       hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                       transition-all duration-700 hover:-translate-y-2"
          >
            {/* Image Container with organic rotation */}
            <div className="relative w-40 h-48 md:w-44 md:h-52 flex-shrink-0">
              <div className="absolute inset-0 rounded-[2rem] bg-[#3C7D3C]/5 -rotate-3 group-hover:rotate-3 transition-transform duration-700" />
              <img
                src={item.img}
                alt={item.name}
                className="relative w-full h-full object-cover rounded-[2rem] shadow-md grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
              />
            </div>

            {/* Text Content */}
            <div className="text-center sm:text-left pt-2">
              <h3 className="text-2xl md:text-3xl font-black text-[#1a1a1a] tracking-tighter mb-2">
                {item.name}
              </h3>

              {/* Tag Style Role with the Gold Accent Underline */}
              <div className="inline-block">
                <p
                  className="text-[10px] text-[#3C7D3C] font-black uppercase tracking-[0.3em] 
                             relative transition-all duration-500
                             after:content-[''] after:absolute after:left-0 after:bottom-[-6px]
                             after:h-[1.5px] after:w-4 after:bg-[#E5A100]
                             group-hover:after:w-full after:transition-all after:duration-500"
                >
                  {item.title}
                </p>
              </div>

              <p className="text-[14px] md:text-[15px] text-gray-500/80 font-medium leading-relaxed mt-8 max-w-[280px]">
                {item.desc ||
                  "Leading our operations in Addis Ababa with a focus on digital traceability and regional partnerships."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
