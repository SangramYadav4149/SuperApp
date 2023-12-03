import React from "react";
import "./Info.css";
import img from "../../Assets/profileBig.png";
const Info = () => {
  const userInfo = localStorage.getItem("userInfo");
  return (
    <section className="info-wrapper">
      <div className="info-container">
        <div className="img">
          <img src={img}></img>
        </div>
        <div className="user-info">
          <div className="container">
            <span className="name">Rishieksh ghosh</span>
            <span className="email">rishikeshghosh@gmail.com</span>
            <span className="userName">Rishikeh</span>
          </div>
          <div className="container-cate">
            <span className="cate">Horror</span>
            <span className="cate">Thirler</span>
            <span className="cate">Action</span>
            <span className="cate">Fiction</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
