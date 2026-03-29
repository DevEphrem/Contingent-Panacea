import React, { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textareaRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInput = () => {
    const element = textareaRef.current;
    element.style.height = "auto";
    element.style.height = `${element.scrollHeight}px`;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f2e8cadd-2adb-4e96-9eed-51f6706dede2");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        toast.success("Thank you for your submission");
        event.target.reset();
        textareaRef.current.style.height = "auto";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const anim = (delay) => `
    transition-all duration-700 ease-out
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
    ${delay}
  `;

  return (
    // Changed to bg-transparent to blend with App.jsx background
    <div
      id="contactus"
      className="py-24 bg-transparent flex items-center justify-center p-4 sm:p-6 md:p-10 font-sans text-dark"
    >
      <div
        className={`w-full max-w-5xl bg-white border border-gray-100 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden ${anim("delay-100")}`}
      >
        {/* Left Section: Branding */}
        <div className="md:w-5/12 bg-[#3C7D3C] p-8 md:p-12 text-white flex flex-col justify-between relative">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-[80px]"></div>

          <div className={`relative z-10 ${anim("delay-300")}`}>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 uppercase tracking-tighter">
              Let's build <br className="hidden md:block" /> something great.
            </h2>
            <p className="text-white/80 text-base md:text-lg font-medium">
              Reach out for coffee exports or technical inquiries.
            </p>
          </div>

          <div
            className={`relative z-10 space-y-4 md:space-y-6 mt-12 ${anim("delay-500")}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xl">📍</span>
              <p className="font-bold tracking-wide text-sm md:text-base">
                Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <p className="font-bold tracking-wide text-sm md:text-base">
                hello@export.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="md:w-7/12 p-8 md:p-12 bg-gray-50/50">
          <form onSubmit={onSubmit} className="grid gap-y-5 md:gap-y-6">
            <h1
              className={`text-2xl md:text-3xl font-extrabold mb-2 tracking-tighter uppercase ${anim("delay-200")}`}
            >
              Reach Out
            </h1>

            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${anim("delay-400")}`}
            >
              <input
                name="first_name"
                required
                placeholder="First Name"
                className="bg-white border border-gray-100 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-[#3C7D3C]/20 transition-all text-sm md:text-base"
              />
              <input
                name="last_name"
                required
                placeholder="Last Name"
                className="bg-white border border-gray-100 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-[#3C7D3C]/20 transition-all text-sm md:text-base"
              />
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email"
              className={`w-full bg-white border border-gray-100 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-[#3C7D3C]/20 transition-all text-sm md:text-base ${anim("delay-500")}`}
            />

            <textarea
              name="message"
              required
              ref={textareaRef}
              onInput={handleInput}
              rows="1"
              placeholder="Message"
              className={`w-full bg-white border border-gray-100 rounded-xl md:rounded-2xl px-5 py-3 md:py-4 outline-none focus:ring-2 focus:ring-[#3C7D3C]/20 transition-all resize-none overflow-hidden min-h-[80px] text-sm md:text-base ${anim("delay-600")}`}
            />

            <button
              type="submit"
              className={`w-full bg-[#1a1a1a] text-white font-bold py-4 md:py-5 rounded-xl md:rounded-2xl hover:bg-[#3C7D3C] active:scale-95 transition-all duration-300 uppercase tracking-widest text-[10px] md:text-xs ${anim("delay-700")}`}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
