import React, { useState } from "react";
import "./index.css";
import Child from "./Child";

export default function App() {
  const [color, setColor] = useState("");

  const getColor = (color) => {
    setColor(color);
  };

  return (
    <div className="fullscreen">
      <h1>Color Changer</h1>
      <div className="container" style={{ background: `${color}` }}></div>
      <h3>Enter a valid color name</h3>
      <Child getColor={getColor} />
    </div>
  );
}
