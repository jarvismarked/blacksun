import React from "react";
import TeamMember from "./TeamMembers";
import "./OurTeamBlock.css";

function OurTeamBlock() {
  return (
    <div className="our-team-block pt-100 bg-white">
      <div className="container">
        <div className="heading-block">
          <div className="heading3">Who We Are</div>
        </div>
        <div className="list-member mt-40 row row-gap-32">
          <TeamMember
            name="Jarvis Nguyen, CFA"
            position="CEO & Founder"
            imageSrc="assets/images/member/CEO.JPG"
            socialLinks={[
              { url: "http://facebook.com", icon: "icon-facebook" },
              { url: "http://linkedin.com", icon: "icon-in" },
              { url: "http://twitter.com", icon: "icon-twitter" },
              { url: "http://instagram.com", icon: "icon-insta" },
            ]}
         
          />
          <TeamMember
            name="Duong Nguyen, ACCA"
            position="CFO & Co-Founder"
            imageSrc="assets/images/member/duong.jpg"
            socialLinks={[
              { url: "http://facebook.com", icon: "icon-facebook" },
              { url: "http://linkedin.com", icon: "icon-in" },
              { url: "http://twitter.com", icon: "icon-twitter" },
              { url: "http://instagram.com", icon: "icon-insta" },
            ]}
          />
          {/* Other TeamMembers */}
        </div>
      </div>
    </div>
  );
}

export default OurTeamBlock;
