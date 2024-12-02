import React from "react";

const CourseHeader = () => {
  return (
    <div className="d-flex flex-column w-100 mt-4">
      <div className="d-flex flex-column">
        <p className="text-start fw-semibold fs-4 poppins text-dark mb-1">
          Koleksi Video Pembelajaran Unggulan
        </p>
        <p className="text-start text-secondary fw-medium DM_Sans">
          Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
        </p>
      </div>
      <div className="mt-4 flex-lg-column">
        <div className="d-inline-block">
          <div className="pe-4">
            <p className="text-danger fw-medium">Semua Kelas</p>
          </div>
          <div className="rectangle"></div>
        </div>
        <div className="d-inline-block">
          <div className="pe-4">
            <p className="text-secondary DM_Sans fw-normal">Pemasaran</p>
          </div>
        </div>
        <div className="d-inline-block">
          <div className="pe-4">
            <p className="text-secondary DM_Sans fw-normal">Desain</p>
          </div>
        </div>
        <div className="d-inline-block">
          <div className="pe-4">
            <p className="text-secondary DM_Sans fw-normal">
              Pengembangan Diri
            </p>
          </div>
        </div>
        <div className="d-inline-block">
          <div className="pe-4">
            <p className="text-secondary DM_Sans fw-normal">Bisnis</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;
