import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../profile/Sidebar";
import Footer from "../../components/footer/Footer";
import "./order.css";
import OrderList from "./OrderList";

const Order = () => {
  const location = useLocation();
  const { course } = location.state || {};

  const [activeTab, setActiveTab] = useState("semua");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const ordersData = [
    {
      id: 1,
      invoice: "12",
      status: "Berhasil",
    },
    {
      id: 2,
      invoice: "2",
      status: "Gagal",
    },
    {
      id: 3,
      invoice: "2",
      status: "Belum Bayar",
    },
    {
      id: 4,
      invoice: "10",
      status: "Berhasil",
    },
    {
      id: 5,
      invoice: "10",
      status: "Berhasil",
    },
  ];

  const filteredOrders =
    activeTab === "semua"
      ? ordersData
      : activeTab === "menunggu"
      ? ordersData.filter(
          (order) => order.status.toLowerCase() === "belum bayar"
        )
      : activeTab === "berhasil"
      ? ordersData.filter((order) => order.status.toLowerCase() === "berhasil")
      : ordersData.filter((order) => order.status.toLowerCase() === "gagal");

  return (
    <>
      <Header />
      <div className="container my-4">
        <div className="row g-4">
          <Sidebar
            title="Daftar Pesanan"
            subtitle="Informasi terperinci mengenai pembelian"
          />

          <div className="col-12 col-lg-9">
            <div className="border rounded-2 bg-white d-flex flex-column p-3 gap-3">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
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
                      Semua Pesanan
                    </div>
                    {activeTab === "semua" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>

                  <div
                    className={`d-flex flex-column gap-2 cursor-pointer ${
                      activeTab === "menunggu" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("menunggu")}
                  >
                    <div
                      className={`fs-6 fw-medium ${
                        activeTab === "menunggu" ? "text-red" : "text-secondary"
                      }`}
                    >
                      Menunggu
                    </div>
                    {activeTab === "menunggu" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>

                  <div
                    className={`d-flex flex-column gap-2 cursor-pointer ${
                      activeTab === "berhasil" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("berhasil")}
                  >
                    <div
                      className={`fs-6 fw-medium ${
                        activeTab === "berhasil" ? "text-red" : "text-secondary"
                      }`}
                    >
                      Berhasil
                    </div>
                    {activeTab === "berhasil" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>

                  <div
                    className={`d-flex flex-column gap-2 cursor-pointer ${
                      activeTab === "gagal" ? "active" : ""
                    }`}
                    onClick={() => handleTabClick("gagal")}
                  >
                    <div
                      className={`fs-6 fw-medium ${
                        activeTab === "gagal" ? "text-red" : "text-secondary"
                      }`}
                    >
                      Gagal
                    </div>
                    {activeTab === "gagal" && (
                      <div className="tab-indicator"></div>
                    )}
                  </div>
                </div>

                <div className="d-flex flex-row gap-2">
                  <div className="d-flex border rounded-2 align-items-center">
                    <input
                      type="text"
                      placeholder="Cari Kelas"
                      className="text-secondary fw-medium border-0 p-2 search-input"
                    />
                    <i className="fa-solid fa-magnifying-glass p-2"></i>
                  </div>
                  <div className="dropdown border rounded-2">
                    <button
                      className="btn btn-outline-secondary dropdown-toggle bg-white border-0 text-secondary px-4 d-flex align-items-center fw-medium"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Urutkan
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          className="dropdown-item  text-secondary text-center"
                          href="#"
                        >
                          Harga Terendah
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item  text-secondary text-center"
                          href="#"
                        >
                          Harga Tertinggi
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-secondary text-center"
                          href="#"
                        >
                          Rating Terendah
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item text-secondary text-center"
                          href="#"
                        >
                          Rating Tertinggi
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <div key={order.id}>
                    <OrderList
                      course={course}
                      status={
                        <p
                          className={`fs-6 fw-medium p-1 px-3 rounded-3 my-auto ${
                            order.status === "Berhasil"
                              ? "bg-order-berhasil"
                              : order.status === "Belum Bayar"
                              ? "bg-warning-subtle text-warning"
                              : "bg-danger-subtle text-danger"
                          }`}
                        >
                          {order.status}
                        </p>
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

export default Order;
