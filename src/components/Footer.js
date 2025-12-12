import React from "react";

const Footer = ({ 
  bgColor = "bg-gray-800",
  textColor = "text-white",
  title,
  links = []
}) => {
  return (
    <footer className={`${bgColor} ${textColor} p-4 text-center mt-8`}>
      <p>&copy; 2025 {title}. All rights reserved.</p>

  
    </footer>
  );
};

export default Footer;
