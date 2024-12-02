import React from "react";

const OrderSummary = ({ button }) => {
  return (
    <div className="col-12 mt-4">
      <div className="border rounded-2 bg-white p-4 d-flex flex-column gap-3">
        <p className="text-black fs-5 fw-semibold m-0">Ringkasan Pesanan</p>
        <div className="d-flex justify-content-between">
          <p className="text-secondary fs-6 fw-medium m-0 w-75">
            Video Learning: Gapai Karier Impianmu sebagai Seorang UI/UX Designer
            & Product Manager.
          </p>
          <p className="text-secondary-emphasis fs-5 fw-semibold m-0">
            Rp 767.500
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="text-secondary fs-6 fw-medium m-0 w-75">Biaya Admin</p>
          <p className="text-secondary-emphasis fs-5 fw-semibold m-0">
            Rp 7.000
          </p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="text-black fs-6 fw-medium m-0 w-75">Total Pembayaran</p>
          <p className="green fs-5 fw-bold m-0">Rp 774.500</p>
        </div>
        {button}
      </div>
    </div>
  );
};

export default OrderSummary;
