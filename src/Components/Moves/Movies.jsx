import React, { useEffect, useState } from "react";
import profileImage from "../../Assets/profileSmall.png";
import "./Movies.css";
import axios from "axios";
import { data } from "../imges/Images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const [moviesData, setMoviesData] = useState([]);
  const navigate = useNavigate();
  const allCat = localStorage.getItem("chosenCategories");
  let userChosenCategory = allCat.split(",");

  const handleRedirectToBrowse2page = () => {
    navigate("/Browse2");
  };
  const fetchMovieApi = async (cat) => {
    let code = undefined;

    const catCode = (cat) => {
      if (cat === "Action") return 28;
      if (cat === "Horror") return 27;
      if (cat === "Music") return 10402;
      if (cat === "Western ") return 37;
      if (cat === "Thriller") return 53;
      if (cat === "Romance") return 10749;
      if (cat === "Fantasy") return 14;
      if (cat === "Fiction") return 9648;
    };
    code = catCode(cat);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=bf7efa53008292b92f96c142d3ce2f70&language=en-US&sort_by=release_date.desc&page=1&with_genres=${code}`
      );

      return response.data.results.slice(1, 5);
    } catch (error) {
      console.log(error);
    }
  };

  const getMovie = async (val) => {
    setMoviesData(await Promise.all(val.map((v) => fetchMovieApi(v))));
  };

  useEffect(() => {
    getMovie(userChosenCategory);
  }, []);

  return (
    <section className="movies-wrapper">
      <div className="movies-header">
        <span>Super app</span>{" "}
        <img
          onClick={() => handleRedirectToBrowse2page()}
          src={profileImage}
          alt=""
        />
      </div>
      <span className="movies-title">
        Entertainment according to your choice
      </span>
      <div className="img-box">
        {moviesData.length > 1 ? (
          moviesData.map((category, i) => {
            return (
              <div className="box">
                <span>{userChosenCategory[i]}</span>
                <div className="swiper-container">
                  {category.map(({ poster_path, backdrop_path }) => {
                    return (
                      <img
                        src={`https://image.tmdb.org/t/p/w500/${
                          poster_path ? poster_path : backdrop_path
                        }`}
                        alt=""
                      />
                    );
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <h2 className="loader">Loading....</h2>
        )}
      </div>
    </section>
  );
};

export default Movies;
