import React from "react";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1a1a] text-white font-sans">
      <div
        className="max-w-7xl mx-auto px-6 py-16 
                  grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12"
      >
        {/* Brand Section */}
        <div className="flex flex-col">
          <div className="mb-6">
            <img
              src={assets.logofooter}
              alt="Logo"
              className="w-16 md:w-20 opacity-90"
            />
          </div>

          <div className="border-l-2 border-[#E5A100] pl-5">
            <h3 className="text-white/70 text-sm md:text-base font-bold tracking-[0.3em] uppercase">
              Contingent
            </h3>
            <h2 className="text-[#E5A100] text-3xl md:text-4xl font-serif font-bold tracking-tight mt-1">
              Panacea
            </h2>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#E5A100] rounded-full"></span>
            Get In Touch
          </p>

          <div className="space-y-4 text-white/80 text-[13px] leading-relaxed font-medium">
            <p className="flex items-start">
              <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-bold w-16 shrink-0">
                Visit:
              </span>
              <span className="hover:text-white transition-colors cursor-default">
                Addis Ababa, Ethiopia
              </span>
            </p>
            <p className="flex items-start">
              <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-bold w-16 shrink-0">
                Email:
              </span>
              <a
                href="mailto:info@contingentpanacea.com"
                className="hover:text-[#E5A100] transition-colors break-all"
              >
                info@contingentpanacea.com
              </a>
            </p>
            <p className="flex items-start">
              <span className="text-[10px] uppercase tracking-[2px] text-white/40 font-bold w-16 shrink-0">
                Call:
              </span>
              <a
                href="tel:+251900000000"
                className="hover:text-[#E5A100] transition-colors"
              >
                +251 900 000 000
              </a>
            </p>
          </div>
        </div>

        {/* Hours Section */}
        <div>
          <p className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-[#E5A100] rounded-full"></span>
            Working Hours
          </p>

          <div className="space-y-3 text-sm">
            {[
              { label: "Monday–Friday", time: "8:00 – 17:00" },
              { label: "Lunch", time: "12:00 – 13:00" },
              { label: "Afternoon", time: "13:00 – 17:00" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex justify-between items-end pb-2 border-b border-white/10"
              >
                <span className="text-white/60 text-[12px]">{item.label}</span>
                <span className="text-white font-medium text-[13px]">
                  {item.time}
                </span>
              </div>
            ))}

            <div className="flex justify-between items-center pt-2">
              <span className="text-white/60 text-[12px]">Weekend</span>
              <span className="text-[11px] font-black uppercase tracking-[2px] text-[#E5A100] bg-[#E5A100]/10 px-3 py-1 rounded-md">
                Appointment Only
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full border-t border-white/5 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium">
            © 2026 Ethiopian Coffee Heritage
          </p>
          <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium">
            Design & Development by{" "}
            <span className="text-white/60 hover:text-[#E5A100] transition-colors cursor-pointer">
              Ephrem Kidane
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
