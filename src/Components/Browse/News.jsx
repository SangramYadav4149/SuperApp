import React from "react";
import "./News.css";
import axios from "axios";
const News = () => {
  const fetchNews = async () => {};
  fetchNews();

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
          <span>Want to climb Mount Everest ?</span>
          <div className="news-time-date">
            <span>2-20-2023</span>
            <span className="line"></span>
            <span>7:35PM</span>
          </div>
        </div>
        <div className="full-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi
          sint eligendi quos atque maiores animi aspernatur itaque perferendis
          architecto Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aperiam nisi.
        </div>
      </div>
    </section>
  );
};

export default News;
