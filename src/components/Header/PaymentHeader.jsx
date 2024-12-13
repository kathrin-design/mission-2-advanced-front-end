import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo.png";

export const PaymentHeader = () => {
  return (
    <nav className="navbar navbar-expand sticky-top bg-body-tertiary top-0 start-0 w-100 border-bottom d-flex justify-content-between align-items-center px-5">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};
