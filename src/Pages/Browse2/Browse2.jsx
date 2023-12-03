import React from "react";
import "./Browse2.css";
import InfoPlusWheather from "../../Components/Browse/InfoPlusWheather";
import Notes from "../../Components/Browse/Notes";
import News from "../../Components/Browse/News";
import Timer from "../../Components/Browse/Timer";
const Browse2 = () => {
  return (
    <section className="browse2-wrapper">
      <div className="browse2-container">
        <div className="info-plus-weather">
          <InfoPlusWheather />
        </div>

        <div className="note">
          <Notes />
        </div>
        <div className="news">
          <News />
        </div>
        <div className="timer">
          <Timer />
        </div>
      </div>
    </section>
  );
};

export default Browse2;
