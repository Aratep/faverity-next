import React from "react";
import ReactSelect from "react-select";
import classNames from "classnames";

// BASE COMPONENTS
import IsVisible from "components/is-visible/IsVisible.component";

const Select = ({ className, label, ...rest }) => {
  const selectClasses = classNames({
    "fy-select": true,
    [className]: className !== undefined,
  });

  return (
    <>
      <IsVisible isVisible={label}>
        <div className="select-label">{label}</div>
      </IsVisible>
      <ReactSelect
        classNamePrefix="fy-select"
        className={selectClasses}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary50: "#7681b3",
            primary: "#7681b3",
          },
        })}
        {...rest}
      />
    </>
  );
};

export default Select;
