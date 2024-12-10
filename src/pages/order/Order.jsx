import React, { useState } from "react";
import "./order.css";
import Header from "../../components/header/Header";
import Sidebar from "../profile/Sidebar";
import Footer from "../../components/footer/Footer";
import courses from "../../data/courses";
import usePaymentTime from "../../stores/usePaymentTimeStore";
import formatCurrency from "../../utils/Money";
import useOrderStore from "../../stores/useOrderStore";

const Order = () => {
  const { orders } = useOrderStore();
  const { targetTime } = usePaymentTime();
  const adminFee = 7000;

  const [activeTab, setActiveTab] = useState("semua");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const paymentTime = targetTime
    ? dayjs(targetTime).format("DD MMM YYYY HH.mm")
    : "Not Available";

  const enrichedOrders = orders.map((orderItem) => {
    const courseData = courses.find(
      (course) => course.id === orderItem.orderId
    );
    return {
      ...orderItem,
      course: courseData || null,
    };
  });

  const filteredOrders = enrichedOrders.filter((order) => {
    if (activeTab === "semua") return true;
    if (activeTab === "menunggu")
      return order.status.toLowerCase() === "belum bayar";
    if (activeTab === "berhasil")
      return order.status.toLowerCase() === "berhasil";
    if (activeTab === "gagal") return order.status.toLowerCase() === "gagal";
    return false;
  });

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
                  {["semua", "menunggu", "berhasil", "gagal"].map((tab) => (
                    <div
                      key={tab}
                      className={`d-flex flex-column gap-2 cursor-pointer ${
                        activeTab === tab ? "active" : ""
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      <div
                        className={`tab-text fs-6 fw-medium ${
                          activeTab === tab ? "text-red" : "text-secondary"
                        }`}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </div>
                      {activeTab === tab && (
                        <div className="tab-indicator"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <div key={order.orderId}>
                    <div
                      id="order"
                      className="border rounded-3 d-flex flex-column"
                    >
                      <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
                        <p className="text-secondary fs-6 fw-semibold my-auto">
                          No. Invoice: {order.orderId}
                        </p>
                        <p className="text-secondary fs-6 fw-semibold my-auto">
                          Waktu Pembayaran: {paymentTime}
                        </p>
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
                      </div>

                      {order.course && (
                        <div className="d-flex flex-row gap-4 p-3">
                          <div className="d-flex flex-row w-100 justify-content-between align-items-center">
                            <div className="d-flex flex-row align-items-center gap-2 w-70">
                              <img
                                src={order.course.image}
                                alt="course image"
                                className="rounded-3 img-class"
                              />
                              <div className="d-flex flex-column">
                                <p className="text-dark fs-5 fw-semibold m-0">
                                  {order.course.name}
                                </p>
                                <p className="text-secondary fs-6 fw-normal m-0">
                                  {order.course.description}
                                </p>
                              </div>
                            </div>
                            <div className="d-flex border-start px-4 flex-column gap-1 justify-content-start">
                              <p className="text-secondary text-start fs-6 fw-medium m-0">
                                Harga
                              </p>
                              <p className="text-dark fs-5 text-start m-0 fw-semibold w-100">
                                Rp {formatCurrency(order.course.price)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="bg-default p-3 d-flex flex-row border-top justify-content-between align-items-center">
                        <p className="text-secondary fs-6 fw-medium m-0">
                          Total Pembayaran{" "}
                          <span className="text-secondary fw-normal">
                            (+biaya admin)
                          </span>
                        </p>
                        <div className="d-flex px-4 flex-column gap-1 justify-content-start">
                          <p className="green fw-semibold fs-5 m-0 ps-4 w-100">
                            Rp{" "}
                            {order.course
                              ? formatCurrency(order.course.price + adminFee)
                              : "0"}
                          </p>
                        </div>
                      </div>
                    </div>
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
