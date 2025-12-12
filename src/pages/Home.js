import React from "react";
import Accordion from "../components/Accordion.js";
import Carousel from "../components/Carousel.js";
import Header from "../components/Header.js";
import Hero from "../components/Hero.js";
import "../App.css";
import Footer from "../components/Footer.js";
import CarData from "./CarData.js";
import AccordionData from "../components/AccordionData.js";

function Home() {
    const headingTitle = (
      <>
        Where Precision Meets Luxury:
        <br />
        Explore the World of Lexus
      </>
    );

  return (
    <div className="flex flex-col min-h-screen">
      <Header headingText= {headingTitle}/>
      <Hero />
      <main className="flex-grow p-4 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
          
          <section className="md:w-1/2 ">
            <h2 className="text-2xl font-semibold mb-4">Lexus Display</h2>
            <Carousel items={CarData} />
          </section>

          <section className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">Info about Lexus</h2>
            {AccordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
          </section>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
