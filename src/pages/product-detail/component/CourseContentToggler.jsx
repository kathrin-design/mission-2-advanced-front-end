import React, { useState } from "react";
import CourseContent from "./CourseContent";

const CourseContentToggler = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between pt-3 cursor"
        onClick={toggleExpand}
      >
        <div className="green fw-semibold">Introduction to HR</div>
        <i
          className={`fa-solid fa-chevron-${
            isExpanded ? "up" : "down"
          } text-secondary`}
        ></i>
      </div>

      {isExpanded && (
        <div className="d-flex flex-column gap-2">
          <CourseContent />
          <CourseContent />
          <CourseContent />
        </div>
      )}
    </>
  );
};

export default CourseContentToggler;
