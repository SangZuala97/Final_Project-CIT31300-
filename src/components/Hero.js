import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-[50vh] md:min-h-[60vh] lg:min-h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: "url(../images/lexus_wallpaper.jpg)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    ></div>
  );
};

export default Hero;
