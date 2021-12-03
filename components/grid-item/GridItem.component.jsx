import React from "react";
import classNames from "classnames";

// MATERIAL UI CORE COMPONENTS
import Grid from "@material-ui/core/Grid";

export default function GridItem(props) {
  const { children, relative, className, ...rest } = props;

  const gridClasses = classNames({
    [className]: className,
    "u-relative": !!relative,
  });

  return (
    <Grid item {...rest} className={gridClasses}>
      {children}
    </Grid>
  );
}
