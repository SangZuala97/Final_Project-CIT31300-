import CarCard from "./CarCard.js";
import cars from "./CarData.js";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "./DisplayCars.css";

function DisplayCars() {
  const headingTitle = "Lexus Car Collection";
  return (
    <div className="displayCars_page">
      <Header headingText= {headingTitle}/>
      <div className="car_container">
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
      </div>
      <Footer />
    </div>
      );
}

export default DisplayCars;
