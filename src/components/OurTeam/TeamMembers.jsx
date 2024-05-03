import React from 'react';

function TeamMember({ name, position, imageSrc, socialLinks }) {
  return (
    <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6">
      <div className="bg-img w-100">
        <img className="w-100 h-100 display-block" src={imageSrc} alt="" />
        <div className="list-social bg-white">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank"><i className={`${link.icon} fs-14`}></i></a>
          ))}
        </div>
      </div>
      <div className="infor text-center pt-16">
        <div className="name heading6">{name}</div>
        <div className="caption1 text-secondary">{position}</div>
      </div>
    </div>
  );
}

export default TeamMember;
