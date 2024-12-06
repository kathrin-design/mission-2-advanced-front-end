import React from "react";
import Header from "../components/header/Header";
import HeroCard from "../components/hero-card/HeroCard";
import ClosingCard from "../components/closing-card/ClosingCard";
import Footer from "../components/footer/Footer";
import "../index.css";
import Courses from "../components/course/Courses";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-100 d-flex flex-column">
        <HeroCard />
        <Courses />
        <ClosingCard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
