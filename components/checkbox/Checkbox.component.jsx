import React from "react";

// MATERIAL UI
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";

const CheckBox = ({
  label,
  name,
  value,
  onChange,
  color = "#fff",
  ...rest
}) => {
  const StyledCheckbox = withStyles({
    root: {
      color,
      "&$checked": {
        color,
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  return (
    <FormControlLabel
      className="checkbox-component"
      control={
        <StyledCheckbox
          checked={value}
          onChange={onChange}
          name={name}
          {...rest}
        />
      }
      label={label}
    />
  );
};

export default CheckBox;
