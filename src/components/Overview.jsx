import React from "react";

function Overview() {
  return (
    <div>
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
                  <div className="nav-item active" data-name="about-us" onClick={ () => console.log('Hohoh')}>
                    About Us
                  </div>
                  <div className="nav-item" data-name="mission" onClick={ () => console.log('Hohoh')}>
                    Mission
                  </div>
                  <div className="nav-item" data-name="vision">
                    Vision
                  </div>
                </div>
                <div className="description item-filter" data-name="about-us">
                  <div className="title body3 text-secondary mt-16">
                    We're a devoted team providing premium financial solutions.
                    Explore our mission, values, and achievements as we empower
                    clients for a secure financial future.
                  </div>
                  <div className="more-infor mt-24">
                    <div className="infor flex-item-center gap-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Identification of monthly income
                      </div>
                    </div>
                    <div className="infor flex-item-center gap-12 mt-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Creation of savings and investment plan
                      </div>
                    </div>
                    <div className="infor flex-item-center gap-12 mt-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Management and calculation of monthly expenses
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="description item-filter hide"
                  data-name="mission"
                >
                  <div className="title body3 text-secondary mt-16">
                    Our mission is to provide comprehensive and personalized
                    financial solutions that empower our clients to achieve
                    their financial goals and secure their future.
                  </div>
                  <div className="more-infor mt-24">
                    <div className="infor flex-item-center gap-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Management and calculation of monthly expenses
                      </div>
                    </div>
                    <div className="infor flex-item-center gap-12 mt-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Identification of monthly income
                      </div>
                    </div>
                    <div className="infor flex-item-center gap-12 mt-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Creation of savings and investment plan
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="description item-filter hide"
                  data-name="vision"
                >
                  <div className="title body3 text-secondary mt-16">
                    Our unwavering vision is to be the most trusted and
                    preferred partner in achieving financial success, diligently
                    guiding our valued clients toward a secure and prosperous
                    future.
                  </div>
                  <div className="more-infor mt-24">
                    <div className="infor flex-item-center gap-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Creation of savings and investment plan
                      </div>
                    </div>
                    <div className="infor flex-item-center gap-12 mt-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Management and calculation of monthly expenses
                      </div>
                    </div>
                    <div className="infor flex-item-center gap-12 mt-12">
                      {" "}
                      <i className="ph-fill ph-check-circle fs-20 text-blue"></i>
                      <div className="text-button">
                        Identification of monthly income
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-block flex-item-center gap-20 ml-40 mt-40 pb-8">
                <a
                  className="button-share text-white bg-blue hover-button-black text-button pt-14 pb-14 pl-36 pr-36 bora-48"
                  href="contact-two.html"
                >
                  Get started
                </a>
                <a
                  className="button-share text-on-surface hover-button-black bg-white text-button pt-12 pb-12 pl-36 pr-36 bora-48 border-blue-2px flex-item-center gap-8"
                  href="contact-two.html"
                >
                  <i className="ph ph-phone fs-20"></i>
                  <span>(00) 123 456 789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
