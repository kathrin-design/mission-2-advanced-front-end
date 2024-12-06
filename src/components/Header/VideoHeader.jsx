import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./video-header.css";
import loginStore from "../../stores/useLoginStore";

const VideoHeader = () => {
  const navigate = useNavigate();
  const { userName, logout } = loginStore();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isProgressDropdownOpen, setIsProgressDropdownOpen] = useState(false);

  const profileDropdownRef = useRef(null);
  const progressDropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };
  const toggleProgressDropdown = () => {
    setIsProgressDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    setIsProgressDropdownOpen(false);
    navigate("/");
  };

  const handleClickOutside = (e) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(e.target)
    ) {
      setIsProfileDropdownOpen(false);
    }

    if (
      progressDropdownRef.current &&
      !progressDropdownRef.current.contains(e.target)
    ) {
      setIsProgressDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand sticky-top bg-white top-0 start-0 w-100 border-bottom d-flex justify-content-between align-items-center p-sm-4 px-5">
      <div className="d-flex flex-row align-items-center justify-content-between w-100">
        <div
          className="d-flex flex-row align-items-center gap-3 cursor"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-arrow-left text-secondary fa-lg"></i>
          <p className="text-dark m-0 fw-medium fs-6">
            Foundation of User Experience Design
          </p>
        </div>
        <div className="d-flex flex-row align-items-center gap-3 w-25 justify-content-end">
          <div
            className="progress"
            role="progressbar"
            aria-valuenow="10"
            aria-valuemin="0"
            aria-valuemax="12"
          >
            <div className="progress-bar bg-warning"></div>
          </div>
          <div
            className="progress-dropdown d-flex flex-row"
            ref={progressDropdownRef}
          >
            <div
              className="d-flex flex-row align-items-center gap-2 cursor progress-dropdown-btn"
              onClick={toggleProgressDropdown}
            >
              <p className="green m-0 fs-6 fw-semibold">10/12</p>
              <i className="fa-solid fa-chevron-down green cursor"></i>
            </div>

            {isProgressDropdownOpen && (
              <ul className="progress-dropdown-list p-2 px-4 position-absolute bg-white shadow rounded d-flex flex-column justify-content-center">
                <li className="progress-dropdown-list-item list-unstyled fs-6 fw-semibold text-dark">
                  25% Modul Telah Selesai
                </li>
                <hr className="m-0" />
                <li className="progress-dropdown-list-item list-unstyled fs-6 fw-normal text-secondary">
                  Selesaikan Semua Modul Untuk Mendapatkan Sertifikat
                </li>
                <button
                  className="bg-dark-subtle text-secondary border-0 rounded-3 p-2 fw-semibold"
                  type="button"
                >
                  Ambil Sertifikat
                </button>
              </ul>
            )}
          </div>
        </div>
      </div>
      <div
        className="profile-dropdown position-relative ms-auto ms-sm-2"
        ref={profileDropdownRef}
      >
        <div
          className="profile-dropdown-btn fw-medium"
          onClick={toggleProfileDropdown}
        >
          <div className="profile-img position-relative">
            <i className="fa-solid fa-circle"></i>
          </div>
          <span className="fw-semibold fs-6">
            {userName}
            <i className="fa-solid fa-angle-down ms-2"></i>
          </span>
        </div>

        {isProfileDropdownOpen && (
          <ul className="profile-dropdown-list poppins fw-medium p-0">
            <li className="profile-dropdown-list-item list-unstyled">
              <Link
                to="/profile"
                className="text-decoration-none text-primary-emphasis ms-4"
              >
                <i className="fa-solid fa-user me-2"></i>
                Edit Profile
              </Link>
            </li>
            <li className="profile-dropdown-list-item list-unstyled">
              <a
                href="#"
                className="text-decoration-none text-primary-emphasis ms-4"
              >
                <i className="fa-solid fa-envelope me-2"></i>
                Inbox
              </a>
            </li>
            <li className="profile-dropdown-list-item list-unstyled">
              <a
                href="#"
                className="text-decoration-none text-primary-emphasis ms-4"
              >
                <i className="fa-solid fa-sliders me-2"></i>
                Settings
              </a>
            </li>
            <li className="profile-dropdown-list-item list-unstyled">
              <a
                href="#"
                className="text-decoration-none text-primary-emphasis ms-4"
              >
                <i className="fa-solid fa-circle-question me-2"></i>
                Help & Support
              </a>
            </li>
            <hr className="m-0" />
            <li
              className="profile-dropdown-list-item list-unstyled pe-auto"
              onClick={handleLogout}
            >
              <a
                href="#"
                className="text-decoration-none text-primary-emphasis ms-4"
              >
                <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                Log out
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default VideoHeader;
