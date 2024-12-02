import React from "react";
import { useNavigate } from "react-router-dom";
import "./product-detail.css";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer";
import IntroductionToHR from "./IntroductionToHR";
import TutorAndRating from "./TutorAndRating";
import CourseDetail from "./CourseDetail";
import loginStore from "../../stores/useLoginStore";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = loginStore();

  return (
    <>
      <Header />
      <div className="container-fluid py-5 w-100 px-sm-5">
        <div className="row mb-4">
          <div className="col">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#" className="text-decoration-none text-secondary">
                    Beranda
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className="text-decoration-none text-secondary">
                    Desain
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-black"
                  aria-current="page"
                >
                  Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
                  Manager.
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-12">
            <div className="hero d-flex flex-column border border-dark p-4 rounded-3">
              <div className="px-sm-4 pb-2">
                <p className="poppins fs-4 fw-normal text-white text-start">
                  Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
                  Manager.
                </p>
                <p className="DM_Sans fw-medium fs-6 text-white text-start m-0">
                  Belajar bersama tutor profesional di Video Course.
                </p>
                <p className="DM_Sans fw-medium fs-6 text-white text-start m-0">
                  Kapanpun, di manapun.
                </p>
              </div>
              <div className="d-flex flex-row flex-wrap align-items-center px-sm-4 gap-2 pt-4">
                <i className="fa-solid fa-star fa-lg text-warning"></i>
                <i className="fa-solid fa-star fa-lg text-warning"></i>
                <i className="fa-regular fa-star-half-stroke fa-lg text-warning"></i>
                <i className="fa-regular fa-star fa-lg text-warning"></i>
                <i className="fa-regular fa-star fa-lg text-warning"></i>
                <span className="text-white text-decoration-underline ms-2">
                  3.5 (86)
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row gx-4">
          <div className="col-lg-8 d-flex flex-column gap-3">
            <div className="border rounded-3 bg-white p-3">
              <p className="text-black fs-5 fw-semibold">Deskripsi</p>
              <p className="text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. ...
              </p>
            </div>
            <TutorAndRating
              title="Belajar bersama Tutor Profesional"
              as1="Senior Talent Aquisition di"
              at1="WingsGroup"
              as2="Senior Talent Aquisition di"
              at2="WingsGroup"
            />
            <div className="border rounded-3 bg-white p-3">
              <p className="text-black fs-5 fw-semibold m-0">
                Kamu akan Mempelajari
              </p>
              <IntroductionToHR />
              <IntroductionToHR />
              <IntroductionToHR />
            </div>
            <TutorAndRating
              title="Rating dan Review"
              as1="Alumni Batch 2"
              at1=""
              as2="Alumni Batch 4"
              at2=""
            />
          </div>

          <CourseDetail className="col-lg-4"
            button={
              <div className="d-flex flex-column gap-2 mt-3">
                {isLoggedIn ? (
                  <button
                    className="btn btn-first"
                    onClick={() => navigate("/login")}
                  >
                    Beli Sekarang
                  </button>
                ) : (
                  <button
                    className="btn btn-first"
                    onClick={() => navigate("metode-pembayaran")}
                  >
                    Beli Sekarang
                  </button>
                )}
                <button className="btn btn-second">Bagikan Kelas</button>
              </div>
            }
          />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductDetail;