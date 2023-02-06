import React, { useState } from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

export default function PropertyDetail() {
  const [propertyDetail, setPropertyDetail] = useState({
    title:"Card Title",
    text:"Some quick example text to build on the card title and make up the bulk of the card's content."
  });
  return (
    <React.Fragment>
      <div className="Banner">
        <img src="/banner.jpeg" alt="Banner" />
      </div>
      <div className="Property-detail">
        <h5>{propertyDetail.title}</h5>
        <p>{propertyDetail.text}</p>
        <div className="Property-images">
            <ImageCarousel></ImageCarousel>
        </div>
        <div className="Property-specification">
            <div className="Detail">
                <h5 className="title">Property Details</h5>
            </div>
            <div className="Land-detail">
                <h5 className="title">Land Details</h5>
            </div>
            <div className="Location">
                <h5 className="title">Location</h5>
            </div>
        </div>
      </div>
    </React.Fragment>
  );
}
