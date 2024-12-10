import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./course.css";
import FullStar from "../../assets/full-star.png";
import HalfStar from "../../assets/half-star.png";
import BlankStar from "../../assets/blank-star.png";
import courses from "../../data/courses";

const Courses = () => {
  const [activeTab, setActiveTab] = useState("semua");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredCourses =
    activeTab === "semua"
      ? courses
      : activeTab === "pemasaran"
      ? courses.filter((course) => course.field.toLowerCase() === "pemasaran")
      : activeTab === "desain"
      ? courses.filter((course) => course.field.toLowerCase() === "desain")
      : activeTab === "pemrograman"
      ? courses.filter((course) => course.field.toLowerCase() === "pemrograman")
      : courses.filter((course) => course.field.toLowerCase() === "bisnis");

  return (
    <>
      <div className="d-flex flex-column w-100 mt-4">
        <div className="d-flex flex-column">
          <p className="text-start fw-semibold fs-4 poppins text-dark mb-1">
            Koleksi Video Pembelajaran Unggulan
          </p>
          <p className="text-start text-secondary fw-medium">
            Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
          </p>
        </div>

        <div className="d-flex flex-sm-row flex-wrap mb-2 gap-1">
          <div
            className={`d-flex flex-column gap-2 cursor-pointer pe-4 ${
              activeTab === "semua" ? "active" : ""
            }`}
            onClick={() => handleTabClick("semua")}
          >
            <div
              className={`tab-text fs-6 fw-medium ${
                activeTab === "semua" ? "text-red" : "text-secondary"
              }`}
            >
              Semua Kelas
            </div>
            {activeTab === "semua" && <div className="tab-indicator"></div>}
          </div>

          <div
            className={`d-flex flex-column gap-2 cursor-pointer pe-4 ${
              activeTab === "pemasaran" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pemasaran")}
          >
            <div
              className={`fs-6 fw-medium ${
                activeTab === "pemasaran" ? "text-red" : "text-secondary"
              }`}
            >
              Pemasaran
            </div>
            {activeTab === "pemasaran" && <div className="tab-indicator"></div>}
          </div>

          <div
            className={`d-flex flex-column gap-2 cursor-pointer pe-4 ${
              activeTab === "desain" ? "active" : ""
            }`}
            onClick={() => handleTabClick("desain")}
          >
            <div
              className={`fs-6 fw-medium ${
                activeTab === "desain" ? "text-red" : "text-secondary"
              }`}
            >
              Desain
            </div>
            {activeTab === "desain" && <div className="tab-indicator"></div>}
          </div>

          <div
            className={`d-flex flex-column gap-2 cursor-pointer pe-4 ${
              activeTab === "pemrograman" ? "active" : ""
            }`}
            onClick={() => handleTabClick("pemrograman")}
          >
            <div
              className={`fs-6 fw-medium ${
                activeTab === "pemrograman" ? "text-red" : "text-secondary"
              }`}
            >
              Digital & Teknologi
            </div>
            {activeTab === "pemrograman" && (
              <div className="tab-indicator"></div>
            )}
          </div>

          <div
            className={`d-flex flex-column gap-2 cursor-pointer ${
              activeTab === "Bisnis" ? "active" : ""
            }`}
            onClick={() => handleTabClick("Bisnis")}
          >
            <div
              className={`fs-6 fw-medium ${
                activeTab === "Bisnis" ? "text-red" : "text-secondary"
              }`}
            >
              Bisnis Manajemen
            </div>
            {activeTab === "Bisnis" && <div className="tab-indicator"></div>}
          </div>
        </div>
      </div>

      <div className="course-container d-flex flex-wrap gap-3">
        {filteredCourses.map((course, index) => (
          <Link
            key={index}
            to="/detail-produk"
            state={{ course }}
            className="p-3 d-flex flex-column bg-white border rounded-3 text-decoration-none course m-auto"
            data-course-id={course.id}
          >
            <img className="rounded-3" src={course.image} alt="Course" />

            <div className="d-flex flex-column mt-3">
              <p className="poppins text-black fs-6 fw-bold text-truncate">
                {course.name}
              </p>
              <div className="course-description text-secondary fw-normal overflow-auto">
                {course.description}
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mt-3">
              <img
                className="tutor-avatar rounded-circle me-2"
                src={course.tutor.image}
                alt="Tutor"
              />
              <div className="d-flex flex-column w-100">
                <div className="text-dark fw-semibold text-truncate">
                  {course.tutor.name}
                </div>
                <div className="text-secondary fs-6 d-flex flex-wrap">
                  <p className="m-0">{course.tutor.jobTitle}</p>
                  <p className="m-0">
                    di{" "}
                    <span className="text-secondary-emphasis fw-medium">
                      {course.tutor.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between align-items-center mt-3">
              <div className="d-flex flex-row align-items-center">
                <div className="d-flex flex-row me-2">
                  {[...Array(5)].map((_, i) => {
                    if (i < Math.floor(course.rating.stars)) {
                      return (
                        <img
                          key={i}
                          className="h-auto"
                          src={FullStar}
                          alt="Full Star"
                        />
                      );
                    } else if (i < Math.ceil(course.rating.stars)) {
                      return (
                        <img
                          key={i}
                          className="h-auto"
                          src={HalfStar}
                          alt="Half Star"
                        />
                      );
                    } else {
                      return (
                        <img
                          key={i}
                          className="h-auto"
                          src={BlankStar}
                          alt="Blank Star"
                        />
                      );
                    }
                  })}
                </div>
                <div className="text-secondary fs-6 text-decoration-underline">
                  {course.rating.stars} ({course.rating.count})
                </div>
              </div>
              <h4 className="price m-0 fs-5">Rp {course.price / 1000}K</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Courses;
