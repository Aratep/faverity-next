import React from "react";
import classNames from "classnames";

// @MATERIAL UI COMPONENTS
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const RadioButtonsGroup = ({
  formLabel,
  name,
  radioList,
  groupValue,
  onChange,
  value,
}) => {
  return (
    <FormControl component="fieldset" className="fy-radio-group">
      <FormLabel component="legend">{formLabel}</FormLabel>
      <RadioGroup name={name} value={groupValue} onChange={onChange}>
        {radioList.map((item, idx) => {
          const labelClasses = classNames({
            "fy-radio-group__active": item?.value === value,
          });

          return (
            <FormControlLabel
              key={item?.id || idx}
              value={item?.value}
              control={<Radio />}
              label={item?.label}
              className={labelClasses}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioButtonsGroup;
