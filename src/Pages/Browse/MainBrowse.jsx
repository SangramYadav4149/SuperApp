import React from "react";
import "./mainBrowse.css";
import News from "../../Components/Browse/News";
import Info from "../../Components/Browse/Info";
import Wheather from "../../Components/Browse/Wheather";
const MainBrowse = () => {
  return (
    <section className="main-brwose-wrapper">
      <div className="browse-container grid">
        <div className="info">
          <Info />
        </div>
        <div className="news">
          <News />
        </div>
        <div className="wheather">
          <Wheather />
        </div>
      </div>
    </section>
  );
};

export default MainBrowse;
