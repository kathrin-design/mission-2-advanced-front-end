import React, { useState } from "react";

const Method = ({ img, title }) => {
  const [isClick, setIsClick] = useState(false);

  const toggleClick = () => setIsClick(!isClick);

  return (
    <div
      className="border  border-light-subtle rounded-2 p-3 d-flex flex-row justify-content-between align-items-center"
      onClick={toggleClick}
    >
      <div className="text-dark-emphasis fw-medium fs-5">
        <span>{img}</span>
        {title}
      </div>
      {isClick ? (
        <i class="fa-solid fa-check bg-danger text-white p-1 rounded-circle"></i>
      ) : (
        ""
      )}
    </div>
  );
};

export default Method;
