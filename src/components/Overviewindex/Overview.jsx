import React, { useState } from "react";
import NavigationLink from "./components/NavigationLink";
import Description from "./components/Description";
import { navigationLinks, descriptions } from "../../data/companyData";
const CompanyOverview = () => {
  const [activeDescription, setActiveDescription] = useState(descriptions[0]); // Mô tả ban đầu

  const handleNavigationClick = (dataName) => {
    // Tìm mô tả tương ứng với đối tượng được click
    const description = descriptions.find(desc => desc.dataName === dataName);
    setActiveDescription(description);
  };
  return (
    <div className="financial-assessment-block pt-100 pb-100 bg-white">
      <div className="container">
        <div className="row flex-item-center">
          <div className="col-12 col-xl-6 col-lg-12">
            <div className="bg-img w-100 overflow-hidden bora-20">
              <img
                className="w-100 h-100 hover-scale display-block bora-20"
                src="assets/images/component/working.png"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-xl-6 col-lg-12 flex-column">
            <div className="heading3 ml-40">company overview</div>
            <div className="nav-infor ml-40 mt-40">
              <div className="list-nav flex-item-center gap-40">
                {navigationLinks.map((link) => (
                  <NavigationLink
                    key={link.name}
                    {...link}
                    isActive={link.dataName === activeDescription.dataName} // Kiểm tra xem liên kết có nên được đánh dấu là active không
                    handleClick={() => handleNavigationClick(link.dataName)} // Truyền hàm xử lý sự kiện click xuống
                  />
                ))}
              </div>
              <Description {...activeDescription} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;