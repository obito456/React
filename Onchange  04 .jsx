import React, { useState } from "react";

function ABC() {
  const [fruit, setFruit] = useState("");
  const handleSelectChange = (e) => {
    setFruit(e.target.value);
  };
  return (
    <div>
      <select value={fruit} onChange={handleSelectChange}>
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
      <p>You selected: {fruit}</p>
    </div>
  );
}

export default ABC;
