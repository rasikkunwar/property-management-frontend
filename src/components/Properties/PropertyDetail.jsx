import React, { useState } from "react";

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
      </div>
    </React.Fragment>
  );
}
