import React from "react";

interface CheckboxProps {
  value: string | number;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = (props: CheckboxProps) => {
  //! State
  const { value, checked, onChange } = props;

  //! Function

  //! Render
  return (
    <div>
      <input
        type="checkbox"
        value={value}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
};

export default Checkbox;
