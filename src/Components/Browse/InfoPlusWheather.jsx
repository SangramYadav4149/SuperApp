import React, { useState, useEffect } from "react";
import img from "../../Assets/profileBig.png";
import axios from "axios";
import { RiThunderstormsLine } from "react-icons/ri";
import { FaTemperatureQuarter } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import "./InfoPlusWheather.css";
import { getDate, getTime } from "../GetTimeAndDate/GetTimeAndDate";
const InfoPlusWheather = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [wheather, setWheather] = useState({});

  const getTimeAndDate = () => {
    setDate(getDate());
    setTime(getTime());
  };

  const fetchNewsApi = async () => {
    const options = {
      method: "GET",
      url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
      params: { city: "Seattle" },
      headers: {
        "X-RapidAPI-Key": "dc0fe48133msh619302a09a0f360p16a12bjsn7f5462bf837b",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setWheather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNewsApi();
    getTimeAndDate();
  }, []);
  return (
    <section className="info-wheather-wrapper">
      <div className="info-wrapper-container">
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
      </div>
      <div className="info-wheather-wrapper">
        <div className="wheather-wrapper">
          <div className="wheather-container">
            <div className="time-date">
              <span className="date">{date}</span>
              <span className="time">{time}</span>
            </div>
            <div className="w-info">
              <div className="box">
                <span>
                  <RiThunderstormsLine size={40} />
                </span>
                <span>Heavy rain</span>
              </div>
              <div className="line"></div>
              <div className="box">
                <span className="cel">
                  {wheather.temp ? wheather.temp : "24"} *c
                </span>
                <span>
                  {" "}
                  <FaTemperatureQuarter size={20} />
                  1010mbr pressure
                </span>
              </div>
              <div className="line"></div>
              <div className="box">
                <span className="wind">
                  {wheather.wind_degrees ? wheather.wind_degrees : "3.7"} km/h
                  wind <FaWind size={20} />
                </span>
                <span className="humi">
                  Humidity {wheather.humidity ? wheather.humidity : 50}%
                  <WiHumidity size={40} />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoPlusWheather;
