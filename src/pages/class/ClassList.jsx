import React from "react";
import classCard1 from "../../assets/card-1.png";
import avatar1 from "../../assets/img_avatar_3.jpg";

const ClassList = ({ modul, status, progress, button }) => {
  return (
    <div className="border rounded-3 d-flex flex-column">
      <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
        <p className="text-black fs-6 fw-medium my-auto">
          {modul} / 12 Modul Terselesaikan
        </p>
        {status}
      </div>

      <div className="d-flex flex-row gap-4 p-3">
        <img
          src={classCard1}
          alt="class"
          className="rounded img-class img-fluid"
        />
        <div className="d-flex flex-column gap-1 w-100">
          <p className="text-dark fs-5 fw-bold m-0">
            Big 4 Auditor Financial Analyst
          </p>
          <p className="text-secondary m-0 fw-semibold">
            Mulai transformasi dengan instruktur profesional, harga yang
            terjangkau, dan kurikulum terbaik
          </p>
          <div className="d-flex flex-wrap align-items-center mt-2 gap-3">
            <img
              src={avatar1}
              alt="avatar"
              className="avatar rounded-4 img-fluid"
            />
            <div className="d-flex flex-column">
              <p className="text-dark fs-6 m-0 fw-semibold">Jenny Ortega</p>
              <p className="text-secondary fs-6 m-0 fw-medium">
                Senior Accountant di <span className="fw-semibold">Gojek</span>
              </p>
            </div>
          </div>
          <div className="d-flex flex-wrap gap-3 text-secondary fw-medium mt-2">
            <div className="d-flex flex-row gap-2">
              <i className="bi bi-journals"></i>
              12 Modul
            </div>
            <div className="d-flex flex-row gap-2">
              <i className="bi bi-clock"></i>
              360 Menit
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row p-3 border-top bg-default align-items-center gap-2 w-100">
        <p className="text-secondary mb-0 text-center text-md-start text-progress">
          Progres Kelas:
        </p>
        {progress}
        {button}
      </div>
    </div>
  );
};

export default ClassList;
