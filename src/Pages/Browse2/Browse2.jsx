import React from "react";
import "./Browse2.css";
import InfoPlusWheather from "../../Components/Browse/InfoPlusWheather";
import Notes from "../../Components/Browse/Notes";
import News from "../../Components/Browse/News";
import Timer from "../../Components/Browse/Timer";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const Browse2 = () => {
  const navigate = useNavigate();
  const handleNextPage = () => {
    navigate("/Movies");
  };
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

      <button onClick={() => handleNextPage()}>
        Next <FaArrowRightLong />
      </button>
    </section>
  );
};

export default Browse2;
