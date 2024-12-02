import React from "react";
import PaymentHeader from "../components/header/PaymentHeader";
import end from "../assets/end.png";
import { useNavigate } from "react-router-dom";

const EndPayment = () => {
  const navigate = useNavigate();

  return (
    <>
      <PaymentHeader />
      <div className="container py-4 d-flex justify-content-center">
        <div className="col-12 col-lg-4 border rounded-2 d-flex flex-column p-5 bg-white">
          <img src={end} alt="selesai" className="img-fluid mx-auto mb-3" />
          <p className="text-black fs-5 fw-semibold text-center">
            Pembayaran Berhasil!
          </p>
          <p className="text-secondary fs-6 fw-medium text-center">
            Silahkan cek email kamu untuk informasi lebih lanjut. Hubungi kami
            jika ada kendala.
          </p>
          <button
            className="btn-first fw-medium fs-6 mt-3 mx-auto p-2 px-4 rounded-3"
            onClick={() => navigate("/order")}
          >
            Lihat Detail Pesanan
          </button>
        </div>
      </div>
    </>
  );
};

export default EndPayment;
