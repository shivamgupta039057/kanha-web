import React from 'react';

const SubHeader = ({ title, subtitle, rating }) => {
  // Ensure rating is a number between 0 and 5
  const stars = Math.max(0, Math.min(5, Number(rating) || 0));
  return (
    <div className="subheader normal-bg section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-left" style={{ marginTop: "30px" }}>
            <div className="rating mb-2">
              {[...Array(stars)].map((_, idx) => (
                <i key={idx} className="fa-sharp fa-solid fa-star"></i>
              ))}
              {[...Array(5 - stars)].map((_, idx) => (
                <i key={stars + idx} className="fa-sharp fa-regular fa-star"></i>
              ))}
            </div>
            <h5 className="text-custom-white">{subtitle}</h5>
            <h1 className="subheader-h1">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;