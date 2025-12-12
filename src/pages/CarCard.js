
import { useState } from 'react';

const CarCard = ({car}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    };

    const handleCloseModal = () => {
      setShowModal(false);
  };

  return (
    <div className="car_card block max-w-sm border border-default rounded-base shadow-xs m-4 p-4 text-center"> 
        <img
          src={car.image}
          alt="Car_Picture"
          className="w-full h-48 object-cover mb-4"
        />

        <h3>{car.title}</h3>
        <h3>{car.type}</h3>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4" onClick={handleOpenModal}>Show Car Details</button>

        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={handleCloseModal}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 md:p-8 border border-[#C5A572] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-center text-2xl font-bold text-[#C5A572] tracking-wide mb-6">
                Vehicle Information
              </h2>

              {car.image && (
                <img
                  src={car.image}
                  alt={car.title}
                  className="w-40 h-28 object-cover rounded-lg mx-auto mb-4 shadow-md"
                />
              )}

              <div className="space-y-2 text-gray-700">
                <p><strong>Model:</strong> {car.title}</p>
                <p><strong>Type:</strong> {car.type}</p>
                <p><strong>Description:</strong> {car.content}</p>
                <p><strong>Price Range:</strong> {car.priceRange}</p>
              </div>

              <button
                className="bg-[#C5A572] hover:bg-[#b49259] text-white font-bold py-2 px-8 rounded-full mt-8 block mx-auto shadow-md transition duration-300"
                onClick={handleCloseModal}
              >
                Close
              </button>
            
            </div>
        </div>

        )}
    </div>
  );
}

export default CarCard;
