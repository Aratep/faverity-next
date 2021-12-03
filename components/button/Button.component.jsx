import React from "react";
import classNames from "classnames";

// BOOTSTRAP COMPONENTS
// import BootstrapButton from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";

const Button = (props) => {
  const {
    children,
    className,
    isLoading,
    disabled,
    animation = "grow",
    type = "submit",
    ...rest
  } = props;

  const btnClasses = classNames({
    "fy-button": true,
    [className]: className,
  });

  return (
    <button
      className={btnClasses}
      type={type}
      {...rest}
      disabled={disabled || isLoading}>
      <div className="fy-button__body">
        <span>{children}</span>
        <IsVisible isVisible={isLoading}>
          <div className="spinner">
            <Spinner animation={animation} />
          </div>
        </IsVisible>
      </div>
    </button>
  );
};

export default Button;
