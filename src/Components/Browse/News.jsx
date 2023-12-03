import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
import { getDate, getTime } from "../GetTimeAndDate/GetTimeAndDate";
const News = () => {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const getTimeAnddate = () => {
    setDate(getDate());
    setTime(getTime());
  };
  useEffect(() => {
    getTimeAnddate();
  }, []);

  //https://images.indianexpress.com/2023/05/Yaashi-singh.jpg
  return (
    <section className="news-wrapper">
      <div className="news-container">
        <div className="news-img">
          <img
            src="https://images.indianexpress.com/2023/05/Yaashi-singh.jpg"
            alt=""
          />
        </div>
        <div className="some-desc">
          <span className="sm-title">Want to climb Mount Everest ?</span>
          <div className="news-time-date">
            <span className="news-time">{date}</span>
            <span className="line"></span>
            <span className="news-date">{time}</span>
          </div>
        </div>
        <div className="full-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi
          sint eligendi quos atque maiores animi aspernatur itaque perferendis
          architecto Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam nisi Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam nisi sint eligendi quos atque maiores animi aspernatur itaque
          perferendis architecto Lorem ipsum dolor sit amet consectetur
          adipisicing.
        </div>
      </div>
    </section>
  );
};

export default News;
