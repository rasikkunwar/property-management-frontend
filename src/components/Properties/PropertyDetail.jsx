import React, { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export default function PropertyDetail() {
  const [propertyDetail, setPropertyDetail] = useState({
    title:"Card Title",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    price:100000,
    address:{
        street:"1000 N 4th St",
        state:"Iowa",
        city:"Fairfield"
    }
  });
  return (
    <React.Fragment>
      <div className="Banner">
        <img src="/banner.jpeg" alt="Banner" />
      </div>
      <div className="Property-detail">
        <h5>{propertyDetail.title}</h5>
        <h3>${propertyDetail.price}</h3>
        <h6>{propertyDetail && propertyDetail.address && propertyDetail.address.street + ", " + propertyDetail.address.city + ", "+ propertyDetail.address.state}</h6>
        <p>{propertyDetail.text}</p>
        <div className="Property-images">
            <ImageCarousel></ImageCarousel>
        </div>
        <div className="Property-specification">
            <div className="Detail">
                <h5 className="title">Property Details</h5>
                <div className="P-data">
                    <span>Bedrooms: 1</span>
                    <span>Bathrooms: 2</span>
                    <span>Basement: None</span>
                    <span>Basement: Yes</span>
                    <span>Parking: Yes</span>
                </div>
            </div>
            <div className="Land-detail">
                <h5 className="title">Land Details</h5>
                <div className="L-data">
                    <span>Lot size: 10,011 sqft</span>
                </div>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}
