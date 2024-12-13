import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PaymentHeader } from "../components/header/PaymentHeader";
import { OrderSummary } from "./payment-methods/component/OrderSummary";
import { CourseSummary } from "../components/course/CourseSummary";
import { MethodWrapper } from "./payment-methods/component/MethodWrapper";

export const ChangePaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || {};

  if (!course) {
    return <div>No course data available</div>;
  }

  const handleToOrderPage = () => {
    navigate("selesai", { state: { course } });
  };

  return (
    <>
      <PaymentHeader />
      <div className="container py-4">
        <div className="row g-5">
          <div className="col-12 col-lg-7">
            <OrderSummary course={course} className="p-3 border rounded-3" />
            <MethodWrapper
              title="Ubah Metode Pembayaran"
              className="mt-4"
              button={
                <button
                  className="btn-first p-2 rounded-3 fw-medium"
                  onClick={handleToOrderPage}
                >
                  Bayar Sekarang
                </button>
              }
            />
          </div>
          <CourseSummary course={course} className="col-lg-5" />
        </div>
      </div>
    </>
  );
};
