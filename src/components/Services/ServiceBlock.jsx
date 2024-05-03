import React from 'react';
import ServiceItem from './ ServiceItem';

function ServiceBlock() {
  return (
    <div class="service-block service-block-two mt-100">
        <div class="container"> 
          <div class="row row-gap-32">
            <div class="col-12 col-xl-4 flex-column gap-16">
              <div class="text-sub-heading2 text-blue">Services</div>
              <div class="heading3">Wealth Management Firm</div>
              <div class="body3 text-secondary">We specialize in providing asset management services and solutions for individuals and organizations.</div>
            </div>
            <div class="col12 col-xl-8">
              <div class="list-service pl-40">
                <div class="row row-gap-32">
                  <div class="col-12 col-lg-6 col-md-6">
                          <div class="service-item hover-box-shadow bora-8 p-24 bg-white box-shadow h-100"><a class="service-item-main flex-item-center gap-30" href="service-portfolio-management.html">
                              <div class="heading"><i class="icon-coin-hand text-blue fs-48"></i></div>
                              <div class="desc">
                                <div class="heading7 hover-text-blue">Budget planning</div>
                                <div class="body3 text-secondary mt-8">Stay in control of your finances with effortless tracking and monitoring of your transactions.</div>
                                <div class="explore-block flex-item-center gap-4 mt-8">
                                  <div class="text-button-small text-blue">Explore Plan</div><i class="ph-bold ph-caret-double-right fs-12 text-blue"></i>
                                </div>
                              </div></a>
                          </div>
                  </div>
                  <div class="col-12 col-lg-6 col-md-6">
                          <div class="service-item hover-box-shadow bora-8 p-24 bg-white box-shadow h-100"><a class="service-item-main flex-item-center gap-30" href="service-detail.html">
                              <div class="heading"><i class="icon-coin-pig text-blue fs-48"></i></div>
                              <div class="desc">
                                <div class="heading7 hover-text-blue">Savings advice</div>
                                <div class="body3 text-secondary mt-8">Rest assured with our robust security measures to protect your transactions and sensitive.</div>
                                <div class="explore-block flex-item-center gap-4 mt-8">
                                  <div class="text-button-small text-blue">Explore Plan</div><i class="ph-bold ph-caret-double-right fs-12 text-blue"></i>
                                </div>
                              </div></a>
                          </div>
                  </div>
                  <div class="col-12 col-lg-6 col-md-6">
                          <div class="service-item hover-box-shadow bora-8 p-24 bg-white box-shadow h-100"><a class="service-item-main flex-item-center gap-30" href="service-research-analys.html">
                              <div class="heading"><i class="icon-coin-virus text-blue fs-48"></i></div>
                              <div class="desc">
                                <div class="heading7 hover-text-blue">Financial assessment</div>
                                <div class="body3 text-secondary mt-8">Rest assured with our robust security measures to protect your transactions and sensitive.</div>
                                <div class="explore-block flex-item-center gap-4 mt-8">
                                  <div class="text-button-small text-blue">Explore Plan</div><i class="ph-bold ph-caret-double-right fs-12 text-blue"></i>
                                </div>
                              </div></a>
                          </div>
                  </div>
                  <div class="col-12 col-lg-6 col-md-6">
                          <div class="service-item hover-box-shadow bora-8 p-24 bg-white box-shadow h-100"><a class="service-item-main flex-item-center gap-30" href="service-investment-advice.html">
                              <div class="heading"><i class="icon-hand-protect text-blue fs-48"></i></div>
                              <div class="desc">
                                <div class="heading7 hover-text-blue">Insurance advice</div>
                                <div class="body3 text-secondary mt-8">Rest assured with our robust security measures to protect your transactions and sensitive.</div>
                                <div class="explore-block flex-item-center gap-4 mt-8">
                                  <div class="text-button-small text-blue">Explore Plan</div><i class="ph-bold ph-caret-double-right fs-12 text-blue"></i>
                                </div>
                              </div></a>
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ServiceBlock;
