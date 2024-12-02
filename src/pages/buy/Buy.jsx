import React from "react";
import "./buy.css";
import PaymentHeader from "../../components/header/PaymentHeader";
import CourseDetail from "../product-detail/CourseDetail";
import logoBCA from "../../assets/logo-bca.png";
import { useNavigate } from "react-router-dom";
import OrderSummary from "../payment-methods/OrderSummary";
import PaymentMethods from "../payment-methods/Methods";

const Bayar = () => {
  const navigate = useNavigate();

  return (
    <>
      <PaymentHeader />
      <p className="bg-warning-subtle text-center text-secondary fw-semibold py-3">
        Selesaikan pemesanan dalam
      </p>
      <div className="container py-4">
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <p className="fs-5 text-black fw-semibold">Metode Pembayaran</p>
            <div className="border rounded-2 py-4 d-flex align-items-center d-flex flex-column gap-2">
              <img src={logoBCA} className="logo" alt="logo BCA" />
              <p className="text-dark fs-6 fw-medium m-0">
                Bayar Melalui Virtual Account BCA
              </p>
              <div className="d-flex flex-row gap-3">
                <p className="text-secondary fs-6 fw-semibold m-0">
                  11739 081234567890
                </p>
                <p className="text-danger fs-6 fw-medium m-0">Salin</p>
              </div>
            </div>
            <OrderSummary
              button={
                <div className="d-flex flex-row justify-content-between gap-4">
                  <button
                    className="btn-second w-100 p-2 rounded-3 fw-semibold"
                    onClick={() => navigate("ubah-metode")}
                  >
                    Ganti Metode Pembayaran
                  </button>
                  <button
                    className="btn-first w-100 p-2 rounded-3 fw-semibold"
                    onClick={() => navigate("selesai")}
                  >
                    Bayar Sekarang
                  </button>
                </div>
              }
            />
            <PaymentMethods title="Tata Cara Pembayaran" className="mt-4" />
          </div>
          <CourseDetail className="col-lg-5" />
        </div>
      </div>
    </>
  );
};

export default Bayar;
