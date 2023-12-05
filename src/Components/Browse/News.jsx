import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";
import { getDate, getTime } from "../GetTimeAndDate/GetTimeAndDate";
const News = () => {
  const [news, setNews] = useState({});
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [randomNum, setRandomNum] = useState(Number);
  const fetchNewsApi = async () => {
    setRandomNum(Math.floor(Math.random() * 20));
    try {
      console.log("h");
      const response = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=211184dfa32942818f4dc8170bfa69f9"
      );

      setNews(response.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeAnddate = () => {
    setDate(getDate());
    setTime(getTime());
  };
  useEffect(() => {
    fetchNewsApi();
    getTimeAnddate();
  }, []);

  return (
    <section className="news-wrapper">
      <div className="news-container">
        <div className="news-img">
          <img
            src={
              news[randomNum]?.urlToImage
                ? news[randomNum]?.urlToImage
                : "https://drop.ndtv.com/homepage/images/breaking/modi_71568_ahtasham_1_Mainwindow_650x400.jpg"
            }
            alt=""
          />
        </div>
        <div className="some-desc">
          <span className="sm-title">
            {news[randomNum]?.title
              ? news[randomNum]?.title
              : "Don't Vent Frustration In Parliament PM's Dig At Congress On Poll Show - NDTV"}
          </span>
          <div className="news-time-date">
            <span className="news-time">{date}</span>
            <span className="line"></span>
            <span className="news-date">{time}</span>
          </div>
        </div>
        <div className="full-desc">
          {news[0]?.content
            ? news[0].content
            : "On 3rd December, we celebrated the International Day of Persons with Disabilities as chosen by the United Nations to observe all over the world. As more malls and cinema theatres are becoming more … [+5631 chars]"}
        </div>
      </div>
    </section>
  );
};

export default News;
