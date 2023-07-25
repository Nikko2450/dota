import { useState } from "react";

export const Search = ({ placeholder, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleBlur = () => {
    onChange(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onChange(value);
    }
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};
