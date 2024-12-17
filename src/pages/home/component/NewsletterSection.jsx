import React from "react";
import "../home.css";

const NewsletterSection = () => {
  return (
    <div className="my-5 d-flex flex-column justify-content-center align-items-center">
      <div className="closing w-100 px-1 mx-2 d-flex flex-column justify-content-center align-items-center rounded-3 pb-2">
        <div className="w-md-50 px-2 py-4">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p className="text-secondary fs-6 fw-bold text-center">
              NEWSLETTER
            </p>
            <div>
              <h3 className="poppins text-white text-center">
                Mau Belajar Lebih Banyak?
              </h3>
              <p className=" text-white text-center">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan
                penawaran spesial dari program-program terbaik hariesok.id
              </p>
            </div>
          </div>
          <div className="w-100 p-2 bg-white rounded-3 d-flex flex-row justify-content-between align-items-center">
            <div className="w-100 mx-2">
              <input
                className="d-flex form-control border-0"
                type="email"
                placeholder="Masukkan Emailmu"
              />
            </div>
            <div className="subscribe-btn mx-2 pe-auto">
              <button className="rounded-2 fw-medium" type="submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
