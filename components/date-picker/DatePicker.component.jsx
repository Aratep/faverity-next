import React from "react";
import classNames from "classnames";

// BASE COMPONENTS
import Input from "components/input/Input.component";
import IsVisible from "components/is-visible/IsVisible.component";

const DatePicker = ({
  id,
  placeholder,
  type = "date",
  defaultValue,
  className,
  label,
  ...rest
}) => {
  const datePickerClasses = classNames({
    "custom-picker": true,
    [className]: className,
  });

  return (
    <>
      <IsVisible isVisible={label}>
        <div className="picker-label">{label}</div>
      </IsVisible>
      <Input
        id={id}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        className={datePickerClasses}
        {...rest}
      />
    </>
  );
};

export default DatePicker;
