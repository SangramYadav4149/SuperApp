import React from "react";
import "./Info.css";
import img from "../../Assets/profileBig.png";
const Info = () => {
  const allCat = localStorage.getItem("chosenCategories");
  let userChosenCategory = allCat.split(",");
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  return (
    <section className="info-wrapper">
      <div className="info-container">
        <div className="img">
          <img src={img}></img>
        </div>
        <div className="user-info">
          <div className="container">
            <span className="name">{userInfo.name}</span>
            <span className="email">{userInfo.mail}</span>
            <span className="userName">{userInfo.userName}</span>
          </div>
          <div className="container-cate">
            {userChosenCategory.map((category, i) => {
              return (
                <span key={i} className="cate">
                  {category}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
