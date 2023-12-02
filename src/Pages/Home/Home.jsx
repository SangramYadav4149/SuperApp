import React from "react";
import Banner from "../../Components/Home/Banner";
import SignUp from "../../Components/Home/SignUp";
import "./Home.css";
const Home = () => {
  return (
    <section className="home-wrapper">
      <Banner></Banner>
      <SignUp></SignUp>
    </section>
  );
};

export default Home;
