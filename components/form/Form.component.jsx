import React from "react";
import classNames from "classnames";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";

const Form = ({ heading, children, className, ...rest }) => {
  const formClasses = classNames({
    "fy-form": true,
    [className]: className !== undefined,
  });

  return (
    <form className={formClasses} {...rest}>
      <IsVisible isVisible={heading}>
        <h3 className="fy-form__heading">{heading}</h3>
      </IsVisible>
      {children}
    </form>
  );
};

export default Form;
