import React from "react";
import Hotel from "./Hotel";

const HotelList = ({ filteredHotels, hotels }) => {
  const headerStyle = {
    // color: "hsl(125, 67%, 44%)",
    color: "purple",
  };
  return (
    <>
      <h3 style={headerStyle}>共有{hotels ? hotels.length : 0}個地點</h3>
      <div className="list-container">
        {filteredHotels &&
          filteredHotels.map((filteredHotel) => {
            // return <p>er{filteredHotel.length}</p>;
            return <Hotel {...filteredHotel} />;
          })}
      </div>
    </>
  );
  // return <p>{hotels}</p>;
};
export default HotelList;
