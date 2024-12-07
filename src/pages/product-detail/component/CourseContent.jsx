import React from "react";

const CourseContent = () => {
  return (
    <div className="border rounded-3 p-3 d-flex flex-row justify-content-between">
      <div className="text-black fw-medium">Introduction to HR</div>
      <div className="text-secondary d-flex flex-row align-items-center gap-3">
        <div className="d-flex flex-row align-items-center gap-1">
          <i className="fa-regular fa-circle-play"></i>
          <span>Video</span>
        </div>
        <div className="d-flex flex-row align-items-center gap-1">
          <i className="fa-regular fa-clock"></i>
          <span>12 Menit</span>
        </div>
      </div>
    </div>
  );
};

export default CourseContent;
