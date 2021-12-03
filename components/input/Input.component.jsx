import React, { useState } from "react";
import classNames from "classnames";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
// ICONS
import VisibilityOffIcon from "components/icons/VisibilityOffIcon";
import VisibilityOnIcon from "components/icons/VisibilityOnIcon";

const Input = (props) => {
  const {
    className,
    variant,
    inputData,
    value = inputData?.inputState[props.name],
    onChange = inputData?.handleInput,
    error = inputData?.invalidMessages,
    onInvalid = inputData?.handleInvalidMessage,
    label,
    icon,
    id,
    hasEyeIcon = false,
    ...otherProps
  } = props;
  const { name } = props;
  const inputClasses = classNames({
    "fy-input": true,
    [className]: !!className,
  });

  const [showPassword, toggleShowPassword] = useState(false);

  const nativeInputClasses = classNames({
    "fy-input__native": true,
    "fy-header": variant === "header",
    "fy-card-header": variant === "card-header",
    "fy-login": variant === "login",
  });

  const labelClasses = classNames({
    "fy-input__label": true,
  });

  const errorMessageBlockClasses = classNames({
    "fy-input__error": true,
    "fy-input__error-with-label": label !== undefined,
  });

  const inputWrapperClasses = classNames({
    "fy-input__wrapper": true,
    "fy-input__wrapper--reversed": otherProps.type === "password",
  });

  const handleChange = async (event) => {
    onChange(event);
  };

  const handleSelect = (event) => {
    if (error) onInvalid(event, "");
  };

  const onShowPassword = () => {
    toggleShowPassword(!showPassword);
  };

  // change input type on eye icon click
  otherProps.type = showPassword ? "text" : otherProps.type;

  const EyeIcon = showPassword ? <VisibilityOnIcon /> : <VisibilityOffIcon />;

  return (
    <div className={inputClasses}>
      {label && <div className={labelClasses}>{label}</div>}
      <div className={inputWrapperClasses}>
        <IsVisible isVisible={icon}>
          <label htmlFor={id} className="fy-input__wrapper--img-label">
            <img src={icon} alt="icon" />
          </label>
        </IsVisible>
        <IsVisible isVisible={hasEyeIcon}>
          <label
            className="fy-input__wrapper--img-password"
            onClick={onShowPassword}>
            {EyeIcon}
          </label>
        </IsVisible>
        <input
          className={nativeInputClasses}
          autoComplete="off"
          value={value || ""}
          onChange={handleChange}
          onInvalid={onInvalid}
          onSelect={handleSelect}
          id={id}
          {...otherProps}
        />
      </div>
      {!!error?.[name] && (
        <p className={errorMessageBlockClasses}>{error?.[name] || ""}</p>
      )}
    </div>
  );
};

export default Input;
