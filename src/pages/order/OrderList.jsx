import React from "react";
import classCard1 from "../../assets/card-1.png";
import avatar1 from "../../assets/img_avatar_3.jpg";

const OrderList = ({ invoice, status }) => {
  return (
    <div className="border rounded-3 d-flex flex-column">
      <div className="d-flex flex-row justify-content-between align-items-center border-bottom p-3">
        <div className="d-flex flex-row gap-4">
          <p className="text-secondary fs-6 fw-semibold my-auto">
            No. Invoice: {invoice}
          </p>
          <p className="text-secondary fs-6 fw-semibold my-auto">
            Waktu Pembayaran: 10 Juni 2023, 14.17
          </p>
        </div>
        {status}
      </div>

      <div className="d-flex flex-row gap-4 p-3">
        <img src={classCard1} alt="class" className="rounded-3 img-class" />
        <div className="d-flex flex-row w-100 justify-content-between align-items-center">
          <p className="text-dark fs-5 fw-semibold m-0">
            Belajar Microsoft Office dan Google Workspace untuk Pemula
          </p>
          <div className="d-flex border-start w-25 px-4 flex-column gap-1 justify-content-start">
            <p className="text-secondary text-start fs-6 fw-medium m-0 w-100">
              Harga
            </p>
            <p className="text-dark fs-5 text-start m-0 fw-semibold w-100">
              Rp 300.000
            </p>
          </div>
        </div>
      </div>
      <div className="bg-default p-3 d-flex flex-row border-top justify-content-between align-items-center">
        <p className="text-secondary fs-6 fw-medium m-0">Total Pembayaran</p>
        <div className="d-flex w-25 px-4 flex-column gap-1 justify-content-start">
          <p className="green fw-semibold fs-5 m-0 ps-4 w-100">Rp 300.000</p>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
