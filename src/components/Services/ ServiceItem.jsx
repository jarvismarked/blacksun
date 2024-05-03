import React from 'react';

function ServiceItem({ icon, title, description, link }) {
  return (
    <div className="col-12 col-lg-6 col-md-6">
      <div className="service-item hover-box-shadow bora-8 p-24 bg-white box-shadow h-100">
        <a className="service-item-main flex-item-center gap-30" href={link}>
          <div className="heading"><i className={`${icon} text-blue fs-48`}></i></div>
          <div className="desc">
            <div className="heading7 hover-text-blue">{title}</div>
            <div className="body3 text-secondary mt-8">{description}</div>
            <div className="explore-block flex-item-center gap-4 mt-8">
              <div className="text-button-small text-blue">Explore Plan</div><i className="ph-bold ph-caret-double-right fs-12 text-blue"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default ServiceItem;
