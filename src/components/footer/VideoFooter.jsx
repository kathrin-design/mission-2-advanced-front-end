import React from "react";

const VideoFooter = () => {
  return (
    <div className="d-flex flex-row justify-content-between bg-green p-3 position-absolute bottom-0 w-100">
      <div className="d-flex flex-row gap-2 align-items-center cursor">
        <i class="fa-solid fa-chevron-left text-white"></i>
        <p className="text-white fs-5 fw-medium m-0">
          Foundation of User Experience
        </p>
      </div>
      <div className="d-flex flex-row gap-2 align-items-center cursor">
        <p className="text-white fs-5 fw-medium m-0">
          Foundation of User Experience
        </p>
        <i class="fa-solid fa-chevron-right text-white"></i>
      </div>
    </div>
  );
};

export default VideoFooter;
