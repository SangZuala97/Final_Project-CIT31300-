import React from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";

const About = () => {
  const headingTitle = "About Lexus Collection";

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F6F4] text-gray-800">
      <Header headingText={headingTitle} />

      <main className="flex-grow max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              The Lexus Display Collection highlights a lineup crafted with
              precision engineering, world-class luxury, and advanced technology.
              Each model reflects Lexus’ commitment to performance, quiet comfort,
              and timeless design.
            </p>

            <p>
              Whether you’re exploring hybrid innovation, performance sedans,
              or the elegance of flagship models, this site offers vehicle
              specifications, interior details, and pricing ranges all in one
              convenient space — designed for both enthusiasts and future owners.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-200">
            <h2 className="text-2xl font-semibold text-[#C5A572] mb-4 text-center md:text-left">
              What You Can Explore
            </h2>

            <ul className="list-disc list-inside space-y-3 text-lg">
              <li>Model horsepower, engine type, and performance stats</li>
              <li>Interior craftsmanship and trim packages</li>
              <li>Hybrid vs performance model comparisons</li>
              <li>Pricing tiers and luxury upgrade options</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
