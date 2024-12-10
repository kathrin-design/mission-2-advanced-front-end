import React from "react";
import "./hero-card.css";

const HeroCard = () => {
  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-center">
      <div className="hero py-5 rounded-3 border-0 d-flex flex-column justify-content-center align-items-center">
        <div className="w-75 text-center d-flex flex-column justify-content-center align-items-center">
          <h1 className="poppins fs-1 fw-bold text-white">
            Revolusi Pembelajaran: Temukan Ilmu Baru Melalui Platform Video
            Interaktif!
          </h1>
          <p className="my-2 fw-medium fs-6 text-white">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
            berpartisipasi dalam latihan interaktif yang akan meningkatkan
            pemahaman Anda.
          </p>
        </div>
        <div className="px-4">
          <button
            type="button"
            className="hero-btn fs-6 fw-bold text-white rounded-3 border-0 p-2 px-4"
          >
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
