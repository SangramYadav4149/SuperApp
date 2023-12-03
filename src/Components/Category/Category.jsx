import React, { useEffect, useState } from "react";
import action from "../../Assets/action.png";
import drama from "../../Assets/drama.png";
import fantasy from "../../Assets/fantasy.png";
import fiction from "../../Assets/fiction.png";
import horror from "../../Assets/horror.png";
import music from "../../Assets/music.png";
import romance from "../../Assets/romance.png";
import thriller from "../../Assets/thriller.png";
import western from "../../Assets/western.png";
import { IoIosClose } from "react-icons/io";
import { IoIosWarning } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import "./Category.css";
import { useNavigate } from "react-router-dom";
const genres = [
  {
    id: "Action",
    color: "#FF5209",
    image: action,
  },
  {
    id: "Drama",
    color: "#D7A4FF",
    image: drama,
  },
  {
    id: "Fantasy",
    color: " #FF4ADE",
    image: fantasy,
  },
  {
    id: "Fiction",
    color: "#6CD061",
    image: fiction,
  },
  {
    id: "Horror",
    color: "#7358FF",
    image: horror,
  },
  {
    id: "Music",
    color: "#E61E32",
    image: music,
  },
  {
    id: "Romance",
    color: "#11B800",
    image: romance,
  },
  {
    id: "Thriller",
    color: "#84C2FF",
    image: thriller,
  },
  {
    id: "Western",
    color: "#912500",
    image: western,
  },
];
const Category = () => {
  const navigate = useNavigate();
  const [chosenCategories, setChosenCategories] = useState([]);
  const [notVaild, setNotValid] = useState(false);

  const handleNavigateNextPage = () => {
    if (chosenCategories.length < 3) {
      setNotValid(true);
    } else {
      navigate("/");
    }
  };

  const handleSelect = (id) => {
    if (chosenCategories.includes(id)) {
      const index = chosenCategories.indexOf(id);
      chosenCategories.splice(index, 1);
      setChosenCategories([...chosenCategories]);
    } else {
      setChosenCategories([...chosenCategories, id]);
    }
  };
  const FlexButtons = ({ id, chosenCategories, setChosenCategories }) => {
    return (
      <div className="buttons">
        <button>
          {id.toString()}{" "}
          <IoIosClose onClick={() => handleSelect(id)} size={30} />
        </button>
      </div>
    );
  };
  const GridCategories = ({
    id,
    color,
    image,
    chosenCategories,
    setChosenCategories,
  }) => {
    return (
      <div
        onClick={() => handleSelect(id)}
        style={{
          backgroundColor: color,
          border: `${
            chosenCategories.includes(id)
              ? "4px solid green"
              : "4px solid white"
          }`,
        }}
        className="map-container"
      >
        <h3 className="tag">{id}</h3>
        <img src={image} alt="img" />
      </div>
    );
  };

  return (
    <section className="category-wrapper">
      <div className="category-container">
        <div>
          <h2 className="brand-title">Super app</h2>
          <span className="side-title">
            Choose your <br /> entertainment <br /> category
          </span>
        </div>
        <div className="btn-sec-con">
          {chosenCategories.map((id) => {
            return (
              <FlexButtons
                id={id}
                chosenCategories={chosenCategories}
                setChosenCategories={setChosenCategories}
              />
            );
          })}
        </div>
        <div className="validate-cate">
          {notVaild ? (
            <span className="warn">
              <IoIosWarning color="red" size={30} /> Please choose at least 3
            </span>
          ) : null}
        </div>
      </div>
      <div className="all-category-map grid">
        {genres.map(({ id, color, image }) => {
          return (
            <GridCategories
              id={id}
              color={color}
              image={image}
              chosenCategories={chosenCategories}
              setChosenCategories={setChosenCategories}
            />
          );
        })}
      </div>
      <div className="next-btn">
        <button onClick={() => handleNavigateNextPage()}>
          Next page <FaArrowRightLong />
        </button>
      </div>
    </section>
  );
};

export default Category;
