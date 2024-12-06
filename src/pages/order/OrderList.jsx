import React from "react";
import "./order.css";

const OrderList = ({ status, course }) => {
  if (!course) {
    return (
      <p className="text-danger">Course data is missing or unavailable.</p>
    );
  }

  const adminFee = 7000;

  const formatCurrency = (amount) => {
    return amount.toLocaleString("id-ID");
  };

  return (
    <div className="border rounded-3 d-flex flex-column">
      <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
        <div className="d-flex flex-row gap-4">
          <p className="text-secondary fs-6 fw-semibold my-auto">
            No. Invoice: {course.invoice}
          </p>
          <p className="text-secondary fs-6 fw-semibold my-auto">
            Waktu Pembayaran: 10 Juni 2023, 14.17
          </p>
        </div>
        {status}
      </div>

      <div className="d-flex flex-row gap-4 p-3">
        <div className="d-flex flex-row w-100 justify-content-between align-items-center">
          <div className="d-flex flex-row align-items-center gap-2 w-70">
            <img
              src={course.image}
              alt="course image"
              className="rounded-3 img-class"
            />
            <div className="d-flex flex-column">
              <p className="text-dark fs-5 fw-semibold m-0">{course.name}</p>
              <p className="text-secondary fs-6 fw-normal m-0">
                {course.description}
              </p>
            </div>
          </div>
          <div className="d-flex border-start px-4 flex-column gap-1 justify-content-start">
            <p className="text-secondary text-start fs-6 fw-medium m-0 w-100">
              Harga
            </p>
            <p className="text-dark fs-5 text-start m-0 fw-semibold w-100">
              Rp {formatCurrency(course.price)}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-default p-3 d-flex flex-row border-top justify-content-between align-items-center">
        <p className="text-secondary fs-6 fw-medium m-0">
          Total Pembayaran{" "}
          <span className="text-secondary fw-normal">(+biaya admin)</span>
        </p>
        <div className="d-flex px-4 flex-column gap-1 justify-content-start">
          <p className="green fw-semibold fs-5 m-0 ps-4 w-100">
            Rp {formatCurrency(course.price + adminFee)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
