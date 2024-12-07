import React from "react";

const OrderSummary = ({ course, button, className }) => {
  if (!course) {
    return <div>No course data available</div>;
  }

  const adminFee = 7000;

  const formatCurrency = (amount) => {
    return amount.toLocaleString("id-ID");
  };

  return (
    <div className="col-12 mt-4">
      <div className={`${className} bg-white d-flex flex-column gap-3`}>
        <p className="text-black fs-5 fw-semibold m-0">Ringkasan Pesanan</p>
        <div className="d-flex justify-content-between">
          <p className="text-secondary fs-6 fw-medium m-0 w-75">
            Video Learning: {course.name}
          </p>
          <p className="text-secondary-emphasis fs-5 fw-semibold m-0">
            Rp {formatCurrency(course.price)}
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-secondary fs-6 fw-medium m-0 w-75">Biaya Admin</p>
          <p className="text-secondary-emphasis fs-5 fw-semibold m-0">
            Rp {formatCurrency(adminFee)}
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="text-black fs-6 fw-medium m-0 w-75">Total Pembayaran</p>
          <p className="green fs-5 fw-bold m-0">
            Rp {formatCurrency(course.price + adminFee)}
          </p>
        </div>
        {button}
      </div>
    </div>
  );
};

export default OrderSummary;
