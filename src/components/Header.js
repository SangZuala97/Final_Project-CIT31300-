
import React from "react";
function Header(props) {
    return (
        <header
            className="bg-[#D4AF37] flex flex-col items-center justify-center text-white text-center h-[200px] text-3xl font-semibold tracking-wide"
        >
           <h1>{props.headingText}</h1>
        </header>
    );
}

export default Header;
