import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentHeader from "../../components/header/PaymentHeader";
import CourseSummary from "../../components/course/CourseSummary";
import OrderSummary from "./component/OrderSummary";
import MethodWrapper from "./component/MethodWrapper";

const PaymentMethods = () => {
  const location = useLocation();
  const { course } = location.state || {};
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("pembayaran", { state: { course } });
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
            <MethodWrapper title="Metode Pembayaran" />
            <OrderSummary
              className="border rounded-2 p-4"
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

          <CourseSummary
            courseImage={<img src={course.image} className="w-100 mb-3" />}
            className="col-lg-5"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentMethods;
