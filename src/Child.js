import React, { useState } from "react";

export default function Child({ getColor }) {
  const [activeColor, setActiveColor] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setActiveColor(value);
    getColor(value);
  };

  return (
    <div class="child-grid-container">
      <input
        id="input"
        type="text"
        onChange={handleChange}
        value={activeColor}
        aria-label="input"
      />
    </div>
  );
}
