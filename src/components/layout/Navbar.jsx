import React from "react";
import assets from "../../assets/assets";

const Navbar = () => {
  return (
    <nav className="flex flex-col p-0  bg-white mb-2">
      <div className="flex items-center justify-between shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] border-b border-gray-100">
        <img className="h-20 w-auto " src={assets.logo} alt="Logo" />

        <button
          className=" flex
        items-center justify-center gap-2
        pl-[10px] pr-[5px] py-[8px] text-[10px]
        mr-[25px]
        bg-green hover:bg-softgreen
        text-white rounded-[5px]
        transition-colors duration-200
        
      "
        >
          Connect
          <svg
            width="10"
            height="9"
            viewBox="0 0 15 9"
            fill="none"
            className="transition-transform"
          >
            <path
              d="M0.950012 4.5002L14.05 4.5002M14.05 4.5002L10.55 1M14.05 4.5002L10.55 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <ul className="flex flex-wrap items-center  justify-center gap-10 font-medium">
        <li>
          <a
            href="#"
            className="
        text-[10px] text-[#3C3C3C]
        hover:text-[#3C7D3C]
        transition-all duration-300 ease-in-out
        relative
        after:content-[''] 
        after:absolute 
        after:left-0 
        after:bottom-[-2px]
        after:h-[1px] 
        after:w-0 
        after:bg-[#3C7D3C]
        after:transition-all 
        after:duration-300
        hover:after:w-full
      "
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#products"
            className="
        text-[10px] text-[#3C3C3C]
        hover:text-[#3C7D3C]
        transition-all duration-300 ease-in-out
        relative
        after:content-[''] 
        after:absolute 
        after:left-0 
        after:bottom-[-2px]
        after:h-[1px] 
        after:w-0 
        after:bg-green
        after:transition-all 
        after:duration-300
        hover:after:w-full
      "
          >
            Products
          </a>
        </li>

        <li>
          <a
            href="#aboutus"
            className="
        text-[10px] text-[#3C3C3C]
        hover:text-[#3C7D3C]
        transition-all duration-300 ease-in-out
        relative
        after:content-[''] 
        after:absolute 
        after:left-0 
        after:bottom-[-2px]
        after:h-[1px] 
        after:w-0 
        after:bg-[#3C7D3C]
        after:transition-all 
        after:duration-300
        hover:after:w-full
      "
          >
            About Us
          </a>
        </li>

        <li>
          <a
            href="#contactus"
            className="
        text-[10px] text-[#3C3C3C]
        hover:text-[#3C7D3C]
        transition-all duration-300 ease-in-out
        relative
        after:content-[''] 
        after:
        absolute 
        after:left-0 
        after:bottom-[-2px]
        after:h-[1px] 
        after:w-0 
        after:bg-[#3C7D3C]
        after:transition-all 
        after:duration-300
        hover:after:w-full
      "
          >
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
