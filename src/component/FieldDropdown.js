import React from "react";
import "./common.css";
function FieldDropdown({ options, selectedValue, onChange }) {
  const selectedOption = [selectedValue];

  const unselectedOptions = options.filter(
    (option) => option !== selectedValue
  );

  return (
    <select
      value={selectedValue}
      onChange={onChange}
      className="select-container"
    >
      <option value="">Choose</option>

      {selectedValue === "" ? null : (
        <>
          {selectedOption.map((option, index) => (
            <option key={index} value={option}>
              {!option === true ? null : option}
            </option>
          ))}
        </>
      )}

      {unselectedOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default FieldDropdown;
