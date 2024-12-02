import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = ({ title, subtitle }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="col-12 col-lg-3">
      <div className="d-flex flex-column">
        <p className="text-black fs-5 fw-bold m-0">{title}</p>
        <p className="text-secondary fw-medium">{subtitle}</p>
        <div className="d-flex flex-column bg-white border rounded-2 p-3 gap-2">
          <div
            className={`d-flex flex-row align-items-center fw-medium border rounded-2 p-2 cursor ${
              isActive("/profile")
                ? "text-warning bg-warning-subtle border-warning"
                : "text-secondary"
            }`}
            onClick={() => navigate("/profile")}
          >
            <i className="fa-solid fa-user pe-3"></i>
            Profil Saya
          </div>
          <div
            className={`d-flex flex-row align-items-center fw-medium border rounded-2 p-2 cursor ${
              isActive("/class")
                ? "text-warning bg-warning-subtle border-warning"
                : "text-secondary"
            }`}
            onClick={() => navigate("/class")}
          >
            <i className="fa-solid fa-book-bookmark pe-3"></i>
            Kelas Saya
          </div>
          <div
            className={`d-flex flex-row align-items-center fw-medium border rounded-2 p-2 cursor ${
              isActive("/order")
                ? "text-warning bg-warning-subtle border-warning"
                : "text-secondary"
            }`}
            onClick={() => navigate("/order")}
          >
            <i className="fa-solid fa-bag-shopping pe-3"></i>
            Pesanan Saya
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;