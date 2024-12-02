import React from "react";

const CourseDetail = ({ button, className }) => {
  return (
    <div className={`col-12  ${className}`}>
            <div className="border rounded-2 bg-white p-3">
              <p className="text-black fs-5 fw-semibold">
                Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
                Manager.
              </p>
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex">
                  <div className="green fs-5 pe-2">Rp 250K</div>
                  <div className="text-secondary text-decoration-line-through fs-5">
                    Rp 500K
                  </div>
                </div>
                <div className="bg-warning text-white rounded-4 px-2 d-flex align-items-center">
                  Diskon 50%
                </div>
              </div>
              <p className="text-primary fw-medium mt-2">
                Penawaran spesial tersisa 2 hari lagi!
              </p>
              {button}
              <div className="mt-4">
                <p className="text-black fw-semibold">
                  Kelas Ini Sudah Termasuk:
                </p>
                <div className="d-flex flex-wrap">
                  <div className="me-3 text-secondary">
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-file-circle-check"></i> Ujian
                      Akhir
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-book"></i> 7 Dokumen
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <i className="fa-solid fa-file-pen"></i> Pretest
                    </div>
                  </div>
                  <div className="ps-5 text-secondary">
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

export default CourseDetail;