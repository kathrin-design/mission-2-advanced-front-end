import React from "react";
import Header from "../../components/header/Header";
import HeroSection from "../home/component/HeroSection";
import Courses from "../../components/course/Courses";
import NewsletterSection from "../home/component/NewsletterSection";
import Footer from "../../components/footer/Footer";
import "../../index.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Courses />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
};

export default Home;
