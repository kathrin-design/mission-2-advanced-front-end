import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentHeader from "../../components/header/PaymentHeader";
import CourseDetail from "../product-detail/CourseDetail";
import OrderSummary from "./OrderSummary";
import Methods from "./Methods";

const PaymentMethods = () => {
  const location = useLocation();
  const { course } = location.state || {};
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("bayar", { state: { course } });
  };

  if (!course) {
    return <div>No course data available</div>;
  }

  return (
    <>
      <PaymentHeader />
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-12 col-lg-7 g-4">
            <Methods title="Metode Pembayaran" />
            <OrderSummary
              course={course}
              button={
                <button
                  className="btn-first p-2 rounded-3"
                  onClick={handleProceedToPayment}
                >
                  Beli Sekarang
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

export default PaymentMethods;
