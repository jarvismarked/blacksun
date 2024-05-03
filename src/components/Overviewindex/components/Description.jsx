import React from "react";

const Description = ({ title, content }) => (
  <div className="description">
    <div className="title body3 text-secondary mt-16">{title}</div>
    <div className="more-infor mt-24">
      {content.map((item) => (
        <div className="infor flex-item-center gap-12" key={item}>
          <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
          <div className="text-button">{item}</div>
        </div>
      ))}
    </div>
  </div>
);

export default Description;
