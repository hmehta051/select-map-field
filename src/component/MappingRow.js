import React from "react";
import FieldDropdown from "./FieldDropdown";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./common.css";
function MappingRow({
  leftOptions,
  rightOptions,
  leftValue,
  rightValue,
  onLeftChange,
  onRightChange,
  onDelete,
}) {
  return (
    <div className="mapping-row">
      <FieldDropdown
        options={leftOptions}
        selectedValue={leftValue}
        onChange={onLeftChange}
      />

      <FieldDropdown
        options={rightOptions}
        selectedValue={rightValue}
        onChange={onRightChange}
      />
      <button onClick={onDelete} className="delete">
        <RiDeleteBin6Line />
      </button>
    </div>
  );
}

export default MappingRow;
