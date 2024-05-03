import React from "react";

function Hero() {
  return (
    <div>
      <div class="slider-block style-two">
        <div class="slider-main">
          <div class="slider-item">
            <div class="container">
              <div class="text-content flex-columns-between row-gap-40">
                <div class="title">
                  <div className="heading2 animate__animated animate__fadeInUp animate__delay-0-2s">
                    Reach financial goals <br />
                    with our expert <br />
                    guidance & solutions
                  </div>

                  <div class="body2 text-secondary mt-16 animate__animated animate__fadeInUp animate__delay-0-5s">
                    Get personalized financial advice in Vietnamese Market.
                  </div>
                </div>
                <div class="button-block animate__animated animate__fadeInUp animate__delay-0-8s">
                  <input
                    class="body3 text-secondary"
                    type="text"
                    placeholder="Email"
                  />
                  <a
                    class="button-share display-inline-flex hover-bg-blue bg-on-surface text-white text-button pl-28 pr-28 pt-12 pb-12 bora-48 flex-item-center gap-8"
                    href="contact-two.html"
                  >
                    <i class="ph ph-arrow-right text-white"></i>
                    <span>Get started</span>
                  </a>
                </div>
              </div>
              <div class="slider-img animate__animated animate__fadeInRight animate__delay-0-2s">
                <div class="bg-main">
                  {" "}
                  <img
                    class="h-100 w-100"
                    src="assets/images/slider/slider22.png"
                    alt=""
                  />
                </div>
                <img
                  class="box-shadow"
                  src="assets/images/slider/subslider2-12.png"
                  alt=""
                />
                <img
                  class="box-shadow"
                  src="assets/images/slider/subslider2-22.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
