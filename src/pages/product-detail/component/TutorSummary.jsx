import React from "react";
import Avatar1 from "../../../assets/img_avatar_8.jpg";
import Avatar2 from "../../../assets/img_avatar_9.jpg";

const TutorSummary = ({ title, as1, at1, as2, at2 }) => {
  return (
    <div className="border rounded-3 bg-white p-3">
      <p className="text-black fs-5 fw-semibold">{title}</p>
      <div className="d-flex flex-row gap-3">
        <div className="border rounded-3 p-3">
          <div className="d-flex flex-row align-items-center mb-3">
            <img src={Avatar1} alt="avatar" className="tutor-avatar" />
            <span className="ms-2">
              <p className="text-black fw-medium m-0">
                Gregorius Edrik Lawanto
              </p>
              <p className="text-secondary m-0">
                {as1}{" "}
                <span className="text-secondary-emphasis fw-medium">{at1}</span>
              </p>
            </span>
          </div>
          <p className="text-black fs-6">
            Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
            sebagai Senior Talent Acquisition Specialist di Wings Group
            Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
          </p>
        </div>
        <div className="border rounded-3 p-3">
          <div className="d-flex flex-row align-items-center mb-3">
            <img src={Avatar2} alt="avatar" className="tutor-avatar" />
            <span className="ms-2">
              <p className="text-black fw-medium m-0">
                Gregorius Edrik Lawanto
              </p>
              <p className="text-secondary m-0">
                {as2}{" "}
                <span className="text-secondary-emphasis fw-medium">{at2}</span>
              </p>
            </span>
          </div>
          <p className="text-black m-0">
            Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
            sebagai Senior Talent Acquisition Specialist di Wings Group
            Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TutorSummary;
