import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PaymentHeader from "../components/header/PaymentHeader";
import OrderSummary from "../pages/order/component/OrderSummary";
import CourseSummary from "../components/course/CourseSummary";
import MethodWrapper from "./payment-methods/component/MethodWrapper";
import useOrder from "../store/zustand/useOrderStore";

const ChangePaymentMethod = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course } = location.state || {};
  const { addOrderToLocalStorage } = useOrder();

  if (!course) {
    return <div>No course data available</div>;
  }

  const handleToOrderPage = async () => {
    navigate("selesai", { state: { course } });

    const courseId = course.id;
    const courseName = course.name;
    const coursePrice = course.price;

    const order = {
      courseId: courseId,
      status: "Belum Bayar",
      courseName: courseName,
      coursePrice: coursePrice,
    };

    addOrderToLocalStorage(order);

    try {
      const orderResponse = await createOrder(order);
      console.log("Order successfully created:", orderResponse);
    } catch (error) {
      console.error("Failed to create order:", error);
    }
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

export default ChangePaymentMethod;
