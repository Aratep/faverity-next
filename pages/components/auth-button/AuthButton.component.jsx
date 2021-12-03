import React from "react";
import classNames from "classnames";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";
import Image from "../../../components/image/Image.component";

const AuthButton = ({ icon, text, className, ...rest }) => {
  const btnClasses = classNames({
    "auth-button": true,
    [className]: className,
  });

  return (
    <div className={btnClasses} {...rest}>
      <IsVisible isVisible={icon}>
        <div className="authr-button__icon">
          <Image src={icon} alt={text} />
        </div>
      </IsVisible>
      <div className="auth-button__text">{text}</div>
    </div>
  );
};

export default AuthButton;
