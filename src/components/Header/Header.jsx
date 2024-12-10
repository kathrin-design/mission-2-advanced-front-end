import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import "./header.css";
import useLogin from "../../stores/useLoginStore";

const Header = () => {
  const navigate = useNavigate();
  const { userName, isLoggedIn, logout } = useLogin();

  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const profileDropdownRef = useRef(null);

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsProfileDropdownOpen(false);
    navigate("/");
  };

  const handleClickOutside = (e) => {
    if (
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(e.target)
    ) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar sticky-top w-100 top-0 left-0 z-1  bg-body-tertiary border-bottom d-flex align-items-center justify-content-between">
      <div>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>

      <div className="d-flex flex-row justify-content-end align-items-center">
        <Link
          to="/kategori"
          className="text-secondary text-decoration-none w-100 d-flex justify-content-end pe-4"
        >
          Kategori
        </Link>

        {isLoggedIn ? (
          <div
            className="profile-dropdown position-relative ms-auto me-sm-2"
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
        ) : (
          <div className="header-right d-flex flex-row me-sm-2 ms-auto gap-2">
            <button
              type="button"
              className="btn btn-first fw-medium"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-second fw-medium me-1"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
