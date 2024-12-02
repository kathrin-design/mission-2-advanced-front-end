import React, { useState } from "react";

const FilterCategory = ({ iconClass, title, options }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border rounded-4 p-3 d-flex flex-column gap-1">
      <div className="category-name d-flex justify-content-between pb-1">
        <div>
          <i className={`fa-solid ${iconClass} pe-2`}></i>
          {title}
        </div>
        <i
          className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}
          onClick={toggleOpen}
          style={{ cursor: "pointer" }}
        ></i>
      </div>
      {isOpen &&
        options.map((option, idx) => (
          <div key={idx} className="text-secondary">
            <input
              type="checkbox"
              className="form-check-input checkbox me-2"
              value={option}
            />
            {option}
          </div>
        ))}
    </div>
  );
};

export default FilterCategory;