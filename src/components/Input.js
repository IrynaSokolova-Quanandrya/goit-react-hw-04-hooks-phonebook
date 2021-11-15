import React from "react";
import "../styles/input.css";

export default function Input({
  onChange,
  labelName,
  value,
  id,
  type,
  name,
  pattern,
  title }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ value, name });
  };
   return (
      <label className="label" htmlFor={id}>
        {labelName}
        <input
          className="input"
          value={value}
          onChange={handleChange}
          id={id}
          type={type}
          name={name}
          pattern={pattern}
          title={title}
          required
        />
      </label>
    );
  
}
