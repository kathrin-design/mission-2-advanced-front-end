import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentHeader from "../components/header/PaymentHeader";
import paymentSuccessful from "../assets/payment-successful.png";

const PaymentSuccessful = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || {};

  const handleToOrderPage = () => {
    navigate("/order", { state: { course } });
  };

  return (
    <>
      <PaymentHeader />
      <div className="container py-4 d-flex justify-content-center">
        <div className="col-12 col-lg-4 border rounded-2 d-flex flex-column p-5 bg-white">
          <img
            src={paymentSuccessful}
            alt="selesai"
            className="img-fluid mx-auto mb-3"
          />
          <p className="text-black fs-5 fw-semibold text-center">
            Pembayaran Berhasil!
          </p>
          <p className="text-secondary fs-6 fw-medium text-center">
            Silahkan cek email kamu untuk informasi lebih lanjut. Hubungi kami
            jika ada kendala.
          </p>
          <button
            className="btn-first fw-medium fs-6 mt-3 mx-auto p-2 px-4 rounded-3"
            onClick={handleToOrderPage}
          >
            Lihat Detail Pesanan
          </button>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccessful;
