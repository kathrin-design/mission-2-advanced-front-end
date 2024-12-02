import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./course.css";
import FullStar from "../../assets/full-star.png";
import HalfStar from "../../assets/half-star.png";
import BlankStar from "../../assets/blank-star.png";

const Course = ({ card, avatar, classCard }) => {
  const navigate = useNavigate();

  return (
    <Link
      to="/detail-produk"
      className={`p-3 d-flex flex-column bg-white border rounded-3 ${classCard} text-decoration-none course`}
    >
      <img
        className="rounded-3"
        src={card}
        alt="Course"
        onClick={() => navigate("/video")}
      />

      <div className="d-flex flex-column mt-3">
        <p className="poppins text-black fs-6 fw-bold text-truncate">
          Big 4 Auditor Financial Analyst
        </p>
        <div className="text-secondary fw-semibold DM_Sans text-truncate">
          Mulai transformasi dengan instruktur profesional, harga yang
          terjangkau, dan kurikulum terbaik
        </div>
      </div>

      <div className="d-flex flex-row align-items-center mt-3">
        <img
          className="tutor-avatar rounded-circle me-2"
          src={avatar}
          alt="Tutor"
        />
        <div className="d-flex flex-column w-100">
          <div className="text-dark fw-semibold DM_Sans text-truncate">
            Jenna Ortega
          </div>
          <div className="text-secondary DM_Sans fs-6 d-flex flex-wrap">
            <p className="m-0">Senior Accountant</p>
            <p className="mx-1 m-0">di</p>
            <p className="fw-bold m-0">Gojek</p>
          </div>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-between align-items-center mt-3">
        <div className="d-flex flex-row align-items-center">
          <div className="d-flex flex-row me-2">
            <img className="h-auto" src={FullStar} alt="Full Star" />
            <img className="h-auto" src={FullStar} alt="Full Star" />
            <img className="h-auto" src={HalfStar} alt="Half Star" />
            <img className="h-auto" src={BlankStar} alt="Blank Star" />
            <img className="h-auto" src={BlankStar} alt="Blank Star" />
          </div>
          <div className="text-secondary fs-6 DM_Sans text-decoration-underline">
            3.5 (86)
          </div>
        </div>
        <h4 className="price m-0 fs-5">Rp 300K</h4>
      </div>
    </Link>
  );
};

export default Course;
