import React from "react";

export default function Input(props) {
  const { label, error, name, onChange, type = "text" } = props;
  const className = error ? "form-control is-invalid" : "form-control";
  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        className={className}
        name={name}
        type={type}
        onChange={onChange}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
}
