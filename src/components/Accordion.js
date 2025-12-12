import React, { useState } from "react";

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#C5A572] transition-all duration-300">
      <button
        className="w-full text-left py-3 px-4 md:py-4 md:px-6 
                   text-base md:text-lg font-medium tracking-wide
                   text-gray-800 hover:bg-[#F6F6F4] 
                   flex justify-between items-center transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>

        <span
          className={`text-xl md:text-2xl font-bold transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#C5A572]" : "text-gray-600"
          }`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-4 md:px-6 pb-4 text-sm md:text-base text-gray-700 leading-relaxed">
          {content}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
