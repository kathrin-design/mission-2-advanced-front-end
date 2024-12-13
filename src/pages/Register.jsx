import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRegister } from "../stores/useRegisterStore";
import { Header } from "../components/header/Header";
import { Title } from "../components/form-component/Title";
import { Subtitle } from "../components/form-component/SubTitle";
import { BtnGoogle } from "../components/form-component/BtnGoogle";
import "../index.css";
import logoFlag from "../assets/logo/logo-flag.png";

export const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const {
    userName,
    email,
    gender,
    phoneNumber,
    password,
    setUserName,
    setEmail,
    setGender,
    setPhoneNumber,
    setPassword,
    saveToLocalStorage,
    saveToAPI,
  } = useRegister();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!userName || !email || !password || !confirmPassword) {
      toast.error("Semua kolom harus diisi");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Kata sandi dan konfirmasi kata sandi harus sama");
      return;
    }

    try {
      saveToLocalStorage();
      await saveToAPI();
      toast.success("Registrasi berhasil");
      navigate("/login");
    } catch (error) {
      toast.error("Registrasi gagal. Coba lagi nanti.");
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <div className="template d-flex justify-content-center align-items-center">
        <div className="form_container p-4 my-4 rounded bg-white border w-75">
          <Title title="Pendaftaran Akun" />
          <Subtitle subtitle="Yuk, daftarkan akunmu sekarang juga!" />
          <form id="register" name="register" onSubmit={handleRegister}>
            <div className="mb-2">
              <label className="text-secondary DM_Sans fs-6" htmlFor="userName">
                Username
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Username"
                className="form-control DM_Sans"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="email" className="text-secondary DM_Sans fs-6">
                E-mail
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                className="DM_Sans form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="text-secondary DM_Sans fs-6" htmlFor="gender">
                Jenis Kelamin
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <select
                className="dropdown-toggle w-100 DM_Sans d-flex flex-row justify-content-between align-items-center text-secondary btn border dropdown-toggle"
                name="gender"
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option
                  value="Female"
                  className="text-center text-secondary DM_Sans fs-6"
                >
                  Wanita
                </option>
                <option
                  value="Male"
                  className="text-center text-secondary DM_Sans fs-6"
                >
                  Pria
                </option>
              </select>
            </div>

            <div className="mt-2">
              <label
                className="text-secondary DM_Sans fs-6"
                htmlFor="phoneNumber"
              >
                No. Hp
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <div className="input_field d-flex flex-row">
                <div className="border rounded me-2 d-flex flex-row align-items-center">
                  <div className="border-end p-2 bg-body-secondary rounded-start d-flex align-items-center">
                    <img src={logoFlag} alt="IDN Flag" />
                  </div>
                  <div className="p-2 d-flex flex-row align-items-center gap-2">
                    <div className="text-secondary fw-semibold">+62</div>
                    <i className="fa-solid fa-chevron-down text-secondary"></i>
                  </div>
                </div>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  value={phoneNumber}
                  className="DM_Sans form-control border"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="text-secondary DM_Sans fs-6">
                Kata Sandi
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <div className="input_field border rounded d-flex flew-row">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  className="DM_Sans border-0 fs-6 form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div
                  className="passwordVisibleIcon d-flex justify-content-center align-items-center align-self-center me-2 h-50 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label
                htmlFor="confirmPassword"
                className="text-secondary DM_Sans fs-6"
              >
                Konfirmasi Kata Sandi
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <div className="input_field border rounded d-flex flew-row">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter Password"
                  className="DM_Sans border-0 fs-6 form-control"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div
                  className="passwordVisibleIcon d-flex justify-content-center align-items-center align-self-center me-2 h-50 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <i className="fa-solid fa-eye"></i>
                  ) : (
                    <i className="fa-solid fa-eye-slash"></i>
                  )}
                </div>
              </div>
            </div>

            <div className="d-grid mt-2">
              <button
                type="submit"
                className="btn-first btn p-2 rounded fw-semibold"
              >
                Daftar
              </button>
            </div>

            <div className="d-grid mt-2">
              <button
                type="button"
                className="btn-second btn p-2 rounded fw-semibold"
                onClick={() => navigate("/login")}
              >
                Masuk
              </button>
            </div>

            <p className="text-center text-secondary my-2">atau</p>
            <BtnGoogle className="btn-google" keyword="Daftar dengan Google" />
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
