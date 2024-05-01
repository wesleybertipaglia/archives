import { useState } from "react";
import Section from "../components/Section";

const ColorPicker = () => {
  const [color, setColor] = useState("#111");

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const copyColor = () => {
    navigator.clipboard.writeText(color);
  };

  const colorPickerDisplayStyle = {
    backgroundColor: color,
    height: "200px",
    width: "200px",
    border: "2px solid #ccc",
    borderRadius: "5px",
    margin: "20px 0",
    padding: "0.5rem",
  };

  const colorPickerCurrentColorStyle = {
    color: color.startsWith("#f") ? "#111" : "#fff",
    padding: "0.25rem",
    fontSize: "0.75rem",
    borderRadius: "0.1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Section id="color-picker">
      <h1>Color Picker</h1>
      <p>A simple color picker application to learn the basics of React.</p>

      <div>
        <label>
          Select your color:{" "}
          <input type="color" value={color} onChange={handleColorChange} />
        </label>

        <div className="color-picker-display" style={colorPickerDisplayStyle}>
          <p style={colorPickerCurrentColorStyle}>
            {color}
            <button onClick={copyColor}>Copy</button>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ColorPicker;
