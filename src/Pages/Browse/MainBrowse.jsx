import React from "react";
import { useNavigate } from "react-router-dom";
import "./mainBrowse.css";
import News from "../../Components/Browse/News";
import Info from "../../Components/Browse/Info";
import Wheather from "../../Components/Browse/Wheather";
import { FaArrowRightLong } from "react-icons/fa6";
const MainBrowse = () => {
  const navigate = useNavigate();
  const handleNavigateTonextpage = () => {
    navigate("/Browse2");
  };
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
        <button
          onClick={() => handleNavigateTonextpage()}
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            columnGap: "0.5rem",
            padding: "0.8rem 2rem",
            position: "absolute",
            right: "2rem",
            top: "75%",
            backgroundColor: "green",
            color: "white",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Next <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default MainBrowse;
