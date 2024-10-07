import React, { useState } from "react";

function ABC() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
  );
}

export default ABC;
