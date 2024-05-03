import React from "react";

function Header() {
  return (
    <div id="header">
      <div class="top-nav style-two bg-dark-blue">
        <div class="container flex-between h-44">
          <div class="left-block flex-item-center">
            <select
              class="border-none outline-none bg-dark-blue text-white pr-8 caption2"
              name="languge"
            >
              <option value="English">English</option>
              <option value="France">Tiếng Việt</option>
              <option value="Espana">Chinese</option>
            </select>
          </div>
          <div class="right-block flex-item-center gap-20">
            <div class="location flex-item-center">
              <i class="ph-light ph-map-pin text-white fs-20"></i>
              <span class="ml-8 caption2 text-white">
                270 Chien Thang, Ha Dong, Ha Noi
              </span>
            </div>
            <div class="mail flex-item-center">
              <i class="ph-light ph-phone text-white fs-20"></i>
              <span class="ml-8 caption2 text-white">0868 489 997</span>
            </div>
          </div>
        </div>
      </div>
      <div class="style-subpage style-home-two">
        <div class="header-menu style-one bg-white">
          <div class="container flex-between h-80">
            <a class="menu-left-block" href="">
              <img
                class="menu-logo"
                src="./assets/images/Logo.svg"
                alt="logo"
              />
              <img
                class="menu-logo display-none"
                src="assets/images/Logo.svg"
                alt="logo"
              />
            </a>
            <div class="menu-center-block h-100">
              <ul class="menu-nav flex-item-center h-100">
                <li class="nav-item h-100 flex-center home">
                  <a class="nav-link" href="#!">
                    Home <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item active">
                      <a class="sub-nav-link" href="index.html">
                        Payment Solution
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="home2.html">
                        Financial Planning
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="home3.html">
                        Online Banking
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="home4.html">
                        Personal Finance
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="home5.html">
                        Cryptocurrency Financial
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="home6.html">
                        Blockchain
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item h-100 flex-center about">
                  <a class="nav-link" href="#!">
                    About <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="about-one.html">
                        About Style 1
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="about-two.html">
                        About Style 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item h-100 flex-center services">
                  <a class="nav-link" href="#!">
                    Services <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="service-one.html">
                        Service Style 1
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="service-two.html">
                        Service Style 2
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="service-detail.html">
                        Services Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item h-100 flex-center case">
                  <a class="nav-link" href="#!">
                    Case Studies <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="case-studies-one.html">
                        Case Studies 1
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="case-studies-two.html">
                        Case Studies 2
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="case-studies-detail.html">
                        Case Studies Detail
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item h-100 flex-center pages">
                  <a class="nav-link" href="#!">
                    Pages <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="faqs.html">
                        FAQs
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="pricing.html">
                        Pricing
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="partners.html">
                        Partners
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item h-100 flex-center blog">
                  <a class="nav-link" href="#!">
                    Blog <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="blog-list-one.html">
                        Blog List 1
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="blog-list-two.html">
                        Blog List 2
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="blog-grid.html">
                        Blog Grid
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="blog-masonry.html">
                        Blog Masonry
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="blog-detail-one.html">
                        Blog Detail 1
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="blog-detail-two.html">
                        Blog Detail 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item h-100 flex-center contact">
                  <a class="nav-link" href="#!">
                    Contact <i class="ph ph-caret-down fs-14"></i>
                  </a>
                  <ul class="sub-nav hidden">
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="contact-one.html">
                        Contact Style 1
                      </a>
                    </li>
                    <li class="sub-nav-item">
                      {" "}
                      <a class="sub-nav-link" href="contact-two.html">
                        Contact Style 2
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="menu-right-block flex-item-center gap-12">
              <div class="text-button-small display-none">Follow Us</div>
              <div class="list-social flex-item-center gap-10 style-two">
                <a
                  class="item bora-50 w-28 h-28 border-grey-1px flex-center"
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <i class="icon-facebook fs-12 icon-on-surface"></i>
                </a>
                <a
                  class="item bora-50 w-28 h-28 border-grey-1px flex-center"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <i class="icon-in fs-12 icon-on-surface ml-2"></i>
                </a>
                <a
                  class="item bora-50 w-28 h-28 border-grey-1px flex-center"
                  href="https://www.twitter.com/"
                  target="_blank"
                >
                  <i class="icon-twitter fs-10 icon-on-surface"></i>
                </a>
                <a
                  class="item bora-50 w-28 h-28 border-grey-1px flex-center"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <i class="icon-insta fs-10 icon-on-surface"></i>
                </a>
                <a
                  class="item bora-50 w-28 h-28 border-grey-1px flex-center"
                  href="https://www.youtube.com/"
                  target="_blank"
                >
                  <i class="icon-youtube fs-10 icon-on-surface"></i>
                </a>
              </div>
              <div class="menu-humburger display-none pointer">
                <i class="ph-bold ph-list"></i>
              </div>
            </div>
          </div>
          <div id="menu-mobile-block">
            <div class="menu-mobile-main">
              <div class="container">
                <ul class="menu-nav-mobile h-100 pt-4 pb-4">
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-8 pb-8 pl-12 pr-12 pointer home">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      Home <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8 active">
                        <a class="sub-nav-link fs-14" href="index.html">
                          Payment Solution
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="home2.html">
                          Financial Planning
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="home3.html">
                          Online Banking
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="home4.html">
                          Personal Finance
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="home5.html">
                          Cryptocurrency Financial
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="home6.html">
                          Blockchain
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer about">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      About <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a class="sub-nav-link fs-14" href="about-one.html">
                          About Style 1
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="about-two.html">
                          About Style 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer services">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      Services <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a class="sub-nav-link fs-14" href="service-one.html">
                          Service Style 1
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="service-two.html">
                          Service Style 2
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a
                          class="sub-nav-link fs-14"
                          href="service-detail.html"
                        >
                          Services Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer case">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      Case Studies <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a
                          class="sub-nav-link fs-14"
                          href="case-studies-one.html"
                        >
                          Case Studies 1
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a
                          class="sub-nav-link fs-14"
                          href="case-studies-two.html"
                        >
                          Case Studies 2
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a
                          class="sub-nav-link fs-14"
                          href="case-studies-detail.html"
                        >
                          Case Studies Detail
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer pages">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      Pages <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a class="sub-nav-link fs-14" href="faqs.html">
                          FAQs
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="pricing.html">
                          Pricing
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="partners.html">
                          Partners
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer blog">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      Blog <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a class="sub-nav-link fs-14" href="blog-list-one.html">
                          Blog List 1
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="blog-list-two.html">
                          Blog List 2
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a class="sub-nav-link fs-14" href="blog-grid.html">
                          Blog Grid
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="blog-masonry.html">
                          Blog Masonry
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a
                          class="sub-nav-link fs-14"
                          href="blog-detail-one.html"
                        >
                          Blog Detail 1
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a
                          class="sub-nav-link fs-14"
                          href="blog-detail-two.html"
                        >
                          Blog Detail 2
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item-mobile h-100 flex-column gap-8 pt-4 pb-8 pl-12 pr-12 pointer contact">
                    <a class="fs-14 nav-link-mobile" href="#!">
                      Contact <i class="ph-fill ph-caret-down fs-12"></i>
                    </a>
                    <ul class="sub-nav-mobile">
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        <a class="sub-nav-link fs-14" href="contact-one.html">
                          Contact Style 1
                        </a>
                      </li>
                      <li class="sub-nav-item pl-12 pr-12 pt-8 pb-8">
                        {" "}
                        <a class="sub-nav-link fs-14" href="contact-two.html">
                          Contact Style 2
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
