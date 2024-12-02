import React from "react";
import Logo from "../assets/Logo.png";
import linkedInIcon from "../assets/linkedIn-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import twitterIcon from "../assets/twitter-icon.png";

const Footer = ({ classFooter }) => {
  return (
    <div
      className={`w-100 pt-4 d-flex flex-column bg-white border-top align-items-end bottom-0 ${classFooter}`}
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
            <div className="d-flex flex-column text-secondary DM_Sans">
              <p>Digital & Teknologi</p>
              <p>Pemasaran</p>
              <p>Manajemen Bisnis</p>
              <p>Pengembangan Diri</p>
              <p>Desain</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mx-1 DM_Sans">
          <p className="fs-6 fw-bold">Perusahaan</p>
          <div className="d-flex flex-column text-secondary DM_Sans">
            <p>Tentang Kami</p>
            <p>FAQ</p>
            <p>Kebijakan Privasi</p>
            <p>Ketentuan Layanan</p>
            <p>Bantuan</p>
          </div>
        </div>
        <div className="d-flex flex-column mx-1 DM_Sans">
          <p className="fs-6 fw-bold">Komunitas</p>
          <div className="d-flex flex-column text-secondary DM_Sans">
            <p>Tips Sukses</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
      <div className="w-100 px-5 pt-2 pb-4 d-flex flex-column flex-sm-row justify-content-between align-items-center border-top">
        <div className="d-flex flex-row">
          <a href="#">
            <img className="me-2" src={linkedInIcon} />
          </a>
          <a href="#">
            <img className="mx-2" src={facebookIcon} />
          </a>
          <a href="#">
            <img className="mx-2" src={instagramIcon} />
          </a>
          <a href="#">
            <img className="ms-2" src={twitterIcon} />
          </a>
        </div>
        <p className="my-auto align-items-center text-secondary DM_Sans fw-medium pt-2">
          @2023 Gerobak Sayur All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
