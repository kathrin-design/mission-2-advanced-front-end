import React, { useState } from "react";
import Introduction from "./Introduction";
import "./product-detail.css";

const IntroductionToHR = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prevState) => !prevState);

  return (
    <>
      <div
        className="d-flex flex-row justify-content-between pt-3"
        onClick={toggleExpand} // Add onClick to toggle the state
        style={{ cursor: "pointer" }} // Optional: make the cursor a pointer
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
          <Introduction />
          <Introduction />
          <Introduction />
        </div>
      )}
    </>
  );
};

export default IntroductionToHR;
