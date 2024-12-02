import React from "react";
import Header from "../components/header/Header";
import HeroCard from "../components/hero-card/HeroCard";
import CourseHeader from "../components/course/CourseHeader";
import ClosingCard from "../components/closing-card/ClosingCard";
import Footer from "../components/Footer";
import "../index.css";
import CourseWrapper from "../components/course/CourseWrapper";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroCard />
        <CourseHeader />
        <CourseWrapper />
        <ClosingCard />
      </main>
      <Footer />
    </>
  );
};

export default Home;
