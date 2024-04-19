import React from "react";

const HomeFeature = ({featureImgAlt, featureImgSrc, featureText, featureTitle}) => {
  return (
    <div className="feature-item">
      <img
        src={featureImgSrc}
        alt={featureImgAlt}
        className="feature-icon"
      />
      <h3 className="feature-item-title">{featureTitle}</h3>
      <p>
       {featureText}
      </p>
    </div>
  );
};

export default HomeFeature;
