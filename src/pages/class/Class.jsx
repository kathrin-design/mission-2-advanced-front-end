import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Sidebar from "../profile/Sidebar";
import ClassList from "./ClassList";
import classData from "../../data/classes";
import "./class.css";

const Class = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("semua");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const enteredClass = classData;

  const filteredClass =
    activeTab === "semua"
      ? enteredClass
      : activeTab === "sedang"
      ? enteredClass.filter(
          (joinClass) => joinClass.status.toLowerCase() === "sedang berjalan"
        )
      : enteredClass.filter(
          (joinClass) => joinClass.status.toLowerCase() === "selesai"
        );

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row g-4">
          <Sidebar
            title="Daftar Kelas"
            subtitle="Akses Materi Belajar dan Mulailah Meningkatkan Pengetahuan Anda!"
          />

          <div className="col-12 col-lg-9">
            <div className="border rounded-2 bg-white d-flex flex-column p-3 gap-3">
              <div className="w-100 d-flex flex-row justify-content-between gap-5 flex-wrap">
                <div className="d-flex flex-row gap-4">
                  <div
                    className={`d-flex flex-column gap-2 cursor-pointer ${
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
                    {activeTab === "semua" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>

                  <div
                    className={`d-flex flex-column gap-2 cursor-pointer ${
                      activeTab === "sedang" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("sedang")}
                  >
                    <div
                      className={`fs-6 fw-medium ${
                        activeTab === "sedang" ? "text-red" : "text-secondary"
                      }`}
                    >
                      Sedang Berjalan
                    </div>
                    {activeTab === "sedang" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>

                  <div
                    className={`d-flex flex-column gap-2 cursor-pointer ${
                      activeTab === "selesai" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("selesai")}
                  >
                    <div
                      className={`fs-6 fw-medium ${
                        activeTab === "selesai" ? "text-red" : "text-secondary"
                      }`}
                    >
                      Selesai
                    </div>
                    {activeTab === "selesai" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>
                </div>
                <div className="d-flex border rounded-2 align-items-center">
                  <input
                    id="class"
                    name="class"
                    type="text"
                    placeholder="Cari Kelas"
                    className="text-secondary fw-medium border-0 p-2 search-input"
                  />
                  <i className="fa-solid fa-magnifying-glass pe-2 cursor"></i>
                </div>
              </div>

              {filteredClass.length > 0 ? (
                filteredClass.map((joinClass) => (
                  <div key={joinClass.id}>
                    <ClassList
                      courseName={joinClass.name}
                      courseDescription={joinClass.description}
                      tutorName={joinClass.tutor.name}
                      tutorJobTitle={joinClass.tutor.jobTitle}
                      tutorCompany={joinClass.tutor.company}
                      modul={joinClass.modul}
                      status={
                        <p
                          className={`fs-6 fw-medium p-1 px-3 rounded-3 my-auto ${
                            joinClass.status === "Selesai"
                              ? "bg-order-selesai"
                              : "bg-warning-subtle text-warning"
                          }`}
                        >
                          {joinClass.status}
                        </p>
                      }
                      progress={
                        <div
                          className="progress w-100"
                          role="progressbar"
                          aria-label="Example with label"
                          aria-valuenow={joinClass.progress}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          <div
                            className="progress-bar"
                            style={{ width: `${joinClass.progress}%` }}
                          >
                            {joinClass.progress}%
                          </div>
                        </div>
                      }
                      button={
                        joinClass.status === "Selesai" ? (
                          <div className="d-flex flex-column flex-sm-row gap-2 w-100 w-md-auto mt-3 mt-md-0">
                            <button className="btn-second p-2 rounded-3 fw-semibold w-100 w-sm-auto">
                              Unduh Sertifikat
                            </button>
                            <button className="btn-first p-2 rounded-3 fw-semibold w-100 w-sm-auto">
                              Lihat Detail Kelas
                            </button>
                          </div>
                        ) : (
                          <div className="d-flex flex-column flex-sm-row gap-2 w-75 w-md-auto mt-3 mt-md-0">
                            <button
                              className="btn-first p-2 px-2 rounded-3 fw-semibold w-100 w-sm-auto"
                              onClick={() => navigate("video")}
                            >
                              Lanjutkan Pembelajaran
                            </button>
                          </div>
                        )
                      }
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-secondary">Tidak ada pesanan.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Class;
