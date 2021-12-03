import React from "react";

// MATERIAL UI CORE COMPONENTS
import CircularProgress from "@material-ui/core/CircularProgress";

const LoaderWrapper = ({ children, isLoading, isFetched }) =>
  isLoading ? (
    <div className="loader-wrapper">
      <CircularProgress />
    </div>
  ) : isFetched || isFetched === undefined ? (
    children
  ) : null;

export default LoaderWrapper;
