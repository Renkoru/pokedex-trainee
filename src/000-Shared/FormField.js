import React from 'react';

function FormField({ label, name, value, type, placeholder, onChange }) {
  return (
    <div className="field">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <div className="control">
        <input
          name={name}
          value={value}
          className="input"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default FormField;
