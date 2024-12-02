import React from "react";
import { useNavigate } from "react-router-dom";
import PaymentHeader from "../components/header/PaymentHeader";
import OrderSummary from "./payment-methods/OrderSummary";
import CourseDetail from "./product-detail/CourseDetail";
import PaymentMethods from "./payment-methods/Methods";

const UbahMetode = () => {
  const navigate = useNavigate();

  return (
    <>
      <PaymentHeader />
      <div className="container py-4">
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <OrderSummary />
            <PaymentMethods
              title="Ubah Metode Pembayaran"
              className="mt-4"
              button={
                <button
                  className="btn-first p-2 rounded-3 fw-medium"
                  onClick={() => navigate("selesai")}
                >
                  Bayar Sekarang
                </button>
              }
            />
          </div>
          <CourseDetail className="col-lg-5" />
        </div>
      </div>
    </>
  );
};

export default UbahMetode;
