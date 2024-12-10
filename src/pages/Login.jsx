import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Title from "../components/form-component/Title";
import Subtitle from "../components/form-component/SubTitle";
import BtnGoogle from "../components/form-component/BtnGoogle";
import "../index.css";
import useLogin from "../stores/useLoginStore";

const Login = () => {
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();

  const {
    userName,
    email,
    password,
    setUserName,
    setEmail,
    setPassword,
    login,
  } = useLogin();

  const validateForm = () => {
    let valid = true;
    let newErrors = { userName: "", email: "", password: "" };

    if (!userName) {
      newErrors.userName = "Username harus diisi!";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email harus diisi!";
      valid = false;
    }

    if (!password) {
      newErrors.password = "Password harus diisi!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (login()) {
        toast.success("Login berhasil!");
        navigate("/");
      } else {
        toast.error("Email atau Password anda salah!");
      }
    } else {
      toast.error("Mohon lengkapi semua data!");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      handleLogin(e);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <div className="template d-flex justify-content-center align-items-center align-self-center">
        <div className="form_container p-4 my-4 bg-white border rounded w-75">
          <Title title="Masuk ke Akun" />
          <Subtitle subtitle="Yuk, lanjutin belajarmu di videobelajar" />
          <form
            id="login"
            name="login"
            onSubmit={handleLogin}
            onKeyDown={handleEnterPress}
          >
            <div className="mb-2">
              <label
                htmlFor="userName"
                className="text-secondary DM_Sans fs-6 pb-1"
              >
                Username
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Username"
                className="DM_Sans form-control"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {errors.userName && (
                <p className="text-danger fs-6">{errors.userName}</p>
              )}
            </div>

            <div className="mb-2">
              <label
                htmlFor="email"
                className="text-secondary DM_Sans fs-6 pb-1"
              >
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
              {errors.email && (
                <p className="text-danger fs-6">{errors.email}</p>
              )}
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="text-secondary DM_Sans fs-6 pb-1"
              >
                Password
                <span className="text-danger fs-6 ms-1">*</span>
              </label>
              <div className="input_field border rounded d-flex">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="DM_Sans border-0 fs-6 form-control password"
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
              {errors.password && (
                <p className="text-danger fs-6">{errors.password}</p>
              )}
            </div>

            <p className="text-end mt-2">
              <a
                href="#"
                className="text-decoration-none fw-medium text-secondary"
              >
                Lupa Password?
              </a>
            </p>

            <div className="d-grid mt-2">
              <button
                type="submit"
                className="btn-first btn p-2 rounded fw-semibold"
              >
                Masuk
              </button>
            </div>

            <div className="d-grid mt-2">
              <button
                type="button"
                className="btn-second btn p-2 rounded fw-semibold"
                onClick={() => navigate("/register")}
              >
                Daftar
              </button>
            </div>

            <p className="text-center text-secondary my-2">atau</p>
            <BtnGoogle className="btn-google" keyword="Masuk dengan Google" />
            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              limit={1}
              closeButton={false}
              toastClassName="custom-toast"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
