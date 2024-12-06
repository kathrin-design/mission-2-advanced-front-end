import React from "react";
import Logo from "../../assets/Logo.png";

const Footer = ({ classFooter }) => {
  return (
    <div
      className={`w-100 pt-4 d-flex flex-column bg-white border-top align-items-end ${classFooter}`}
    >
      <div className="d-flex flex-column flex-sm-row justify-content-between w-100 px-4">
        <div className="d-flex flex-column w-50">
          <div>
            <img src={Logo} alt="Logo VideoBelajar" />
          </div>
          <p className="fs-5 fw-bold DM_Sans mb-1">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id!
          </p>
          <p className="fs-6 DM_Sans mb-1">
            Jl. Usman Effendi No. 50 Lowokwaru, Malang
          </p>
          <p className="fs-6 DM_Sans">+62-877-7123-1234</p>
        </div>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column mx-1">
            <p className="fs-6 fw-bold">Kategori</p>
            <div className="d-flex flex-column text-secondary gap-2">
              <p className="m-0">Digital & Teknologi</p>
              <p className="m-0">Pemasaran</p>
              <p className="m-0">Manajemen Bisnis</p>
              <p className="m-0">Pengembangan Diri</p>
              <p className="m-0">Desain</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mx-1">
          <p className="fs-6 fw-bold">Perusahaan</p>
          <div className="d-flex flex-column text-secondary gap-2">
            <p className="m-0">Tentang Kami</p>
            <p className="m-0">FAQ</p>
            <p className="m-0">Kebijakan Privasi</p>
            <p className="m-0">Ketentuan Layanan</p>
            <p className="m-0">Bantuan</p>
          </div>
        </div>
        <div className="d-flex flex-column mx-1 DM_Sans">
          <p className="fs-6 fw-bold">Komunitas</p>
          <div className="d-flex flex-column text-secondary gap-2">
            <p className="m-0">Tips Sukses</p>
            <p className="m-0">Blog</p>
          </div>
        </div>
      </div>
      <div className="w-100 px-sm-4 p-2 d-flex flex-column flex-sm-row justify-content-between align-items-center border-top">
        <div className="d-flex flex-row gap-2">
          <a href="https://linkedin.com">
            <i className="fa-brands fa-linkedin-in text-dark border border-2 p-2 rounded-circle"></i>
          </a>
          <a href="https://facebook.com">
            <i className="fa-brands fa-facebook text-dark border border-2 p-2 rounded-circle"></i>
          </a>
          <a href="https://instagram.com">
            <i className="fa-brands fa-instagram text-dark border border-2 p-2 rounded-circle"></i>
          </a>
          <a href="https://x.com">
            <i className="fa-brands fa-twitter text-dark border border-2 p-2 rounded-circle"></i>
          </a>
        </div>
        <p className="my-auto align-items-center text-secondary DM_Sans fw-medium pt-2">
          @2023 videobelajar All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
