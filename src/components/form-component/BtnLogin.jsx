import React from "react";
import "./form.css";

const BtnLogin = ({ className, type }) => {
  return (
    <div className="d-grid mt-2">
      <button
        type={`${type}`}
        className={`btn ${className}`}
        onClick={`${onClick}`}
      >
        Masuk
      </button>
    </div>
  );
};

export default BtnLogin;
