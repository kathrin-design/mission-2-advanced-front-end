import React from "react";
import { useLocation } from "react-router-dom";

const CourseSummary = ({ button, className, courseImage }) => {
  const location = useLocation();
  const { course } = location.state || {};

  if (!course) {
    return <div>No course data available</div>;
  }

  const originalPrice = 700000;

  return (
    <div className={`col-12  ${className}`}>
      <div className="border rounded-2 bg-white p-3">
        {courseImage}
        <p className="text-black fs-6 fw-medium">{course.description}</p>
        <div className="d-flex justify-content-between mt-2">
          <div className="d-flex">
            <div className="green fs-5 pe-2">Rp {course.price / 1000}K</div>
            <div className="text-secondary text-decoration-line-through fs-5">
              Rp {originalPrice / 1000}K
            </div>
          </div>
          <div className="bg-warning text-white rounded-3 d-flex align-items-center fw-medium px-sm-1">
            Diskon{" "}
            {(((originalPrice - course.price) / originalPrice) * 100).toFixed(
              0
            )}
            %
          </div>
        </div>
        <p className="text-primary fw-medium mt-2">
          Penawaran spesial tersisa 2 hari lagi!
        </p>
        {button}
        <div className="mt-4">
          <p className="text-black fw-semibold">Kelas Ini Sudah Termasuk:</p>
          <div className="d-flex flex-wrap">
            <div className="me-3 text-secondary">
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-file-circle-check"></i> Ujian Akhir
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-book"></i> 7 Dokumen
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-file-pen"></i> Pretest
              </div>
            </div>
            <div className="text-secondary">
              <div className="d-flex align-items-center gap-2">
                <i className="fa-solid fa-video"></i> 49 Video
              </div>
              <div className="d-flex align-items-center gap-2">
                <i className="fa-regular fa-file-lines"></i> Sertifikat
              </div>
            </div>
          </div>
        </div>
        <p className="text-black fw-semibold mt-3">Bahasa Pengantar</p>
        <div className="text-secondary">
          <i className="fa-solid fa-language me-2"></i> Bahasa Indonesia
        </div>
      </div>
    </div>
  );
};

export default CourseSummary;
