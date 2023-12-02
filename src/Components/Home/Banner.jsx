import React from "react";
import bannerImg from "../../Assets/page1_bg.png";
import "./Banner.css";
const Banner = () => {
  return (
    <section className="banner-wrapper">
      <div className="banner-img">
        <h2 className="banner-title">Discover new things on SuperApp</h2>
        <img src={bannerImg} alt="" />
      </div>
    </section>
  );
};

export default Banner;
