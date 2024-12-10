import React from "react";
import "./form.css";
import GoogleIcon from "../../assets/google-icon.png";

const BtnGoogle = ({ className, keyword }) => {
  return (
    <div className="d-grid mt-2">
      <button className={`btn fs-6 fw-semibold p-2 ${className}`}>
        <img src={GoogleIcon} />
        {keyword}
      </button>
    </div>
  );
};

export default BtnGoogle;
