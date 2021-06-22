import React from "react";
import yilantravel from "./yilantravel.jpg";
import { ImPhone } from "react-icons/im";
import { FcAddressBook } from "react-icons/fc";
import { CgWebsite } from "react-icons/cg";
const Hotel = ({
  ID,
  Name,
  Description,
  Address,
  Phone,
  WebsiteUrl,
  Picture,
  Position,
  ParkingInfo,
}) => {
  const webStyle = {
    color: "hsl(360, 71%, 66%)",
    // font-size:'2rem';
  };
  const descriptionStyle = {
    color: "hsl(325, 62%, 57%)",
  };
  if (!!Picture) {
    return (
      <article key={ID} className="hotel-container">
        <img
          src={Picture.PictureUrl1 || yilantravel}
          alt={Name}
          className="img-container"
        />

        <div className="hotel-footer">
          <header>
            <h4>{Name}</h4>
            <h4>
              <ImPhone />:{Phone}
            </h4>
          </header>
          <h4>
            <FcAddressBook />:{Address}
          </h4>

          <h4 style={descriptionStyle}>
            {`${Description}`.substring(0, 40)}...
          </h4>
          {/* <h4>
            <CgWebsite />:{WebsiteUrl}
          </h4> */}
          <h4>{ParkingInfo}</h4>
          <h4 style={webStyle}>
            <a href={WebsiteUrl}>官方網站</a>
          </h4>

          {/* <h4>{Description}</h4> */}
        </div>
      </article>
    );
  }
};

export default Hotel;
